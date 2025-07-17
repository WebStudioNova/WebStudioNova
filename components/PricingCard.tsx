
import React from 'react';
import type { PricingTier } from '../types';
import { Link } from 'react-router-dom';
import { useTranslation } from '../hooks/useTranslation';

interface PricingCardProps {
  tier: PricingTier;
}

const CheckIcon = () => (
    <svg className="w-5 h-5 text-brand-red" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path></svg>
);

const PricingCard: React.FC<PricingCardProps> = ({ tier }) => {
  const { t } = useTranslation();
  return (
    <div className={`border rounded-xl p-8 flex flex-col h-full transition-all duration-300 ${tier.isFeatured ? 'bg-gray-800/50 border-brand-red' : 'bg-gray-900 border-gray-800 hover:border-gray-700'}`}>
       <div className="flex-grow">
        <h3 className="text-2xl font-display font-bold text-white">{t(tier.name)}</h3>
        <p className="text-gray-400 mt-2 mb-6">{t(tier.description)}</p>
        <div className="my-8">
            <span className="text-5xl font-display font-extrabold text-white">{tier.price}</span>
            <span className="text-lg text-gray-400 ml-1">{tier.currency}</span>
        </div>
        <ul className="space-y-4 mb-8">
            {tier.features.map((feature, index) => (
            <li key={index} className="flex items-center">
                <CheckIcon />
                <span className="ml-3 text-gray-300">{t(feature)}</span>
            </li>
            ))}
        </ul>
       </div>
      <Link
        to="/contact"
        className={`w-full mt-4 text-center block font-bold py-3 px-6 rounded-full transition-all duration-300 ${tier.isFeatured ? 'bg-brand-red text-white hover:bg-white hover:text-brand-dark' : 'bg-gray-800 text-brand-light hover:bg-brand-red hover:text-white'}`}
      >
        {t(tier.ctaText)}
      </Link>
    </div>
  );
};

export default PricingCard;
