import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { motion } from 'framer-motion';
import { FaPaperPlane } from 'react-icons/fa';
import { Card } from '@/components/common/Card';
import { Button } from '@/components/common/Button';
import type { QuoteFormData } from '@/types';

const quoteSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Invalid email address'),
  phone: z.string().min(8, 'Phone number must be at least 8 characters'),
  productType: z.string().min(1, 'Product type is required'),
  coverage: z.string().optional(),
  message: z.string().min(10, 'Please provide more details about your needs'),
});

interface QuoteFormProps {
  productName: string;
  productCategory: string;
}

export const QuoteForm: React.FC<QuoteFormProps> = ({ productName, productCategory: _ }) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<QuoteFormData>({
    resolver: zodResolver(quoteSchema),
    defaultValues: {
      productType: productName,
    },
  });

  const onSubmit = async (data: QuoteFormData) => {
    setIsSubmitting(true);

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 2000));

    // TODO: integrate with backend API or email service
    void data;
    setIsSubmitting(false);
    setSubmitSuccess(true);
    reset({ productType: productName });

    // Reset success message after 5 seconds
    setTimeout(() => setSubmitSuccess(false), 5000);
  };

  return (
    <Card className="p-8 sticky top-24">
      <h3 className="text-2xl font-heading font-bold text-gray-900 dark:text-white mb-6">
        Request a Quote
      </h3>

      {submitSuccess && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-6 p-4 bg-green-100 dark:bg-green-900/30 border border-green-500 rounded-lg"
        >
          <p className="text-green-700 dark:text-green-300">
            Thank you! We'll send you a personalized quote soon.
          </p>
        </motion.div>
      )}

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
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
            Email *
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
            Phone *
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

        {/* Product Type (Read-only) */}
        <div>
          <label
            htmlFor="productType"
            className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
          >
            Product
          </label>
          <input
            {...register('productType')}
            type="text"
            id="productType"
            readOnly
            className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-dark-light bg-gray-50 dark:bg-dark text-gray-900 dark:text-white"
          />
        </div>

        {/* Coverage Preference */}
        <div>
          <label
            htmlFor="coverage"
            className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
          >
            Coverage Preference (Optional)
          </label>
          <select
            {...register('coverage')}
            id="coverage"
            className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-dark-light bg-white dark:bg-dark-light text-gray-900 dark:text-white focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
          >
            <option value="">Select coverage level</option>
            <option value="basic">Basic Coverage</option>
            <option value="standard">Standard Coverage</option>
            <option value="comprehensive">Comprehensive Coverage</option>
            <option value="premium">Premium Coverage</option>
          </select>
        </div>

        {/* Additional Details */}
        <div>
          <label
            htmlFor="message"
            className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
          >
            Additional Details *
          </label>
          <textarea
            {...register('message')}
            id="message"
            rows={4}
            className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-dark-light bg-white dark:bg-dark-light text-gray-900 dark:text-white focus:ring-2 focus:ring-primary focus:border-transparent transition-all resize-none"
            placeholder="Tell us about your specific needs..."
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
          isLoading={isSubmitting}
        >
          <FaPaperPlane className="mr-2" />
          Get Quote
        </Button>

        <p className="text-xs text-gray-500 dark:text-gray-400 text-center">
          We'll contact you within 24 hours with a personalized quote
        </p>
      </form>
    </Card>
  );
};
