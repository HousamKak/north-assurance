import React from 'react';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock } from 'react-icons/fa';
import { Card } from '@/components/common/Card';
import { COMPANY_INFO, SOCIAL_LINKS } from '@/utils/constants';

export const ContactInfo: React.FC = () => {
  return (
    <div className="space-y-6">
      {/* Office Contact */}
      <Card className="p-6">
        <div className="flex items-start space-x-4">
          <div className="w-12 h-12 bg-primary/10 dark:bg-primary/20 rounded-lg flex items-center justify-center flex-shrink-0">
            <FaPhone className="w-6 h-6 text-primary" />
          </div>
          <div>
            <h3 className="text-lg font-heading font-bold text-gray-900 dark:text-white mb-2">
              Phone
            </h3>
            <p className="text-gray-600 dark:text-gray-400">{COMPANY_INFO.phone}</p>
            <p className="text-gray-600 dark:text-gray-400">{COMPANY_INFO.phoneAlt}</p>
          </div>
        </div>
      </Card>

      {/* Email */}
      <Card className="p-6">
        <div className="flex items-start space-x-4">
          <div className="w-12 h-12 bg-primary/10 dark:bg-primary/20 rounded-lg flex items-center justify-center flex-shrink-0">
            <FaEnvelope className="w-6 h-6 text-primary" />
          </div>
          <div>
            <h3 className="text-lg font-heading font-bold text-gray-900 dark:text-white mb-2">
              Email
            </h3>
            <a
              href={`mailto:${COMPANY_INFO.email}`}
              className="text-primary dark:text-primary-light hover:underline block"
            >
              {COMPANY_INFO.email}
            </a>
          </div>
        </div>
      </Card>

      {/* Office Address */}
      <Card className="p-6">
        <div className="flex items-start space-x-4">
          <div className="w-12 h-12 bg-primary/10 dark:bg-primary/20 rounded-lg flex items-center justify-center flex-shrink-0">
            <FaMapMarkerAlt className="w-6 h-6 text-primary" />
          </div>
          <div>
            <h3 className="text-lg font-heading font-bold text-gray-900 dark:text-white mb-2">
              Office Address
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              {COMPANY_INFO.address}
            </p>
          </div>
        </div>
      </Card>

      {/* Garage Address */}
      <Card className="p-6">
        <div className="flex items-start space-x-4">
          <div className="w-12 h-12 bg-primary/10 dark:bg-primary/20 rounded-lg flex items-center justify-center flex-shrink-0">
            <FaMapMarkerAlt className="w-6 h-6 text-primary" />
          </div>
          <div>
            <h3 className="text-lg font-heading font-bold text-gray-900 dark:text-white mb-2">
              Garage Address
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              {COMPANY_INFO.garageAddress}
            </p>
          </div>
        </div>
      </Card>

      {/* Office Hours */}
      <Card className="p-6">
        <div className="flex items-start space-x-4">
          <div className="w-12 h-12 bg-primary/10 dark:bg-primary/20 rounded-lg flex items-center justify-center flex-shrink-0">
            <FaClock className="w-6 h-6 text-primary" />
          </div>
          <div>
            <h3 className="text-lg font-heading font-bold text-gray-900 dark:text-white mb-2">
              Office Hours
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              Monday - Friday: 9:00 AM - 5:00 PM
            </p>
            <p className="text-gray-600 dark:text-gray-400">
              Saturday: 9:00 AM - 1:00 PM
            </p>
            <p className="text-gray-600 dark:text-gray-400">
              Sunday: Closed
            </p>
          </div>
        </div>
      </Card>

      {/* Social Media */}
      <Card className="p-6">
        <h3 className="text-lg font-heading font-bold text-gray-900 dark:text-white mb-4">
          Follow Us
        </h3>
        <div className="flex space-x-4">
          {SOCIAL_LINKS.map((social) => (
            <a
              key={social.name}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 bg-primary/10 dark:bg-primary/20 rounded-lg flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-colors duration-300"
            >
              <social.icon className="w-5 h-5" />
            </a>
          ))}
        </div>
      </Card>
    </div>
  );
};
