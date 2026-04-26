import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { FaStar } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { Card } from '@/components/common/Card';
import { testimonials } from '@/data/testimonials';
import { publicAsset } from '@/utils/helpers';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

export const TestimonialCarousel: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto">
      <Swiper
        modules={[Autoplay, Pagination, Navigation]}
        spaceBetween={30}
        slidesPerView={1}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
          bulletClass: 'swiper-pagination-bullet !bg-primary/30 dark:!bg-primary/50',
          bulletActiveClass: 'swiper-pagination-bullet-active !bg-primary',
        }}
        navigation
        loop
        className="testimonial-swiper pb-12"
      >
        {testimonials.map((testimonial) => (
          <SwiperSlide key={testimonial.id}>
            <Card className="p-8 md:p-12 text-center">
              {/* Avatar */}
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ type: 'spring', stiffness: 200 }}
                className="mb-6"
              >
                <img
                  src={publicAsset(testimonial.image)}
                  alt={testimonial.name}
                  className="w-24 h-24 rounded-full mx-auto object-cover border-4 border-primary/20"
                  onError={(e) => {
                    e.currentTarget.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(testimonial.name)}&size=200&background=015FC9&color=fff`;
                  }}
                />
              </motion.div>

              {/* Stars */}
              <div className="flex justify-center space-x-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <FaStar key={i} className="w-5 h-5 text-yellow-400" />
                ))}
              </div>

              {/* Quote */}
              <div className="relative mb-6">
                <svg
                  className="absolute -top-4 -left-4 w-12 h-12 text-primary/10 dark:text-primary/20"
                  fill="currentColor"
                  viewBox="0 0 32 32"
                >
                  <path d="M10 8c-3.3 0-6 2.7-6 6v10h10V14H8c0-1.1.9-2 2-2h2V8h-2zm14 0c-3.3 0-6 2.7-6 6v10h10V14h-6c0-1.1.9-2 2-2h2V8h-2z" />
                </svg>
                <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 italic leading-relaxed relative z-10">
                  "{testimonial.content}"
                </p>
              </div>

              {/* Author */}
              <div>
                <h4 className="font-heading font-bold text-gray-900 dark:text-white text-xl mb-1">
                  {testimonial.name}
                </h4>
                <p className="text-primary dark:text-primary-light font-medium">
                  {testimonial.position}
                </p>
                {testimonial.company && (
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    {testimonial.company}
                  </p>
                )}
              </div>
            </Card>
          </SwiperSlide>
        ))}
      </Swiper>

      <style>{`
        .testimonial-swiper .swiper-button-next,
        .testimonial-swiper .swiper-button-prev {
          color: #015FC9;
        }

        .testimonial-swiper .swiper-button-next:after,
        .testimonial-swiper .swiper-button-prev:after {
          font-size: 24px;
        }

        .testimonial-swiper .swiper-pagination {
          bottom: 0;
        }
      `}</style>
    </div>
  );
};
