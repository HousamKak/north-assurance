import React from 'react';
import { Section } from '@/components/common/Section';
import { AnimatedSection } from '@/components/common/AnimatedSection';
import { PageHeader } from '@/components/common/PageHeader';
import { SEO } from '@/components/common/SEO';
import { ContactForm } from '@/components/contact/ContactForm';
import { ContactInfo } from '@/components/contact/ContactInfo';
import { LocationMap } from '@/components/contact/LocationMap';

export const Contact: React.FC = () => {
  return (
    <div>
      <SEO
        title="Contact Us"
        description="Get in touch with North Assurance. Contact us for insurance quotes, claims support, or general inquiries."
      />

      <PageHeader title="Contact Us" subtitle="Get in touch with our team - we're here to help" />

      {/* Contact Form & Info */}
      <Section background="light">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <AnimatedSection animation="slide-up">
              <ContactForm />
            </AnimatedSection>
          </div>
          <div>
            <AnimatedSection animation="slide-up" delay={0.1}>
              <ContactInfo />
            </AnimatedSection>
          </div>
        </div>
      </Section>

      {/* Location Maps */}
      <Section className="bg-white dark:bg-dark-darkest">
        <AnimatedSection animation="fade">
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">Locations</span>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900 dark:text-white mb-4">
              Visit Our Locations
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Find us at our main office or motor repair facility
            </p>
          </div>
        </AnimatedSection>
        <AnimatedSection animation="slide-up" delay={0.2}>
          <LocationMap />
        </AnimatedSection>
      </Section>

      {/* Emergency Contact */}
      <Section className="bg-gradient-to-br from-primary via-primary-dark to-dark text-white relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-1/4 -right-1/4 w-[400px] h-[400px] rounded-full bg-white/5 blur-3xl" />
        </div>
        <AnimatedSection animation="scale">
          <div className="relative text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
              Need Immediate Assistance?
            </h2>
            <p className="text-lg text-white/80 mb-8">
              Our 24/7 emergency hotline is always available for urgent claims and support
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+9611511995"
                className="px-8 py-4 bg-white text-primary rounded-xl font-semibold hover:bg-gray-50 transition-all duration-300 text-lg shadow-lg"
              >
                Call Emergency Line
              </a>
              <a
                href="mailto:info@northassurance.com"
                className="px-8 py-4 border-2 border-white/30 text-white rounded-xl font-semibold hover:bg-white/10 hover:border-white/50 transition-all duration-300 text-lg"
              >
                Email Support
              </a>
            </div>
          </div>
        </AnimatedSection>
      </Section>
    </div>
  );
};
