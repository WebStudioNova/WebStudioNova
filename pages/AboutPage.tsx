
import React from 'react';
import PageWrapper from '../components/PageWrapper';
import { Link } from 'react-router-dom';
import AnimateOnScroll from '../components/AnimateOnScroll';
import { useTranslation } from '../hooks/useTranslation';

const AboutPage: React.FC = () => {
  const { t } = useTranslation();
  return (
    <PageWrapper>
      <div className="max-w-5xl mx-auto">
        <AnimateOnScroll className="text-center">
          <p className="text-brand-red font-bold uppercase tracking-widest">{t('about_philosophy')}</p>
          <h1 className="text-5xl md:text-7xl font-display font-extrabold text-white mt-4">
            {t('about_title')}
          </h1>
        </AnimateOnScroll>

        <div className="mt-24 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <AnimateOnScroll>
                <img src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb" alt="Studio Nova creative process" className="rounded-lg object-cover w-full h-full max-h-[600px]"/>
            </AnimateOnScroll>
            <AnimateOnScroll className="text-lg text-gray-300 space-y-6">
                <h2 className="text-3xl font-display text-white font-bold">{t('about_subtitle')}</h2>
                <p>
                    {t('about_p1')}
                </p>
                 <p className="text-brand-light font-medium">
                    {t('about_p2')}
                </p>
            </AnimateOnScroll>
        </div>

        <AnimateOnScroll className="mt-32">
          <h2 className="text-4xl font-display font-bold text-white text-center mb-12">{t('about_principles_title')}</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-left">
            <Principle title={t('about_principle1_title')} description={t('about_principle1_desc')} />
            <Principle title={t('about_principle2_title')} description={t('about_principle2_desc')} />
            <Principle title={t('about_principle3_title')} description={t('about_principle3_desc')} />
          </div>
        </AnimateOnScroll>
        
        <AnimateOnScroll className="text-center mt-32 bg-brand-red rounded-lg p-12">
            <h2 className="text-4xl font-display font-bold text-brand-dark">{t('about_cta_title')}</h2>
            <p className="text-brand-dark/80 mt-4 max-w-2xl mx-auto">{t('about_cta_desc')}</p>
            <Link
                to="/contact"
                className="mt-8 inline-block bg-brand-dark text-white font-bold py-3 px-8 rounded-full hover:bg-black transition-all duration-300 transform hover:scale-105"
            >
                {t('start_project')}
            </Link>
        </AnimateOnScroll>
      </div>
    </PageWrapper>
  );
};

const Principle: React.FC<{ title: string; description: string }> = ({ title, description }) => (
    <div className="border-t-2 border-brand-red pt-4">
        <h3 className="text-2xl font-display font-semibold text-white mb-3">{title}</h3>
        <p className="text-gray-400">{description}</p>
    </div>
);

export default AboutPage;
