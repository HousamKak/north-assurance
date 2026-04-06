import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaHeartbeat, FaCar, FaShieldAlt, FaPlane, FaHome, FaAmbulance, FaHospital, FaUsers, FaBriefcase, FaBuilding, FaUserTie } from 'react-icons/fa';
import { Card } from '@/components/common/Card';
import { Button } from '@/components/common/Button';
import type { Product } from '@/types';

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

interface ProductCardProps {
  product: Product;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const Icon = iconMap[product.icon] || FaShieldAlt;

  return (
    <Card hover className="p-6 h-full flex flex-col">
      {/* Icon */}
      <motion.div
        whileHover={{ scale: 1.1, rotate: 5 }}
        className="w-20 h-20 bg-gradient-to-br from-primary to-primary-dark rounded-xl flex items-center justify-center mb-4 shadow-lg"
      >
        <Icon className="w-10 h-10 text-white" />
      </motion.div>

      {/* Title */}
      <h3 className="text-xl font-heading font-bold text-gray-900 dark:text-white mb-2">
        {product.name}
      </h3>

      {/* Short Description */}
      <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 flex-grow">
        {product.shortDescription}
      </p>

      {/* Features */}
      <ul className="space-y-2 mb-6">
        {product.features.slice(0, 3).map((feature, index) => (
          <li key={index} className="flex items-start space-x-2 text-sm text-gray-600 dark:text-gray-400">
            <svg className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            <span>{feature}</span>
          </li>
        ))}
      </ul>

      {/* Price */}
      {product.price && (
        <div className="text-primary dark:text-primary-light font-bold text-lg mb-4">
          {product.price}
        </div>
      )}

      {/* Actions */}
      <div className="flex space-x-2 mt-auto">
        <Link to={`/products/${product.id}`} className="flex-1">
          <Button variant="primary" size="sm" className="w-full">
            Learn More
          </Button>
        </Link>
        <Button variant="outline" size="sm">
          Get Quote
        </Button>
      </div>
    </Card>
  );
};
