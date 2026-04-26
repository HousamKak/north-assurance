import type { Testimonial } from '@/types';

export const testimonials: Testimonial[] = [
  {
    id: '1',
    name: 'Karim El Khoury',
    position: 'Business Owner',
    company: 'Tech Solutions Lebanon',
    image: '/images/testimonials/karim-el-khoury.jpg',
    content: 'North Assurance has been protecting my business for over 10 years. Their professional service and quick claims processing are outstanding. Highly recommended!',
    rating: 5,
  },
  {
    id: '2',
    name: 'Lara Mansour',
    position: 'Medical Professional',
    company: 'Beirut Medical Center',
    image: '/images/testimonials/lara-mansour.jpg',
    content: 'Excellent medical insurance coverage with a wide network of hospitals. The team is always responsive and helpful. Very satisfied with their service.',
    rating: 5,
  },
  {
    id: '3',
    name: 'Fadi Saab',
    position: 'Individual Client',
    image: '/images/testimonials/fadi-saab.jpg',
    content: 'After my car accident, North Assurance handled everything professionally. Their motor repair center is top-notch, and the claim was settled quickly.',
    rating: 5,
  },
];
