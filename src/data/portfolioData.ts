export type Language = 'ar' | 'fr' | 'en';

export interface ServiceItem {
  icon: string;
  title: Record<Language, string>;
  text: Record<Language, string>;
}

export interface ServiceCategory {
  key: string;
  categoryIcon: string;
  visualIcon: string;
  title: Record<Language, string>;
  heading: Record<Language, string>;
  description: Record<Language, string>;
  services: ServiceItem[];
}

export interface ProjectItem {
  id: string;
  category: 'digital' | 'creative' | 'academic';
  icon: string;
  badge: Record<Language, string>;
  title: Record<Language, string>;
  summary: Record<Language, string>;
  deliverables: Record<Language, string[]>;
  tags: string[];
}

export interface TestimonialItem {
  initials: string;
  name: Record<Language, string>;
  role: Record<Language, string>;
  quote: Record<Language, string>;
}

export interface FaqItem {
  q: Record<Language, string>;
  a: Record<Language, string>;
}

export const WHATSAPP_PHONE = '213656113974';
export const WHATSAPP_LINK = 'https://wa.me/qr/F3BE2QCKYJQ6J1';
export const EMAIL_ADDRESS = 'hichembousaada469@gmail.com';

export const DARK_THEMES = ['dark-blue', 'purple-neon'] as const;
export const LIGHT_THEMES = ['light', 'light-sky', 'light-mint', 'light-sunset'] as const;
export type AppTheme = typeof DARK_THEMES[number] | typeof LIGHT_THEMES[number];

export const I18N: Record<Language, Record<string, string>> = {
  ar: {
    'nav.home': 'الرئيسية',
    'nav.about': 'من أنا',
    'nav.services': 'الخدمات',
    'nav.projects': 'المشاريع',
    'nav.skills': 'المهارات',
    'nav.contact': 'التواصل',
    'hero.available': 'متاح لمشاريع احترافية',
    'hero.title1': 'حلول رقمية',
    'hero.title2': 'مستقبلية',
    'hero.subtitle': 'مطوّر ويب · مطوّر أندرويد · مصمم بصري',
    'hero.description': 'أصمم مواقع حديثة، تطبيقات أندرويد، هويات بصرية، عروض تقديمية وملفات رقمية بتجربة راقية تشبه كبرى المنصات التقنية.',
    'hero.social': 'تواصل معي',
    'cta.whatsapp': 'ابدأ عبر واتساب',
    'cta.email': 'راسلني بالإيميل',
    'cta.work': 'شاهد المشاريع',
    'cta.install': 'تثبيت التطبيق على أندرويد',
    'float.web': 'تجارب ويب',
    'float.design': 'تصميم إبداعي',
    'stats.projects': 'مشروع منجز',
    'stats.clients': 'عميل راضٍ',
    'stats.services': 'خدمة رقمية',
    'stats.years': 'سنوات خبرة',
    'about.eyebrow': 'من أنا',
    'about.title': 'مطوّر مبدع يركز على تجارب رقمية نظيفة واحترافية.',
    'about.text': 'أساعد الطلاب ورواد الأعمال والشركات على تحويل الأفكار إلى منتجات مصقولة: مواقع، تطبيقات أندرويد، هويات بصرية، عروض وملفات أكاديمية.',
    'about.cardTitle': 'خدمات ذكية وإبداعية',
    'about.cardText': 'مصممة بدقة وسرعة وتأثير بصري قوي.',
    'about.f1': 'واجهات حديثة ومتجاوبة',
    'about.f2': 'تواصل سريع ومباشر',
    'about.f3': 'جودة بصرية عالية',
    'about.f4': 'دعم وتحديث بعد التسليم',
    'services.eyebrow': 'الخدمات',
    'services.title': 'خدمات احترافية منظمة حسب احتياجك',
    'services.text': 'حلول أكاديمية وإبداعية ورقمية معروضة في فئات واضحة — حديثة ومفصلة وجاهزة للمشاريع الجادة.',
    'projects.eyebrow': 'الأعمال',
    'projects.title': 'نماذج مختارة من المشاريع',
    'projects.text': 'استعرض نماذج احترافية في تطوير المواقع، تطبيقات الهاتف، الهويات البصرية والعروض الأكاديمية.',
    'filter.all': 'الكل',
    'filter.digital': 'ويب وتطبيقات',
    'filter.creative': 'تصميم وهوية',
    'filter.academic': 'أكاديمي وعروض',
    'project.viewDetails': 'تفاصيل المشروع',
    'project.request': 'اطلب مماثلاً',
    'modal.request': 'اطلب مشروعاً مشابهاً الآن',
    'skills.eyebrow': 'المهارات',
    'skills.title': 'الأدوات والتقنيات التي أستخدمها',
    'skills.text': 'مجموعة أدوات مرنة للبناء والتصميم والتوثيق وتسليم أعمال متقنة.',
    'process.eyebrow': 'طريقة العمل',
    'process.title': 'منهجية واضحة من الفكرة إلى التسليم',
    'process.text': 'تواصل منظم، تنفيذ نظيف ومراجعات حتى تكون النتيجة مناسبة تماماً.',
    'testimonials.eyebrow': 'آراء العملاء',
    'testimonials.title': 'ثقة الطلاب ورواد الأعمال',
    'testimonials.text': 'انطباعات العملاء الذين تعاونت معهم في بناء المواقع والتطبيقات والهويات البصرية ومذكرات التخرج.',
    'faq.eyebrow': 'الأسئلة الشائعة',
    'faq.title': 'إجابات سريعة على استفساراتك',
    'faq.text': 'كل ما تحتاج معرفته حول مدة التنفيذ، التعديلات المتاحة، اللغات المدعومة وطريقة البدء.',
    'contact.eyebrow': 'التواصل',
    'contact.title': 'جاهز لإنشاء شيء مميز؟',
    'contact.text': 'أرسل رسالة أو افتح واتساب مباشرة. أرد بسرعة وأساعدك على تحديد الخطوة التالية.',
    'contact.whatsapp': 'واتساب / هاتف',
    'contact.copyEmail': 'نسخ البريد الإلكتروني',
    'contact.copied': 'تم نسخ البريد الإلكتروني',
    'ui.serviceSelected': 'تم اختيار الخدمة',
    'ui.projectSelected': 'تم اختيار المشروع — جاهز لتخصيص طلبك',
    'form.name': 'الاسم',
    'form.phone': 'الهاتف',
    'form.email': 'البريد الإلكتروني',
    'form.service': 'الخدمة المطلوبة',
    'form.message': 'رسالة المشروع',
    'form.sendWhatsapp': 'إرسال عبر واتساب',
    'form.sendEmail': 'إرسال عبر الإيميل',
    'footer.copy': '© 2026 هشام بوسعدة. جميع الحقوق محفوظة.',
    'install.button': 'تثبيت التطبيق (Android)',
    'install.installed': 'التطبيق مثبت بنجاح',
    'install.bannerTitle': 'تثبيت تطبيق هشام بوسعدة على Android',
    'install.bannerText': 'احصل على تجربة تطبيق أندرويد حقيقية مع وصول سريع من شاشتك الرئيسية، وسرعة فائقة بدون استهلاك باقة الإنترنت.',
    'install.bannerAction': 'تثبيت الآن مجاناً',
    'install.bannerDismiss': 'لاحقاً',
    'install.guideTitle': 'طريقة التثبيت على الهاتف',
    'install.guideAndroid': '1. اضغط على زر "تثبيت الآن" في الأعلى أو قائمة المتصفح (⋮).\n2. اختر "تثبيت التطبيق" أو "إضافة إلى الشاشة الرئيسية".\n3. سيظهر تطبيق هشام في قائمة تطبيقات هاتفك مثل أي تطبيق أندرويد.',
    'install.guideIOS': '1. افتح الموقع في متصفح Safari.\n2. اضغط على زر المشاركة (Share).\n3. اختر "إضافة إلى الصفحة الرئيسية" (Add to Home Screen).',
    'offline.message': 'وضع عدم الاتصال: يتم استخدام البيانات والملفات المخزنة في جهازك.'
  },
  fr: {
    'nav.home': 'Accueil',
    'nav.about': 'À propos',
    'nav.services': 'Services',
    'nav.projects': 'Projets',
    'nav.skills': 'Compétences',
    'nav.contact': 'Contact',
    'hero.available': 'Disponible pour des projets premium',
    'hero.title1': 'Solutions Digitales',
    'hero.title2': 'Futuristes',
    'hero.subtitle': 'Développeur Web · Créateur Android · Designer Visuel',
    'hero.description': 'Je crée des sites web modernes, applications Android, identités visuelles, présentations et supports digitaux avec une expérience haut de gamme.',
    'hero.social': 'Me contacter',
    'cta.whatsapp': 'Démarrer sur WhatsApp',
    'cta.email': 'M’envoyer un email',
    'cta.work': 'Voir les projets',
    'cta.install': 'Installer sur Android',
    'float.web': 'Expériences Web',
    'float.design': 'Design Créatif',
    'stats.projects': 'Projets livrés',
    'stats.clients': 'Clients satisfaits',
    'stats.services': 'Services digitaux',
    'stats.years': 'Années d’expérience',
    'about.eyebrow': 'À propos',
    'about.title': 'Un développeur créatif orienté expériences digitales premium.',
    'about.text': 'J’aide étudiants, entrepreneurs et entreprises à transformer leurs idées en produits soignés : sites web, applications Android, identités visuelles, présentations et documents académiques.',
    'about.cardTitle': 'Services intelligents & créatifs',
    'about.cardText': 'Conçus avec précision, rapidité et un fort impact visuel.',
    'about.f1': 'Interfaces modernes responsives',
    'about.f2': 'Communication rapide',
    'about.f3': 'Qualité visuelle premium',
    'about.f4': 'Support après livraison',
    'services.eyebrow': 'Services',
    'services.title': 'Services premium, organisés selon vos besoins',
    'services.text': 'Solutions académiques, créatives et digitales présentées en catégories claires — modernes, détaillées et prêtes pour vos projets.',
    'projects.eyebrow': 'Portfolio',
    'projects.title': 'Sélection de projets réalisés',
    'projects.text': 'Découvrez des réalisations concrètes en développement web, applications mobiles, branding et soutenances.',
    'filter.all': 'Tous',
    'filter.digital': 'Web & Mobile',
    'filter.creative': 'Design & Marque',
    'filter.academic': 'Académique & Pitch',
    'project.viewDetails': 'Détails',
    'project.request': 'Commander',
    'modal.request': 'Demander un projet similaire',
    'skills.eyebrow': 'Compétences',
    'skills.title': 'Outils et technologies utilisés',
    'skills.text': 'Un stack polyvalent pour créer, designer, documenter et livrer un travail soigné.',
    'process.eyebrow': 'Processus',
    'process.title': 'Une méthode claire de l’idée à la livraison',
    'process.text': 'Communication structurée, exécution propre et révisions jusqu’à satisfaction.',
    'testimonials.eyebrow': 'Témoignages',
    'testimonials.title': 'La confiance des étudiants et entrepreneurs',
    'testimonials.text': 'Retours de clients accompagnés sur leurs sites web, applications Android, identités visuelles et soutenances.',
    'faq.eyebrow': 'FAQ',
    'faq.title': 'Questions fréquentes',
    'faq.text': 'Réponses rapides sur les délais, les révisions, les langues prises en charge et notre méthode de travail.',
    'contact.eyebrow': 'Contact',
    'contact.title': 'Prêt à créer quelque chose d’impressionnant ?',
    'contact.text': 'Envoyez un message ou ouvrez WhatsApp directement. Je réponds rapidement.',
    'contact.whatsapp': 'WhatsApp / Téléphone',
    'contact.copyEmail': 'Copier l’email',
    'contact.copied': 'Email copié dans le presse-papier',
    'ui.serviceSelected': 'Service sélectionné',
    'ui.projectSelected': 'Projet sélectionné — prêt à personnaliser votre demande',
    'form.name': 'Nom',
    'form.phone': 'Téléphone',
    'form.email': 'Email',
    'form.service': 'Service souhaité',
    'form.message': 'Message du projet',
    'form.sendWhatsapp': 'Envoyer sur WhatsApp',
    'form.sendEmail': 'Envoyer par Email',
    'footer.copy': '© 2026 Hichem Bousaada. Tous droits réservés.',
    'install.button': 'Installer l’App (Android)',
    'install.installed': 'Application déjà installée',
    'install.bannerTitle': 'Installer l’application sur Android',
    'install.bannerText': 'Profitez d’une véritable expérience application mobile sur votre téléphone Android avec accès direct depuis votre écran d’accueil.',
    'install.bannerAction': 'Installer gratuitement',
    'install.bannerDismiss': 'Plus tard',
    'install.guideTitle': 'Guide d’installation mobile',
    'install.guideAndroid': '1. Cliquez sur le bouton "Installer" ci-dessus ou le menu du navigateur (⋮).\n2. Choisissez "Installer l’application" ou "Ajouter à l’écran d’accueil".\n3. L’application Hichem sera accessible directement sur votre appareil.',
    'install.guideIOS': '1. Ouvrez dans Safari.\n2. Appuyez sur le bouton Partager.\n3. Choisissez "Sur l’écran d’accueil".',
    'offline.message': 'Mode hors ligne : les données en cache sont utilisées.'
  },
  en: {
    'nav.home': 'Home',
    'nav.about': 'About',
    'nav.services': 'Services',
    'nav.projects': 'Projects',
    'nav.skills': 'Skills',
    'nav.contact': 'Contact',
    'hero.available': 'Available for premium projects',
    'hero.title1': 'Futuristic Digital',
    'hero.title2': 'Solutions',
    'hero.subtitle': 'Web Developer · Android Creator · Visual Designer',
    'hero.description': 'I build modern websites, Android applications, brand visuals, presentations and digital assets with a premium, high-tech user experience.',
    'hero.social': 'Connect with me',
    'cta.whatsapp': 'Start on WhatsApp',
    'cta.email': 'Email me',
    'cta.work': 'View projects',
    'cta.install': 'Install on Android',
    'float.web': 'Web Experiences',
    'float.design': 'Creative Design',
    'stats.projects': 'Projects delivered',
    'stats.clients': 'Happy clients',
    'stats.services': 'Digital services',
    'stats.years': 'Years experience',
    'about.eyebrow': 'About me',
    'about.title': 'A creative developer focused on clean, premium digital experiences.',
    'about.text': 'I help students, entrepreneurs and businesses transform ideas into polished products: websites, Android apps, visual identities, presentations and academic documents.',
    'about.cardTitle': 'Smart & Creative Services',
    'about.cardText': 'Designed with precision, speed and a strong focus on visual impact.',
    'about.f1': 'Responsive modern UI',
    'about.f2': 'Fast communication',
    'about.f3': 'Premium visual quality',
    'about.f4': 'Support after delivery',
    'services.eyebrow': 'Services',
    'services.title': 'Premium services, organized by what you need',
    'services.text': 'Academic, creative and digital solutions presented in clear categories — detailed, modern and ready for serious projects.',
    'projects.eyebrow': 'Portfolio',
    'projects.title': 'Selected project showcase',
    'projects.text': 'Explore real-world deliverables across web development, mobile apps, branding and academic presentations.',
    'filter.all': 'All Work',
    'filter.digital': 'Web & Mobile',
    'filter.creative': 'Brand & Design',
    'filter.academic': 'Academic & Pitch',
    'project.viewDetails': 'Case Study',
    'project.request': 'Order Similar',
    'modal.request': 'Request Similar Project',
    'skills.eyebrow': 'Skills',
    'skills.title': 'Tools and technologies I use',
    'skills.text': 'A versatile stack for building, designing, documenting and delivering polished work.',
    'process.eyebrow': 'Workflow',
    'process.title': 'A clear process from idea to delivery',
    'process.text': 'Structured communication, clean execution and revisions until the result feels right.',
    'testimonials.eyebrow': 'Client Reviews',
    'testimonials.title': 'Trusted by students & business owners',
    'testimonials.text': 'Feedback from clients who collaborated on websites, mobile apps, branding and thesis presentations.',
    'faq.eyebrow': 'FAQ',
    'faq.title': 'Frequently asked questions',
    'faq.text': 'Quick answers about project timelines, revisions, languages and how we collaborate.',
    'contact.eyebrow': 'Contact',
    'contact.title': 'Ready to build something impressive?',
    'contact.text': 'Send a message or open WhatsApp directly. I respond quickly and help you define the next step.',
    'contact.whatsapp': 'WhatsApp / Phone',
    'contact.copyEmail': 'Copy email',
    'contact.copied': 'Email copied to clipboard',
    'ui.serviceSelected': 'Service selected',
    'ui.projectSelected': 'Project selected — ready to customize your request',
    'form.name': 'Name',
    'form.phone': 'Phone',
    'form.email': 'Email',
    'form.service': 'Desired service',
    'form.message': 'Project message',
    'form.sendWhatsapp': 'Send via WhatsApp',
    'form.sendEmail': 'Send via Email',
    'footer.copy': '© 2026 Hichem Bousaada. All rights reserved.',
    'install.button': 'Install App (Android)',
    'install.installed': 'App Installed',
    'install.bannerTitle': 'Install Hichem App on Android',
    'install.bannerText': 'Enjoy a native Android mobile experience with fast home screen access, offline speed, and no app store hassles.',
    'install.bannerAction': 'Install Now (Free)',
    'install.bannerDismiss': 'Dismiss',
    'install.guideTitle': 'Mobile Installation Guide',
    'install.guideAndroid': '1. Tap the "Install App" button or tap Chrome menu (⋮).\n2. Select "Install App" or "Add to Home screen".\n3. Launch directly from your Android phone app drawer.',
    'install.guideIOS': '1. Open in Safari.\n2. Tap the Share button in the toolbar.\n3. Scroll and select "Add to Home Screen".',
    'offline.message': 'Offline mode: Cached files and data are currently in use.'
  }
};

export const SERVICES_DATA: ServiceCategory[] = [
  {
    key: 'academic',
    categoryIcon: 'fa-solid fa-graduation-cap',
    visualIcon: 'fa-solid fa-book-open',
    title: { en: 'Academic Services', fr: 'Services Académiques', ar: 'الخدمات الأكاديمية' },
    heading: { en: 'Polished academic work, from research to final delivery', fr: 'Travaux académiques soignés, de la recherche à la livraison', ar: 'أعمال أكاديمية متقنة من البحث إلى التسليم النهائي' },
    description: { en: 'Professional support for students and researchers: writing, research, presentations, translation, printing and CV preparation.', fr: 'Accompagnement professionnel pour étudiants et chercheurs : rédaction, recherche, présentations, traduction, impression et CV.', ar: 'دعم احترافي للطلاب والباحثين: كتابة، بحث، عروض، ترجمة، طباعة وإعداد السيرة الذاتية.' },
    services: [
      { icon: 'fa-solid fa-pen-nib', title: { en: 'Academic Writing', fr: 'Rédaction Académique', ar: 'كتابة أكاديمية' }, text: { en: 'Reports, theses, summaries and structured documents written clearly and professionally.', fr: 'Rapports, mémoires, synthèses et documents structurés avec une rédaction claire.', ar: 'تقارير ومذكرات وملخصات ووثائق منظمة بصياغة واضحة واحترافية.' } },
      { icon: 'fa-solid fa-book-open', title: { en: 'Research Support', fr: 'Recherche Documentaire', ar: 'دعم البحث' }, text: { en: 'Documented research, source organization, summaries and clean academic formatting.', fr: 'Recherche documentée, organisation des sources, synthèses et mise en forme.', ar: 'بحوث موثقة وتنظيم مصادر وملخصات وتنسيق أكاديمي نظيف.' } },
      { icon: 'fa-regular fa-file-powerpoint', title: { en: 'Presentations', fr: 'Présentations', ar: 'عروض تقديمية' }, text: { en: 'Premium PowerPoint presentations for thesis defenses, meetings and training.', fr: 'Présentations PowerPoint premium pour soutenances, réunions et formations.', ar: 'عروض PowerPoint احترافية للمناقشات والاجتماعات والتكوين.' } },
      { icon: 'fa-solid fa-language', title: { en: 'Translation', fr: 'Traduction', ar: 'ترجمة' }, text: { en: 'Arabic, French and English translation with careful wording and formatting.', fr: 'Traduction arabe, français et anglais avec formulation et formatage soignés.', ar: 'ترجمة عربية وفرنسية وإنجليزية بصياغة دقيقة وتنسيق مرتب.' } },
      { icon: 'fa-solid fa-print', title: { en: 'Printing & Formatting', fr: 'Impression & Mise en page', ar: 'طباعة وتنسيق' }, text: { en: 'Print-ready files, page layout, binding preparation and clean PDF export.', fr: 'Fichiers prêts à imprimer, mise en page, reliure et export PDF propre.', ar: 'ملفات جاهزة للطباعة وتنسيق صفحات وتحضير للتجليد وتصدير PDF.' } },
      { icon: 'fa-solid fa-id-card', title: { en: 'CV / Resume', fr: 'CV Professionnel', ar: 'سيرة ذاتية' }, text: { en: 'Modern resumes, cover letters and academic profiles that present you professionally.', fr: 'CV modernes, lettres de motivation et profils académiques professionnels.', ar: 'سير ذاتية حديثة ورسائل تحفيزية وملفات أكاديمية احترافية.' } }
    ]
  },
  {
    key: 'creative',
    categoryIcon: 'fa-solid fa-wand-magic-sparkles',
    visualIcon: 'fa-solid fa-palette',
    title: { en: 'Creative Services', fr: 'Services Créatifs', ar: 'الخدمات الإبداعية' },
    heading: { en: 'Visual identity and content that makes your brand memorable', fr: 'Identité visuelle et contenus qui rendent votre marque mémorable', ar: 'هوية بصرية ومحتوى يجعل علامتك لا تُنسى' },
    description: { en: 'Design assets for brands, events and social platforms with a premium, consistent visual language.', fr: 'Supports graphiques pour marques, événements et réseaux sociaux avec une identité premium cohérente.', ar: 'تصاميم للعلامات والفعاليات والمنصات الاجتماعية بهوية بصرية متناسقة وراقية.' },
    services: [
      { icon: 'fa-solid fa-palette', title: { en: 'Brand & Logo Design', fr: 'Logo & Identité', ar: 'شعار وهوية' }, text: { en: 'Logos, color palettes and visual systems designed for a strong brand presence.', fr: 'Logos, palettes de couleurs et systèmes visuels pour une présence forte.', ar: 'شعارات ولوحات ألوان وأنظمة بصرية لحضور قوي للعلامة.' } },
      { icon: 'fa-solid fa-share-nodes', title: { en: 'Social Media Design', fr: 'Design Réseaux Sociaux', ar: 'تصميم السوشيال ميديا' }, text: { en: 'Posts, covers, ads and templates optimized for Facebook, Instagram and campaigns.', fr: 'Publications, couvertures, annonces et templates pour campagnes sociales.', ar: 'منشورات وأغلفة وإعلانات وقوالب مناسبة للحملات والمنصات.' } },
      { icon: 'fa-solid fa-image', title: { en: 'Posters & Flyers', fr: 'Affiches & Flyers', ar: 'ملصقات ومنشورات' }, text: { en: 'Eye-catching event posters, flyers and promotional visuals ready for print or web.', fr: 'Affiches événementielles, flyers et visuels promotionnels prêts à publier.', ar: 'ملصقات فعاليات ومنشورات ترويجية جاهزة للطباعة أو النشر.' } },
      { icon: 'fa-solid fa-icons', title: { en: 'Visual Assets', fr: 'Assets Visuels', ar: 'عناصر بصرية' }, text: { en: 'Icons, banners, thumbnails and creative elements for a polished digital presence.', fr: 'Icônes, bannières, miniatures et éléments créatifs pour présence soignée.', ar: 'أيقونات وبانرات وصور مصغرة وعناصر إبداعية لحضور رقمي مرتب.' } }
    ]
  },
  {
    key: 'digital',
    categoryIcon: 'fa-solid fa-microchip',
    visualIcon: 'fa-solid fa-code',
    title: { en: 'Digital Services', fr: 'Services Digitaux', ar: 'الخدمات الرقمية' },
    heading: { en: 'Modern web, mobile and automation solutions for growth', fr: 'Solutions web, mobile et automatisation modernes pour évoluer', ar: 'حلول ويب وموبايل وأتمتة حديثة للنمو' },
    description: { en: 'High-performance digital experiences: responsive websites, Android apps, e-commerce, AI-assisted workflows and deployment.', fr: 'Expériences digitales performantes : sites responsives, apps Android, e-commerce, workflows IA et mise en ligne.', ar: 'تجارب رقمية عالية الأداء: مواقع متجاوبة، تطبيقات أندرويد، تجارة إلكترونية، أدوات ذكاء اصطناعي ونشر.' },
    services: [
      { icon: 'fa-solid fa-code', title: { en: 'Web Development', fr: 'Développement Web', ar: 'تطوير الويب' }, text: { en: 'Fast, responsive websites and landing pages with clean UI and strong user experience.', fr: 'Sites rapides et responsives avec interface propre et expérience utilisateur forte.', ar: 'مواقع سريعة ومتجاوبة بواجهة نظيفة وتجربة استخدام قوية.' } },
      { icon: 'fa-brands fa-android', title: { en: 'Android Apps', fr: 'Applications Android', ar: 'تطبيقات أندرويد' }, text: { en: 'Intuitive Android applications with Firebase, databases and smooth mobile flows.', fr: 'Applications Android intuitives avec Firebase, bases de données et parcours fluides.', ar: 'تطبيقات أندرويد سهلة مع Firebase وقواعد بيانات وتجربة سلسة.' } },
      { icon: 'fa-solid fa-cart-shopping', title: { en: 'E-commerce Setup', fr: 'E-commerce', ar: 'متاجر إلكترونية' }, text: { en: 'Product catalogs, contact flows and conversion-focused shopping experiences.', fr: 'Catalogues produits, parcours contact et expériences orientées conversion.', ar: 'كتالوجات منتجات ومسارات تواصل وتجربة شراء موجهة للتحويل.' } },
      { icon: 'fa-solid fa-robot', title: { en: 'AI Productivity', fr: 'Productivité IA', ar: 'إنتاجية بالذكاء الاصطناعي' }, text: { en: 'Smart templates, content workflows and AI-assisted document or design production.', fr: 'Templates intelligents, workflows contenu et production assistée par IA.', ar: 'قوالب ذكية وسير عمل للمحتوى وإنتاج مستندات أو تصاميم بمساعدة الذكاء الاصطناعي.' } }
    ]
  }
];

export const PROJECTS_DATA: ProjectItem[] = [
  {
    id: 'ecommerce',
    category: 'digital',
    icon: 'fa-solid fa-cart-shopping',
    badge: { en: 'Web & E-Commerce', fr: 'Web & E-Commerce', ar: 'متجر إلكتروني' },
    title: { en: 'Modern E-Commerce Storefront', fr: 'Boutique E-Commerce Moderne', ar: 'واجهة متجر إلكتروني متكامل' },
    summary: { en: 'High-converting product catalog with instant filtering, cart flow and WhatsApp checkout integration.', fr: 'Catalogue produits optimisé avec filtrage instantané, panier et commande directe sur WhatsApp.', ar: 'متجر إلكتروني سريع مع فلترة ذكية للمنتجات وسلة مشتريات وربط مباشر للطلب عبر واتساب.' },
    deliverables: {
      en: ['Responsive storefront UI', 'Dynamic product filtering', 'WhatsApp & COD checkout', 'SEO & speed optimization'],
      fr: ['Interface responsive moderne', 'Filtrage dynamique des produits', 'Commande WhatsApp & livraison', 'Optimisation SEO & vitesse'],
      ar: ['واجهة متجاوبة لجميع الشاشات', 'فلترة فورية للمنتجات والأقسام', 'إتمام الطلب عبر واتساب أو عند الاستلام', 'تحسين محركات البحث وسرعة التحميل']
    },
    tags: ['React', 'UI/UX', 'SEO', 'WhatsApp API']
  },
  {
    id: 'android-app',
    category: 'digital',
    icon: 'fa-solid fa-mobile-screen-button',
    badge: { en: 'Android Application', fr: 'Application Android', ar: 'تطبيق أندرويد' },
    title: { en: 'Smart Inventory & Order Manager', fr: 'Application de Gestion & Suivi', ar: 'تطبيق إدارة المبيعات والمخزون' },
    summary: { en: 'Native Android app backed by Firebase real-time sync, user authentication and PDF invoice generation.', fr: 'Application Android avec synchronisation Firebase en temps réel, authentification et factures PDF.', ar: 'تطبيق أندرويد مربوط مع Firebase للمزامنة الفورية وإدارة الحسابات وتصدير الفواتير بصيغة PDF.' },
    deliverables: {
      en: ['Real-time Firebase database', 'Role-based login system', 'Offline support & notifications', 'PDF report export'],
      fr: ['Base de données Firebase temps réel', 'Authentification sécurisée', 'Mode hors-ligne & notifications', 'Export de rapports PDF'],
      ar: ['قاعدة بيانات Firebase فورية', 'نظام تسجيل دخول متعدد الصلاحيات', 'دعم العمل بدون إنترنت وإشعارات', 'تصدير التقارير والفواتير PDF']
    },
    tags: ['Android', 'Firebase', 'Java/Kotlin', 'Material UI']
  },
  {
    id: 'brand-campaign',
    category: 'creative',
    icon: 'fa-solid fa-bullhorn',
    badge: { en: 'Brand Identity', fr: 'Identité Visuelle', ar: 'هوية بصرية كاملة' },
    title: { en: 'Complete Brand & Social Kit', fr: 'Identité de Marque & Kit Social', ar: 'حزمة الهوية البصرية والسوشيال ميديا' },
    summary: { en: 'Cohesive logo system, typography guidelines, print-ready flyers and social media campaign templates.', fr: 'Système de logo cohérent, charte graphique, flyers prêts à imprimer et templates réseaux sociaux.', ar: 'تصميم شعار احترافي مع دليل الألوان والخطوط ومطبوعات إعلانية وقوالب جاهزة لمنصات التواصل.' },
    deliverables: {
      en: ['Primary & secondary vector logos', 'Color palette & font system', 'Social media post templates', 'Print-ready business cards & flyers'],
      fr: ['Logos vectoriels haute définition', 'Palette de couleurs & typographie', 'Templates réseaux sociaux', 'Cartes de visite & flyers prêts à imprimer'],
      ar: ['شعار فيكتور بجميع الصيغ والخلفيات', 'دليل الألوان والخطوط الرسمية', 'قوالب منشورات وقصص تفاعلية', 'بطاقات عمل وملصقات جاهزة للطباعة']
    },
    tags: ['Illustrator', 'Photoshop', 'Branding', 'Print']
  },
  {
    id: 'thesis-defense',
    category: 'academic',
    icon: 'fa-solid fa-chalkboard-user',
    badge: { en: 'Academic Pitch', fr: 'Soutenance & Pitch', ar: 'عرض مناقشة تخرج' },
    title: { en: 'Executive Thesis Defense Deck', fr: 'Présentation de Soutenance Premium', ar: 'عرض تقديمي احترافي لمناقشة المذكرة' },
    summary: { en: 'Structured visual storytelling with custom infographics, smooth transitions and clear data charts.', fr: 'Narration visuelle structurée avec infographies sur mesure, transitions fluides et graphiques clairs.', ar: 'عرض PowerPoint منظم بصرياً مع إنفوجرافيك مخصص وانتقالات سلسة ورسوم بيانية واضحة للجنة المناقشة.' },
    deliverables: {
      en: ['Custom slide master layout', 'Data charts & process diagrams', 'Smooth morph transitions', 'Editable PPTX + print PDF'],
      fr: ['Masque de diapositives sur mesure', 'Graphiques & schémas clairs', 'Transitions fluides professionnelles', 'Fichier PPTX modifiable + PDF'],
      ar: ['تصميم شرائح مخصص ومتناسق', 'رسوم بيانية ومخططات توضيحية', 'حركات انتقال احترافية غير مشتتة', 'ملف PowerPoint مفتوح + نسخة PDF']
    },
    tags: ['PowerPoint', 'Infographics', 'Motion', 'Academic']
  },
  {
    id: 'academic-report',
    category: 'academic',
    icon: 'fa-solid fa-file-lines',
    badge: { en: 'Academic Publishing', fr: 'Édition Académique', ar: 'توثيق وتنسيق أكاديمي' },
    title: { en: 'Thesis & Research Formatting', fr: 'Mise en Page de Mémoire & Rapport', ar: 'إعداد وتنسيق المذكرات والبحوث العلمية' },
    summary: { en: 'Rigorous academic formatting with automated table of contents, citations, multilingual layout and print prep.', fr: 'Mise en forme académique rigoureuse avec sommaire automatique, citations et export prêt à imprimer.', ar: 'تنسيق أكاديمي دقيق يشمل الفهرسة الآلية، ضبط المراجع، التدقيق اللغوي وتجهيز النسخة النهائية للطباعة.' },
    deliverables: {
      en: ['Automated TOC & list of figures', 'Academic citation styling', 'Arabic / French / English layout', 'Print-ready PDF & Word source'],
      fr: ['Sommaire et tables automatiques', 'Normes de citation académiques', 'Mise en page Arabe / Français / Anglais', 'PDF prêt à imprimer & fichier Word'],
      ar: ['فهرس آلي للمحتويات والجداول والأشكال', 'ضبط وتنسيق المراجع العلمية', 'تنسيق احترافي بالعربية والفرنسية والإنجليزية', 'ملف Word قابل للتعديل + PDF للطباعة']
    },
    tags: ['MS Word', 'Research', 'Layout', 'PDF']
  },
  {
    id: 'career-portfolio',
    category: 'creative',
    icon: 'fa-solid fa-address-card',
    badge: { en: 'Career & Personal Brand', fr: 'Carrière & Branding', ar: 'ملف مهني وسيرة ذاتية' },
    title: { en: 'ATS-Ready CV & Digital Portfolio', fr: 'CV Moderne & Portfolio Professionnel', ar: 'سيرة ذاتية حديثة وبورتفوليو رقمي' },
    summary: { en: 'Bilingual executive resume and interactive portfolio designed to stand out to recruiters and academic boards.', fr: 'CV bilingue et portfolio interactif conçus pour capter l’attention des recruteurs et jurys.', ar: 'سيرة ذاتية ثنائية اللغة وبورتفوليو تفاعلي يبرز مهاراتك ومشاريعك أمام الشركات والجامعات.' },
    deliverables: {
      en: ['ATS-friendly modern CV layout', 'Tailored cover letter', 'Interactive web or PDF portfolio', 'Multilingual versions (AR/FR/EN)'],
      fr: ['Design de CV compatible ATS', 'Lettre de motivation adaptée', 'Portfolio web ou PDF interactif', 'Versions multilingues (AR/FR/EN)'],
      ar: ['تصميم سيرة ذاتية متوافق مع أنظمة التوظيف', 'رسالة تحفيزية مخصصة', 'بورتفوليو رقمي أو PDF تفاعلي', 'نسخ متعددة اللغات (عربي/فرنسي/إنجليزي)']
    },
    tags: ['CV Design', 'Personal Brand', 'PDF', 'Web']
  }
];

export const TESTIMONIALS_DATA: TestimonialItem[] = [
  {
    initials: 'YA',
    name: { en: 'Yacine A.', fr: 'Yacine A.', ar: 'ياسين ع.' },
    role: { en: 'E-Commerce Founder', fr: 'Fondateur E-Commerce', ar: 'صاحب متجر إلكتروني' },
    quote: {
      en: 'Hichem transformed our store idea into a super fast website with direct WhatsApp orders. Clean design and very responsive support.',
      fr: 'Hichem a transformé notre idée en un site ultra rapide avec commandes WhatsApp. Design propre et accompagnement très réactif.',
      ar: 'حوّل هشام فكرة متجرنا إلى موقع وتطبيق سريع جداً مع طلبات مباشرة عبر واتساب. تصميم راقٍ وتجاوب سريع في كل تفصيل.'
    }
  },
  {
    initials: 'SM',
    name: { en: 'Sara M.', fr: 'Sara M.', ar: 'سارة م.' },
    role: { en: 'Master’s Graduate', fr: 'Diplômée Master', ar: 'طالبة ماستر' },
    quote: {
      en: 'My thesis formatting and PowerPoint defense slides looked outstanding. The jury praised the clarity and visual organization.',
      fr: 'La mise en page de mon mémoire et ma présentation PowerPoint étaient impeccables. Le jury a félicité la clarté visuelle.',
      ar: 'تنسيق مذكرة التخرج وعرض البوربوينت كانا في قمة الاحترافية. أشادت اللجنة بوضوح العرض والترتيب البصري المميز.'
    }
  },
  {
    initials: 'KB',
    name: { en: 'Karim B.', fr: 'Karim B.', ar: 'كريم ب.' },
    role: { en: 'Startup Manager', fr: 'Gérant de Startup', ar: 'مدير مشروع ناشئ' },
    quote: {
      en: 'From our brand logo to our Android management app, everything was delivered on schedule with modern UI and smooth performance.',
      fr: 'Du logo à notre application Android de gestion, tout a été livré dans les délais avec une interface moderne et fluide.',
      ar: 'من تصميم الهوية البصرية إلى تطبيق الأندرويد الخاص بالإدارة، تم تسليم كل شيء في الموعد وبجودة تقنية وبصرية عالية.'
    }
  }
];

export const FAQ_DATA: FaqItem[] = [
  {
    q: {
      en: 'How do I install this application on my Android device?',
      fr: 'Comment installer cette application sur mon téléphone Android ?',
      ar: 'كيف أقوم بتثبيت هذا التطبيق على هاتفي الأندرويد؟'
    },
    a: {
      en: 'Simply tap the "Install on Android" button in the navigation bar or top banner. Chrome will show "Install app" — tap it, and the app icon will appear directly in your phone launcher and app drawer just like any Play Store app!',
      fr: 'Appuyez simplement sur le bouton "Installer sur Android" dans la barre de navigation ou la bannière. Chrome affichera "Installer l’application" — validez et l’application sera ajoutée à vos applications Android.',
      ar: 'ببساطة اضغط على زر "تثبيت التطبيق على Android" في الشريط العلوي أو القائمة. سيظهر لك إشعار المتصفح للتثبيت، اضغط "تثبيت" وسيظهر التطبيق فوراً في شاشة هاتفك وقائمة التطبيقات كأي تطبيق أندرويد حقيقي بدون متجر!'
    }
  },
  {
    q: {
      en: 'Does this app work offline and save phone data?',
      fr: 'L’application fonctionne-t-elle hors ligne et économise-t-elle les données ?',
      ar: 'هل يعمل التطبيق بدون إنترنت ويحافظ على باقة البيانات؟'
    },
    a: {
      en: 'Yes! The app is configured with high-performance Service Workers and precaching. It loads instantly and keeps working smoothly even when your internet connection is weak or disconnected.',
      fr: 'Oui ! Grâce au Service Worker et au préchargement PWA, l’application s’ouvre instantanément et reste fluide même avec une connexion internet faible ou coupée.',
      ar: 'نعم! التطبيق مزوّد بتقنية Service Worker وتخزين مسبق عالي الأداء، مما يتيح له الفتح الفوري والعمل بسلاسة حتى عند انقطاع الإنترنت أو ضعف الاتصال.'
    }
  },
  {
    q: {
      en: 'How do we start a new project together?',
      fr: 'Comment démarrer un projet ensemble ?',
      ar: 'كيف نبدأ العمل على مشروعي؟'
    },
    a: {
      en: 'Click any service or project card, or message me directly on WhatsApp with your idea and deadline. I will reply with a clear plan, timeline and price.',
      fr: 'Cliquez sur un service ou contactez-moi sur WhatsApp avec votre idée et votre délai. Je vous réponds avec un plan clair et un devis.',
      ar: 'اضغط على أي خدمة أو مشروع في التطبيق، أو راسلني مباشرة عبر واتساب بفكرتك والموعد المطلوب، وسأرد عليك بخطة عمل واضحة والتكلفة.'
    }
  },
  {
    q: {
      en: 'Which languages do you support for documents and websites?',
      fr: 'Quelles langues prenez-vous en charge ?',
      ar: 'ما هي اللغات المدعومة في المواقع والملفات الأكاديمية؟'
    },
    a: {
      en: 'I work fluently in Arabic, French and English — including full RTL/LTR support for websites, academic research, translations and presentations.',
      fr: 'Je travaille en Arabe, Français et Anglais avec support complet RTL/LTR pour vos sites web, mémoires, traductions et présentations.',
      ar: 'أعمل باللغات الثلاث: العربية، الفرنسية والإنجليزية، مع ضبط كامل لاتجاه النصوص والتنسيق في المواقع والبحوث والعروض التقديمية.'
    }
  },
  {
    q: {
      en: 'Are revisions included after delivery?',
      fr: 'Les révisions sont-elles incluses après livraison ?',
      ar: 'هل يمكن طلب تعديلات بعد استلام العمل؟'
    },
    a: {
      en: 'Yes! Every project includes revision rounds and post-delivery support to make sure the final files or website match your exact expectations.',
      fr: 'Oui, chaque projet inclut des révisions et un suivi après livraison pour garantir un résultat 100 % conforme à vos attentes.',
      ar: 'نعم بالتأكيد! جميع المشاريع تشمل مراجعات وتعديلات ودعماً بعد التسليم لضمان رضاك التام عن النتيجة النهائية.'
    }
  }
];

export const SKILLS_LIST = [
  ['fa-brands fa-html5', 'HTML5'],
  ['fa-brands fa-css3-alt', 'CSS3'],
  ['fa-brands fa-js', 'JavaScript'],
  ['fa-brands fa-react', 'React'],
  ['fa-solid fa-circle-nodes', 'Next.js'],
  ['fa-brands fa-android', 'Android'],
  ['fa-solid fa-fire', 'Firebase'],
  ['fa-solid fa-database', 'MySQL'],
  ['fa-solid fa-paintbrush', 'Photoshop'],
  ['fa-solid fa-vector-square', 'Illustrator'],
  ['fa-regular fa-file-powerpoint', 'PowerPoint'],
  ['fa-regular fa-file-word', 'Word'],
  ['fa-regular fa-file-excel', 'Excel'],
  ['fa-solid fa-robot', 'AI Tools']
] as const;

export const PROCESS_DATA = [
  ['fa-solid fa-comments', { en: 'Brief', fr: 'Brief', ar: 'الفكرة' }, { en: 'We define your goal, style, timeline and required deliverables.', fr: 'Nous définissons objectif, style, délai et livrables.', ar: 'نحدد الهدف والأسلوب والمدة والملفات المطلوبة.' }],
  ['fa-solid fa-sitemap', { en: 'Plan', fr: 'Plan', ar: 'الخطة' }, { en: 'I create a clear direction with structure, tools and next steps.', fr: 'Je crée une direction claire avec structure et outils.', ar: 'أضع خطة واضحة للبنية والأدوات والخطوات.' }],
  ['fa-solid fa-wand-magic-sparkles', { en: 'Create', fr: 'Créer', ar: 'التنفيذ' }, { en: 'The project is designed and built with a premium visual approach.', fr: 'Le projet est conçu avec une approche visuelle premium.', ar: 'يتم تصميم وتنفيذ المشروع بجودة بصرية عالية.' }],
  ['fa-solid fa-circle-check', { en: 'Deliver', fr: 'Livrer', ar: 'التسليم' }, { en: 'You receive polished files and support for final adjustments.', fr: 'Vous recevez les fichiers finalisés avec support.', ar: 'تستلم الملفات النهائية مع دعم للتعديلات.' }]
] as const;
