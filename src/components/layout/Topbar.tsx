import React from 'react';
import { HiPhone, HiMail, HiClock } from 'react-icons/hi';
import { COMPANY_INFO, SOCIAL_LINKS } from '@/utils/constants';

export const Topbar: React.FC = () => {
  return (
    <div className="hidden lg:block bg-dark text-white/70 py-2 transition-theme">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center text-sm">
          {/* Contact Info */}
          <div className="flex items-center space-x-6">
            <a href={`tel:${COMPANY_INFO.phone.replace(/\s/g, '')}`} className="flex items-center space-x-2 hover:text-white transition-colors">
              <HiPhone className="w-4 h-4" />
              <span>{COMPANY_INFO.phone}</span>
            </a>
            <a href={`mailto:${COMPANY_INFO.email}`} className="flex items-center space-x-2 hover:text-white transition-colors">
              <HiMail className="w-4 h-4" />
              <span>{COMPANY_INFO.email}</span>
            </a>
            <div className="flex items-center space-x-2">
              <HiClock className="w-4 h-4" />
              <span>Mon - Fri : 09 AM - 05 PM</span>
            </div>
          </div>

          {/* Social Links */}
          <div className="flex items-center space-x-4">
            {SOCIAL_LINKS.map((social) => (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors"
                aria-label={social.name}
              >
                <social.icon className="w-4 h-4" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
