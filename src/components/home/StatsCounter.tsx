import React from 'react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { useCounter } from '@/hooks/useCounter';
import { motion } from 'framer-motion';
import { COMPANY_INFO } from '@/utils/constants';

interface Stat {
  label: string;
  value: number;
  suffix?: string;
  prefix?: string;
}

const stats: Stat[] = [
  {
    label: 'Happy Clients',
    value: 10000,
    suffix: '+',
  },
  {
    label: 'Years of Experience',
    value: COMPANY_INFO.yearsOfExperience,
    suffix: '+',
  },
  {
    label: 'Insurance Policies',
    value: 25000,
    suffix: '+',
  },
  {
    label: 'Team Members',
    value: 50,
    suffix: '+',
  },
];

export const StatsCounter: React.FC = () => {
  const { ref, inView } = useScrollAnimation({ threshold: 0.3 });

  return (
    <div
      ref={ref}
      className="relative py-16 bg-gradient-to-r from-primary to-primary-dark text-white overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <StatItem
              key={stat.label}
              stat={stat}
              index={index}
              enabled={inView}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

interface StatItemProps {
  stat: Stat;
  index: number;
  enabled: boolean;
}

const StatItem: React.FC<StatItemProps> = ({ stat, index, enabled }) => {
  const count = useCounter({
    end: stat.value,
    duration: 2000,
    enabled,
  });

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={enabled ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: index * 0.1, duration: 0.6 }}
      className="text-center"
    >
      <div className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-2">
        {stat.prefix}
        {count.toLocaleString()}
        {stat.suffix}
      </div>
      <div className="text-sm md:text-base text-white/90 font-medium">
        {stat.label}
      </div>
    </motion.div>
  );
};
