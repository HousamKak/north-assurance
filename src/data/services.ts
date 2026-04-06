import type { Service } from '@/types';

export const services: Service[] = [
  {
    id: 'medical',
    title: 'Medical Insurance',
    description: 'Comprehensive health coverage including in-hospital care, ambulatory benefits, doctor visits, and medicines.',
    icon: 'FaHeartbeat',
    link: '/products/medical',
  },
  {
    id: 'life',
    title: 'Life Insurance',
    description: 'Protect your loved ones with our comprehensive life insurance policies and secure their future.',
    icon: 'FaShieldAlt',
    link: '/products/life',
  },
  {
    id: 'motor',
    title: 'Motor Insurance',
    description: 'All risk coverage, third party liability, and 24/7 claims support for your vehicle.',
    icon: 'FaCar',
    link: '/products/motor',
  },
  {
    id: 'travel',
    title: 'Travel Insurance',
    description: 'Medical emergencies, loss of luggage, trip cancellation coverage for worry-free travel.',
    icon: 'FaPlane',
    link: '/products/travel',
  },
  {
    id: 'property',
    title: 'Property Insurance',
    description: 'Protect your home, office, or building against fires, burglary, water damage, and more.',
    icon: 'FaHome',
    link: '/products/property',
  },
  {
    id: 'business',
    title: 'Business Insurance',
    description: 'Comprehensive coverage for your business including liability, property, and professional indemnity.',
    icon: 'FaBriefcase',
    link: '/products/corporate',
  },
];
