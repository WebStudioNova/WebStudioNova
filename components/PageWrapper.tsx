import React from 'react';

interface PageWrapperProps {
  children: React.ReactNode;
  className?: string;
}

const PageWrapper: React.FC<PageWrapperProps> = ({ children, className = '' }) => {
  return (
    <div
      className={`container mx-auto px-6 py-16 md:py-24 animate-fade-in ${className}`}
    >
      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          animation: fadeIn 0.8s ease-out forwards;
        }
        ::selection {
          background-color: #FF4136;
          color: #FFFFFF;
        }
      `}</style>
      {children}
    </div>
  );
};

export default PageWrapper;