import React, { useState } from 'react';
import { usePWAInstall } from '../hooks/usePWAInstall';
import { Language, I18N } from '../data/portfolioData';

interface PWAInstallButtonProps {
  currentLang: Language;
  variant?: 'nav' | 'hero' | 'floating';
}

export const PWAInstallButton: React.FC<PWAInstallButtonProps> = ({ currentLang, variant = 'nav' }) => {
  const { isInstallable, isInstalled, isIOS, isAndroid, install } = usePWAInstall();
  const [showGuide, setShowGuide] = useState(false);

  // If already running standalone on Android or desktop, hide the button
  if (isInstalled) {
    return null;
  }

  const t = (key: string) => I18N[currentLang]?.[key] || I18N.ar[key] || key;

  const handleClick = async () => {
    if (isInstallable) {
      await install();
    } else {
      setShowGuide(true);
    }
  };

  const getButtonContent = () => {
    if (variant === 'hero') {
      return (
        <button
          onClick={handleClick}
          type="button"
          className="btn btn-primary shadow-lg shadow-sky-500/25 hover:shadow-sky-500/40 hover:-translate-y-1 transition duration-200"
          title={t('install.bannerTitle')}
        >
          <i className="fa-brands fa-android text-lg" aria-hidden="true" />
          <span>{t('cta.install')}</span>
        </button>
      );
    }

    if (variant === 'floating') {
      return (
        <button
          onClick={handleClick}
          type="button"
          aria-label={t('install.button')}
          title={t('install.bannerTitle')}
          className="fixed bottom-24 right-6 z-40 flex items-center gap-2 rounded-full border border-sky-400/40 bg-slate-900/90 px-4 py-2.5 text-xs font-bold text-sky-300 shadow-2xl backdrop-blur-md hover:bg-slate-800 hover:text-white hover:scale-105 transition rtl:right-auto rtl:left-6"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
          </span>
          <i className="fa-brands fa-android text-base text-emerald-400" aria-hidden="true" />
          <span>{t('install.button')}</span>
        </button>
      );
    }

    // Default 'nav' variant
    return (
      <button
        onClick={handleClick}
        type="button"
        className="icon-btn pwa-nav-btn group relative"
        aria-label={t('install.button')}
        title={t('install.bannerTitle')}
      >
        <i className="fa-brands fa-android text-emerald-400 group-hover:scale-110 transition" aria-hidden="true" />
        <span className="absolute -top-1 -right-1 flex h-2.5 w-2.5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
          <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
        </span>
      </button>
    );
  };

  return (
    <>
      {getButtonContent()}

      {/* Install Guidance Modal for Android & iOS */}
      {showGuide && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/75 p-4 backdrop-blur-sm animate-fade-in"
          onClick={() => setShowGuide(false)}
        >
          <div
            className="w-full max-w-md rounded-3xl border border-slate-700 bg-slate-900 p-6 shadow-2xl text-slate-100 dark:bg-slate-950"
            onClick={(e) => e.stopPropagation()}
            dir={currentLang === 'ar' ? 'rtl' : 'ltr'}
          >
            <div className="flex items-center justify-between gap-4 border-b border-slate-800 pb-4">
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-tr from-emerald-500 to-sky-500 text-white shadow-lg">
                  <i className="fa-brands fa-android text-2xl" />
                </div>
                <div>
                  <h3 className="text-base font-extrabold text-white">{t('install.bannerTitle')}</h3>
                  <p className="text-xs text-slate-400">PWA · Android & Mobile Ready</p>
                </div>
              </div>
              <button
                type="button"
                onClick={() => setShowGuide(false)}
                className="flex h-8 w-8 items-center justify-center rounded-full bg-slate-800 text-slate-400 hover:text-white transition"
              >
                <i className="fa-solid fa-xmark" />
              </button>
            </div>

            <div className="my-5 space-y-3 text-sm text-slate-300">
              <div className="rounded-2xl border border-emerald-500/20 bg-emerald-500/10 p-3.5">
                <p className="font-semibold text-emerald-300">
                  {isIOS ? '📱 iOS / iPhone:' : '🤖 Android Phone & Tablet:'}
                </p>
                <p className="mt-1 whitespace-pre-line text-xs leading-relaxed text-slate-200">
                  {isIOS ? t('install.guideIOS') : t('install.guideAndroid')}
                </p>
              </div>

              <div className="space-y-1.5 text-xs text-slate-400">
                <div className="flex items-center gap-2">
                  <i className="fa-solid fa-check text-emerald-400" />
                  <span>تطبيق خفيف وسريع بدون الحاجة لتحميل من متجر التطبيقات</span>
                </div>
                <div className="flex items-center gap-2">
                  <i className="fa-solid fa-check text-emerald-400" />
                  <span>وصول مباشر بلمسة واحدة من شاشة هاتفك الرئيسية</span>
                </div>
                <div className="flex items-center gap-2">
                  <i className="fa-solid fa-check text-emerald-400" />
                  <span>يعمل بكفاءة عالية وبدون استهلاك للبيانات</span>
                </div>
              </div>
            </div>

            <div className="flex gap-2.5 pt-2">
              {isInstallable && (
                <button
                  type="button"
                  onClick={async () => {
                    await install();
                    setShowGuide(false);
                  }}
                  className="flex-1 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-500 py-3 text-xs font-bold text-white shadow-lg hover:brightness-110 transition"
                >
                  <i className="fa-brands fa-android ml-1" /> {t('install.bannerAction')}
                </button>
              )}
              <button
                type="button"
                onClick={() => setShowGuide(false)}
                className="flex-1 rounded-xl bg-slate-800 py-3 text-xs font-bold text-slate-300 hover:bg-slate-700 hover:text-white transition"
              >
                {t('install.bannerDismiss')}
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
