import { motion } from 'framer-motion';
import { Sparkles, BookOpen, Sun, Cloud, Heart, Star } from 'lucide-react';
import type { ViewState } from '@/types';

interface HeroSectionProps {
  onNavigate: (view: ViewState) => void;
}

export function HeroSection({ onNavigate: _onNavigate }: HeroSectionProps) {
  return (
    <section className="relative min-h-[35vh] md:min-h-[45vh] flex items-center overflow-hidden pt-12 md:pt-16 pb-6">
      {/* Premium Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-pink-50 via-white to-pink-50/80" />
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[radial-gradient(circle,rgba(255,228,242,0.6)_0%,rgba(255,255,255,0)_70%)] opacity-70 blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[radial-gradient(circle,rgba(255,237,213,0.5)_0%,rgba(255,255,255,0)_70%)] opacity-60 blur-3xl pointer-events-none" />
      </div>

      {/* Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid md:grid-cols-2 gap-8 items-center">

          {/* Text Area */}
          <div className="max-w-2xl relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3 py-1.5 bg-white/80 backdrop-blur-sm border border-pink-100 rounded-full mb-4 shadow-sm"
            >
              <Sparkles className="w-3.5 h-3.5 text-pink-500" />
              <span className="text-xs font-bold text-pink-600 tracking-wide">
                爱学英语的妈妈，和孩子一起成长
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-3xl sm:text-4xl md:text-6xl font-extrabold text-gray-800 leading-[1.15] mb-4 tracking-tight"
            >
              妈妈和孩子
              <span className="block mt-1 text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-rose-500 to-amber-500">
                一起学英语
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-base md:text-xl text-gray-500 font-medium leading-relaxed max-w-lg"
            >
              不再只是“教”，而是
              <span className="text-gray-800 font-semibold mx-1">陪伴</span>
              与
              <span className="text-gray-800 font-semibold mx-1">共同成长</span>
            </motion.p>
          </div>

          {/* Right Side Illustration */}
          <div className="relative h-[250px] md:h-[320px] hidden md:block">
            {/* Main Composition */}
            <div className="absolute inset-0 flex items-center justify-center">
              {/* Central Circle */}
              <motion.div
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="w-64 h-64 rounded-full bg-gradient-to-tr from-pink-100/50 to-amber-50/50 backdrop-blur-sm border border-white/50 shadow-2xl shadow-pink-100/50 flex items-center justify-center relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(255,255,255,0.8),transparent)]" />

                {/* Book Icon */}
                <motion.div
                  animate={{ y: [-10, 10, -10] }}
                  transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
                >
                  <BookOpen className="w-24 h-24 text-pink-400 drop-shadow-xl opacity-90" strokeWidth={1.5} />
                </motion.div>
              </motion.div>

              {/* Floating Elements */}
              <motion.div
                animate={{ y: [0, -15, 0], rotate: [0, 5, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute top-10 right-20 p-4 bg-white rounded-3xl shadow-xl shadow-amber-100/50"
              >
                <Sun className="w-10 h-10 text-amber-400 fill-amber-400" />
              </motion.div>

              <motion.div
                animate={{ y: [0, 15, 0], x: [0, -5, 0] }}
                transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
                className="absolute bottom-20 left-10 p-4 bg-white rounded-3xl shadow-xl shadow-pink-100/50"
              >
                <Cloud className="w-12 h-12 text-sky-300 fill-sky-50" />
              </motion.div>

              <motion.div
                animate={{ scale: [1, 1.2, 1], rotate: [0, 10, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
                className="absolute top-20 left-20"
              >
                <Star className="w-8 h-8 text-yellow-400 fill-yellow-400 drop-shadow-lg" />
              </motion.div>

              <motion.div
                animate={{ y: [-5, 5, -5] }}
                transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut', delay: 1.5 }}
                className="absolute bottom-32 right-12"
              >
                <Heart className="w-8 h-8 text-rose-400 fill-rose-400 drop-shadow-lg" />
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
