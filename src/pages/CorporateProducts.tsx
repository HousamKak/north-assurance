import React from 'react';
import { Link } from 'react-router-dom';
import { Section } from '@/components/common/Section';
import { AnimatedSection } from '@/components/common/AnimatedSection';
import { PageHeader } from '@/components/common/PageHeader';
import { SEO } from '@/components/common/SEO';
import { ProductGrid } from '@/components/products/ProductGrid';
import { corporateProducts } from '@/data/products';
import { ROUTES } from '@/utils/constants';

export const CorporateProducts: React.FC = () => {
  return (
    <div>
      <SEO
        title="Corporate Insurance Solutions"
        description="Protect your business with comprehensive corporate insurance. Group medical, group life, professional indemnity, property, cyber, and D&O insurance."
      />

      <PageHeader
        title="Corporate Insurance"
        subtitle="Protect your business with comprehensive insurance coverage"
      />

      <Section background="light">
        <ProductGrid products={corporateProducts} />
      </Section>

      {/* Benefits */}
      <Section className="bg-white dark:bg-dark-darkest">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { icon: 'M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z', title: 'Tailored Solutions', desc: 'Customized insurance packages designed for your business needs' },
            { icon: 'M13 10V3L4 14h7v7l9-11h-7z', title: 'Fast Claims', desc: 'Quick and efficient claims processing to minimize business disruption' },
            { icon: 'M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z', title: 'Dedicated Support', desc: 'Account managers dedicated to your business insurance needs' },
          ].map((item, index) => (
            <AnimatedSection key={item.title} animation="slide-up" delay={index * 0.1}>
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 dark:bg-primary/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={item.icon} />
                  </svg>
                </div>
                <h3 className="text-xl font-heading font-bold text-gray-900 dark:text-white mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400">{item.desc}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </Section>

      {/* CTA */}
      <Section className="bg-gradient-to-br from-primary via-primary-dark to-dark text-white relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-1/4 -right-1/4 w-[400px] h-[400px] rounded-full bg-white/5 blur-3xl" />
        </div>
        <AnimatedSection animation="scale">
          <div className="relative text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
              Request a Corporate Quote
            </h2>
            <p className="text-lg text-white/80 mb-8">
              Get a customized insurance solution for your business today
            </p>
            <Link
              to={ROUTES.CONTACT}
              className="inline-block px-8 py-4 bg-white text-primary rounded-xl font-semibold hover:bg-gray-50 transition-all duration-300 text-lg shadow-lg"
            >
              Contact Our Business Team
            </Link>
          </div>
        </AnimatedSection>
      </Section>
    </div>
  );
};
