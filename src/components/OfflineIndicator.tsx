import React from 'react';
import { useOnlineStatus } from '../hooks/useOnlineStatus';
import { Language, I18N } from '../data/portfolioData';

interface OfflineIndicatorProps {
  currentLang: Language;
}

export const OfflineIndicator: React.FC<OfflineIndicatorProps> = ({ currentLang }) => {
  const isOnline = useOnlineStatus();

  if (isOnline) return null;

  const t = (key: string) => I18N[currentLang]?.[key] || I18N.ar[key] || key;

  return (
    <div
      role="status"
      aria-live="polite"
      className="fixed bottom-4 left-4 z-50 flex items-center gap-2 rounded-2xl border border-amber-500/40 bg-slate-900/95 px-4 py-2.5 text-xs font-bold text-amber-300 shadow-2xl backdrop-blur-md rtl:left-auto rtl:right-4 animate-bounce"
    >
      <span className="relative flex h-2.5 w-2.5">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75" />
        <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-amber-500" />
      </span>
      <span>{t('offline.message')}</span>
    </div>
  );
};
