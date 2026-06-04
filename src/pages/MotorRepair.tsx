import React from 'react';
import { Section } from '@/components/common/Section';
import { AnimatedSection } from '@/components/common/AnimatedSection';
import { PageHeader } from '@/components/common/PageHeader';
import { SEO } from '@/components/common/SEO';
import { Card } from '@/components/common/Card';
import {
  FaCar,
  FaTools,
  FaClipboardCheck,
  FaPhone,
  FaMapMarkerAlt,
  FaClock,
  FaMapMarkedAlt,
  FaTruckPickup,
  FaHandshake,
} from 'react-icons/fa';
import { COMPANY_INFO } from '@/utils/constants';

const network = [
  {
    icon: FaMapMarkedAlt,
    title: 'Coverage Across All Lebanon',
    description: 'Wherever you are in the country, you are within reach of our repair and claims network.',
  },
  {
    icon: FaHandshake,
    title: 'Wide Partner Garage Network',
    description: 'A trusted network of approved garages and workshops spread across every region of Lebanon.',
  },
  {
    icon: FaTruckPickup,
    title: '24/7 Towing & Road Assistance',
    description: 'Accident or breakdown anywhere? One call dispatches towing or a road expert to your location.',
  },
  {
    icon: FaClipboardCheck,
    title: 'End-to-End Claims Handling',
    description: 'From the first call to the finished repair, your motor claim is managed for you, start to finish.',
  },
];

const services = [
  { icon: FaCar, title: 'Body Repair', description: 'Expert collision repair and body work for all vehicle types' },
  { icon: FaTools, title: 'Mechanical Services', description: 'Complete mechanical repairs and maintenance services' },
  { icon: FaClipboardCheck, title: 'Insurance Claims', description: 'Seamless processing of insurance claims and documentation' },
];

const facilities = [
  'State-of-the-art repair equipment',
  'Capacity: 60 cars per week',
  'Certified technicians',
  'Original spare parts',
  'Paint booth facility',
  'Quality inspection',
  'Free towing service',
  'Loaner vehicles available',
];

export const MotorRepair: React.FC = () => {
  return (
    <div>
      <SEO
        title="Car Repair Services"
        description="A nationwide car repair and towing network across Lebanon, anchored by our flagship APR facility in Zouk Mosbeh. Body repair, mechanical services, and end-to-end claims."
      />

      <PageHeader
        title="Car Repair Services"
        subtitle="A trusted repair and towing network across all of Lebanon, anchored by our flagship APR facility"
        backgroundImage="/images/headers/motor-repair.jpg"
      />

      {/* Nationwide Network (lead message) */}
      <Section className="bg-white dark:bg-dark-darkest">
        <AnimatedSection animation="fade">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
              Nationwide Network
            </span>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900 dark:text-white mb-4">
              We Cover You All Over Lebanon
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              North Assurance backs you with a wide repair and road-assistance network that reaches
              every corner of Lebanon. No matter where your accident or breakdown happens, we get your
              vehicle towed, repaired, and back on the road, with your claim handled end to end.
            </p>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {network.map((item, index) => (
            <AnimatedSection key={item.title} animation="slide-up" delay={index * 0.1}>
              <Card hover className="p-6 text-center h-full">
                <div className="w-16 h-16 bg-gradient-to-br from-primary to-primary-dark rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <item.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-heading font-bold text-gray-900 dark:text-white mb-2">{item.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm">{item.description}</p>
              </Card>
            </AnimatedSection>
          ))}
        </div>

        {/* Road assistance CTA */}
        <AnimatedSection animation="scale">
          <div className="mt-12 rounded-2xl bg-gradient-to-r from-primary to-primary-dark text-white p-8 md:p-10 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-center md:text-left">
              <h3 className="text-2xl font-heading font-bold mb-1">Stuck on the road anywhere in Lebanon?</h3>
              <p className="text-white/80">Call our 24/7 emergency road assistance for towing or a road expert.</p>
            </div>
            <a
              href="tel:+9614747274"
              className="inline-flex items-center px-8 py-4 bg-white text-primary rounded-xl font-semibold hover:bg-gray-50 transition-all duration-300 shadow-lg whitespace-nowrap"
            >
              <FaPhone className="mr-2" />
              +961 4 747 274
            </a>
          </div>
        </AnimatedSection>
      </Section>

      {/* APR flagship facility */}
      <Section background="light">
        <AnimatedSection animation="fade">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="inline-block px-4 py-1.5 bg-secondary/10 text-secondary-dark dark:text-secondary rounded-full text-sm font-medium mb-4">
              Our Main Facility
            </span>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900 dark:text-white mb-4">
APR, Our Flagship Repair Center
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              At the heart of our network is <strong className="text-gray-900 dark:text-white">APR</strong>, our own
              high-capacity repair facility in Zouk Mosbeh, where certified technicians handle everything from
              collision and bodywork to full mechanical repairs.
            </p>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <AnimatedSection animation="slide-up">
            <div>
              <h3 className="text-2xl font-heading font-bold text-gray-900 dark:text-white mb-6">
                Modern Facilities & Equipment
              </h3>
              <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">
                Our APR facility in Zouk Mosbeh is equipped with the latest technology and staffed by certified professionals.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {facilities.map((facility, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <svg className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700 dark:text-gray-300 text-sm">{facility}</span>
                  </div>
                ))}
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection animation="slide-up" delay={0.2}>
            <Card className="p-8 bg-gradient-to-br from-primary/5 to-secondary/5 dark:from-primary/10 dark:to-secondary/10">
              <div className="text-center mb-8">
                <div className="text-6xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-2">60</div>
                <p className="text-xl font-semibold text-gray-900 dark:text-white">Cars per Week</p>
                <p className="text-gray-600 dark:text-gray-400 mt-2 text-sm">High-capacity facility to serve you quickly</p>
              </div>
              <div className="space-y-4">
                <div className="flex items-center space-x-3 text-gray-700 dark:text-gray-300">
                  <FaClock className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-sm">Average repair time: 3-5 days</span>
                </div>
                <div className="flex items-center space-x-3 text-gray-700 dark:text-gray-300">
                  <FaClipboardCheck className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-sm">Quality-assured workmanship</span>
                </div>
                <div className="flex items-center space-x-3 text-gray-700 dark:text-gray-300">
                  <FaCar className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-sm">Free vehicle pickup & delivery</span>
                </div>
              </div>
            </Card>
          </AnimatedSection>
        </div>
      </Section>

      {/* Services */}
      <Section className="bg-white dark:bg-dark-darkest">
        <AnimatedSection animation="fade">
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">What We Offer</span>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900 dark:text-white mb-4">
              Our Services
            </h2>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <AnimatedSection key={service.title} animation="slide-up" delay={index * 0.1}>
              <Card hover className="p-8 text-center h-full">
                <div className="w-20 h-20 bg-gradient-to-br from-primary to-primary-dark rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                  <service.icon className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-xl font-heading font-bold text-gray-900 dark:text-white mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400">{service.description}</p>
              </Card>
            </AnimatedSection>
          ))}
        </div>
      </Section>

      {/* Contact */}
      <Section background="gradient">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <AnimatedSection animation="slide-up">
            <Card className="p-8 h-full">
              <h3 className="text-2xl font-heading font-bold text-gray-900 dark:text-white mb-6">Visit Our APR Garage</h3>
              <div className="space-y-6">
                {[
                  { icon: FaMapMarkerAlt, title: 'Location', content: `${COMPANY_INFO.garage.address}\nLebanon` },
                  { icon: FaClock, title: 'Working Hours', content: 'Monday to Friday: 8:00 AM to 5:00 PM\nSaturday: 8:00 AM to 1:00 PM\nSunday: Closed' },
                  { icon: FaPhone, title: 'Contact', content: `${COMPANY_INFO.garage.phone}\n${COMPANY_INFO.garage.email}` },
                ].map((item) => (
                  <div key={item.title} className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-primary/10 dark:bg-primary/20 rounded-xl flex items-center justify-center flex-shrink-0">
                      <item.icon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-1">{item.title}</h4>
                      <p className="text-gray-600 dark:text-gray-400 text-sm whitespace-pre-line">{item.content}</p>
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          </AnimatedSection>

          <AnimatedSection animation="slide-up" delay={0.2}>
            <Card className="p-8 h-full bg-gradient-to-br from-primary to-primary-dark text-white border-0">
              <h3 className="text-2xl font-heading font-bold mb-6">Schedule a Repair</h3>
              <p className="text-white/80 mb-8">
                Call us to schedule your vehicle repair or to get a quote. Our team is ready to assist you.
              </p>
              <div className="space-y-4">
                <a
                  href={`tel:${COMPANY_INFO.garage.phone.replace(/\s/g, '')}`}
                  className="flex items-center justify-center w-full px-6 py-4 bg-white text-primary rounded-xl font-semibold hover:bg-gray-50 transition-all duration-300"
                >
                  <FaPhone className="mr-2" />
                  Call to Schedule
                </a>
                <a
                  href={`https://www.google.com/maps/search/${encodeURIComponent(COMPANY_INFO.garage.address)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-full px-6 py-4 border-2 border-white/30 text-white rounded-xl font-semibold hover:bg-white/10 hover:border-white/50 transition-all duration-300"
                >
                  <FaMapMarkerAlt className="mr-2" />
                  Get Directions
                </a>
              </div>
              <div className="mt-8 pt-8 border-t border-white/20">
                <p className="text-sm text-white/70">
                  <strong className="text-white">Emergency repairs?</strong><br />
                  Call our 24/7 hotline for immediate assistance with accident claims and towing.
                </p>
              </div>
            </Card>
          </AnimatedSection>
        </div>
      </Section>
    </div>
  );
};
