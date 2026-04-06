import React from 'react';
import { Link } from 'react-router-dom';
import { Section } from '@/components/common/Section';
import { AnimatedSection } from '@/components/common/AnimatedSection';
import { SEO } from '@/components/common/SEO';
import { COMPANY_INFO, ROUTES } from '@/utils/constants';
import { FaChevronRight } from 'react-icons/fa';

export const Terms: React.FC = () => {
  return (
    <div>
      <SEO
        title="Terms & Conditions"
        description="North Assurance terms and conditions of service."
      />

      {/* Page Header */}
      <Section className="bg-gradient-to-br from-primary via-primary-dark to-dark text-white py-20">
        <AnimatedSection animation="fade">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-heading font-bold mb-4">Terms & Conditions</h1>
            <div className="flex items-center justify-center space-x-2 text-white/70 text-sm">
              <Link to={ROUTES.HOME} className="hover:text-white transition-colors">Home</Link>
              <FaChevronRight className="w-3 h-3" />
              <span className="text-white">Terms & Conditions</span>
            </div>
          </div>
        </AnimatedSection>
      </Section>

      <Section background="light">
        <div className="max-w-3xl mx-auto">
          <div className="space-y-8 text-gray-700 dark:text-gray-300">
            <div>
              <h2 className="text-2xl font-heading font-bold text-gray-900 dark:text-white mb-4">Acceptance of Terms</h2>
              <p className="leading-relaxed">By accessing and using the North Assurance website and services, you agree to be bound by these terms and conditions. If you do not agree, please do not use our services.</p>
            </div>

            <div>
              <h2 className="text-2xl font-heading font-bold text-gray-900 dark:text-white mb-4">Insurance Services</h2>
              <p className="leading-relaxed">All insurance products and services are subject to the specific terms, conditions, and exclusions outlined in the respective policy documents. The information on this website is for general guidance only and does not constitute a contract of insurance.</p>
            </div>

            <div>
              <h2 className="text-2xl font-heading font-bold text-gray-900 dark:text-white mb-4">Quotes and Pricing</h2>
              <p className="leading-relaxed">Quotes provided through this website are indicative and subject to underwriting approval. Final premiums may vary based on individual assessment and risk evaluation.</p>
            </div>

            <div>
              <h2 className="text-2xl font-heading font-bold text-gray-900 dark:text-white mb-4">Intellectual Property</h2>
              <p className="leading-relaxed">All content on this website, including text, graphics, logos, and software, is the property of {COMPANY_INFO.name} and is protected by applicable intellectual property laws.</p>
            </div>

            <div>
              <h2 className="text-2xl font-heading font-bold text-gray-900 dark:text-white mb-4">Limitation of Liability</h2>
              <p className="leading-relaxed">{COMPANY_INFO.name} shall not be liable for any indirect, incidental, or consequential damages arising from the use of this website or our services beyond what is covered under the applicable insurance policy.</p>
            </div>

            <div>
              <h2 className="text-2xl font-heading font-bold text-gray-900 dark:text-white mb-4">Governing Law</h2>
              <p className="leading-relaxed">These terms are governed by and construed in accordance with the laws of the Republic of Lebanon. Any disputes shall be subject to the exclusive jurisdiction of the courts of Beirut.</p>
            </div>

            <p className="text-sm text-gray-500 dark:text-gray-500 pt-4 border-t border-gray-200 dark:border-gray-700">
              Last updated: January 2026
            </p>
          </div>
        </div>
      </Section>
    </div>
  );
};
