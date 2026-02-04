import { motion } from 'framer-motion';
import { Tv, ChevronRight } from 'lucide-react';
import type { Season } from '@/types';

interface SeasonCardProps {
  season: Season;
  onClick: () => void;
}

export function SeasonCard({ season, onClick }: SeasonCardProps) {
  return (
    <motion.div
      onClick={onClick}
      className="group cursor-pointer"
      whileHover={{ y: -8 }}
      whileTap={{ scale: 0.98 }}
    >
      <div 
        className="relative overflow-hidden rounded-3xl bg-white p-6 transition-all duration-300"
        style={{
          boxShadow: `0 8px 32px ${season.color}30`,
        }}
      >
        {/* Background Gradient */}
        <div 
          className="absolute inset-0 opacity-10 transition-opacity duration-300 group-hover:opacity-20"
          style={{
            background: `linear-gradient(135deg, ${season.color} 0%, ${season.bgColor} 100%)`,
          }}
        />

        {/* Content */}
        <div className="relative z-10">
          {/* Header */}
          <div className="flex items-start justify-between mb-4">
            <div 
              className="w-14 h-14 rounded-2xl flex items-center justify-center transition-transform duration-300 group-hover:scale-110"
              style={{ backgroundColor: season.color }}
            >
              <Tv className="w-7 h-7 text-white" />
            </div>
            <motion.div
              className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
              whileHover={{ x: 3 }}
            >
              <ChevronRight className="w-5 h-5 text-gray-500" />
            </motion.div>
          </div>

          {/* Title */}
          <h3 className="text-xl font-bold text-gray-800 mb-1">
            {season.name}
          </h3>
          <p className="text-sm text-gray-400 mb-4">{season.nameEn}</p>

          {/* Episode Count */}
          <div className="flex items-center gap-2">
            <span 
              className="px-3 py-1 rounded-full text-sm font-semibold"
              style={{ 
                backgroundColor: `${season.color}20`,
                color: season.color,
              }}
            >
              {season.episodeCount} 集
            </span>
          </div>
        </div>

        {/* Decorative Circle */}
        <div 
          className="absolute -bottom-8 -right-8 w-32 h-32 rounded-full opacity-10 transition-transform duration-500 group-hover:scale-150"
          style={{ backgroundColor: season.color }}
        />
      </div>
    </motion.div>
  );
}
