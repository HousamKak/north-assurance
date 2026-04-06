import React from 'react';
import { Link } from 'react-router-dom';
import { Section } from '@/components/common/Section';
import { AnimatedSection } from '@/components/common/AnimatedSection';
import { PageHeader } from '@/components/common/PageHeader';
import { SEO } from '@/components/common/SEO';
import { ProductGrid } from '@/components/products/ProductGrid';
import { individualProducts } from '@/data/products';
import { ROUTES } from '@/utils/constants';

export const IndividualProducts: React.FC = () => {
  return (
    <div>
      <SEO
        title="Individual Insurance Products"
        description="Comprehensive insurance coverage for individuals and families. Medical, motor, life, travel, property, and personal accident insurance."
      />

      <PageHeader
        title="Individual Insurance"
        subtitle="Comprehensive coverage tailored to protect you and your family"
      />

      <Section background="light">
        <ProductGrid products={individualProducts} />
      </Section>

      {/* CTA */}
      <Section className="bg-gradient-to-br from-primary via-primary-dark to-dark text-white relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-1/4 -right-1/4 w-[400px] h-[400px] rounded-full bg-white/5 blur-3xl" />
        </div>
        <AnimatedSection animation="scale">
          <div className="relative text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
              Need Help Choosing?
            </h2>
            <p className="text-lg text-white/80 mb-8">
              Our insurance experts are here to help you find the perfect coverage
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to={ROUTES.CONTACT}
                className="px-8 py-4 bg-white text-primary rounded-xl font-semibold hover:bg-gray-50 transition-all duration-300 text-lg shadow-lg"
              >
                Get Free Consultation
              </Link>
              <Link
                to={ROUTES.CORPORATE_PRODUCTS}
                className="px-8 py-4 border-2 border-white/30 text-white rounded-xl font-semibold hover:bg-white/10 hover:border-white/50 transition-all duration-300 text-lg"
              >
                View Corporate Products
              </Link>
            </div>
          </div>
        </AnimatedSection>
      </Section>
    </div>
  );
};
