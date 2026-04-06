import React from 'react';
import { Card } from '@/components/common/Card';

export const LocationMap: React.FC = () => {
  // Google Maps embed URL for Sin el-Fil, Beirut
  const mapEmbedUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3312.0815!2d35.5538!3d33.8886!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzPCsDUzJzE5LjAiTiAzNcKwMzMnMTMuNyJF!5e0!3m2!1sen!2slb!4v1234567890";

  return (
    <div className="space-y-6">
      {/* Office Location */}
      <Card className="p-0 overflow-hidden">
        <div className="p-4 bg-gradient-to-r from-primary to-primary-dark">
          <h3 className="text-xl font-heading font-bold text-white">
            Office Location
          </h3>
          <p className="text-white/90 text-sm mt-1">
            Sin el-Fil Blvd, Freeway Tower, Beirut, Lebanon
          </p>
        </div>
        <div className="relative h-96">
          <iframe
            src={mapEmbedUrl}
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="North Assurance Office Location"
            className="absolute inset-0"
          />
        </div>
      </Card>

      {/* Garage Location */}
      <Card className="p-0 overflow-hidden">
        <div className="p-4 bg-gradient-to-r from-secondary to-secondary-dark">
          <h3 className="text-xl font-heading font-bold text-white">
            Garage Location
          </h3>
          <p className="text-white/90 text-sm mt-1">
            Zouk Mosbeh, Industrial Zone, Lebanon
          </p>
        </div>
        <div className="relative h-96">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3309.5!2d35.6089!3d33.9569!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzPCsDU3JzI0LjgiTiAzNcKwMzYnMzIuMCJF!5e0!3m2!1sen!2slb!4v1234567890"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="North Assurance Garage Location"
            className="absolute inset-0"
          />
        </div>
      </Card>

      {/* Directions Card */}
      <Card className="p-6">
        <h3 className="text-xl font-heading font-bold text-gray-900 dark:text-white mb-4">
          Getting Here
        </h3>
        <div className="space-y-4">
          <div>
            <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
              By Car
            </h4>
            <p className="text-gray-600 dark:text-gray-400 text-sm">
              Free parking available at Freeway Tower. Use the main entrance on Sin el-Fil Boulevard.
            </p>
          </div>
          <div>
            <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
              Public Transportation
            </h4>
            <p className="text-gray-600 dark:text-gray-400 text-sm">
              Multiple bus routes stop near Freeway Tower. The nearest service taxi station is 200m away.
            </p>
          </div>
          <div>
            <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
              For Garage Visits
            </h4>
            <p className="text-gray-600 dark:text-gray-400 text-sm">
              Our motor repair facility is located in Zouk Mosbeh Industrial Zone. Please call ahead to schedule your visit.
            </p>
          </div>
        </div>
      </Card>
    </div>
  );
};
