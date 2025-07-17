
import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const LanguageSwitcher: React.FC<{ className?: string }> = ({ className }) => {
  const { language, setLanguage } = useLanguage();
  const isEnglish = language === 'en';

  return (
    <div className={`relative flex w-20 h-9 cursor-pointer items-center rounded-full bg-gray-900 border border-gray-700 ${className}`}>
      {/* Sliding Thumb */}
      <div
        className="absolute h-full w-1/2 rounded-full bg-brand-red transition-transform duration-300 ease-in-out"
        style={{ transform: isEnglish ? 'translateX(0)' : 'translateX(100%)' }}
      />
      
      {/* Buttons */}
      <button
        type="button"
        onClick={() => setLanguage('en')}
        aria-pressed={isEnglish}
        className={`relative z-10 w-1/2 h-full text-center text-sm font-bold uppercase transition-colors duration-300 flex items-center justify-center ${
          isEnglish ? 'text-white' : 'text-gray-400 hover:text-white'
        }`}
        aria-label="Switch to English"
      >
        EN
      </button>
      <button
        type="button"
        onClick={() => setLanguage('ba')}
        aria-pressed={!isEnglish}
        className={`relative z-10 w-1/2 h-full text-center text-sm font-bold uppercase transition-colors duration-300 flex items-center justify-center ${
          !isEnglish ? 'text-white' : 'text-gray-400 hover:text-white'
        }`}
        aria-label="Switch to Bosnian"
      >
        BA
      </button>
    </div>
  );
};
export default LanguageSwitcher;
