export interface Product {
  id: string;
  name: string;
  category: 'individual' | 'corporate';
  description: string;
  shortDescription: string;
  icon: string;
  features: string[];
  coverage: string[];
  price?: string;
  benefits?: string[];
}

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  link: string;
}

export interface TimelineEvent {
  year: string;
  title: string;
  description: string;
}

export interface TeamMember {
  id: string;
  name: string;
  position: string;
  image: string;
  social?: {
    twitter?: string;
    facebook?: string;
    linkedin?: string;
    youtube?: string;
  };
}

export interface Testimonial {
  id: string;
  name: string;
  position: string;
  company?: string;
  image: string;
  content: string;
  rating: number;
}

export interface ContactFormData {
  name: string;
  phone: string;
  email: string;
  subject: string;
  message: string;
}

export interface QuoteFormData {
  name: string;
  email: string;
  phone: string;
  productType: string;
  coverage?: string;
  message?: string;
}

export interface JobApplicationFormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  position: string;
  experience: string;
  resume: FileList | null;
  coverLetter: string;
}

export type Theme = 'light' | 'dark';
