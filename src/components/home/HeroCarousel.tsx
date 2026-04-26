import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation, EffectFade } from 'swiper/modules';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { COMPANY_INFO, ROUTES } from '@/utils/constants';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/effect-fade';

const slides = [
  {
    id: 1,
    title: "Protecting Lebanon's Future",
    subtitle: `${COMPANY_INFO.yearsOfExperience}+ Years of Trust & Excellence`,
    description: 'Comprehensive insurance solutions for individuals and businesses since 1973',
    gradient: 'from-primary via-primary-dark to-dark',
    image: '/images/hero/hero-1.jpg',
    cta: { label: 'Explore Our Services', to: ROUTES.INDIVIDUAL_PRODUCTS },
  },
  {
    id: 2,
    title: 'Your Trusted Insurance Partner',
    subtitle: 'Hand by Hand Around the Clock',
    description: 'Professional service, quick claims processing, and personalized insurance solutions',
    gradient: 'from-dark via-primary-dark to-primary',
    image: '/images/hero/hero-2.jpg',
    cta: { label: 'Get A Quote', to: ROUTES.CONTACT },
  },
];

export const HeroCarousel: React.FC = () => {
  return (
    <div className="relative w-full">
      <Swiper
        modules={[Autoplay, Pagination, Navigation, EffectFade]}
        spaceBetween={0}
        slidesPerView={1}
        effect="fade"
        fadeEffect={{ crossFade: true }}
        speed={600}
        autoplay={{ delay: 5000, disableOnInteraction: false, pauseOnMouseEnter: true }}
        pagination={{
          clickable: true,
          bulletClass: 'swiper-pagination-bullet hero-bullet',
          bulletActiveClass: 'hero-bullet-active',
        }}
        navigation
        loop
        className="hero-swiper"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div className={`relative h-[85vh] min-h-[500px] max-h-[800px] w-full overflow-hidden bg-gradient-to-br ${slide.gradient}`}>
              <img
                src={slide.image}
                alt=""
                aria-hidden="true"
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-dark/95 via-primary-dark/75 to-dark/35" />
              <div className="absolute inset-0 bg-gradient-to-t from-dark/60 via-transparent to-dark/20" />

              {/* Decorative elements */}
              <div className="absolute inset-0 overflow-hidden">
                {/* Grid pattern */}
                <div
                  className="absolute inset-0 opacity-[0.03]"
                  style={{
                    backgroundImage: 'linear-gradient(rgba(255,255,255,.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.1) 1px, transparent 1px)',
                    backgroundSize: '60px 60px',
                  }}
                />
              </div>

              {/* Content */}
              <div className="relative h-full container mx-auto px-4 flex items-center z-10">
                <motion.div
                  key={`slide-${slide.id}`}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: 0.2 }}
                  className="max-w-3xl"
                >
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full mb-6 border border-white/10"
                  >
                    <div className="w-2 h-2 rounded-full bg-secondary mr-3 animate-pulse" />
                    <span className="text-sm font-medium text-white/90">{slide.subtitle}</span>
                  </motion.div>

                  <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-heading font-bold text-white leading-[1.1] mb-6"
                  >
                    {slide.title}
                  </motion.h1>

                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.5 }}
                    className="text-lg md:text-xl text-white/80 max-w-2xl mb-8 leading-relaxed"
                  >
                    {slide.description}
                  </motion.p>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                    className="flex flex-col sm:flex-row gap-4"
                  >
                    <Link
                      to={slide.cta.to}
                      className="px-8 py-4 bg-white text-primary font-semibold rounded-xl hover:bg-gray-50 hover:shadow-xl hover:shadow-white/10 transition-all duration-300 text-center"
                    >
                      {slide.cta.label}
                    </Link>
                    <Link
                      to={ROUTES.ABOUT}
                      className="px-8 py-4 border-2 border-white/30 text-white font-semibold rounded-xl hover:bg-white/10 hover:border-white/50 transition-all duration-300 text-center"
                    >
                      Learn More
                    </Link>
                  </motion.div>
                </motion.div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <style>{`
        .hero-swiper .swiper-button-next,
        .hero-swiper .swiper-button-prev {
          color: white;
          background: rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(8px);
          width: 50px;
          height: 50px;
          border-radius: 12px;
          border: 1px solid rgba(255, 255, 255, 0.15);
          transition: all 0.3s;
        }
        .hero-swiper .swiper-button-next:hover,
        .hero-swiper .swiper-button-prev:hover {
          background: rgba(255, 255, 255, 0.2);
        }
        .hero-swiper .swiper-button-next:after,
        .hero-swiper .swiper-button-prev:after {
          font-size: 18px;
        }
        .hero-swiper .swiper-pagination {
          bottom: 30px;
        }
        .hero-bullet {
          width: 10px;
          height: 10px;
          background: rgba(255, 255, 255, 0.3);
          border-radius: 999px;
          display: inline-block;
          margin: 0 5px;
          cursor: pointer;
          transition: all 0.3s;
        }
        .hero-bullet-active {
          background: white !important;
          width: 32px;
        }
      `}</style>
    </div>
  );
};
