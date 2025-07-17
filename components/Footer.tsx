
import React from 'react';
import { Link } from 'react-router-dom';
import { SOCIAL_LINKS, CONTACT_INFO, NAV_LINKS } from '../constants/content';
import { useTranslation } from '../hooks/useTranslation';

const Footer: React.FC = () => {
  const { t } = useTranslation();
  return (
    <footer className="bg-transparent mt-24">
      <div className="container mx-auto px-6 py-12 border-t border-gray-800">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
          <div>
            <h3 className="text-3xl font-display font-bold text-white mb-4">Studio Nova</h3>
            <p className="text-gray-400">{t('footer_tagline1')}<br/>{t('footer_tagline2')}</p>
          </div>
          <div className="md:mx-auto">
            <h4 className="text-lg font-bold text-white mb-4 uppercase tracking-wider">{t('footer_navigate')}</h4>
            <ul className="space-y-2">
              {NAV_LINKS.map(link => (
                  <li key={link.nameKey}><Link to={link.path} className="text-gray-400 hover:text-brand-red transition-colors">{t(link.nameKey)}</Link></li>
              ))}
            </ul>
          </div>
          <div className="md:text-right">
            <h4 className="text-lg font-bold text-white mb-4 uppercase tracking-wider">{t('footer_connect')}</h4>
            <ul className="space-y-2">
                <li><a href={`mailto:${CONTACT_INFO.email}`} className="text-gray-400 hover:text-brand-red transition-colors">{CONTACT_INFO.email}</a></li>
                <li><a href={`tel:${CONTACT_INFO.phone}`} className="text-gray-400 hover:text-brand-red transition-colors">{CONTACT_INFO.phone}</a></li>
                 <li className="flex gap-4 justify-center md:justify-end mt-2">
                    <a href={SOCIAL_LINKS.facebook} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-brand-red transition-colors">FB</a>
                    <a href={SOCIAL_LINKS.instagram} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-brand-red transition-colors">IG</a>
                    <a href={SOCIAL_LINKS.linkedin} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-brand-red transition-colors">LN</a>
                 </li>
            </ul>
          </div>
        </div>
        <div className="mt-12 border-t border-gray-800 pt-8 text-center text-gray-500">
          <p>&copy; {new Date().getFullYear()} {t('footer_copyright')}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
