import { motion } from 'framer-motion';
import { Sparkles, Star } from 'lucide-react';
import type { ViewState } from '@/types';

interface HeroSectionProps {
  onNavigate: (view: ViewState) => void;
}

export function HeroSection({ onNavigate: _onNavigate }: HeroSectionProps) {
  return (
    <section className="relative min-h-[52vh] md:min-h-[58vh] flex items-center justify-center overflow-hidden pt-16 md:pt-18">
      {/* Background Gradient */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_#FFE7F1_0%,_#FFF6F9_42%,_#FFFFFF_100%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(120deg,_rgba(255,168,213,0.22)_0%,_rgba(255,255,255,0.9)_45%,_rgba(255,218,193,0.18)_100%)]" />
      </div>

      {/* Soft Shapes */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute -top-24 -right-24 w-72 h-72 rounded-full bg-pink-200/50 blur-3xl" />
        <div className="absolute top-1/3 -left-20 w-64 h-64 rounded-full bg-rose-100/70 blur-3xl" />
        <div className="absolute -bottom-24 right-1/4 w-80 h-80 rounded-full bg-orange-100/60 blur-3xl" />
      </div>

      {/* Floating Decorations */}
      <div className="absolute inset-0 z-10 pointer-events-none overflow-hidden">
        <motion.div
          animate={{ y: [0, -15, 0], rotate: [0, 10, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute top-32 left-[10%] text-pink-300"
        >
          <Sparkles className="w-8 h-8 md:w-12 md:h-12" />
        </motion.div>
        <motion.div
          animate={{ y: [0, 15, 0], rotate: [0, -10, 0] }}
          transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
          className="absolute top-48 right-[15%] text-pink-300"
        >
          <Star className="w-6 h-6 md:w-10 md:h-10" />
        </motion.div>
        <motion.div
          animate={{ y: [0, -10, 0], scale: [1, 1.1, 1] }}
          transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
          className="absolute bottom-32 left-[20%] text-pink-200"
        >
          <Sparkles className="w-5 h-5 md:w-8 md:h-8" />
        </motion.div>
      </div>

      {/* Content */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="max-w-2xl py-4 md:py-6">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-pink-100 rounded-full mb-6"
          >
            <Sparkles className="w-4 h-4 text-pink-500" />
            <span className="text-sm font-semibold text-pink-600">
              3-8岁英语启蒙首选
            </span>
          </motion.div>

          {/* Title */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.34, 1.56, 0.64, 1] }}
            className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-gray-800 leading-tight mb-4"
          >
            苒妈英语
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-pink-600">
              启蒙成长计划
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3, ease: [0.34, 1.56, 0.64, 1] }}
            className="text-xl md:text-2xl text-gray-600 font-medium mb-4"
          >
            亲子陪伴式英语启蒙，从兴趣到能力稳步提升
          </motion.p>

          {/* Description */}
          {/* <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4, ease: [0.34, 1.56, 0.64, 1] }}
            className="text-base md:text-lg text-gray-500 mb-8 max-w-lg"
          >
            覆盖亲子英语、佩奇笔记、牛津树精读、RAZ精读、绘本推荐、
            绘本拓展与经验分享，让学习内容更系统、更落地、更可持续。
          </motion.p> */}
        </div>
      </div>
    </section>
  );
}
