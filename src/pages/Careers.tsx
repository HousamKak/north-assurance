import React from 'react';
import { Section } from '@/components/common/Section';
import { AnimatedSection } from '@/components/common/AnimatedSection';
import { PageHeader } from '@/components/common/PageHeader';
import { SEO } from '@/components/common/SEO';
import { Card } from '@/components/common/Card';
import { JobApplicationForm } from '@/components/careers/JobApplicationForm';
import { FaUsers, FaHandshake, FaGraduationCap, FaHeart } from 'react-icons/fa';

const benefits = [
  { icon: FaUsers, title: 'Team Environment', description: 'Work with passionate professionals in a collaborative atmosphere' },
  { icon: FaGraduationCap, title: 'Growth Opportunities', description: 'Continuous learning and career development programs' },
  { icon: FaHandshake, title: 'Competitive Benefits', description: 'Comprehensive compensation and benefits package' },
  { icon: FaHeart, title: 'Work-Life Balance', description: 'Flexible schedules and supportive company culture' },
];

const companyValues = [
  { title: 'Trust & Integrity', description: 'Building lasting relationships through honest and transparent service' },
  { title: 'Innovation', description: 'Embracing new technologies to better serve our clients' },
  { title: 'Excellence', description: 'Striving for the highest standards in everything we do' },
  { title: 'Community', description: '50+ years of serving Lebanon with dedication and pride' },
];

export const Careers: React.FC = () => {
  return (
    <div>
      <SEO
        title="Careers"
        description="Join North Assurance - Lebanon's trusted insurance leader. Explore career opportunities and apply today."
      />

      <PageHeader
        title="Join Our Team"
        subtitle="Build your career with Lebanon's trusted insurance leader"
        backgroundImage="/images/headers/careers.jpg"
      />

      {/* Benefits */}
      <Section background="light">
        <AnimatedSection animation="fade">
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">Why Join Us</span>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900 dark:text-white mb-4">
              Why Join North Assurance?
            </h2>
          </div>
        </AnimatedSection>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((benefit, index) => (
            <AnimatedSection key={benefit.title} animation="slide-up" delay={index * 0.1}>
              <Card hover className="p-6 text-center h-full">
                <div className="w-16 h-16 bg-gradient-to-br from-primary to-primary-dark rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <benefit.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-heading font-bold text-gray-900 dark:text-white mb-2">{benefit.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm">{benefit.description}</p>
              </Card>
            </AnimatedSection>
          ))}
        </div>
      </Section>

      {/* Values */}
      <Section className="bg-white dark:bg-dark-darkest">
        <AnimatedSection animation="fade">
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">Our Culture</span>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900 dark:text-white mb-4">Our Core Values</h2>
          </div>
        </AnimatedSection>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {companyValues.map((value, index) => (
            <AnimatedSection key={value.title} animation="slide-up" delay={index * 0.1}>
              <Card className="p-6">
                <h3 className="text-xl font-heading font-bold text-gray-900 dark:text-white mb-2">{value.title}</h3>
                <p className="text-gray-600 dark:text-gray-400">{value.description}</p>
              </Card>
            </AnimatedSection>
          ))}
        </div>
      </Section>

      {/* Openings */}
      <Section background="gradient">
        <AnimatedSection animation="fade">
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">Openings</span>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900 dark:text-white mb-4">Current Openings</h2>
          </div>
        </AnimatedSection>
        <AnimatedSection animation="scale">
          <Card className="p-8 text-center max-w-2xl mx-auto">
            <div className="w-20 h-20 bg-primary/10 dark:bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-6">
              <FaUsers className="w-10 h-10 text-primary" />
            </div>
            <h3 className="text-2xl font-heading font-bold text-gray-900 dark:text-white mb-4">Always Looking for Talent</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              We're always interested in meeting talented individuals who share our values. Submit your application below.
            </p>
            <div className="flex flex-wrap gap-2 justify-center">
              {['Insurance Agents', 'Claims Adjusters', 'Customer Service', 'IT Specialists', 'Marketing'].map((role) => (
                <span key={role} className="px-4 py-2 bg-primary/10 dark:bg-primary/20 text-primary rounded-full text-sm font-medium">
                  {role}
                </span>
              ))}
            </div>
          </Card>
        </AnimatedSection>
      </Section>

      {/* Application */}
      <Section className="bg-white dark:bg-dark-darkest">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <AnimatedSection animation="slide-up">
              <JobApplicationForm />
            </AnimatedSection>
          </div>
          <div className="space-y-6">
            <AnimatedSection animation="slide-up" delay={0.1}>
              <Card className="p-6 bg-gradient-to-br from-primary to-primary-dark text-white border-0">
                <h3 className="text-xl font-heading font-bold mb-4">Application Process</h3>
                <ol className="space-y-3 text-white/90 text-sm">
                  {['Submit your application and resume', 'Our HR team reviews your profile', 'Qualified candidates are contacted for interviews', 'Final selection and job offer'].map((step, i) => (
                    <li key={i} className="flex items-start">
                      <span className="font-bold mr-3 text-secondary">{i + 1}.</span>
                      <span>{step}</span>
                    </li>
                  ))}
                </ol>
              </Card>
            </AnimatedSection>
            <AnimatedSection animation="slide-up" delay={0.2}>
              <Card className="p-6">
                <h3 className="text-xl font-heading font-bold text-gray-900 dark:text-white mb-4">What We Look For</h3>
                <ul className="space-y-3 text-gray-600 dark:text-gray-400 text-sm">
                  {['Strong communication skills', 'Customer-focused mindset', 'Team collaboration abilities', 'Adaptability and learning agility', 'Integrity and professionalism'].map((item) => (
                    <li key={item} className="flex items-start">
                      <svg className="w-5 h-5 text-primary flex-shrink-0 mt-0.5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            </AnimatedSection>
            <AnimatedSection animation="slide-up" delay={0.3}>
              <Card className="p-6">
                <h3 className="text-xl font-heading font-bold text-gray-900 dark:text-white mb-4">Questions?</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">Have questions about career opportunities?</p>
                <a href="mailto:hr@northassurance.com" className="text-primary dark:text-primary-light hover:underline font-medium text-sm">
                  hr@northassurance.com
                </a>
              </Card>
            </AnimatedSection>
          </div>
        </div>
      </Section>
    </div>
  );
};
