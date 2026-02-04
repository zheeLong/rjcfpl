import { motion } from 'framer-motion';
import { Menu, X, BookOpen } from 'lucide-react';
import { useState } from 'react';
import type { ViewState } from '@/types';

interface NavbarProps {
  onNavigate: (view: ViewState) => void;
  currentView: ViewState;
}

export function Navbar({ onNavigate, currentView }: NavbarProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const isHome = currentView.type === 'home';

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
      className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-pink-100"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <motion.button
            onClick={() => onNavigate({ type: 'home' })}
            className="flex items-center gap-3 group"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-gradient-to-br from-pink-400 to-pink-500 flex items-center justify-center shadow-lg shadow-pink-200">
              <img
                src="/images/peppa-icon.png"
                alt="Peppa"
                className="w-7 h-7 md:w-8 md:h-8 object-contain"
              />
            </div>
            <div className="hidden sm:block">
              <h1 className="text-lg md:text-xl font-bold text-pink-600 leading-tight">
                Peppa Notes
              </h1>
              <p className="text-xs text-pink-400">小猪佩奇英语启蒙</p>
            </div>
          </motion.button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            <NavButton
              active={isHome}
              onClick={() => onNavigate({ type: 'home' })}
              icon={<BookOpen className="w-4 h-4" />}
            >
              首页
            </NavButton>
            <NavButton
              active={!isHome}
              onClick={() => onNavigate({ type: 'season', seasonId: 1 })}
            >
              开始学习
            </NavButton>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-xl hover:bg-pink-50 transition-colors"
          >
            {isMenuOpen ? (
              <X className="w-6 h-6 text-pink-600" />
            ) : (
              <Menu className="w-6 h-6 text-pink-600" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <motion.div
        initial={false}
        animate={{
          height: isMenuOpen ? 'auto' : 0,
          opacity: isMenuOpen ? 1 : 0,
        }}
        transition={{ duration: 0.3 }}
        className="md:hidden overflow-hidden bg-white/95 backdrop-blur-md border-t border-pink-100"
      >
        <div className="px-4 py-4 space-y-2">
          <MobileNavButton
            active={isHome}
            onClick={() => {
              onNavigate({ type: 'home' });
              setIsMenuOpen(false);
            }}
          >
            首页
          </MobileNavButton>
          <MobileNavButton
            active={!isHome}
            onClick={() => {
              onNavigate({ type: 'season', seasonId: 1 });
              setIsMenuOpen(false);
            }}
          >
            开始学习
          </MobileNavButton>
        </div>
      </motion.div>
    </motion.nav>
  );
}

interface NavButtonProps {
  children: React.ReactNode;
  active?: boolean;
  onClick: () => void;
  icon?: React.ReactNode;
}

function NavButton({ children, active, onClick, icon }: NavButtonProps) {
  return (
    <motion.button
      onClick={onClick}
      className={`flex items-center gap-2 px-5 py-2.5 rounded-full font-semibold text-sm transition-all duration-200 ${
        active
          ? 'bg-pink-500 text-white shadow-lg shadow-pink-200'
          : 'text-pink-600 hover:bg-pink-50'
      }`}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      {icon}
      {children}
    </motion.button>
  );
}

function MobileNavButton({ children, active, onClick }: NavButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`w-full text-left px-4 py-3 rounded-xl font-medium transition-all duration-200 ${
        active
          ? 'bg-pink-500 text-white'
          : 'text-pink-700 hover:bg-pink-50'
      }`}
    >
      {children}
    </button>
  );
}
