import React from 'react';
import { Link } from 'react-router-dom';
import { Section } from '@/components/common/Section';
import { AnimatedSection } from '@/components/common/AnimatedSection';
import { SEO } from '@/components/common/SEO';
import { COMPANY_INFO, ROUTES } from '@/utils/constants';
import { FaChevronRight } from 'react-icons/fa';

export const PrivacyPolicy: React.FC = () => {
  return (
    <div>
      <SEO
        title="Privacy Policy"
        description="North Assurance privacy policy. Learn how we collect, use, and protect your personal information."
      />

      {/* Page Header */}
      <Section className="bg-gradient-to-br from-primary via-primary-dark to-dark text-white py-20">
        <AnimatedSection animation="fade">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-heading font-bold mb-4">Privacy Policy</h1>
            <div className="flex items-center justify-center space-x-2 text-white/70 text-sm">
              <Link to={ROUTES.HOME} className="hover:text-white transition-colors">Home</Link>
              <FaChevronRight className="w-3 h-3" />
              <span className="text-white">Privacy Policy</span>
            </div>
          </div>
        </AnimatedSection>
      </Section>

      <Section background="light">
        <div className="max-w-3xl mx-auto prose dark:prose-invert">
          <div className="space-y-8 text-gray-700 dark:text-gray-300">
            <div>
              <h2 className="text-2xl font-heading font-bold text-gray-900 dark:text-white mb-4">Information We Collect</h2>
              <p className="leading-relaxed">We collect personal information you provide when requesting quotes, filing claims, or contacting us. This includes your name, email, phone number, address, and insurance-related details necessary to provide our services.</p>
            </div>

            <div>
              <h2 className="text-2xl font-heading font-bold text-gray-900 dark:text-white mb-4">How We Use Your Information</h2>
              <ul className="space-y-2 list-disc list-inside">
                <li>Processing insurance applications and claims</li>
                <li>Providing customer support and communication</li>
                <li>Sending relevant policy updates and renewal notices</li>
                <li>Complying with legal and regulatory obligations</li>
                <li>Improving our services and website experience</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-heading font-bold text-gray-900 dark:text-white mb-4">Data Protection</h2>
              <p className="leading-relaxed">We implement appropriate security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. Your data is stored securely and accessed only by authorized personnel.</p>
            </div>

            <div>
              <h2 className="text-2xl font-heading font-bold text-gray-900 dark:text-white mb-4">Third-Party Sharing</h2>
              <p className="leading-relaxed">We may share your information with reinsurance partners, regulatory authorities, and service providers necessary to fulfill our insurance obligations. We do not sell your personal information to third parties.</p>
            </div>

            <div>
              <h2 className="text-2xl font-heading font-bold text-gray-900 dark:text-white mb-4">Your Rights</h2>
              <p className="leading-relaxed">You have the right to access, correct, or request deletion of your personal data. To exercise these rights, contact us at <a href={`mailto:${COMPANY_INFO.email}`} className="text-primary hover:underline">{COMPANY_INFO.email}</a>.</p>
            </div>

            <div>
              <h2 className="text-2xl font-heading font-bold text-gray-900 dark:text-white mb-4">Contact Us</h2>
              <p className="leading-relaxed">For privacy-related inquiries, contact us at {COMPANY_INFO.email} or call {COMPANY_INFO.phone}.</p>
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
