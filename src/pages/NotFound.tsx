import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { SEO } from '@/components/common/SEO';
import { ROUTES } from '@/utils/constants';

export const NotFound: React.FC = () => {
  return (
    <div className="min-h-[70vh] flex items-center justify-center px-4">
      <SEO title="Page Not Found" />
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center max-w-lg"
      >
        <div className="text-[8rem] font-heading font-bold leading-none bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-4">
          404
        </div>
        <h1 className="text-3xl font-heading font-bold text-gray-900 dark:text-white mb-4">
          Page Not Found
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to={ROUTES.HOME}
            className="px-8 py-4 bg-gradient-to-r from-primary to-primary-dark text-white rounded-xl font-semibold hover:shadow-lg hover:shadow-primary/25 transition-all duration-300"
          >
            Go Home
          </Link>
          <Link
            to={ROUTES.CONTACT}
            className="px-8 py-4 border-2 border-primary text-primary dark:text-primary-light rounded-xl font-semibold hover:bg-primary/5 transition-all duration-300"
          >
            Contact Us
          </Link>
        </div>
      </motion.div>
    </div>
  );
};
