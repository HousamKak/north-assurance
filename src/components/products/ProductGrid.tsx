import React from 'react';
import { AnimatedSection } from '@/components/common/AnimatedSection';
import { ProductCard } from './ProductCard';
import type { Product } from '@/types';

interface ProductGridProps {
  products: Product[];
}

export const ProductGrid: React.FC<ProductGridProps> = ({ products }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {products.map((product, index) => (
        <AnimatedSection
          key={product.id}
          animation="slide-up"
          delay={index * 0.1}
        >
          <ProductCard product={product} />
        </AnimatedSection>
      ))}
    </div>
  );
};
