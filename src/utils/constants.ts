import { FaFacebook, FaLinkedin, FaInstagram } from 'react-icons/fa';

export const COMPANY_INFO = {
  name: 'North Assurance s.a.l.',
  established: '1973',
  yearsOfExperience: new Date().getFullYear() - 1973,
  email: 'info@northassurance.com',
  phone: '+961 1 511 995',
  address: 'Sin el-Fil Blvd, Freeway Tower, Beirut, Lebanon',
  garageAddress: 'Zouk Mosbeh, Industrial Zone, Lebanon',
  garage: {
    address: 'Zouk Mosbeh, Industrial Zone, NA Bldg',
    phone: '+961 9 219 759',
    email: 'info@northassurance.com',
    capacity: '60 cars/week',
  },
};

export const SOCIAL_LINKS = [
  { name: 'Facebook', url: 'https://www.facebook.com/profile.php?id=61559416181360', icon: FaFacebook },
  { name: 'Instagram', url: 'https://www.instagram.com/northassurance.lb', icon: FaInstagram },
  { name: 'LinkedIn', url: 'https://www.linkedin.com/company/north-assurance-s-a-l/', icon: FaLinkedin },
];

export const ROUTES = {
  HOME: '/',
  ABOUT: '/about',
  INDIVIDUAL_PRODUCTS: '/products/individual',
  CORPORATE_PRODUCTS: '/products/corporate',
  PRODUCT_DETAIL: '/products/:id',
  MOTOR_REPAIR: '/motor-repair',
  CONTACT: '/contact',
  CAREERS: '/careers',
};

export const PRODUCT_CATEGORIES = {
  INDIVIDUAL: 'individual',
  CORPORATE: 'corporate',
} as const;

export const CONTACT_SUBJECTS = [
  'General Inquiry',
  'Complaint',
  'Policy Issue',
  'Claims Support',
  'New Quote Request',
];
