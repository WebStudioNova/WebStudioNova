
import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../constants/translations';
import type { TranslationKey } from '../constants/translations';

export const useTranslation = () => {  
  const { language } = useLanguage();

  const t = (key: string): string => {
    if (!key) return '';
    const typedKey = key as TranslationKey;
    return translations[typedKey]?.[language] || key;
  };

  return { t, language };
};
