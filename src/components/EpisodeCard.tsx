import { motion } from 'framer-motion';
import { BookOpen, MessageCircle, Play } from 'lucide-react';
import type { Episode } from '@/types';

interface EpisodeCardProps {
  episode: Episode;
  onClick: () => void;
  color: string;
}

export function EpisodeCard({ episode, onClick, color }: EpisodeCardProps) {
  return (
    <motion.div
      onClick={onClick}
      className="group cursor-pointer"
      whileHover={{ y: -6 }}
      whileTap={{ scale: 0.98 }}
    >
      <div className="relative overflow-hidden rounded-2xl bg-white p-5 transition-all duration-300 hover:shadow-xl"
        style={{
          boxShadow: `0 4px 20px ${color}20`,
        }}
      >
        {/* Episode Number Badge */}
        <div className="flex items-center justify-between mb-4">
          <span 
            className="px-3 py-1 rounded-full text-xs font-bold"
            style={{ 
              backgroundColor: `${color}20`,
              color: color,
            }}
          >
            {episode.id.toUpperCase()}
          </span>
          <motion.div
            className="w-8 h-8 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all"
            style={{ backgroundColor: color }}
            whileHover={{ scale: 1.1 }}
          >
            <Play className="w-4 h-4 text-white ml-0.5" />
          </motion.div>
        </div>

        {/* Title */}
        <h3 className="text-lg font-bold text-gray-800 mb-1 group-hover:text-pink-500 transition-colors">
          {episode.titleEn}
        </h3>
        <p className="text-sm text-gray-500 mb-4">{episode.titleCn}</p>

        {/* Stats */}
        <div className="flex items-center gap-3">
          <StatBadge 
            icon={<BookOpen className="w-3 h-3" />} 
            count={episode.vocabularyCount} 
            label="词汇"
            color={color}
          />
          <StatBadge 
            icon={<MessageCircle className="w-3 h-3" />} 
            count={episode.patternCount} 
            label="句型"
            color={color}
          />
        </div>

        {/* Hover Indicator */}
        <div 
          className="absolute bottom-0 left-0 right-0 h-1 opacity-0 group-hover:opacity-100 transition-opacity"
          style={{ backgroundColor: color }}
        />
      </div>
    </motion.div>
  );
}

interface StatBadgeProps {
  icon: React.ReactNode;
  count: number;
  label: string;
  color: string;
}

function StatBadge({ icon, count, label, color }: StatBadgeProps) {
  return (
    <div 
      className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-xs font-medium"
      style={{ 
        backgroundColor: `${color}15`,
        color: color,
      }}
    >
      {icon}
      <span>{count} {label}</span>
    </div>
  );
}
