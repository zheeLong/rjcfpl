import { motion } from 'framer-motion';
import { ArrowLeft, ArrowRight, Sparkles } from 'lucide-react';
import { modules, moduleIcons } from '@/data/modules';
import { ParentingModule } from '@/sections/ParentingModule';
import { PicturebooksModule } from '@/sections/PicturebooksModule';
import { OxfordTreeModule } from '@/sections/OxfordTreeModule';
import { RazModule } from '@/sections/RazModule';
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

  const Icon = moduleIcons[module.id];
  const isPeppa = module.id === 'peppa';
  const isParenting = module.id === 'parenting';
  const isPicturebooks = module.id === 'picturebooks';
  const isOxford = module.id === 'oxford';
  const isRaz = module.id === 'raz';

  return (
    <section className="relative py-24 md:py-28">
      <div className="absolute inset-0 bg-gradient-to-br from-white via-white to-pink-50" />
      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="mb-8"
        >
          <button
            onClick={() => onNavigate({ type: 'home' })}
            className="inline-flex items-center gap-2 text-sm font-semibold text-pink-600 hover:text-pink-700"
          >
            <ArrowLeft className="w-4 h-4" />
            返回首页
          </button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-white rounded-3xl shadow-xl shadow-black/5 border border-gray-100 p-8 md:p-10"
        >
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div className="flex items-center gap-4">
              <div
                className="w-14 h-14 rounded-2xl flex items-center justify-center"
                style={{ backgroundColor: module.color }}
              >
                <Icon className="w-7 h-7 text-white" />
              </div>
              <div>
                <div
                  className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold mb-2"
                  style={{ backgroundColor: module.bgColor, color: module.color }}
                >
                  <Sparkles className="w-3 h-3" />
                  {module.tag}
                </div>
                <h1 className="text-3xl md:text-4xl font-bold text-gray-800">{module.title}</h1>
                <p className="text-base md:text-lg text-gray-500 mt-2">{module.subtitle}</p>
              </div>
            </div>
            <div className="flex flex-wrap gap-3">
              {isPeppa ? (
                <button
                  onClick={() => onNavigate({ type: 'season', seasonId: 1 })}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-pink-500 to-pink-600 text-white font-semibold shadow-lg shadow-pink-200"
                >
                  进入佩奇笔记
                  <ArrowRight className="w-4 h-4" />
                </button>
              ) : (
                <button
                  onClick={() => onNavigate({ type: 'home' })}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gray-900 text-white font-semibold"
                >
                  返回首页
                  <ArrowRight className="w-4 h-4" />
                </button>
              )}
            </div>
          </div>

          <div className="mt-8 text-gray-600 leading-relaxed">{module.description}</div>

          <div className="mt-8 grid md:grid-cols-3 gap-4">
            {module.highlights.map((item) => (
              <div
                key={item}
                className="rounded-2xl px-4 py-4 border border-gray-100 bg-gray-50 text-sm text-gray-600"
              >
                {item}
              </div>
            ))}
          </div>

          {isParenting && <ParentingModule />}
          {isPicturebooks && <PicturebooksModule />}
          {isOxford && (
            <div className="mt-8 -mx-8 -mb-10 md:-mx-10 md:-mb-10">
              <OxfordTreeModule />
            </div>
          )}
          {isRaz && (
            <div className="mt-8 -mx-8 -mb-10 md:-mx-10 md:-mb-10">
              <RazModule />
            </div>
          )}

          {!isPeppa && !isParenting && !isPicturebooks && !isOxford && !isRaz && (
            <div className="mt-8 rounded-2xl border border-dashed border-pink-200 bg-pink-50/60 p-5 text-sm text-gray-600">
              内容正在整理中，先逛逛佩奇笔记与亲子英语模块，后续会持续更新。
            </div>
          )}
        </motion.div>
      </div>
    </section>
  );
}
