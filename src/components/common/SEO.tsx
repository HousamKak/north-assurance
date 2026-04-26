import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';
import { publicAsset } from '@/utils/helpers';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  type?: 'website' | 'article';
}

const defaultMeta = {
  siteName: 'North Assurance',
  title: 'North Assurance - Insurance Solutions in Lebanon',
  description: 'Leading insurance provider in Lebanon since 1973. Offering comprehensive individual and corporate insurance solutions including medical, motor, life, and property insurance.',
  keywords: 'insurance lebanon, north assurance, medical insurance, motor insurance, life insurance, corporate insurance, property insurance, travel insurance',
  image: '/images/logos/logo.png',
  baseUrl: 'https://northassurance.com',
};

export const SEO: React.FC<SEOProps> = ({
  title,
  description = defaultMeta.description,
  keywords = defaultMeta.keywords,
  image = defaultMeta.image,
  type = 'website',
}) => {
  const location = useLocation();
  const fullTitle = title
    ? `${title} | ${defaultMeta.siteName}`
    : defaultMeta.title;
  const canonicalUrl = `${defaultMeta.baseUrl}${location.pathname}`;

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />

      {/* Open Graph */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={publicAsset(image)} />
      <meta property="og:site_name" content={defaultMeta.siteName} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={canonicalUrl} />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={publicAsset(image)} />

      <meta name="robots" content="index, follow" />
      <meta name="author" content="North Assurance" />
      <link rel="canonical" href={canonicalUrl} />
    </Helmet>
  );
};
