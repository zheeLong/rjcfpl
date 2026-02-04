import { motion } from 'framer-motion';
import { Heart, Sparkles } from 'lucide-react';

export function Footer() {
  return (
    <footer className="relative overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-pink-400 via-pink-500 to-pink-400" />
      
      {/* Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{ y: [0, -10, 0], rotate: [0, 5, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute top-4 left-10 text-white/20"
        >
          <Sparkles className="w-8 h-8" />
        </motion.div>
        <motion.div
          animate={{ y: [0, 10, 0], rotate: [0, -5, 0] }}
          transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
          className="absolute bottom-4 right-10 text-white/20"
        >
          <Sparkles className="w-6 h-6" />
        </motion.div>
        <motion.div
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
          className="absolute top-1/2 left-1/4 text-white/10"
        >
          <Heart className="w-4 h-4" />
        </motion.div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
        <div className="flex flex-col items-center text-center">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex items-center gap-3 mb-4"
          >
            <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center">
              <img
                src="/images/peppa-icon.png"
                alt="Peppa"
                className="w-8 h-8 object-contain"
              />
            </div>
            <div>
              <h3 className="text-xl font-bold text-white">Peppa Notes</h3>
              <p className="text-sm text-white/80">小猪佩奇英语启蒙</p>
            </div>
          </motion.div>

          {/* Tagline */}
          <p className="text-white/90 text-lg font-medium mb-6">
            快乐学习，健康成长
          </p>

          {/* Divider */}
          <div className="w-24 h-0.5 bg-white/30 rounded-full mb-6" />

          {/* Copyright */}
          <p className="text-white/70 text-sm">
            Made with{' '}
            <Heart className="w-4 h-4 inline-block text-white fill-white" />{' '}
            for kids and parents
          </p>
          <p className="text-white/50 text-xs mt-2">
            © 2024 Peppa Pig English Notes. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
