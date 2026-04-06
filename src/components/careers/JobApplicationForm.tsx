import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { motion } from 'framer-motion';
import { FaPaperPlane, FaUpload } from 'react-icons/fa';
import { Card } from '@/components/common/Card';
import { Button } from '@/components/common/Button';
import type { JobApplicationFormData } from '@/types';

const MAX_FILE_SIZE = 5 * 1024 * 1024; // 5MB
const ACCEPTED_FILE_TYPES = [
  'application/pdf',
  'application/msword',
  'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
];

const jobApplicationSchema = z.object({
  firstName: z.string().min(2, 'First name must be at least 2 characters'),
  lastName: z.string().min(2, 'Last name must be at least 2 characters'),
  email: z.string().email('Invalid email address'),
  phone: z.string().min(8, 'Phone number must be at least 8 characters'),
  position: z.string().min(1, 'Please specify the position you are applying for'),
  experience: z.string().min(1, 'Please select your experience level'),
  coverLetter: z.string().min(50, 'Cover letter must be at least 50 characters'),
  resume: z
    .any()
    .refine((files) => files?.length > 0, 'Resume is required')
    .refine(
      (files) => files?.[0]?.size <= MAX_FILE_SIZE,
      'File size must be less than 5MB'
    )
    .refine(
      (files) => ACCEPTED_FILE_TYPES.includes(files?.[0]?.type),
      'Only PDF and Word documents are accepted'
    ),
});

const experienceLevels = [
  'Entry Level (0-2 years)',
  'Mid Level (3-5 years)',
  'Senior Level (6-10 years)',
  'Expert Level (10+ years)',
];

export const JobApplicationForm: React.FC = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [selectedFileName, setSelectedFileName] = useState<string>('');

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<JobApplicationFormData>({
    resolver: zodResolver(jobApplicationSchema),
  });

  const onSubmit = async (data: JobApplicationFormData) => {
    setIsSubmitting(true);

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 2000));

    // TODO: integrate with backend API or email service
    void data;
    setIsSubmitting(false);
    setSubmitSuccess(true);
    setSelectedFileName('');
    reset();

    // Reset success message after 5 seconds
    setTimeout(() => setSubmitSuccess(false), 5000);
  };

  return (
    <Card className="p-8">
      <h2 className="text-2xl font-heading font-bold text-gray-900 dark:text-white mb-6">
        Submit Your Application
      </h2>

      {submitSuccess && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-6 p-4 bg-green-100 dark:bg-green-900/30 border border-green-500 rounded-lg"
        >
          <p className="text-green-700 dark:text-green-300">
            Thank you for your application! We'll review it and get back to you soon.
          </p>
        </motion.div>
      )}

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        {/* Name Fields */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label
              htmlFor="firstName"
              className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
            >
              First Name *
            </label>
            <input
              {...register('firstName')}
              type="text"
              id="firstName"
              className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-dark-light bg-white dark:bg-dark-light text-gray-900 dark:text-white focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
              placeholder="John"
            />
            {errors.firstName && (
              <p className="mt-1 text-sm text-red-500">{errors.firstName.message}</p>
            )}
          </div>

          <div>
            <label
              htmlFor="lastName"
              className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
            >
              Last Name *
            </label>
            <input
              {...register('lastName')}
              type="text"
              id="lastName"
              className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-dark-light bg-white dark:bg-dark-light text-gray-900 dark:text-white focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
              placeholder="Doe"
            />
            {errors.lastName && (
              <p className="mt-1 text-sm text-red-500">{errors.lastName.message}</p>
            )}
          </div>
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

        {/* Position */}
        <div>
          <label
            htmlFor="position"
            className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
          >
            Position Applying For *
          </label>
          <input
            {...register('position')}
            type="text"
            id="position"
            className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-dark-light bg-white dark:bg-dark-light text-gray-900 dark:text-white focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
            placeholder="e.g., Insurance Agent, Claims Adjuster"
          />
          {errors.position && (
            <p className="mt-1 text-sm text-red-500">{errors.position.message}</p>
          )}
        </div>

        {/* Experience Level */}
        <div>
          <label
            htmlFor="experience"
            className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
          >
            Experience Level *
          </label>
          <select
            {...register('experience')}
            id="experience"
            className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-dark-light bg-white dark:bg-dark-light text-gray-900 dark:text-white focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
          >
            <option value="">Select your experience level</option>
            {experienceLevels.map((level) => (
              <option key={level} value={level}>
                {level}
              </option>
            ))}
          </select>
          {errors.experience && (
            <p className="mt-1 text-sm text-red-500">{errors.experience.message}</p>
          )}
        </div>

        {/* Cover Letter */}
        <div>
          <label
            htmlFor="coverLetter"
            className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
          >
            Cover Letter *
          </label>
          <textarea
            {...register('coverLetter')}
            id="coverLetter"
            rows={6}
            className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-dark-light bg-white dark:bg-dark-light text-gray-900 dark:text-white focus:ring-2 focus:ring-primary focus:border-transparent transition-all resize-none"
            placeholder="Tell us why you're interested in joining North Assurance and what makes you a great fit for this role..."
          />
          {errors.coverLetter && (
            <p className="mt-1 text-sm text-red-500">{errors.coverLetter.message}</p>
          )}
        </div>

        {/* Resume Upload */}
        <div>
          <label
            htmlFor="resume"
            className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
          >
            Resume/CV * (PDF or Word, max 5MB)
          </label>
          <div className="relative">
            <input
              {...register('resume')}
              type="file"
              id="resume"
              accept=".pdf,.doc,.docx"
              onChange={(e) => {
                const file = e.target.files?.[0];
                if (file) {
                  setSelectedFileName(file.name);
                }
              }}
              className="hidden"
            />
            <label
              htmlFor="resume"
              className="flex items-center justify-center w-full px-4 py-3 border-2 border-dashed border-gray-300 dark:border-dark-light rounded-lg cursor-pointer hover:border-primary dark:hover:border-primary transition-colors bg-white dark:bg-dark-light"
            >
              <FaUpload className="w-5 h-5 text-gray-400 mr-2" />
              <span className="text-gray-600 dark:text-gray-400">
                {selectedFileName || 'Click to upload your resume'}
              </span>
            </label>
          </div>
          {errors.resume && (
            <p className="mt-1 text-sm text-red-500">{errors.resume.message as string}</p>
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
          Submit Application
        </Button>
      </form>
    </Card>
  );
};
