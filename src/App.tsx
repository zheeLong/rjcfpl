import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { HeroSection } from '@/sections/HeroSection';
import { SeasonSelector } from '@/sections/SeasonSelector';
import { EpisodeList } from '@/sections/EpisodeList';
import { FeaturesSection } from '@/sections/FeaturesSection';
import { NoteDetail } from '@/components/NoteDetail';
import type { ViewState } from '@/types';

function App() {
  const [currentView, setCurrentView] = useState<ViewState>({ type: 'home' });
  const [isLoading, setIsLoading] = useState(true);

  // Simulate initial loading
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  // Handle navigation
  const handleNavigate = (view: ViewState) => {
    setCurrentView(view);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Loading screen
  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-pink-50 to-pink-100">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.8, opacity: 0 }}
          className="text-center"
        >
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
            className="w-16 h-16 mx-auto mb-4"
          >
            <img
              src="/images/peppa-icon.png"
              alt="Loading"
              className="w-full h-full object-contain"
            />
          </motion.div>
          <p className="text-pink-500 font-medium">加载中...</p>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-50/50 to-white">
      {/* Navigation */}
      <Navbar onNavigate={handleNavigate} currentView={currentView} />

      {/* Main Content */}
      <main>
        <AnimatePresence mode="wait">
          {currentView.type === 'home' && (
            <motion.div
              key="home"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <HeroSection onNavigate={handleNavigate} />
              <SeasonSelector onNavigate={handleNavigate} />
              <FeaturesSection />
            </motion.div>
          )}

          {currentView.type === 'season' && (
            <motion.div
              key={`season-${currentView.seasonId}`}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
            >
              <EpisodeList
                seasonId={currentView.seasonId}
                onNavigate={handleNavigate}
              />
            </motion.div>
          )}

          {currentView.type === 'note' && (
            <motion.div
              key={`note-${currentView.episodeId}`}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
            >
              <NoteDetail
                episodeId={currentView.episodeId}
                onNavigate={handleNavigate}
              />
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      {/* Footer - Only show on home page */}
      {currentView.type === 'home' && <Footer />}
    </div>
  );
}

export default App;
