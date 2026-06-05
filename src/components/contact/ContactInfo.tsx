import React from 'react';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock, FaQuestionCircle } from 'react-icons/fa';
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
            <div className="flex items-center gap-1.5">
              <p className="text-gray-600 dark:text-gray-400">
                Monday to Friday: 8:00 AM to 5:00 PM
              </p>
              <span
                className="relative group inline-flex items-center"
                tabIndex={0}
                aria-label="Summer schedule note"
              >
                <FaQuestionCircle className="w-4 h-4 text-primary cursor-help" />
                <span className="pointer-events-none absolute left-1/2 -translate-x-1/2 bottom-full mb-2 w-56 rounded-lg bg-dark text-white text-xs px-3 py-2 opacity-0 group-hover:opacity-100 group-focus:opacity-100 transition-opacity duration-200 z-20 shadow-lg text-center">
                  Hours change during the summer (July and August).
                </span>
              </span>
            </div>
            <p className="text-xs italic text-gray-500 dark:text-gray-400 mt-1">
              Schedule changes during July and August
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
