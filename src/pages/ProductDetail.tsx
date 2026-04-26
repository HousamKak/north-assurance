import React from 'react';
import { useParams, Navigate, Link } from 'react-router-dom';
import { Section } from '@/components/common/Section';
import { AnimatedSection } from '@/components/common/AnimatedSection';
import { Card } from '@/components/common/Card';
import { Button } from '@/components/common/Button';
import { QuoteForm } from '@/components/products/QuoteForm';
import { ProductCard } from '@/components/products/ProductCard';
import { allProducts } from '@/data/products';
import { FaHeartbeat, FaCar, FaShieldAlt, FaPlane, FaHome, FaAmbulance, FaHospital, FaUsers, FaBriefcase, FaBuilding, FaUserTie, FaChevronRight } from 'react-icons/fa';

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  FaHeartbeat,
  FaCar,
  FaShieldAlt,
  FaPlane,
  FaHome,
  FaAmbulance,
  FaHospital,
  FaUsers,
  FaBriefcase,
  FaBuilding,
  FaUserTie,
};

export const ProductDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const product = allProducts.find((p) => p.id === id);

  if (!product) {
    return <Navigate to="/" replace />;
  }

  const Icon = iconMap[product.icon] || FaShieldAlt;

  // Get related products (same category, exclude current)
  const relatedProducts = allProducts
    .filter((p) => p.category === product.category && p.id !== product.id)
    .slice(0, 3);

  return (
    <div>
      {/* Breadcrumb */}
      <Section className="bg-gray-50 dark:bg-dark py-4">
        <div className="flex items-center space-x-2 text-sm text-gray-600 dark:text-gray-400">
          <Link to="/" className="hover:text-primary">Home</Link>
          <FaChevronRight className="w-3 h-3" />
          <Link
            to={product.category === 'individual' ? '/products/individual' : '/products/corporate'}
            className="hover:text-primary"
          >
            {product.category === 'individual' ? 'Individual Products' : 'Corporate Products'}
          </Link>
          <FaChevronRight className="w-3 h-3" />
          <span className="text-gray-900 dark:text-white">{product.name}</span>
        </div>
      </Section>

      <section className="relative py-16 md:py-20 bg-gradient-to-r from-primary to-primary-dark text-white overflow-hidden">
        {product.image && (
          <>
            <img
              src={product.image}
              alt=""
              aria-hidden="true"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-dark/95 via-primary-dark/85 to-dark/55" />
            <div className="absolute inset-0 bg-gradient-to-t from-dark/45 via-transparent to-dark/15" />
          </>
        )}
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <AnimatedSection animation="fade">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <div className="inline-flex items-center px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full mb-4">
                  <span className="text-sm font-medium text-white/90">
                    {product.category === 'individual' ? 'Individual' : 'Corporate'} Insurance
                  </span>
                </div>
                <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4">
                  {product.name}
                </h1>
                <p className="text-xl text-white/90 mb-6">
                  {product.description}
                </p>
                {product.price && (
                  <div className="text-3xl font-bold mb-6">
                    {product.price}
                  </div>
                )}
              </div>
              <div className="flex justify-center md:justify-end">
                <div className="w-48 h-48 bg-white/10 backdrop-blur-sm rounded-3xl flex items-center justify-center shadow-2xl border border-white/15">
                  <Icon className="w-24 h-24 text-white" />
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Product Details & Quote Form */}
      <Section background="light">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content - 2 columns */}
          <div className="lg:col-span-2 space-y-8">
            {/* Features */}
            <AnimatedSection animation="slide-up">
              <Card className="p-8">
                <h2 className="text-2xl font-heading font-bold text-gray-900 dark:text-white mb-6">
                  Key Features
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {product.features.map((feature, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <svg className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-700 dark:text-gray-300">{feature}</span>
                    </div>
                  ))}
                </div>
              </Card>
            </AnimatedSection>

            {/* Coverage Details */}
            <AnimatedSection animation="slide-up" delay={0.1}>
              <Card className="p-8">
                <h2 className="text-2xl font-heading font-bold text-gray-900 dark:text-white mb-6">
                  What's Covered
                </h2>
                <div className="space-y-4">
                  {product.coverage.map((item, index) => (
                    <div key={index} className="flex items-start space-x-3 p-4 bg-gray-50 dark:bg-dark rounded-lg">
                      <svg className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span className="text-gray-700 dark:text-gray-300">{item}</span>
                    </div>
                  ))}
                </div>
              </Card>
            </AnimatedSection>

            {/* Why Choose This Product */}
            <AnimatedSection animation="slide-up" delay={0.2}>
              <Card className="p-8 bg-gradient-to-br from-primary/5 to-secondary/5 dark:from-primary/10 dark:to-secondary/10">
                <h2 className="text-2xl font-heading font-bold text-gray-900 dark:text-white mb-6">
                  Why Choose This Coverage?
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-primary/10 dark:bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-3">
                      <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <h3 className="font-bold text-gray-900 dark:text-white mb-2">Comprehensive</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Full protection for your needs</p>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-primary/10 dark:bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-3">
                      <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    </div>
                    <h3 className="font-bold text-gray-900 dark:text-white mb-2">Fast Claims</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Quick processing & payouts</p>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-primary/10 dark:bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-3">
                      <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
                      </svg>
                    </div>
                    <h3 className="font-bold text-gray-900 dark:text-white mb-2">24/7 Support</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Always here when you need us</p>
                  </div>
                </div>
              </Card>
            </AnimatedSection>
          </div>

          {/* Quote Form Sidebar - 1 column */}
          <div>
            <AnimatedSection animation="slide-up" delay={0.3}>
              <QuoteForm productName={product.name} productCategory={product.category} />
            </AnimatedSection>
          </div>
        </div>
      </Section>

      {/* Related Products */}
      {relatedProducts.length > 0 && (
        <Section className="bg-white dark:bg-dark-darkest">
          <AnimatedSection animation="fade">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900 dark:text-white mb-4">
                Related Products
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-400">
                Explore other insurance solutions that might interest you
              </p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {relatedProducts.map((relatedProduct, index) => (
              <AnimatedSection key={relatedProduct.id} animation="slide-up" delay={index * 0.1}>
                <ProductCard product={relatedProduct} />
              </AnimatedSection>
            ))}
          </div>
        </Section>
      )}

      {/* CTA Section */}
      <Section background="gradient">
        <AnimatedSection animation="scale">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900 dark:text-white mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">
              Contact us today to learn more about {product.name} or request a personalized quote
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="tel:+9611511995">
                <Button variant="primary" size="lg">
                  Call Us Now
                </Button>
              </a>
              <Link to="/contact">
                <Button variant="outline" size="lg">
                  Contact Us
                </Button>
              </Link>
            </div>
          </div>
        </AnimatedSection>
      </Section>
    </div>
  );
};
