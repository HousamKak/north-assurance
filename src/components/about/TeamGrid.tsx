import React from 'react';
import { motion } from 'framer-motion';
import { FaLinkedinIn, FaFacebookF, FaTwitter, FaYoutube } from 'react-icons/fa';
import { Card } from '@/components/common/Card';
import { AnimatedSection } from '@/components/common/AnimatedSection';
import { teamMembers } from '@/data/team';

export const TeamGrid: React.FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {teamMembers.map((member, index) => (
        <AnimatedSection
          key={member.id}
          animation="slide-up"
          delay={index * 0.1}
        >
          <Card className="overflow-hidden group">
            {/* Image */}
            <div className="relative h-64 overflow-hidden">
              <motion.img
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.3 }}
                src={member.image}
                alt={member.name}
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.currentTarget.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(member.name)}&size=400&background=015FC9&color=fff`;
                }}
              />

              {/* Overlay on Hover */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileHover={{ opacity: 1, y: 0 }}
                className="absolute inset-0 bg-gradient-to-t from-primary to-transparent flex items-end justify-center pb-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              >
                {/* Social Links */}
                {member.social && (
                  <div className="flex space-x-3">
                    {member.social.twitter && (
                      <a
                        href={member.social.twitter}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-10 h-10 bg-white/20 hover:bg-white rounded-full flex items-center justify-center transition-colors group/icon"
                      >
                        <FaTwitter className="w-4 h-4 text-white group-hover/icon:text-primary" />
                      </a>
                    )}
                    {member.social.facebook && (
                      <a
                        href={member.social.facebook}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-10 h-10 bg-white/20 hover:bg-white rounded-full flex items-center justify-center transition-colors group/icon"
                      >
                        <FaFacebookF className="w-4 h-4 text-white group-hover/icon:text-primary" />
                      </a>
                    )}
                    {member.social.linkedin && (
                      <a
                        href={member.social.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-10 h-10 bg-white/20 hover:bg-white rounded-full flex items-center justify-center transition-colors group/icon"
                      >
                        <FaLinkedinIn className="w-4 h-4 text-white group-hover/icon:text-primary" />
                      </a>
                    )}
                    {member.social.youtube && (
                      <a
                        href={member.social.youtube}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-10 h-10 bg-white/20 hover:bg-white rounded-full flex items-center justify-center transition-colors group/icon"
                      >
                        <FaYoutube className="w-4 h-4 text-white group-hover/icon:text-primary" />
                      </a>
                    )}
                  </div>
                )}
              </motion.div>
            </div>

            {/* Info */}
            <div className="p-6 text-center">
              <h3 className="text-lg font-heading font-bold text-gray-900 dark:text-white mb-1">
                {member.name}
              </h3>
              <p className="text-primary dark:text-primary-light text-sm">
                {member.position}
              </p>
            </div>
          </Card>
        </AnimatedSection>
      ))}
    </div>
  );
};
