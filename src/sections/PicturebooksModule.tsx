import { useMemo, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, BookOpen, Star, Heart, Sparkles, Filter, X } from 'lucide-react';
import { pictureBooks } from '@/data/picturebooks';

const normalize = (value: string) => value.trim().toLowerCase();

// 分类颜色映射
const categoryColors: Record<string, { bg: string; text: string; border: string; gradient: string }> = {
  'Knight Owl系列': { bg: 'bg-amber-50', text: 'text-amber-600', border: 'border-amber-200', gradient: 'from-amber-400 to-orange-400' },
  'Penelope系列': { bg: 'bg-rose-50', text: 'text-rose-600', border: 'border-rose-200', gradient: 'from-rose-400 to-pink-400' },
  'The World of Gustavo系列': { bg: 'bg-purple-50', text: 'text-purple-600', border: 'border-purple-200', gradient: 'from-purple-400 to-violet-400' },
  '宇宙系列': { bg: 'bg-blue-50', text: 'text-blue-600', border: 'border-blue-200', gradient: 'from-blue-400 to-indigo-400' },
  'MAX系列': { bg: 'bg-orange-50', text: 'text-orange-600', border: 'border-orange-200', gradient: 'from-orange-400 to-amber-400' },
  'Oliver合集': { bg: 'bg-teal-50', text: 'text-teal-600', border: 'border-teal-200', gradient: 'from-teal-400 to-cyan-400' },
  '单本': { bg: 'bg-pink-50', text: 'text-pink-600', border: 'border-pink-200', gradient: 'from-pink-400 to-rose-400' },
  'Brendan Wenzel两本': { bg: 'bg-emerald-50', text: 'text-emerald-600', border: 'border-emerald-200', gradient: 'from-emerald-400 to-green-400' },
  '新年专题': { bg: 'bg-red-50', text: 'text-red-600', border: 'border-red-200', gradient: 'from-red-400 to-rose-400' },
  '生日专题': { bg: 'bg-yellow-50', text: 'text-yellow-600', border: 'border-yellow-200', gradient: 'from-yellow-400 to-amber-400' },
  'Benji Davies合集': { bg: 'bg-sky-50', text: 'text-sky-600', border: 'border-sky-200', gradient: 'from-sky-400 to-blue-400' },
  'Jarvis合集': { bg: 'bg-lime-50', text: 'text-lime-600', border: 'border-lime-200', gradient: 'from-lime-400 to-green-400' },
};

const getCategoryStyle = (category: string) => {
  return categoryColors[category] || {
    bg: 'bg-gray-50',
    text: 'text-gray-600',
    border: 'border-gray-200',
    gradient: 'from-gray-400 to-slate-400'
  };
};

// 卡片动画
const cardVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      delay: i * 0.05,
      duration: 0.4,
      ease: "easeOut" as const
    }
  })
};

type CoverImageProps = {
  src: string;
  alt: string;
  gradient: string;
  initial: string;
  className: string;
};

function CoverImage({ src, alt, gradient, initial, className }: CoverImageProps) {
  const [loaded, setLoaded] = useState(false);
  const [failed, setFailed] = useState(false);
  const hasImage = Boolean(src) && !failed;

  return (
    <div className={`${className} relative overflow-hidden ${hasImage ? '' : `bg-gradient-to-br ${gradient}`}`}>
      {hasImage ? (
        <>
          <img
            src={src}
            alt={alt}
            loading="lazy"
            decoding="async"
            onLoad={() => setLoaded(true)}
            onError={() => setFailed(true)}
            className={`w-full h-full object-cover transition-all duration-500 ${loaded ? 'opacity-100' : 'opacity-0'} group-hover:scale-110`}
          />
          <div
            className={`absolute inset-0 bg-gradient-to-br from-slate-100 to-slate-200 animate-pulse transition-opacity duration-500 ${loaded ? 'opacity-0' : 'opacity-100'
              }`}
          />
        </>
      ) : (
        <div className="w-full h-full flex items-center justify-center">
          <span className="text-3xl font-bold text-white/90">{initial}</span>
        </div>
      )}
    </div>
  );
}

export function PicturebooksModule() {
  const [query, setQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState('全部');
  const [favorites, setFavorites] = useState<Set<string>>(new Set());
  const [selectedBook, setSelectedBook] = useState<typeof pictureBooks[0] | null>(null);

  const categories = useMemo(() => {
    const map = new Map<string, number>();
    pictureBooks.forEach((book) => {
      const cat = book.category || '未分类';
      map.set(cat, (map.get(cat) || 0) + 1);
    });
    return ['全部', ...Array.from(map.entries()).sort((a, b) => b[1] - a[1]).map(([name]) => name)];
  }, []);

  const filtered = useMemo(() => {
    const q = normalize(query);
    return pictureBooks.filter((book) => {
      const cat = book.category || '未分类';
      if (activeCategory !== '全部' && cat !== activeCategory) return false;
      if (!q) return true;
      return (
        normalize(book.title).includes(q) ||
        normalize(book.author).includes(q) ||
        normalize(book.category).includes(q) ||
        normalize(book.intro).includes(q)
      );
    });
  }, [query, activeCategory]);

  const toggleFavorite = (bookKey: string, e: React.MouseEvent) => {
    e.stopPropagation();
    setFavorites(prev => {
      const newFavorites = new Set(prev);
      if (newFavorites.has(bookKey)) {
        newFavorites.delete(bookKey);
      } else {
        newFavorites.add(bookKey);
      }
      return newFavorites;
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-white to-pink-50">
      {/* 背景装饰 */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{ y: [-5, 5, -5], rotate: [0, 5, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-20 left-10 text-6xl opacity-10"
        >
          📚
        </motion.div>
        <motion.div
          animate={{ y: [-5, 5, -5], rotate: [0, -5, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute top-40 right-20 text-5xl opacity-10"
        >
          🌟
        </motion.div>
        <motion.div
          animate={{ y: [-5, 5, -5] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute bottom-40 left-20 text-4xl opacity-10"
        >
          🎨
        </motion.div>
        <motion.div
          animate={{ y: [-5, 5, -5], rotate: [0, 10, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
          className="absolute bottom-20 right-10 text-5xl opacity-10"
        >
          ✨
        </motion.div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 py-8">
        {/* 标题区域 */}
        <div className="text-center space-y-4 py-8">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 200, damping: 15 }}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white shadow-lg border border-amber-100"
          >
            <BookOpen className="w-4 h-4 text-amber-500" />
            <span className="text-amber-600 text-sm font-semibold">精选绘本推荐</span>
            <Sparkles className="w-4 h-4 text-amber-500" />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold"
          >
            <span className="bg-gradient-to-r from-amber-500 via-orange-500 to-pink-500 bg-clip-text text-transparent">
              绘本推荐
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-gray-500 max-w-lg mx-auto text-base"
          >
            精选优质英文绘本，陪伴孩子快乐成长，开启阅读之旅
          </motion.p>
        </div>

        {/* 搜索和统计 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="flex flex-col md:flex-row gap-4 md:items-center md:justify-between bg-white/80 backdrop-blur-sm rounded-2xl p-4 shadow-sm border border-amber-100 mb-6"
        >
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
            <input
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="搜索绘本名 / 作者 / 分类..."
              className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 pl-11 text-sm text-gray-700 shadow-inner focus:border-amber-300 focus:outline-none focus:ring-2 focus:ring-amber-100 transition-all"
            />
            {query && (
              <button
                onClick={() => setQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 w-6 h-6 rounded-full bg-gray-200 hover:bg-gray-300 flex items-center justify-center transition-colors"
              >
                <X className="w-3 h-3 text-gray-500" />
              </button>
            )}
          </div>

          <div className="flex items-center gap-3">
            <Filter className="w-4 h-4 text-gray-400" />
            <p className="text-sm text-gray-500">
              共 <span className="font-semibold text-amber-600">{filtered.length}</span> 本绘本
            </p>
          </div>
        </motion.div>

        {/* 分类筛选 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="flex flex-wrap gap-2 mb-8"
        >
          {categories.map((cat, index) => {
            const isActive = activeCategory === cat;
            const style = cat === '全部'
              ? { bg: 'bg-amber-50', text: 'text-amber-600', border: 'border-amber-200', gradient: 'from-amber-400 to-orange-400' }
              : getCategoryStyle(cat);

            return (
              <motion.button
                key={cat}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.03 }}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-full text-sm font-medium border transition-all duration-300 ${isActive
                    ? `bg-gradient-to-r ${style.gradient} text-white border-transparent shadow-lg`
                    : `bg-white ${style.text} ${style.border} hover:shadow-md hover:-translate-y-0.5`
                  }`}
              >
                {cat}
                {cat !== '全部' && (
                  <span className={`ml-1.5 text-xs ${isActive ? 'text-white/80' : 'opacity-60'}`}>
                    ({pictureBooks.filter(b => b.category === cat).length})
                  </span>
                )}
              </motion.button>
            );
          })}
        </motion.div>

        {/* 绘本网格 */}
        <div className="grid grid-cols-2 gap-3 md:gap-5 lg:grid-cols-3">
          <AnimatePresence mode="popLayout">
            {filtered.map((book, index) => {
              const hasCover = Boolean(book.cover) && book.cover.toLowerCase() !== 'image.png';
              const coverSrc = hasCover ? book.cover : '';
              const titleInitial = book.title ? book.title.slice(0, 1).toUpperCase() : 'B';
              const bookKey = `${book.title}-${book.author}`;
              const isFavorite = favorites.has(bookKey);
              const categoryStyle = getCategoryStyle(book.category || '单本');

              return (
                <motion.article
                  key={bookKey}
                  layout
                  custom={index}
                  variants={cardVariants}
                  initial="hidden"
                  animate="visible"
                  exit={{ opacity: 0, scale: 0.9 }}
                  onClick={() => setSelectedBook(book)}
                  className="group rounded-2xl md:rounded-3xl bg-white p-3 md:p-5 shadow-md hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-100 cursor-pointer relative overflow-hidden"
                >
                  {/* 收藏按钮 */}
                  <button
                    onClick={(e) => toggleFavorite(bookKey, e)}
                    className="absolute top-2 right-2 md:top-4 md:right-4 z-20 w-7 h-7 md:w-9 md:h-9 rounded-full bg-white/90 backdrop-blur-sm shadow-md flex items-center justify-center transition-all hover:scale-110"
                  >
                    <Heart className={`w-3 h-3 md:w-4 md:h-4 transition-colors ${isFavorite ? 'fill-rose-500 text-rose-500' : 'text-gray-400 hover:text-rose-400'}`} />
                  </button>

                  <div className="flex flex-col md:flex-row gap-3 md:gap-4">
                    {/* 封面 */}
                    <div className="w-full md:w-24 h-32 md:h-32 rounded-xl md:rounded-2xl flex-shrink-0 shadow-lg relative">
                      <CoverImage
                        src={coverSrc}
                        alt={book.title}
                        gradient={categoryStyle.gradient}
                        initial={titleInitial}
                        className="w-full h-full rounded-2xl"
                      />

                      {/* 评分徽章 */}
                      {book.rating && book.rating !== '待补充' && (
                        <div className="absolute top-2 left-2 px-2 py-0.5 rounded-full bg-amber-400 text-white text-xs font-bold shadow-md flex items-center gap-0.5">
                          <Star className="w-3 h-3 fill-white" />
                          {book.rating}
                        </div>
                      )}
                    </div>

                    {/* 内容 */}
                    <div className="flex-1 min-w-0">
                      {/* 分类标签 */}
                      <div className="flex flex-wrap items-center gap-1.5 mb-2">
                        {book.category && (
                          <span className={`px-2.5 py-1 rounded-full text-xs font-medium ${categoryStyle.bg} ${categoryStyle.text} border ${categoryStyle.border}`}>
                            {book.category}
                          </span>
                        )}
                      </div>

                      {/* 标题 */}
                      <h3 className="text-sm md:text-lg font-bold text-gray-800 group-hover:text-amber-600 transition-colors line-clamp-2 leading-tight">
                        {book.title}
                      </h3>

                      {/* 作者 */}
                      {book.author && (
                        <p className="text-sm text-gray-500 mt-1.5 flex items-center gap-1">
                          <span className="text-gray-400">作者：</span>
                          <span className="font-medium">{book.author}</span>
                        </p>
                      )}

                      {/* 年龄建议 */}
                      {book.age && book.age !== '待补充' && (
                        <p className="text-xs text-rose-500 mt-1.5 font-medium">
                          适合年龄：{book.age}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* 简介预览 */}
                  {book.intro && (
                    <div className="mt-4 pt-4 border-t border-gray-100">
                      <p className="text-sm text-gray-600 line-clamp-2 leading-relaxed">
                        {book.intro}
                      </p>
                      <p className="hidden md:block text-xs text-amber-500 mt-2 font-medium group-hover:text-amber-600 transition-colors">
                        点击查看详情 →
                      </p>
                    </div>
                  )}

                  {/* 悬停光效 */}
                  <div className="absolute inset-0 bg-gradient-to-t from-amber-50/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                </motion.article>
              );
            })}
          </AnimatePresence>
        </div>

        {/* 空状态 */}
        {filtered.length === 0 && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="rounded-3xl border-2 border-dashed border-amber-200 p-16 text-center bg-white/50"
          >
            <div className="text-7xl mb-6">🔍</div>
            <p className="text-gray-600 text-xl font-medium">没有找到匹配的绘本</p>
            <p className="text-gray-400 text-sm mt-2">请尝试其他关键词或分类</p>
            <button
              onClick={() => { setQuery(''); setActiveCategory('全部'); }}
              className="mt-6 px-6 py-2.5 rounded-full bg-amber-500 text-white font-medium hover:bg-amber-600 transition-colors shadow-lg"
            >
              清除筛选
            </button>
          </motion.div>
        )}
      </div>

      {/* 详情弹窗 */}
      <AnimatePresence>
        {selectedBook && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
            onClick={() => setSelectedBook(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="bg-white rounded-3xl max-w-2xl w-full max-h-[85vh] overflow-y-auto shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              {/* 弹窗头部 */}
              <div className="sticky top-0 bg-white border-b border-gray-100 p-6 flex items-start gap-4 z-10">
                <button
                  onClick={() => setSelectedBook(null)}
                  className="absolute top-4 right-4 w-8 h-8 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-colors"
                >
                  <X className="w-4 h-4 text-gray-500" />
                </button>

                <CoverImage
                  src={selectedBook.cover && selectedBook.cover.toLowerCase() !== 'image.png' ? selectedBook.cover : ''}
                  alt={selectedBook.title}
                  gradient={getCategoryStyle(selectedBook.category || '单本').gradient}
                  initial={selectedBook.title?.slice(0, 1).toUpperCase() || 'B'}
                  className="w-20 h-28 rounded-xl flex-shrink-0 shadow-lg"
                />

                <div className="flex-1 pr-8">
                  <h2 className="text-2xl font-bold text-gray-800">{selectedBook.title}</h2>
                  <p className="text-gray-500 mt-1">{selectedBook.author}</p>

                  <div className="flex flex-wrap items-center gap-2 mt-3">
                    {selectedBook.category && (
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${getCategoryStyle(selectedBook.category).bg} ${getCategoryStyle(selectedBook.category).text}`}>
                        {selectedBook.category}
                      </span>
                    )}
                    {selectedBook.rating && selectedBook.rating !== '待补充' && (
                      <span className="px-3 py-1 rounded-full bg-amber-100 text-amber-600 text-xs font-medium flex items-center gap-1">
                        <Star className="w-3 h-3 fill-amber-500" />
                        {selectedBook.rating}
                      </span>
                    )}
                  </div>
                </div>
              </div>

              {/* 弹窗内容 */}
              <div className="p-6 space-y-6">
                {selectedBook.age && selectedBook.age !== '待补充' && (
                  <div className="flex items-center gap-2 text-sm">
                    <span className="text-gray-400">适合年龄：</span>
                    <span className="font-medium text-rose-500">{selectedBook.age}</span>
                  </div>
                )}

                {selectedBook.publish && selectedBook.publish !== '待补充' && (
                  <div className="flex items-center gap-2 text-sm">
                    <span className="text-gray-400">出版时间：</span>
                    <span className="font-medium text-gray-600">{selectedBook.publish}</span>
                  </div>
                )}

                {selectedBook.intro && (
                  <div>
                    <h4 className="text-sm font-semibold text-gray-700 mb-2 flex items-center gap-2">
                      <BookOpen className="w-4 h-4 text-amber-500" />
                      绘本简介
                    </h4>
                    <p className="text-gray-600 leading-relaxed text-sm">
                      {selectedBook.intro}
                    </p>
                  </div>
                )}

                {selectedBook.parent && (
                  <div className="bg-amber-50 rounded-2xl p-4">
                    <h4 className="text-sm font-semibold text-amber-700 mb-2">家长指南</h4>
                    <p className="text-amber-600 text-sm leading-relaxed">{selectedBook.parent}</p>
                  </div>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
