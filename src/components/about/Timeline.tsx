import React from 'react';
import { motion } from 'framer-motion';
import { AnimatedSection } from '@/components/common/AnimatedSection';
import { timelineEvents } from '@/data/timeline';

export const Timeline: React.FC = () => {
  return (
    <div className="relative">
      {/* Vertical Line */}
      <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-primary via-secondary to-primary"></div>

      {/* Timeline Events */}
      <div className="space-y-12">
        {timelineEvents.map((event, index) => (
          <AnimatedSection
            key={event.year}
            animation={index % 2 === 0 ? 'slide-right' : 'slide-left'}
            delay={index * 0.1}
          >
            <div
              className={`relative flex items-center ${
                index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              } flex-col`}
            >
              {/* Content */}
              <div className={`w-full md:w-5/12 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'}`}>
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="bg-white dark:bg-dark p-6 rounded-xl shadow-lg hover:shadow-2xl transition-shadow"
                >
                  <div className="text-primary dark:text-primary-light font-bold text-sm mb-2">
                    {event.year}
                  </div>
                  <h3 className="text-xl font-heading font-bold text-gray-900 dark:text-white mb-3">
                    {event.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                    {event.description}
                  </p>
                </motion.div>
              </div>

              {/* Center Dot */}
              <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 flex items-center justify-center">
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ type: 'spring', stiffness: 200 }}
                  className="w-16 h-16 bg-primary rounded-full border-4 border-white dark:border-dark-lighter shadow-lg flex items-center justify-center z-10"
                >
                  <span className="text-white font-bold text-sm">
                    {event.year.split('-')[0]}
                  </span>
                </motion.div>
              </div>

              {/* Spacer for desktop */}
              <div className="hidden md:block w-5/12"></div>
            </div>
          </AnimatedSection>
        ))}
      </div>
    </div>
  );
};
