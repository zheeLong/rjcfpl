import { Sparkles } from 'lucide-react';
import { SeasonCard } from '@/components/SeasonCard';
import { AnimatedSection, StaggerContainer, StaggerItem } from '@/components/AnimatedSection';
import { seasons } from '@/data/seasons';
import type { ViewState } from '@/types';

interface SeasonSelectorProps {
  onNavigate: (view: ViewState) => void;
}

export function SeasonSelector({ onNavigate }: SeasonSelectorProps) {
  return (
    <section id="seasons" className="py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <AnimatedSection className="text-center mb-12 md:mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-pink-100 rounded-full mb-4">
            <Sparkles className="w-4 h-4 text-pink-500" />
            <span className="text-sm font-semibold text-pink-600">选择季节</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            小猪佩奇共有 <span className="text-pink-500">9季</span> 精彩内容
          </h2>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto">
            每一集都包含完整的英语启蒙教学内容，点击季节开始探索吧！
          </p>
        </AnimatedSection>

        {/* Season Grid */}
        <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {seasons.map((season) => (
            <StaggerItem key={season.id}>
              <SeasonCard
                season={season}
                onClick={() => onNavigate({ type: 'season', seasonId: season.id })}
              />
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
