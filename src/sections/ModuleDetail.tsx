import { motion } from 'framer-motion';
import { ArrowLeft, Sparkles } from 'lucide-react';
import { modules } from '@/data/modules';
import { ParentingModule } from '@/sections/ParentingModule';
import { PicturebooksModule } from '@/sections/PicturebooksModule';
import { OxfordTreeModule } from '@/sections/OxfordTreeModule';
import { RazModule } from '@/sections/RazModule';
import { SeasonSelector } from '@/sections/SeasonSelector';
import type { ModuleId, ViewState } from '@/types';

interface ModuleDetailProps {
  moduleId: ModuleId;
  onNavigate: (view: ViewState) => void;
}

export function ModuleDetail({ moduleId, onNavigate }: ModuleDetailProps) {
  const module = modules.find((item) => item.id === moduleId);

  if (!module) {
    return (
      <section className="py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">模块不存在</h2>
          <button
            onClick={() => onNavigate({ type: 'home' })}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-pink-500 text-white font-semibold"
          >
            <ArrowLeft className="w-4 h-4" />
            返回首页
          </button>
        </div>
      </section>
    );
  }

  const isPeppa = module.id === 'peppa';
  const isParenting = module.id === 'parenting';
  const isPicturebooks = module.id === 'picturebooks';
  const isOxford = module.id === 'oxford';
  const isRaz = module.id === 'raz';

  return (
    <section className="relative min-h-screen bg-white">
      {/* 统一的返回按钮 - 悬浮在左上角 */}
      <div className="fixed top-20 left-4 z-50 md:left-8">
        <motion.button
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
          onClick={() => onNavigate({ type: 'home' })}
          className="group flex items-center justify-center w-10 h-10 md:w-12 md:h-12 rounded-full bg-white/90 backdrop-blur-md shadow-lg border border-gray-100 text-gray-600 hover:text-pink-600 hover:scale-110 transition-all duration-300"
        >
          <ArrowLeft className="w-5 h-5 md:w-6 md:h-6 transition-transform group-hover:-translate-x-1" />
        </motion.button>
      </div>

      {/* 模块内容 */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        {isPeppa && (
          <div className="pt-24 px-4 md:pt-28 md:px-8 max-w-7xl mx-auto">
            <SeasonSelector onNavigate={onNavigate} />
          </div>
        )}

        {/* 其他模块自带全屏或宽屏布局，无需额外padding容器 */}
        {isParenting && <ParentingModule />}
        {isPicturebooks && <PicturebooksModule />}
        {isOxford && <OxfordTreeModule />}
        {isRaz && <RazModule />}

        {!isPeppa && !isParenting && !isPicturebooks && !isOxford && !isRaz && (
          <div className="pt-32 px-4 text-center">
            <div className="max-w-2xl mx-auto rounded-2xl border border-dashed border-pink-200 bg-pink-50/60 p-10 text-gray-600">
              <Sparkles className="w-10 h-10 text-pink-400 mx-auto mb-4" />
              <p>内容正在整理中，先逛逛佩奇笔记与亲子英语模块，后续会持续更新。</p>
            </div>
          </div>
        )}
      </motion.div>
    </section>
  );
}
