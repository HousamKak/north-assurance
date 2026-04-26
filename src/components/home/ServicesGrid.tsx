import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaHeartbeat, FaShieldAlt, FaCar, FaPlane, FaHome, FaBriefcase } from 'react-icons/fa';
import { Card } from '@/components/common/Card';
import { AnimatedSection } from '@/components/common/AnimatedSection';
import { services } from '@/data/services';
import { publicAsset } from '@/utils/helpers';

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  FaHeartbeat,
  FaShieldAlt,
  FaCar,
  FaPlane,
  FaHome,
  FaBriefcase,
};

export const ServicesGrid: React.FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
      {services.map((service, index) => {
        const Icon = iconMap[service.icon];

        return (
          <AnimatedSection
            key={service.id}
            animation="slide-up"
            delay={index * 0.1}
          >
            <Link to={service.link}>
              <Card hover className="p-0 h-full group overflow-hidden">
                {service.image && (
                  <div className="relative h-44 overflow-hidden">
                    <img
                      src={publicAsset(service.image)}
                      alt=""
                      aria-hidden="true"
                      loading="lazy"
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-dark/60 via-transparent to-transparent" />
                    <div className="absolute bottom-4 left-4">
                      <div className="w-14 h-14 bg-white/90 dark:bg-dark/90 rounded-xl flex items-center justify-center shadow-lg">
                        <Icon className="w-7 h-7 text-primary" />
                      </div>
                    </div>
                  </div>
                )}

                <div className="p-6">
                  {!service.image && (
                  <motion.div
                    className="w-20 h-20 bg-primary/10 dark:bg-primary/20 rounded-lg flex items-center justify-center group-hover:bg-primary transition-colors duration-300 mb-4"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                  >
                    <Icon className="w-10 h-10 text-primary group-hover:text-white transition-colors duration-300" />
                  </motion.div>
                  )}

                  <h3 className="text-xl font-heading font-bold text-gray-900 dark:text-white mb-2 group-hover:text-primary dark:group-hover:text-primary-light transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                    {service.description}
                  </p>
                  <motion.div
                    className="mt-4 text-primary dark:text-primary-light font-semibold text-sm inline-flex items-center"
                    whileHover={{ x: 5 }}
                  >
                    Learn More
                    <svg
                      className="w-4 h-4 ml-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </motion.div>
                </div>
              </Card>
            </Link>
          </AnimatedSection>
        );
      })}
    </div>
  );
};
