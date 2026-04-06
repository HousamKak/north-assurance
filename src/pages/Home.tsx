import React from 'react';
import { Link } from 'react-router-dom';
import { Section } from '@/components/common/Section';
import { AnimatedSection } from '@/components/common/AnimatedSection';
import { SEO } from '@/components/common/SEO';
import { HeroCarousel } from '@/components/home/HeroCarousel';
import { ServicesGrid } from '@/components/home/ServicesGrid';
import { StatsCounter } from '@/components/home/StatsCounter';
import { AboutPreview } from '@/components/home/AboutPreview';
import { FeaturesSection } from '@/components/home/FeaturesSection';
import { TestimonialCarousel } from '@/components/home/TestimonialCarousel';
import { ROUTES } from '@/utils/constants';

export const Home: React.FC = () => {
  return (
    <div>
      <SEO />

      <HeroCarousel />

      {/* Services Section */}
      <Section id="services" className="bg-white dark:bg-dark-darkest">
        <AnimatedSection animation="fade">
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">Our Services</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-gray-900 dark:text-white mb-4">
              Professional Insurance Services
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Comprehensive coverage for individuals and businesses
            </p>
          </div>
        </AnimatedSection>
        <ServicesGrid />
      </Section>

      <StatsCounter />

      <Section id="about-preview" background="light">
        <AboutPreview />
      </Section>

      <Section id="features" className="bg-white dark:bg-dark-darkest">
        <FeaturesSection />
      </Section>

      {/* Testimonials */}
      <Section id="testimonials" background="gradient">
        <AnimatedSection animation="fade">
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">Testimonials</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-gray-900 dark:text-white mb-4">
              What Our Clients Say
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Don't just take our word for it - hear from our satisfied customers
            </p>
          </div>
        </AnimatedSection>
        <TestimonialCarousel />
      </Section>

      {/* CTA Section */}
      <Section className="bg-gradient-to-br from-primary via-primary-dark to-dark text-white relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-1/4 -right-1/4 w-[400px] h-[400px] rounded-full bg-white/5 blur-3xl" />
          <div className="absolute -bottom-1/4 -left-1/4 w-[300px] h-[300px] rounded-full bg-secondary/10 blur-3xl" />
        </div>
        <AnimatedSection animation="scale">
          <div className="relative text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-lg text-white/80 mb-8">
              Get a personalized insurance quote today and protect what matters most
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to={ROUTES.CONTACT}
                className="px-8 py-4 bg-white text-primary rounded-xl font-semibold hover:bg-gray-50 transition-all duration-300 text-lg shadow-lg hover:shadow-xl"
              >
                Get A Quote
              </Link>
              <Link
                to={ROUTES.ABOUT}
                className="px-8 py-4 border-2 border-white/30 text-white rounded-xl font-semibold hover:bg-white/10 hover:border-white/50 transition-all duration-300 text-lg"
              >
                Learn More
              </Link>
            </div>
          </div>
        </AnimatedSection>
      </Section>
    </div>
  );
};
