import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaChevronRight } from 'react-icons/fa';
import { ROUTES } from '@/utils/constants';
import { publicAsset } from '@/utils/helpers';

interface Breadcrumb {
  label: string;
  to?: string;
}

interface PageHeaderProps {
  title: string;
  subtitle?: string;
  breadcrumbs?: Breadcrumb[];
  backgroundImage?: string;
}

export const PageHeader: React.FC<PageHeaderProps> = ({
  title,
  subtitle,
  breadcrumbs,
  backgroundImage,
}) => {
  const crumbs: Breadcrumb[] = breadcrumbs || [{ label: title }];

  return (
    <section className="relative bg-gradient-to-br from-primary via-primary-dark to-dark text-white py-20 overflow-hidden">
      {backgroundImage && (
        <>
          <img
            src={publicAsset(backgroundImage)}
            alt=""
            aria-hidden="true"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-dark/90 via-primary-dark/75 to-dark/45" />
          <div className="absolute inset-0 bg-gradient-to-t from-dark/40 via-transparent to-dark/20" />
        </>
      )}

      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: 'linear-gradient(rgba(255,255,255,.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.1) 1px, transparent 1px)',
            backgroundSize: '60px 60px',
          }}
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-heading font-bold mb-4">
            {title}
          </h1>
          {subtitle && (
            <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto mb-6">
              {subtitle}
            </p>
          )}
          <div className="flex items-center justify-center space-x-2 text-sm text-white/60">
            <Link to={ROUTES.HOME} className="hover:text-white transition-colors">
              Home
            </Link>
            {crumbs.map((crumb, i) => (
              <React.Fragment key={i}>
                <FaChevronRight className="w-2.5 h-2.5" />
                {crumb.to ? (
                  <Link to={crumb.to} className="hover:text-white transition-colors">
                    {crumb.label}
                  </Link>
                ) : (
                  <span className="text-white/90">{crumb.label}</span>
                )}
              </React.Fragment>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
