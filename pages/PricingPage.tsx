
import React from 'react';
import PageWrapper from '../components/PageWrapper';
import PricingCard from '../components/PricingCard';
import { PRICING_TIERS } from '../constants/content';
import AnimateOnScroll from '../components/AnimateOnScroll';
import { useTranslation } from '../hooks/useTranslation';

const PricingPage: React.FC = () => {
  const { t } = useTranslation();
  return (
    <PageWrapper>
      <AnimateOnScroll className="text-center mb-16">
        <h1 className="text-5xl md:text-7xl font-display font-extrabold text-white">{t('pricing_title')}</h1>
        <p className="text-lg text-gray-300 max-w-3xl mx-auto mt-4">
          {t('pricing_desc')}
        </p>
      </AnimateOnScroll>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch max-w-6xl mx-auto">
        {PRICING_TIERS.map((tier, index) => (
          <AnimateOnScroll key={tier.name} delay={index * 100}>
            <PricingCard tier={tier} />
          </AnimateOnScroll>
        ))}
      </div>

      <AnimateOnScroll className="mt-24 max-w-4xl mx-auto">
        <h2 className="text-4xl font-display font-bold text-white text-center mb-12">{t('pricing_faq_title')}</h2>
        <div className="space-y-8">
          <FAQItem
            question={t('pricing_faq1_q')}
            answer={t('pricing_faq1_a')}
          />
          <FAQItem
            question={t('pricing_faq2_q')}
            answer={t('pricing_faq2_a')}
          />
          <FAQItem
            question={t('pricing_faq3_q')}
            answer={t('pricing_faq3_a')}
          />
        </div>
      </AnimateOnScroll>
    </PageWrapper>
  );
};

const FAQItem: React.FC<{ question: string; answer: string }> = ({ question, answer }) => (
  <div className="border-t border-gray-800 pt-6">
    <h3 className="font-bold font-display text-2xl text-white mb-2">{question}</h3>
    <p className="text-gray-400 text-lg">{answer}</p>
  </div>
);

export default PricingPage;
