import React, { useState } from 'react';
import PageWrapper from '../components/PageWrapper';
import { CONTACT_INFO, SOCIAL_LINKS } from '../constants/content';
import AnimateOnScroll from '../components/AnimateOnScroll';
import { useTranslation } from '../hooks/useTranslation';

export default function ContactPage() {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.name && formData.email && formData.message) {
      setStatus(t('contact_form_success'));
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setStatus(''), 5000);
    } else {
      setStatus(t('contact_form_error'));
    }
  };

  return (
    <PageWrapper>
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
        <AnimateOnScroll className="lg:pt-8 mb-12 lg:mb-0">
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-display font-extrabold text-white leading-tight">
            {t('contact_title')}
          </h1>
          <p className="text-base sm:text-lg text-gray-300 mt-6 max-w-lg">
            {t('contact_desc')}
          </p>
          <div className="mt-12 space-y-6 text-base sm:text-lg">
            <div>
              <h3 className="text-gray-500 uppercase tracking-widest font-bold text-sm">{t('contact_email_us')}</h3>
              <a href={`mailto:${CONTACT_INFO.email}`} className="text-brand-light hover:text-brand-red transition-colors text-2xl font-medium">
                {CONTACT_INFO.email}
              </a>
            </div>
            <div>
  <h3 className="text-gray-500 uppercase tracking-widest font-bold text-sm">{t('contact_call_us')}</h3>
  <a href={`tel:${CONTACT_INFO.phone}`} className="text-brand-light hover:text-brand-red transition-colors text-2xl font-medium">
    {CONTACT_INFO.phone}
  </a>
</div>
            <div>
              <h3 className="text-gray-500 uppercase tracking-widest font-bold text-sm">{t('contact_follow_us')}</h3>
              <div className="flex space-x-6 mt-2">
                <a href={SOCIAL_LINKS.facebook} target="_blank" rel="noopener noreferrer" className="text-brand-light hover:text-brand-red transition-colors text-xl font-medium">Facebook</a>
                <a href={SOCIAL_LINKS.instagram} target="_blank" rel="noopener noreferrer" className="text-brand-light hover:text-brand-red transition-colors text-xl font-medium">Instagram</a>
                <a href={SOCIAL_LINKS.linkedin} target="_blank" rel="noopener noreferrer" className="text-brand-light hover:text-brand-red transition-colors text-xl font-medium">LinkedIn</a>
              </div>
            </div>
          </div>
        </AnimateOnScroll>

        <AnimateOnScroll delay={100} className="bg-gray-900 border border-gray-800 rounded-2xl p-8 lg:p-12">
          <h2 className="text-3xl font-display font-bold text-white mb-6">{t('contact_form_title')}</h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-400 mb-2">{t('contact_form_name')}</label>
              <input type="text" name="name" id="name" value={formData.name} onChange={handleChange} className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-brand-red transition-all" />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-2">{t('contact_form_email')}</label>
              <input type="email" name="email" id="email" value={formData.email} onChange={handleChange} className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-brand-red transition-all" />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-400 mb-2">{t('contact_form_message')}</label>
              <textarea name="message" id="message" rows={5} value={formData.message} onChange={handleChange} className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-brand-red transition-all" placeholder={t('contact_form_placeholder')} />
            </div>
            <div>
              <button type="submit" className="w-full bg-brand-red text-white font-bold py-3 px-8 rounded-full hover:bg-white hover:text-brand-dark transition-all duration-300 transform hover:scale-105">
                {t('contact_form_submit')}
              </button>
            </div>
            {status && (
              <p className={`text-center mt-4 ${status.includes('Thank') || status.includes('Hvala') ? 'text-green-400' : 'text-red-400'}`}>
                {status}
              </p>
            )}
          </form>
        </AnimateOnScroll>
      </div>
    </PageWrapper>
  );
}
