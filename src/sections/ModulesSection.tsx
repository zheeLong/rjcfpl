import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { StaggerContainer, StaggerItem } from '@/components/AnimatedSection';
import { modules, moduleIcons } from '@/data/modules';
import type { ViewState } from '@/types';

interface ModulesSectionProps {
  onNavigate: (view: ViewState) => void;
}

export function ModulesSection({ onNavigate }: ModulesSectionProps) {
  return (
    <section id="modules" className="py-4 md:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">


        <StaggerContainer className="grid grid-cols-2 lg:grid-cols-3 gap-3 md:gap-6">
          {modules.map((module) => (
            <StaggerItem key={module.id}>
              <motion.button
                onClick={() => onNavigate({ type: 'module', moduleId: module.id })}
                className="group relative text-left w-full h-full rounded-2xl md:rounded-3xl p-3 md:p-7 bg-white shadow-lg shadow-black/5 border border-gray-100 transition-all duration-300 hover:-translate-y-1"
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
                      className="w-8 h-8 md:w-12 md:h-12 rounded-xl md:rounded-2xl flex items-center justify-center"
                      style={{ backgroundColor: module.color }}
                    >
                      {(() => {
                        const Icon = moduleIcons[module.id];
                        return <Icon className="w-4 h-4 md:w-6 md:h-6 text-white" />;
                      })()}
                    </div>
                    <span
                      className="text-[10px] md:text-xs font-semibold px-2 md:px-3 py-0.5 md:py-1 rounded-full scale-90 md:scale-100 origin-right"
                      style={{ backgroundColor: module.bgColor, color: module.color }}
                    >
                      {module.tag}
                    </span>
                  </div>

                  <h3 className="text-sm md:text-xl font-bold text-gray-800 mb-1 md:mb-2">{module.title}</h3>
                  <p className="text-xs md:text-sm text-gray-500 font-medium mb-0 md:mb-3">{module.subtitle}</p>
                  <p className="hidden md:block text-gray-500 leading-relaxed mb-5">{module.description}</p>

                  <div className="hidden md:flex items-center text-sm font-semibold text-pink-600">
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
