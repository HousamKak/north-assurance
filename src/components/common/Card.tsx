import React from 'react';
import { motion } from 'framer-motion';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
  glass?: boolean;
}

export const Card: React.FC<CardProps> = ({
  children,
  className = '',
  hover = false,
  glass = false,
}) => {
  const baseStyles = 'rounded-xl transition-all duration-300';
  const glassStyles = glass
    ? 'glass'
    : 'bg-white dark:bg-dark shadow-md dark:shadow-lg dark:shadow-black/10 border border-gray-100 dark:border-gray-800';
  const hoverStyles = hover
    ? 'hover:shadow-xl hover:-translate-y-1 cursor-pointer'
    : '';

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.4 }}
      className={`${baseStyles} ${glassStyles} ${hoverStyles} ${className}`}
    >
      {children}
    </motion.div>
  );
};
