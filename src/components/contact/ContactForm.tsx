import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { motion } from 'framer-motion';
import { FaPaperPlane } from 'react-icons/fa';
import { Card } from '@/components/common/Card';
import { Button } from '@/components/common/Button';
import { CONTACT_SUBJECTS, COMPANY_INFO } from '@/utils/constants';
import { buildMailto } from '@/utils/helpers';
import type { ContactFormData } from '@/types';

const contactSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Invalid email address'),
  phone: z.string().min(8, 'Phone number must be at least 8 characters'),
  subject: z.string().min(1, 'Please select a subject'),
  message: z.string().min(10, 'Message must be at least 10 characters'),
});

export const ContactForm: React.FC = () => {
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = (data: ContactFormData) => {
    // Static site: open the visitor's email client pre-filled, addressed to info@
    const mailto = buildMailto(COMPANY_INFO.email, `Contact Form: ${data.subject}`, [
      ['Name', data.name],
      ['Email', data.email],
      ['Phone', data.phone],
      ['Subject', data.subject],
      ['Message', data.message],
    ]);
    window.location.href = mailto;

    setSubmitSuccess(true);
    reset();
    setTimeout(() => setSubmitSuccess(false), 8000);
  };

  return (
    <Card className="p-8">
      <h2 className="text-2xl font-heading font-bold text-gray-900 dark:text-white mb-6">
        Send us a Message
      </h2>

      {submitSuccess && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-6 p-4 bg-green-100 dark:bg-green-900/30 border border-green-500 rounded-lg"
        >
          <p className="text-green-700 dark:text-green-300">
            Your email app should open with your message ready to send to {COMPANY_INFO.email}. Just press send and we'll get back to you soon.
          </p>
        </motion.div>
      )}

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        {/* Name */}
        <div>
          <label
            htmlFor="name"
            className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
          >
            Full Name *
          </label>
          <input
            {...register('name')}
            type="text"
            id="name"
            className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-dark-light bg-white dark:bg-dark-light text-gray-900 dark:text-white focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
            placeholder="John Doe"
          />
          {errors.name && (
            <p className="mt-1 text-sm text-red-500">{errors.name.message}</p>
          )}
        </div>

        {/* Email */}
        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
          >
            Email Address *
          </label>
          <input
            {...register('email')}
            type="email"
            id="email"
            className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-dark-light bg-white dark:bg-dark-light text-gray-900 dark:text-white focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
            placeholder="john@example.com"
          />
          {errors.email && (
            <p className="mt-1 text-sm text-red-500">{errors.email.message}</p>
          )}
        </div>

        {/* Phone */}
        <div>
          <label
            htmlFor="phone"
            className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
          >
            Phone Number *
          </label>
          <input
            {...register('phone')}
            type="tel"
            id="phone"
            className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-dark-light bg-white dark:bg-dark-light text-gray-900 dark:text-white focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
            placeholder="+961 1 234 567"
          />
          {errors.phone && (
            <p className="mt-1 text-sm text-red-500">{errors.phone.message}</p>
          )}
        </div>

        {/* Subject */}
        <div>
          <label
            htmlFor="subject"
            className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
          >
            Subject *
          </label>
          <select
            {...register('subject')}
            id="subject"
            className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-dark-light bg-white dark:bg-dark-light text-gray-900 dark:text-white focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
          >
            <option value="">Select a subject</option>
            {CONTACT_SUBJECTS.map((subject) => (
              <option key={subject} value={subject}>
                {subject}
              </option>
            ))}
          </select>
          {errors.subject && (
            <p className="mt-1 text-sm text-red-500">{errors.subject.message}</p>
          )}
        </div>

        {/* Message */}
        <div>
          <label
            htmlFor="message"
            className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
          >
            Message *
          </label>
          <textarea
            {...register('message')}
            id="message"
            rows={6}
            className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-dark-light bg-white dark:bg-dark-light text-gray-900 dark:text-white focus:ring-2 focus:ring-primary focus:border-transparent transition-all resize-none"
            placeholder="Tell us how we can help you..."
          />
          {errors.message && (
            <p className="mt-1 text-sm text-red-500">{errors.message.message}</p>
          )}
        </div>

        {/* Submit Button */}
        <Button
          type="submit"
          variant="primary"
          size="lg"
          className="w-full"
        >
          <FaPaperPlane className="mr-2" />
          Send Message
        </Button>
      </form>
    </Card>
  );
};
