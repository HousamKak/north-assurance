import React from 'react';

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
  background?: 'light' | 'dark' | 'gradient' | 'transparent';
}

export const Section: React.FC<SectionProps> = ({
  children,
  className = '',
  id,
  background = 'transparent'
}) => {
  const backgrounds = {
    light: 'bg-light dark:bg-dark',
    dark: 'bg-gray-900 dark:bg-dark-darkest',
    gradient: 'bg-gradient-to-br from-primary/5 to-secondary/5 dark:from-primary/10 dark:to-secondary/10',
    transparent: 'bg-transparent',
  };

  return (
    <section
      id={id}
      className={`py-12 md:py-20 transition-theme ${backgrounds[background]} ${className}`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {children}
      </div>
    </section>
  );
};
