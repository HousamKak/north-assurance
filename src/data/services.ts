import type { Service } from '@/types';

export const services: Service[] = [
  {
    id: 'medical',
    title: 'Medical Insurance',
    description: 'Comprehensive health coverage including in-hospital care, ambulatory benefits, doctor visits, and medicines.',
    icon: 'FaHeartbeat',
    image: '/images/services/insurance-protection.jpg',
    link: '/products/medical',
  },
  {
    id: 'life',
    title: 'Life Insurance',
    description: 'Protect your loved ones with our comprehensive life insurance policies and secure their future.',
    icon: 'FaShieldAlt',
    image: '/images/services/life-insurance.jpg',
    link: '/products/life',
  },
  {
    id: 'motor',
    title: 'Motor Insurance',
    description: 'All risk coverage, third party liability, and 24/7 claims support for your vehicle.',
    icon: 'FaCar',
    image: '/images/services/claims-process.jpg',
    link: '/products/motor',
  },
  {
    id: 'travel',
    title: 'Travel Insurance',
    description: 'Medical emergencies, loss of luggage, trip cancellation coverage for worry-free travel.',
    icon: 'FaPlane',
    image: '/images/services/customer-service.jpg',
    link: '/products/travel',
  },
  {
    id: 'property',
    title: 'Property Insurance',
    description: 'Protect your home, office, or building against fires, burglary, water damage, and more.',
    icon: 'FaHome',
    image: '/images/services/property-insurance.jpg',
    link: '/products/property',
  },
  {
    id: 'business',
    title: 'Business Insurance',
    description: 'Comprehensive coverage for your business including liability, property, and professional indemnity.',
    icon: 'FaBriefcase',
    image: '/images/services/team-collaboration.jpg',
    link: '/products/corporate',
  },
];
