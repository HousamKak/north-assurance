import React from 'react';
import { FaMapMarkerAlt, FaPhoneAlt, FaDirections } from 'react-icons/fa';
import { Card } from '@/components/common/Card';
import { BRANCHES } from '@/utils/constants';

const telHref = (phone: string) =>
  `tel:+961${phone.replace(/\D/g, '').replace(/^0/, '')}`;

const mapsHref = (query: string) =>
  `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(`${query}, Lebanon`)}`;

export const LocationMap: React.FC = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {BRANCHES.map((branch) => (
        <Card key={branch.name} hover className="p-6 h-full flex flex-col">
          <div className="flex items-start justify-between gap-3 mb-4">
            <div>
              <h3 className="text-lg font-heading font-bold text-gray-900 dark:text-white leading-tight">
                {branch.name}
              </h3>
              {branch.note && (
                <span className="inline-block mt-2 px-2.5 py-0.5 text-[11px] font-medium rounded-full bg-secondary/10 text-secondary-dark dark:text-secondary">
                  {branch.note}
                </span>
              )}
            </div>
            <div className="w-10 h-10 rounded-lg bg-primary/10 dark:bg-primary/20 flex items-center justify-center flex-shrink-0">
              <FaMapMarkerAlt className="w-5 h-5 text-primary" />
            </div>
          </div>

          <p className="text-sm text-gray-600 dark:text-gray-400 mb-4 flex-grow">
            {branch.address}
          </p>

          <div className="space-y-2 mb-5">
            {branch.phones.map((phone) => (
              <a
                key={phone}
                href={telHref(phone)}
                className="flex items-center gap-2.5 text-sm text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-primary-light transition-colors"
              >
                <FaPhoneAlt className="w-3.5 h-3.5 text-primary flex-shrink-0" />
                {phone}
              </a>
            ))}
          </div>

          <a
            href={mapsHref(`North Assurance ${branch.name} ${branch.address}`)}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-semibold text-primary dark:text-primary-light hover:underline mt-auto"
          >
            <FaDirections className="w-4 h-4" />
            Get Directions
          </a>
        </Card>
      ))}
    </div>
  );
};
