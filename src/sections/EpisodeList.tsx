import { motion } from 'framer-motion';
import { ArrowLeft, Tv, Sparkles } from 'lucide-react';
import { EpisodeCard } from '@/components/EpisodeCard';
import { AnimatedSection, StaggerContainer, StaggerItem } from '@/components/AnimatedSection';
import { seasons } from '@/data/seasons';
import { getEpisodesBySeason } from '@/data/episodes';
import type { ViewState } from '@/types';

interface EpisodeListProps {
  seasonId: number;
  onNavigate: (view: ViewState) => void;
}

export function EpisodeList({ seasonId, onNavigate }: EpisodeListProps) {
  const season = seasons.find(s => s.id === seasonId);
  const episodes = getEpisodesBySeason(seasonId);

  if (!season) return null;

  return (
    <section className="py-20 md:py-28 pt-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Button */}
        <AnimatedSection>
          <motion.button
            onClick={() => onNavigate({ type: 'home' })}
            className="flex items-center gap-2 text-gray-500 hover:text-pink-500 transition-colors mb-6"
            whileHover={{ x: -3 }}
          >
            <ArrowLeft className="w-5 h-5" />
            <span className="font-medium">返回首页</span>
          </motion.button>
        </AnimatedSection>

        {/* Season Header */}
        <AnimatedSection className="mb-10">
          <div 
            className="relative overflow-hidden rounded-3xl p-8 md:p-10"
            style={{ backgroundColor: season.bgColor }}
          >
            {/* Decorative Elements */}
            <div 
              className="absolute -top-10 -right-10 w-40 h-40 rounded-full opacity-30"
              style={{ backgroundColor: season.color }}
            />
            <div 
              className="absolute -bottom-8 -left-8 w-24 h-24 rounded-full opacity-20"
              style={{ backgroundColor: season.color }}
            />

            <div className="relative z-10 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <div 
                    className="w-12 h-12 rounded-xl flex items-center justify-center"
                    style={{ backgroundColor: season.color }}
                  >
                    <Tv className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h1 className="text-2xl md:text-3xl font-bold text-gray-800">
                      {season.name}
                    </h1>
                    <p className="text-gray-500">{season.nameEn}</p>
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div 
                  className="px-5 py-2.5 rounded-xl font-semibold"
                  style={{ 
                    backgroundColor: `${season.color}30`,
                    color: season.color,
                  }}
                >
                  共 {season.episodeCount} 集
                </div>
              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* Episodes Grid */}
        {episodes.length > 0 ? (
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {episodes.map((episode) => (
              <StaggerItem key={episode.id}>
                <EpisodeCard
                  episode={episode}
                  onClick={() => onNavigate({ type: 'note', episodeId: episode.id })}
                  color={season.color}
                />
              </StaggerItem>
            ))}
          </StaggerContainer>
        ) : (
          <AnimatedSection className="text-center py-20">
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-pink-100 mb-4">
              <Sparkles className="w-10 h-10 text-pink-400" />
            </div>
            <h3 className="text-xl font-bold text-gray-700 mb-2">内容准备中</h3>
            <p className="text-gray-500">这个季节的笔记正在整理中，敬请期待！</p>
          </AnimatedSection>
        )}
      </div>
    </section>
  );
}
