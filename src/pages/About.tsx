import React from 'react';
import { Section } from '@/components/common/Section';
import { AnimatedSection } from '@/components/common/AnimatedSection';
import { PageHeader } from '@/components/common/PageHeader';
import { SEO } from '@/components/common/SEO';
import { Timeline } from '@/components/about/Timeline';
import { TeamGrid } from '@/components/about/TeamGrid';
import { CompanyStats } from '@/components/about/CompanyStats';
import { COMPANY_INFO } from '@/utils/constants';

export const About: React.FC = () => {
  return (
    <div>
      <SEO
        title="About Us"
        description={`North Assurance s.a.l. - Lebanon's trusted insurance provider since 1973. ${COMPANY_INFO.yearsOfExperience}+ years of professional insurance services.`}
      />

      <PageHeader
        title="About Us"
        subtitle="Building trust through excellence since 1973"
        backgroundImage="/images/headers/about.jpg"
      />

      {/* Company Overview */}
      <Section background="light">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <AnimatedSection animation="slide-right">
            <div className="relative">
              <div className="rounded-2xl shadow-2xl w-full h-[500px] overflow-hidden">
                <img
                  src="/images/hero/company-overview.jpg"
                  alt="North Assurance office and client service"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-gradient-to-br from-primary to-primary-dark text-white rounded-2xl p-6 shadow-2xl">
                <div className="text-center">
                  <div className="text-5xl font-heading font-bold">
                    {COMPANY_INFO.yearsOfExperience}+
                  </div>
                  <div className="text-sm font-semibold mt-1">Years</div>
                  <div className="text-xs opacity-90">Experience</div>
                </div>
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection animation="slide-left">
            <div>
              <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">Who We Are</span>
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900 dark:text-white mb-6">
                We're Here To Assist You With Exploring Protection
              </h2>
              <div className="space-y-4 text-gray-600 dark:text-gray-400 leading-relaxed">
                <p>
                  North Assurance was licensed in November 1973 by presidential decree as a
                  Lebanese joint stock company to perform all classes of insurance business
                  in life, non-life, and reinsurance.
                </p>
                <p>
                  Our company's name was built from a combination of ethics, professionalism,
                  and client needs strategy. It has been strengthened and developed over the
                  years with top insurance expertise in the local market and exposure to
                  European innovations in insurance and reinsurance.
                </p>
                <p>
                  We believe in providing professional continuous service extended to all
                  clients. Our main concern is to provide a personal and human touch to each
                  and every client at all times.
                </p>
              </div>

              <div className="mt-8 grid grid-cols-2 gap-4">
                {[
                  { title: 'Ethics First', desc: 'Built on integrity' },
                  { title: 'Innovation', desc: 'Tailor-made products' },
                ].map((item) => (
                  <div key={item.title} className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-primary/10 dark:bg-primary/20 rounded-xl flex items-center justify-center flex-shrink-0">
                      <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 dark:text-white">{item.title}</h4>
                      <p className="text-sm text-gray-600 dark:text-gray-400">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </AnimatedSection>
        </div>
      </Section>

      <CompanyStats />

      {/* Timeline */}
      <Section background="light">
        <AnimatedSection animation="fade">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">Our History</span>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900 dark:text-white mb-4">
              Our Journey Through Time
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              {COMPANY_INFO.yearsOfExperience}+ years of excellence, innovation, and dedication
            </p>
          </div>
        </AnimatedSection>
        <Timeline />
      </Section>

      {/* Team */}
      <Section className="bg-white dark:bg-dark-darkest">
        <AnimatedSection animation="fade">
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">Our Team</span>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900 dark:text-white mb-4">
              Meet Our Professional Team
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Experienced professionals dedicated to providing the best insurance solutions
            </p>
          </div>
        </AnimatedSection>
        <TeamGrid />
      </Section>
    </div>
  );
};
