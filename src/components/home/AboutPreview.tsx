import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaShieldAlt, FaHandshake, FaAward, FaClock } from 'react-icons/fa';
import { Button } from '@/components/common/Button';
import { AnimatedSection } from '@/components/common/AnimatedSection';
import { COMPANY_INFO, ROUTES } from '@/utils/constants';
import { publicAsset } from '@/utils/helpers';

const features = [
  {
    icon: FaShieldAlt,
    title: 'Trusted Since 1973',
    description: `${COMPANY_INFO.yearsOfExperience}+ years of reliable insurance services`,
  },
  {
    icon: FaHandshake,
    title: 'Customer First',
    description: 'Personalized service and dedicated support',
  },
  {
    icon: FaAward,
    title: 'Industry Leader',
    description: 'Award-winning insurance solutions',
  },
  {
    icon: FaClock,
    title: '24/7 Support',
    description: 'Round-the-clock claims assistance',
  },
];

export const AboutPreview: React.FC = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
      {/* Left: Image with Badge */}
      <AnimatedSection animation="slide-right">
        <div className="relative">
          <div className="relative rounded-2xl overflow-hidden shadow-2xl">
            <img
              src={publicAsset('/images/hero/about-preview.jpg')}
              alt="North Assurance Office"
              className="w-full h-[500px] object-cover"
            />
          </div>

          {/* Experience Badge */}
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ delay: 0.5, type: 'spring', stiffness: 200 }}
            className="absolute top-8 left-8 bg-primary text-white rounded-2xl p-6 shadow-2xl"
          >
            <div className="text-center">
              <div className="text-5xl font-heading font-bold">
                {COMPANY_INFO.yearsOfExperience}+
              </div>
              <div className="text-sm font-semibold mt-1">Years</div>
              <div className="text-xs opacity-90">Experience</div>
            </div>
          </motion.div>
        </div>
      </AnimatedSection>

      {/* Right: Content */}
      <AnimatedSection animation="slide-left">
        <div>
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-gray-900 dark:text-white mb-6">
            We're Here To Assist You With Exploring Protection
          </h2>

          <p className="text-lg text-primary dark:text-primary-light font-semibold mb-4">
            Building Trust Through Excellence
          </p>

          <p className="text-gray-600 dark:text-gray-400 mb-8 leading-relaxed">
            North Assurance has been Lebanon's trusted insurance partner since 1973.
            Our commitment to excellence, professional service, and innovative solutions
            has made us a leader in the insurance industry. We combine traditional values
            with modern technology to provide comprehensive protection for individuals and businesses.
          </p>

          {/* Features Grid */}
          <div className="grid grid-cols-2 gap-4 mb-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="flex items-start space-x-3"
              >
                <div className="flex-shrink-0 w-12 h-12 bg-primary/10 dark:bg-primary/20 rounded-lg flex items-center justify-center">
                  <feature.icon className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-1">
                    {feature.title}
                  </h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          <Link to={ROUTES.ABOUT}>
            <Button variant="primary" size="lg">
              Learn More About Us
            </Button>
          </Link>
        </div>
      </AnimatedSection>
    </div>
  );
};
