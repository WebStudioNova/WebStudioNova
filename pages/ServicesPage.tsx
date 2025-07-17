
import React from 'react';
import PageWrapper from '../components/PageWrapper';
import { SERVICES } from '../constants/content';
import AnimateOnScroll from '../components/AnimateOnScroll';
import { useTranslation } from '../hooks/useTranslation';

const ServicesPage: React.FC = () => {
  const { t } = useTranslation();
  return (
    <PageWrapper>
      <AnimateOnScroll className="text-center mb-20">
        <h1 className="text-5xl md:text-7xl font-display font-extrabold text-white">{t('services_page_title')}</h1>
        <p className="text-lg text-gray-300 max-w-3xl mx-auto mt-4">
         {t('services_page_desc')}
        </p>
      </AnimateOnScroll>
      <div className="max-w-4xl mx-auto space-y-16">
        {SERVICES.map((service, index) => (
          <AnimateOnScroll key={service.title} delay={index * 100}>
            <ServiceItem
              Icon={service.icon}
              title={t(service.title)}
              description={t(service.description)}
            />
          </AnimateOnScroll>
        ))}
      </div>
    </PageWrapper>
  );
};

const ServiceItem: React.FC<{
    Icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
    title: string;
    description: string;
}> = ({ Icon, title, description }) => (
    <div className="flex flex-col md:flex-row items-start gap-8">
        <div className="bg-gray-900 border border-brand-red/30 p-4 rounded-lg">
            <Icon className="w-10 h-10 text-brand-red" />
        </div>
        <div className="flex-1">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-white">{title}</h2>
            <p className="text-gray-300 mt-4 text-lg leading-relaxed">
                {description}
            </p>
        </div>
    </div>
);

export default ServicesPage;
