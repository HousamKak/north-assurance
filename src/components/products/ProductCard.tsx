import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaHeartbeat, FaCar, FaShieldAlt, FaPlane, FaHome, FaAmbulance, FaHospital, FaUsers, FaBriefcase, FaBuilding, FaUserTie } from 'react-icons/fa';
import { Card } from '@/components/common/Card';
import { Button } from '@/components/common/Button';
import { publicAsset } from '@/utils/helpers';
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
    <Card hover className="p-0 h-full flex flex-col overflow-hidden">
      {product.image && (
        <div className="relative h-44 overflow-hidden">
          <img
            src={publicAsset(product.image)}
            alt=""
            aria-hidden="true"
            loading="lazy"
            className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-dark/65 via-transparent to-transparent" />
          <motion.div
            whileHover={{ scale: 1.1, rotate: 5 }}
            className="absolute bottom-4 left-4 w-14 h-14 bg-white/90 dark:bg-dark/90 rounded-xl flex items-center justify-center shadow-lg"
          >
            <Icon className="w-7 h-7 text-primary" />
          </motion.div>
        </div>
      )}

      <div className="p-6 flex flex-col flex-grow">
        {!product.image && (
          <motion.div
            whileHover={{ scale: 1.1, rotate: 5 }}
            className="w-20 h-20 bg-gradient-to-br from-primary to-primary-dark rounded-xl flex items-center justify-center mb-4 shadow-lg"
          >
            <Icon className="w-10 h-10 text-white" />
          </motion.div>
        )}

        <h3 className="text-xl font-heading font-bold text-gray-900 dark:text-white mb-2">
          {product.name}
        </h3>

        <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 flex-grow">
          {product.shortDescription}
        </p>

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

        {product.price && (
          <div className="text-primary dark:text-primary-light font-bold text-lg mb-4">
            {product.price}
          </div>
        )}

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
      </div>
    </Card>
  );
};
