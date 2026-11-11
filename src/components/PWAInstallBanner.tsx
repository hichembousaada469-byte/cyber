import React, { useState } from 'react';
import { usePWAInstall } from '../hooks/usePWAInstall';
import { Language, I18N } from '../data/portfolioData';

interface PWAInstallBannerProps {
  currentLang: Language;
}

export const PWAInstallBanner: React.FC<PWAInstallBannerProps> = ({ currentLang }) => {
  const { isInstalled, isInstallable, install } = usePWAInstall();
  const [dismissed, setDismissed] = useState(false);

  if (isInstalled || dismissed) {
    return null;
  }

  const t = (key: string) => I18N[currentLang]?.[key] || I18N.ar[key] || key;

  return (
    <aside
      aria-label="PWA installation banner"
      className="relative z-30 border-b border-sky-500/20 bg-gradient-to-r from-slate-900/95 via-sky-950/80 to-indigo-950/95 py-2.5 px-4 text-xs backdrop-blur-md transition"
    >
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-3">
        <div className="flex items-center gap-2.5">
          <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-emerald-500/20 text-emerald-400">
            <i className="fa-brands fa-android text-base" />
          </div>
          <span className="font-bold text-white">
            {t('install.bannerTitle')}:
          </span>
          <span className="hidden sm:inline text-slate-300">
            {t('install.bannerText')}
          </span>
        </div>

        <div className="flex items-center gap-2">
          {isInstallable && (
            <button
              onClick={install}
              type="button"
              className="inline-flex items-center gap-1.5 rounded-full bg-emerald-500 px-3.5 py-1 text-xs font-extrabold text-slate-950 shadow-md shadow-emerald-500/20 hover:bg-emerald-400 transition"
            >
              <i className="fa-brands fa-android" />
              <span>{t('install.bannerAction')}</span>
            </button>
          )}
          <button
            onClick={() => setDismissed(true)}
            type="button"
            className="rounded-full p-1 text-slate-400 hover:text-white transition"
            aria-label={t('install.bannerDismiss')}
          >
            <i className="fa-solid fa-xmark" />
          </button>
        </div>
      </div>
    </aside>
  );
};
