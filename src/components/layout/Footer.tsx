import React from 'react';
import { Link } from 'react-router-dom';
import { HiMail, HiPhone, HiLocationMarker, HiClock } from 'react-icons/hi';
import { FaAward, FaCalendarAlt, FaMapMarkerAlt, FaArrowRight } from 'react-icons/fa';
import { COMPANY_INFO, SOCIAL_LINKS, ROUTES } from '@/utils/constants';
import { publicAsset } from '@/utils/helpers';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-dark text-gray-300 transition-theme">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Company Info */}
          <div>
            <div className="mb-5">
              <img
                src={publicAsset('/images/logos/northassurance-logo-white.png')}
                alt="North Assurance"
                className="h-12 w-auto"
              />
            </div>
            <p className="text-sm leading-relaxed mb-2 text-gray-400">
              Be better prepared for the future with trusted insurance services since {COMPANY_INFO.established}.
            </p>
            <p className="text-sm leading-relaxed mb-6 text-gray-400">
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
              <div className="flex items-start space-x-3">
                <HiClock className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                <div className="text-sm text-gray-400">
                  <p>Mon to Fri: 8:00 AM to 5:00 PM</p>
                  <p className="text-xs italic text-gray-500 dark:text-gray-500 mt-0.5">
                    Schedule changes during July and August
                  </p>
                </div>
              </div>
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
                { to: ROUTES.MOTOR_REPAIR, label: 'APR Car Repair Facility' },
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

          {/* Official Insurer — Project Lebanon */}
          <div>
            <h4 className="text-lg font-heading font-semibold text-white mb-5">Official Insurer</h4>
            <a
              href="https://projectlebanon.com/insurance"
              target="_blank"
              rel="noopener noreferrer"
              className="group block rounded-2xl border border-red-500/30 bg-gradient-to-br from-red-600/15 to-red-900/10 hover:from-red-600/25 hover:to-red-900/20 p-5 transition-colors"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-xl bg-red-600 flex items-center justify-center flex-shrink-0 shadow-lg">
                  <FaAward className="w-6 h-6 text-white" />
                </div>
                <div className="leading-tight">
                  <span className="block text-lg font-heading font-extrabold text-white tracking-tight">Project Lebanon</span>
                  <span className="block text-[11px] uppercase tracking-[0.18em] text-red-400 font-semibold">2026 Edition</span>
                </div>
              </div>
              <p className="text-sm text-gray-400 mb-4">
                North Assurance is the official insurer of Project Lebanon, the country's leading construction and industry trade fair.
              </p>
              <ul className="space-y-2 mb-4">
                <li className="flex items-center gap-2 text-xs text-gray-400">
                  <FaCalendarAlt className="w-3.5 h-3.5 text-red-400 flex-shrink-0" />
                  Sept 29 to Oct 2, 2026
                </li>
                <li className="flex items-center gap-2 text-xs text-gray-400">
                  <FaMapMarkerAlt className="w-3.5 h-3.5 text-red-400 flex-shrink-0" />
                  Seaside Arena, Beirut New Waterfront
                </li>
              </ul>
              <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-red-400 group-hover:text-red-300 transition-colors">
                Learn more
                <FaArrowRight className="w-3 h-3 transition-transform group-hover:translate-x-0.5" />
              </span>
            </a>
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
