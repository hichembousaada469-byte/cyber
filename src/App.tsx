import React, { useState, useEffect } from 'react';
import {
  Language,
  AppTheme,
  DARK_THEMES,
  LIGHT_THEMES,
  I18N,
  SERVICES_DATA,
  PROJECTS_DATA,
  TESTIMONIALS_DATA,
  FAQ_DATA,
  SKILLS_LIST,
  PROCESS_DATA,
  WHATSAPP_PHONE,
  WHATSAPP_LINK,
  EMAIL_ADDRESS,
  ProjectItem,
} from './data/portfolioData';
import { PWAInstallButton } from './components/PWAInstallButton';
import { PWAInstallBanner } from './components/PWAInstallBanner';
import { OfflineIndicator } from './components/OfflineIndicator';

export default function App() {
  const [lang, setLang] = useState<Language>(() => {
    return (localStorage.getItem('hb-lang') as Language) || 'ar';
  });

  const [theme, setThemeState] = useState<AppTheme>(() => {
    return (localStorage.getItem('hb-theme') as AppTheme) || 'dark-blue';
  });

  const [projectFilter, setProjectFilter] = useState<'all' | 'digital' | 'creative' | 'academic'>('all');
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const [activeFaq, setActiveFaq] = useState<number | null>(0);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [scrolled, setScrolled] = useState(false);

  // Form state
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: 'Academic Writing',
    message: '',
  });

  const t = (key: string) => I18N[lang]?.[key] || I18N.ar[key] || key;
  const localize = <T,>(obj: Record<Language, T>): T => obj[lang] || obj.ar || obj.en;

  // Language setup
  const changeLanguage = (newLang: Language) => {
    setLang(newLang);
    localStorage.setItem('hb-lang', newLang);
    document.documentElement.lang = newLang;
    document.documentElement.dir = newLang === 'ar' ? 'rtl' : 'ltr';
    setMobileMenuOpen(false);
  };

  // Theme setup
  const isLightTheme = (th: string) => (LIGHT_THEMES as readonly string[]).includes(th);

  const applyTheme = (newTheme: AppTheme) => {
    setThemeState(newTheme);
    localStorage.setItem('hb-theme', newTheme);
    document.documentElement.dataset.theme = newTheme;
  };

  const cycleThemeColor = () => {
    const isLight = isLightTheme(theme);
    if (isLight) {
      const idx = LIGHT_THEMES.indexOf(theme as typeof LIGHT_THEMES[number]);
      const nextIdx = (idx + 1) % LIGHT_THEMES.length;
      applyTheme(LIGHT_THEMES[nextIdx]);
    } else {
      const idx = DARK_THEMES.indexOf(theme as typeof DARK_THEMES[number]);
      const nextIdx = (idx + 1) % DARK_THEMES.length;
      applyTheme(DARK_THEMES[nextIdx]);
    }
  };

  const toggleDayNight = () => {
    if (isLightTheme(theme)) {
      applyTheme('dark-blue');
    } else {
      applyTheme('light');
    }
  };

  // Toast
  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 3000);
  };

  // Scroll tracking
  useEffect(() => {
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.dataset.theme = theme;

    const handleScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 36);
      const scrollable = document.documentElement.scrollHeight - window.innerHeight;
      if (scrollable > 0) {
        setScrollProgress((y / scrollable) * 100);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lang, theme]);

  // Action handlers
  const handleSelectService = (serviceTitle: string) => {
    setFormData((prev) => ({
      ...prev,
      service: serviceTitle,
      message:
        lang === 'ar'
          ? `مرحباً هشام، أود الاستفسار وطلب خدمة: ${serviceTitle}`
          : lang === 'fr'
          ? `Bonjour Hichem, je souhaite demander le service : ${serviceTitle}`
          : `Hello Hichem, I would like to inquire about: ${serviceTitle}`,
    }));
    showToast(`${t('ui.serviceSelected')}: ${serviceTitle}`);
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleSelectProject = (projectTitle: string) => {
    setFormData((prev) => ({
      ...prev,
      message:
        lang === 'ar'
          ? `مرحباً هشام، أعجبني نموذج "${projectTitle}" وأرغب في تنفيذ تطبيق أو مشروع مشابه.`
          : lang === 'fr'
          ? `Bonjour Hichem, j'aime le projet "${projectTitle}" et je souhaite réaliser un projet similaire.`
          : `Hello Hichem, I liked the "${projectTitle}" project and want to build something similar.`,
    }));
    showToast(t('ui.projectSelected'));
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL_ADDRESS);
    } catch {
      const input = document.createElement('input');
      input.value = EMAIL_ADDRESS;
      document.body.appendChild(input);
      input.select();
      document.execCommand('copy');
      input.remove();
    }
    showToast(`${t('contact.copied')}: ${EMAIL_ADDRESS}`);
  };

  const handleWhatsAppSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const fullText = `Hello Hichem,\nName: ${formData.name || 'Client'}${formData.phone ? '\nPhone: ' + formData.phone : ''}${formData.email ? '\nEmail: ' + formData.email : ''}\nService: ${formData.service}\nMessage: ${formData.message}`;
    const url = `https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(fullText)}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  const handleEmailSubmit = () => {
    const subject = encodeURIComponent(`Project Inquiry: ${formData.service} — ${formData.name || 'Client'}`);
    const body = encodeURIComponent(
      `Hello Hichem,\nName: ${formData.name}\nPhone: ${formData.phone}\nEmail: ${formData.email}\nService: ${formData.service}\nMessage: ${formData.message}`
    );
    window.location.href = `mailto:${EMAIL_ADDRESS}?subject=${subject}&body=${body}`;
  };

  const filteredProjects =
    projectFilter === 'all'
      ? PROJECTS_DATA
      : PROJECTS_DATA.filter((p) => p.category === projectFilter);

  return (
    <div className="relative min-h-screen text-slate-100 selection:bg-sky-500 selection:text-white">
      {/* Background Ambience & Aurora */}
      <div className="site-bg" aria-hidden="true" />
      <div className="noise" aria-hidden="true" />
      <div className="aurora-layer" aria-hidden="true">
        <span className="aurora-orb" />
        <span className="aurora-orb" />
        <span className="aurora-orb" />
      </div>

      {/* Reading / Scroll progress indicator */}
      <div id="progress" style={{ width: `${scrollProgress}%` }} aria-hidden="true" />

      {/* PWA Android Install Banner */}
      <PWAInstallBanner currentLang={lang} />

      {/* Sticky Navigation */}
      <header className={`navbar ${scrolled ? 'scrolled' : ''}`} id="navbar">
        <nav className="nav-inner" aria-label="Primary navigation">
          <a href="#home" className="logo brand-logo" aria-label="Hichem Bousaada - Home">
            <span className="brand-mark" aria-hidden="true">
              <span>HB</span>
            </span>
            <span className="brand-name">Hichem</span>
          </a>

          <ul className="nav-links">
            <li><a href="#home">{t('nav.home')}</a></li>
            <li><a href="#about">{t('nav.about')}</a></li>
            <li><a href="#services">{t('nav.services')}</a></li>
            <li><a href="#projects">{t('nav.projects')}</a></li>
            <li><a href="#skills">{t('nav.skills')}</a></li>
            <li><a href="#contact">{t('nav.contact')}</a></li>
          </ul>

          <div className="nav-actions">
            {/* Language Switcher */}
            <div className="language-switcher" aria-label="Language switcher">
              <button
                className={`lang-btn ${lang === 'en' ? 'active' : ''}`}
                type="button"
                onClick={() => changeLanguage('en')}
              >
                EN
              </button>
              <button
                className={`lang-btn ${lang === 'fr' ? 'active' : ''}`}
                type="button"
                onClick={() => changeLanguage('fr')}
              >
                FR
              </button>
              <button
                className={`lang-btn ${lang === 'ar' ? 'active' : ''}`}
                type="button"
                onClick={() => changeLanguage('ar')}
              >
                AR
              </button>
            </div>

            {/* PWA Install Button for Android */}
            <PWAInstallButton currentLang={lang} variant="nav" />

            {/* Theme switcher */}
            <button
              className="icon-btn theme-control"
              type="button"
              onClick={cycleThemeColor}
              aria-label="Switch color theme"
              title="Change theme colors"
            >
              <i className="fa-solid fa-palette" aria-hidden="true" />
            </button>

            {/* Day / Night mode */}
            <button
              className="icon-btn mode-control"
              type="button"
              onClick={toggleDayNight}
              aria-label="Toggle day and night mode"
              title="Day / Night mode"
            >
              <i className={isLightTheme(theme) ? 'fa-solid fa-sun text-amber-400' : 'fa-solid fa-moon text-sky-400'} aria-hidden="true" />
            </button>

            {/* WhatsApp Direct Nav */}
            <a
              className="icon-btn whatsapp-nav"
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Contact on WhatsApp"
            >
              <i className="fa-brands fa-whatsapp text-emerald-400" aria-hidden="true" />
            </a>

            {/* Mobile Hamburger */}
            <button
              className="icon-btn mobile-toggle"
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle navigation menu"
              aria-expanded={mobileMenuOpen}
            >
              <i className={mobileMenuOpen ? 'fa-solid fa-xmark' : 'fa-solid fa-bars'} aria-hidden="true" />
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile Drawer Menu */}
      <div className={`mobile-menu ${mobileMenuOpen ? 'open' : ''}`} aria-hidden={!mobileMenuOpen}>
        <div>
          <div className="mobile-menu-list">
            <a href="#home" onClick={() => setMobileMenuOpen(false)}>{t('nav.home')}</a>
            <a href="#about" onClick={() => setMobileMenuOpen(false)}>{t('nav.about')}</a>
            <a href="#services" onClick={() => setMobileMenuOpen(false)}>{t('nav.services')}</a>
            <a href="#projects" onClick={() => setMobileMenuOpen(false)}>{t('nav.projects')}</a>
            <a href="#skills" onClick={() => setMobileMenuOpen(false)}>{t('nav.skills')}</a>
            <a href="#contact" onClick={() => setMobileMenuOpen(false)}>{t('nav.contact')}</a>
          </div>

          <div className="mt-6 flex flex-col items-center gap-3">
            <PWAInstallButton currentLang={lang} variant="hero" />
            <div className="mobile-controls">
              <button className={`lang-btn ${lang === 'en' ? 'active' : ''}`} type="button" onClick={() => changeLanguage('en')}>EN</button>
              <button className={`lang-btn ${lang === 'fr' ? 'active' : ''}`} type="button" onClick={() => changeLanguage('fr')}>FR</button>
              <button className={`lang-btn ${lang === 'ar' ? 'active' : ''}`} type="button" onClick={() => changeLanguage('ar')}>AR</button>
            </div>
          </div>
        </div>
      </div>

      <main>
        {/* HERO SECTION */}
        <section className="hero" id="home">
          <div className="hero-grid">
            <div className="hero-content">
              <div className="availability">
                <span className="dot" />
                <span>{t('hero.available')}</span>
              </div>

              <h1>
                <span>{t('hero.title1')}</span>
                <br />
                <span className="gradient-text">{t('hero.title2')}</span>
              </h1>

              <p className="hero-subtitle">{t('hero.subtitle')}</p>
              <p className="hero-description">{t('hero.description')}</p>

              {/* Action Buttons including PWA Android Install */}
              <div className="hero-actions">
                <PWAInstallButton currentLang={lang} variant="hero" />

                <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="btn btn-whatsapp">
                  <i className="fa-brands fa-whatsapp" aria-hidden="true" />
                  <span>{t('cta.whatsapp')}</span>
                </a>

                <a href={`mailto:${EMAIL_ADDRESS}`} className="btn btn-outline">
                  <i className="fa-solid fa-envelope" aria-hidden="true" />
                  <span>{t('cta.email')}</span>
                </a>

                <a href="#projects" className="btn btn-outline">
                  <i className="fa-solid fa-layer-group" aria-hidden="true" />
                  <span>{t('cta.work')}</span>
                </a>
              </div>

              <p className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-3">{t('hero.social')}</p>
              <div className="socials" aria-label="Social links">
                <a className="social-link whatsapp" href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
                  <i className="fa-brands fa-whatsapp" />
                </a>
                <a className="social-link email" href={`mailto:${EMAIL_ADDRESS}`} aria-label="Email">
                  <i className="fa-solid fa-envelope" />
                </a>
                <a className="social-link facebook" href="https://www.facebook.com/Bousaada.hichem2" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                  <i className="fa-brands fa-facebook-f" />
                </a>
              </div>
            </div>

            {/* Profile Frame with cut-out artwork */}
            <div className="hero-visual" aria-label="Hichem Bousaada profile image">
              <div className="portrait-scene">
                <div className="portrait-halo" />
                <div className="portrait-frame">
                  <img
                    className="profile-image"
                    src="/pwa-512x512.png"
                    alt="Hichem Bousaada"
                    loading="eager"
                  />
                </div>
              </div>
              <div className="floating-card card-top">
                <i className="fa-solid fa-code text-sky-400" />
                <span>{t('float.web')}</span>
              </div>
              <div className="floating-card card-bottom">
                <i className="fa-brands fa-android text-emerald-400" />
                <span>Android App</span>
              </div>
            </div>
          </div>

          {/* Stats Bar */}
          <div className="stats" aria-label="Portfolio statistics">
            <div className="stat-card">
              <div className="stat-value">50+</div>
              <div className="stat-label">{t('stats.projects')}</div>
            </div>
            <div className="stat-card">
              <div className="stat-value">30+</div>
              <div className="stat-label">{t('stats.clients')}</div>
            </div>
            <div className="stat-card">
              <div className="stat-value">9+</div>
              <div className="stat-label">{t('stats.services')}</div>
            </div>
            <div className="stat-card">
              <div className="stat-value">3+</div>
              <div className="stat-label">{t('stats.years')}</div>
            </div>
          </div>
        </section>

        {/* ABOUT SECTION */}
        <section id="about">
          <div className="container about-grid">
            <div className="profile-mini glass-card">
              <div className="mini-icon">
                <i className="fa-solid fa-rocket" aria-hidden="true" />
              </div>
              <h2 className="section-title text-2xl font-bold">{t('about.cardTitle')}</h2>
              <p className="section-subtitle">{t('about.cardText')}</p>
            </div>

            <div className="about-panel glass-card">
              <span className="eyebrow">
                <i className="fa-solid fa-user-astronaut" />
                <span>{t('about.eyebrow')}</span>
              </span>
              <h2 className="section-title">{t('about.title')}</h2>
              <p className="section-subtitle">{t('about.text')}</p>

              <div className="feature-list">
                <div className="feature-item">
                  <i className="fa-solid fa-circle-check" />
                  <span>{t('about.f1')}</span>
                </div>
                <div className="feature-item">
                  <i className="fa-solid fa-circle-check" />
                  <span>{t('about.f2')}</span>
                </div>
                <div className="feature-item">
                  <i className="fa-solid fa-circle-check" />
                  <span>{t('about.f3')}</span>
                </div>
                <div className="feature-item">
                  <i className="fa-solid fa-circle-check" />
                  <span>{t('about.f4')}</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SERVICES SECTION */}
        <section id="services">
          <div className="container">
            <div className="section-header">
              <span className="eyebrow">
                <i className="fa-solid fa-star" />
                <span>{t('services.eyebrow')}</span>
              </span>
              <h2 className="section-title">{t('services.title')}</h2>
              <p className="section-subtitle">{t('services.text')}</p>
            </div>

            <div className="services-showcase">
              {SERVICES_DATA.map((cat) => (
                <article key={cat.key} className="glass-card service-category">
                  <div className="category-head">
                    <div>
                      <span className="category-kicker">
                        <i className={cat.categoryIcon} aria-hidden="true" />
                        {localize(cat.title)}
                      </span>
                      <h3 className="category-title">{localize(cat.heading)}</h3>
                      <p className="category-text">{localize(cat.description)}</p>
                    </div>
                    <div className="category-visual" role="img" aria-label={localize(cat.title)}>
                      <i className={cat.visualIcon} aria-hidden="true" />
                    </div>
                  </div>

                  <div className="service-grid">
                    {cat.services.map((svc, i) => (
                      <article
                        key={i}
                        className="premium-service-card"
                        role="button"
                        tabIndex={0}
                        onClick={() => handleSelectService(localize(svc.title))}
                        onKeyDown={(e) => {
                          if (e.key === 'Enter' || e.key === ' ') {
                            e.preventDefault();
                            handleSelectService(localize(svc.title));
                          }
                        }}
                      >
                        <span className="premium-service-badge" aria-hidden="true" />
                        <div className="premium-service-icon">
                          <i className={svc.icon} aria-hidden="true" />
                        </div>
                        <h4 className="premium-service-title">{localize(svc.title)}</h4>
                        <p className="premium-service-text">{localize(svc.text)}</p>
                      </article>
                    ))}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* PROJECTS SECTION */}
        <section id="projects">
          <div className="container">
            <div className="section-header">
              <span className="eyebrow">
                <i className="fa-solid fa-diagram-project" />
                <span>{t('projects.eyebrow')}</span>
              </span>
              <h2 className="section-title">{t('projects.title')}</h2>
              <p className="section-subtitle">{t('projects.text')}</p>
            </div>

            {/* Filter Tabs */}
            <div className="filter-tabs" role="tablist">
              {(
                [
                  ['all', t('filter.all')],
                  ['digital', t('filter.digital')],
                  ['creative', t('filter.creative')],
                  ['academic', t('filter.academic')],
                ] as const
              ).map(([key, label]) => (
                <button
                  key={key}
                  className={`filter-tab ${projectFilter === key ? 'active' : ''}`}
                  type="button"
                  role="tab"
                  aria-selected={projectFilter === key}
                  onClick={() => setProjectFilter(key)}
                >
                  {label}
                </button>
              ))}
            </div>

            {/* Project Cards Grid */}
            <div className="cards-grid">
              {filteredProjects.map((proj) => (
                <article key={proj.id} className="glass-card project-card">
                  <div>
                    <div className="project-top">
                      <i className={proj.icon} aria-hidden="true" />
                    </div>
                    <div className="project-meta">
                      <span>{localize(proj.badge)}</span>
                    </div>
                    <h3 className="card-title">{localize(proj.title)}</h3>
                    <p className="card-text">{localize(proj.summary)}</p>
                    <div className="tags">
                      {proj.tags.map((tag) => (
                        <span key={tag} className="tag">{tag}</span>
                      ))}
                    </div>
                  </div>

                  <div className="project-actions">
                    <button
                      className="project-btn"
                      type="button"
                      onClick={() => setSelectedProject(proj)}
                    >
                      <i className="fa-regular fa-eye" aria-hidden="true" />
                      <span>{t('project.viewDetails')}</span>
                    </button>
                    <button
                      className="project-btn primary"
                      type="button"
                      onClick={() => handleSelectProject(localize(proj.title))}
                    >
                      <i className="fa-solid fa-paper-plane" aria-hidden="true" />
                      <span>{t('project.request')}</span>
                    </button>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* SKILLS SECTION */}
        <section id="skills">
          <div className="container skills-wrap">
            <div className="glass-card skill-card">
              <span className="eyebrow">
                <i className="fa-solid fa-brain" />
                <span>{t('skills.eyebrow')}</span>
              </span>
              <h2 className="section-title">{t('skills.title')}</h2>
              <p className="section-subtitle">{t('skills.text')}</p>
            </div>
            <div className="skill-pills">
              {SKILLS_LIST.map(([icon, label], idx) => (
                <span key={idx} className="skill-pill">
                  <i className={icon} aria-hidden="true" />
                  {label}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* PROCESS SECTION */}
        <section id="process">
          <div className="container">
            <div className="section-header">
              <span className="eyebrow">
                <i className="fa-solid fa-route" />
                <span>{t('process.eyebrow')}</span>
              </span>
              <h2 className="section-title">{t('process.title')}</h2>
              <p className="section-subtitle">{t('process.text')}</p>
            </div>
            <div className="cards-grid">
              {PROCESS_DATA.map(([icon, title, desc], idx) => (
                <article key={idx} className="glass-card service-card">
                  <div className="icon-box">
                    <i className={icon} aria-hidden="true" />
                  </div>
                  <h3 className="card-title">{localize(title as any)}</h3>
                  <p className="card-text">{localize(desc as any)}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* TESTIMONIALS SECTION */}
        <section id="testimonials">
          <div className="container">
            <div className="section-header">
              <span className="eyebrow">
                <i className="fa-solid fa-heart" />
                <span>{t('testimonials.eyebrow')}</span>
              </span>
              <h2 className="section-title">{t('testimonials.title')}</h2>
              <p className="section-subtitle">{t('testimonials.text')}</p>
            </div>
            <div className="testimonials-grid">
              {TESTIMONIALS_DATA.map((rev, idx) => (
                <article key={idx} className="glass-card testimonial-card">
                  <div>
                    <div className="stars" aria-label="5 stars">
                      <i className="fa-solid fa-star" />
                      <i className="fa-solid fa-star" />
                      <i className="fa-solid fa-star" />
                      <i className="fa-solid fa-star" />
                      <i className="fa-solid fa-star" />
                    </div>
                    <p className="testimonial-quote mt-3">"{localize(rev.quote)}"</p>
                  </div>
                  <div className="testimonial-author">
                    <div className="author-avatar">{rev.initials}</div>
                    <div>
                      <div className="author-name">{localize(rev.name)}</div>
                      <div className="author-role">{localize(rev.role)}</div>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ SECTION */}
        <section id="faq">
          <div className="container">
            <div className="section-header">
              <span className="eyebrow">
                <i className="fa-solid fa-circle-question" />
                <span>{t('faq.eyebrow')}</span>
              </span>
              <h2 className="section-title">{t('faq.title')}</h2>
              <p className="section-subtitle">{t('faq.text')}</p>
            </div>
            <div className="faq-list">
              {FAQ_DATA.map((faq, idx) => {
                const isOpen = activeFaq === idx;
                return (
                  <div key={idx} className={`faq-item ${isOpen ? 'open' : ''}`}>
                    <button
                      className="faq-question"
                      type="button"
                      aria-expanded={isOpen}
                      onClick={() => setActiveFaq(isOpen ? null : idx)}
                    >
                      <span>{localize(faq.q)}</span>
                      <i className="fa-solid fa-chevron-down" aria-hidden="true" />
                    </button>
                    <div className="faq-answer">{localize(faq.a)}</div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* CONTACT SECTION */}
        <section id="contact">
          <div className="container contact-grid">
            <div>
              <span className="eyebrow">
                <i className="fa-solid fa-paper-plane" />
                <span>{t('contact.eyebrow')}</span>
              </span>
              <h2 className="section-title">{t('contact.title')}</h2>
              <p className="section-subtitle">{t('contact.text')}</p>

              <div className="contact-list">
                <a
                  className="contact-link whatsapp"
                  href={WHATSAPP_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="contact-icon">
                    <i className="fa-brands fa-whatsapp" />
                  </span>
                  <span>
                    <span className="contact-name">{t('contact.whatsapp')}</span>
                    <span className="contact-value">+213 656 113 974 / WhatsApp QR</span>
                  </span>
                </a>

                <a className="contact-link email" href={`mailto:${EMAIL_ADDRESS}`}>
                  <span className="contact-icon">
                    <i className="fa-solid fa-envelope" />
                  </span>
                  <span>
                    <span className="contact-name">Email</span>
                    <span className="contact-value">{EMAIL_ADDRESS}</span>
                  </span>
                </a>

                <button className="copy-email-btn" type="button" onClick={copyEmail}>
                  <i className="fa-regular fa-copy" aria-hidden="true" />
                  <span>{t('contact.copyEmail')}</span>
                </button>

                <a
                  className="contact-link facebook"
                  href="https://www.facebook.com/Bousaada.hichem2"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="contact-icon">
                    <i className="fa-brands fa-facebook-f" />
                  </span>
                  <span>
                    <span className="contact-name">Facebook</span>
                    <span className="contact-value">Bousaada Hichem</span>
                  </span>
                </a>
              </div>
            </div>

            {/* Contact Form */}
            <form className="contact-form glass-card" onSubmit={handleWhatsAppSubmit}>
              <div className="form-grid">
                <div className="form-group">
                  <label htmlFor="name">{t('form.name')}</label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="phone">{t('form.phone')}</label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="email">{t('form.email')}</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                />
              </div>

              <div className="form-group">
                <label htmlFor="service">{t('form.service')}</label>
                <select
                  id="service"
                  name="service"
                  value={formData.service}
                  onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                >
                  {SERVICES_DATA.flatMap((c) => c.services).map((s, idx) => (
                    <option key={idx} value={localize(s.title)}>
                      {localize(s.title)}
                    </option>
                  ))}
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="message">{t('form.message')}</label>
                <textarea
                  id="message"
                  name="message"
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                />
              </div>

              <div className="form-actions">
                <button className="btn btn-whatsapp" type="submit">
                  <i className="fa-brands fa-whatsapp" />
                  <span>{t('form.sendWhatsapp')}</span>
                </button>
                <button className="btn btn-outline" type="button" onClick={handleEmailSubmit}>
                  <i className="fa-solid fa-envelope" />
                  <span>{t('form.sendEmail')}</span>
                </button>
              </div>
            </form>
          </div>
        </section>
      </main>

      {/* Project Case Study Modal */}
      {selectedProject && (
        <div
          className="modal-backdrop open"
          role="dialog"
          aria-modal="true"
          onClick={() => setSelectedProject(null)}
        >
          <div className="modal-card" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <div>
                <span className="modal-badge">{localize(selectedProject.badge)}</span>
                <h3 className="section-title text-xl font-bold">{localize(selectedProject.title)}</h3>
              </div>
              <button
                className="modal-close"
                type="button"
                onClick={() => setSelectedProject(null)}
                aria-label="Close modal"
              >
                <i className="fa-solid fa-xmark" />
              </button>
            </div>

            <p className="section-subtitle mb-4">{localize(selectedProject.summary)}</p>

            <div className="modal-Deliverables">
              {localize(selectedProject.deliverables).map((item, idx) => (
                <div key={idx} className="modal-deliv-item">
                  <i className="fa-solid fa-circle-check" aria-hidden="true" />
                  <span>{item}</span>
                </div>
              ))}
            </div>

            <div className="tags mb-6">
              {selectedProject.tags.map((t) => (
                <span key={t} className="tag">{t}</span>
              ))}
            </div>

            <div className="form-actions">
              <button
                className="btn btn-primary"
                type="button"
                onClick={() => {
                  const title = localize(selectedProject.title);
                  setSelectedProject(null);
                  handleSelectProject(title);
                }}
              >
                <i className="fa-solid fa-rocket" />
                <span>{t('modal.request')}</span>
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Floating PWA Install Badge for Android */}
      <PWAInstallButton currentLang={lang} variant="floating" />

      {/* Floating WhatsApp Action Button */}
      <a
        className="floating-whatsapp"
        href={WHATSAPP_LINK}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Open WhatsApp"
      >
        <i className="fa-brands fa-whatsapp" aria-hidden="true" />
      </a>

      {/* Offline Connectivity Notification */}
      <OfflineIndicator currentLang={lang} />

      {/* Notification Toast */}
      {toastMessage && (
        <div className="email-toast show" role="status">
          {toastMessage}
        </div>
      )}

      {/* Footer */}
      <footer>
        <div className="footer-inner">
          <a href="#home" className="logo brand-logo">
            <span className="brand-mark"><span>HB</span></span>
            <span className="brand-name">Hichem</span>
          </a>
          <p className="footer-copy">{t('footer.copy')}</p>
          <div className="socials">
            <a className="social-link whatsapp" href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
              <i className="fa-brands fa-whatsapp" />
            </a>
            <a className="social-link email" href={`mailto:${EMAIL_ADDRESS}`} aria-label="Email">
              <i className="fa-solid fa-envelope" />
            </a>
            <a className="social-link facebook" href="https://www.facebook.com/Bousaada.hichem2" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
              <i className="fa-brands fa-facebook-f" />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
