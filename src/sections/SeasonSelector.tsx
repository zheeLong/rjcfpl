import { Sparkles } from 'lucide-react';
import { SeasonCard } from '@/components/SeasonCard';
import { AnimatedSection, StaggerContainer, StaggerItem } from '@/components/AnimatedSection';
import { seasons } from '@/data/seasons';
import type { ViewState } from '@/types';

interface SeasonSelectorProps {
  onNavigate: (view: ViewState) => void;
  hideHeader?: boolean;
}

export function SeasonSelector({ onNavigate, hideHeader = false }: SeasonSelectorProps) {
  return (
    <section id="seasons" className={hideHeader ? "py-4 md:py-8" : "py-20 md:py-28"}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        {!hideHeader && (
          <AnimatedSection className="text-center mb-12 md:mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-pink-100 rounded-full mb-4">
              <Sparkles className="w-4 h-4 text-pink-500" />
              <span className="text-sm font-semibold text-pink-600">佩奇笔记入口</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              从 <span className="text-pink-500">佩奇笔记</span> 开始系统学习
            </h2>
            <p className="text-lg text-gray-500 max-w-2xl mx-auto">
              每一集都包含台词、词汇、句型、问答与亲子游戏，点击季节开始探索吧！
            </p>
          </AnimatedSection>
        )}

        {/* Season Grid */}
        <StaggerContainer className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-6">
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
