import React from 'react';
import { motion } from 'framer-motion';
import { FaRocket, FaBolt, FaUserShield, FaDollarSign } from 'react-icons/fa';
import { AnimatedSection } from '@/components/common/AnimatedSection';
import { Card } from '@/components/common/Card';

const features = [
  {
    icon: FaRocket,
    title: 'Easy Process',
    description: 'Simple and straightforward insurance application process',
    color: 'from-blue-500 to-primary',
  },
  {
    icon: FaBolt,
    title: 'Fast Delivery',
    description: 'Quick policy issuance and claims processing',
    color: 'from-secondary to-cyan-500',
  },
  {
    icon: FaUserShield,
    title: 'Policy Control',
    description: 'Full transparency and control over your insurance policies',
    color: 'from-primary to-purple-500',
  },
  {
    icon: FaDollarSign,
    title: 'Money Saving',
    description: 'Competitive rates and flexible payment options',
    color: 'from-green-500 to-emerald-500',
  },
];

export const FeaturesSection: React.FC = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
      {/* Left: Features Grid */}
      <div className="grid grid-cols-2 gap-4">
        {features.map((feature, index) => (
          <AnimatedSection
            key={feature.title}
            animation="scale"
            delay={index * 0.1}
          >
            <Card className="p-6 h-full text-center">
              <motion.div
                whileHover={{ scale: 1.1, rotate: 5 }}
                className={`w-16 h-16 mx-auto mb-4 bg-gradient-to-br ${feature.color} rounded-xl flex items-center justify-center shadow-lg`}
              >
                <feature.icon className="w-8 h-8 text-white" />
              </motion.div>
              <h3 className="font-heading font-bold text-gray-900 dark:text-white mb-2">
                {feature.title}
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                {feature.description}
              </p>
            </Card>
          </AnimatedSection>
        ))}
      </div>

      {/* Right: Content */}
      <AnimatedSection animation="slide-left">
        <div>
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-gray-900 dark:text-white mb-6">
            Few Reasons Why People Choose Us!
          </h2>

          <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
            We understand that choosing the right insurance provider is crucial. That's why
            we've built our reputation on trust, reliability, and exceptional service. Our
            commitment to our clients goes beyond just selling policies – we're here to
            protect what matters most to you.
          </p>

          <div className="space-y-4">
            <div className="flex items-start space-x-3">
              <div className="flex-shrink-0 w-6 h-6 bg-primary rounded-full flex items-center justify-center mt-1">
                <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 dark:text-white">Comprehensive Coverage</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Wide range of insurance products tailored to your needs
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-3">
              <div className="flex-shrink-0 w-6 h-6 bg-primary rounded-full flex items-center justify-center mt-1">
                <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 dark:text-white">Expert Team</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Experienced professionals ready to assist you
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-3">
              <div className="flex-shrink-0 w-6 h-6 bg-primary rounded-full flex items-center justify-center mt-1">
                <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 dark:text-white">Customer Satisfaction</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Your satisfaction is our top priority
                </p>
              </div>
            </div>
          </div>
        </div>
      </AnimatedSection>
    </div>
  );
};
