import { motion } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';
import { AnimatedSection, StaggerContainer, StaggerItem } from '@/components/AnimatedSection';
import { modules, moduleIcons } from '@/data/modules';
import type { ViewState } from '@/types';

interface ModulesSectionProps {
  onNavigate: (view: ViewState) => void;
}

export function ModulesSection({ onNavigate }: ModulesSectionProps) {
  return (
    <section id="modules" className="py-16 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center mb-10 md:mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-pink-100 rounded-full mb-4">
            <Sparkles className="w-4 h-4 text-pink-500" />
            <span className="text-sm font-semibold text-pink-600">学习模块导航</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            苒妈英语启蒙的 <span className="text-pink-500">7 大模块</span>
          </h2>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto">
            覆盖亲子英语、动画精读、分级阅读与绘本拓展，构建系统化启蒙路径
          </p>
        </AnimatedSection>

        <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {modules.map((module) => (
            <StaggerItem key={module.id}>
              <motion.button
                onClick={() => onNavigate({ type: 'module', moduleId: module.id })}
                className="group relative text-left w-full h-full rounded-3xl p-6 md:p-7 bg-white shadow-lg shadow-black/5 border border-gray-100 transition-all duration-300 hover:-translate-y-1"
                whileHover={{ y: -6 }}
                whileTap={{ scale: 0.98 }}
              >
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-3xl"
                  style={{ background: `linear-gradient(135deg, ${module.bgColor} 0%, white 80%)` }}
                />
                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-5">
                    <div
                      className="w-12 h-12 rounded-2xl flex items-center justify-center"
                      style={{ backgroundColor: module.color }}
                    >
                      {(() => {
                        const Icon = moduleIcons[module.id];
                        return <Icon className="w-6 h-6 text-white" />;
                      })()}
                    </div>
                    <span
                      className="text-xs font-semibold px-3 py-1 rounded-full"
                      style={{ backgroundColor: module.bgColor, color: module.color }}
                    >
                      {module.tag}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-gray-800 mb-2">{module.title}</h3>
                  <p className="text-sm text-gray-500 font-medium mb-3">{module.subtitle}</p>
                  <p className="text-gray-500 leading-relaxed mb-5">{module.description}</p>

                  <div className="flex items-center text-sm font-semibold text-pink-600">
                    查看模块
                    <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
                  </div>
                </div>
              </motion.button>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
