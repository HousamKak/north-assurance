import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { HiMail, HiPhone, HiLocationMarker } from 'react-icons/hi';
import { COMPANY_INFO, SOCIAL_LINKS, ROUTES } from '@/utils/constants';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleNewsletter = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail('');
      setTimeout(() => setSubscribed(false), 4000);
    }
  };

  return (
    <footer className="bg-dark text-gray-300 transition-theme">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-3 mb-5">
              <div className="w-10 h-10 rounded-lg overflow-hidden">
                <img
                  src="/images/logos/logo-mark.svg"
                  alt=""
                  aria-hidden="true"
                  className="w-full h-full"
                />
              </div>
              <h3 className="text-xl font-heading font-bold text-white">
                North Assurance
              </h3>
            </div>
            <p className="text-sm leading-relaxed mb-6 text-gray-400">
              Protecting Lebanon's future with trusted insurance services since {COMPANY_INFO.established}.
              {COMPANY_INFO.yearsOfExperience}+ years of excellence and reliability.
            </p>
            <div className="flex space-x-3">
              {SOCIAL_LINKS.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-white/5 hover:bg-primary border border-white/10 hover:border-primary rounded-lg flex items-center justify-center transition-all duration-300"
                  aria-label={social.name}
                >
                  <social.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-heading font-semibold text-white mb-5">Contact Info</h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <HiLocationMarker className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                <span className="text-sm text-gray-400">{COMPANY_INFO.address}</span>
              </div>
              <a href={`tel:${COMPANY_INFO.phone.replace(/\s/g, '')}`} className="flex items-center space-x-3 hover:text-primary transition-colors">
                <HiPhone className="w-5 h-5 text-primary flex-shrink-0" />
                <span className="text-sm">{COMPANY_INFO.phone}</span>
              </a>
              <a href={`mailto:${COMPANY_INFO.email}`} className="flex items-center space-x-3 hover:text-primary transition-colors">
                <HiMail className="w-5 h-5 text-primary flex-shrink-0" />
                <span className="text-sm">{COMPANY_INFO.email}</span>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-heading font-semibold text-white mb-5">Quick Links</h4>
            <ul className="space-y-3">
              {[
                { to: ROUTES.ABOUT, label: 'About Us' },
                { to: ROUTES.INDIVIDUAL_PRODUCTS, label: 'Individual Products' },
                { to: ROUTES.CORPORATE_PRODUCTS, label: 'Corporate Products' },
                { to: ROUTES.MOTOR_REPAIR, label: 'Motor Repair' },
                { to: ROUTES.CONTACT, label: 'Contact Us' },
                { to: ROUTES.CAREERS, label: 'Careers' },
              ].map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="text-sm text-gray-400 hover:text-primary transition-colors inline-flex items-center group"
                  >
                    <span className="mr-2 text-primary/50 group-hover:text-primary transition-colors">&rsaquo;</span>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-lg font-heading font-semibold text-white mb-5">Newsletter</h4>
            <p className="text-sm text-gray-400 mb-4">
              Subscribe to our newsletter for the latest insurance news and updates.
            </p>
            {subscribed ? (
              <div className="p-3 bg-green-500/10 border border-green-500/30 rounded-lg">
                <p className="text-sm text-green-400">Thank you for subscribing!</p>
              </div>
            ) : (
              <form onSubmit={handleNewsletter} className="space-y-3">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your email"
                  required
                  className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary text-white text-sm transition-colors"
                />
                <button
                  type="submit"
                  className="w-full px-4 py-3 bg-gradient-to-r from-primary to-primary-dark hover:from-primary-dark hover:to-primary rounded-lg text-white font-medium text-sm transition-all duration-300"
                >
                  Subscribe
                </button>
              </form>
            )}
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-white/10">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
            <p>
              &copy; {currentYear} {COMPANY_INFO.name}. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link to="/privacy-policy" className="hover:text-primary transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms" className="hover:text-primary transition-colors">
                Terms & Conditions
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
