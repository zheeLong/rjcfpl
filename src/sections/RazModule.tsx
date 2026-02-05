import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { BookOpen, ChevronRight, Search, Clock, ArrowLeft, Sparkles } from 'lucide-react';
import { razLevels, getRazBooksByLevel, type RazBook } from '@/data/raz';

// 级别颜色配置
const levelColors: Record<string, { bg: string; text: string; gradient: string; light: string }> = {
  b: { bg: 'bg-sky-50', text: 'text-sky-600', gradient: 'from-sky-400 to-blue-500', light: 'bg-sky-100' },
};

const getLevelStyle = (levelId: string) => {
  return levelColors[levelId] || levelColors.b;
};

// 卡片动画
const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.05,
      duration: 0.4,
      ease: "easeOut" as const
    }
  })
};

export function RazModule() {
  const [selectedLevel, setSelectedLevel] = useState<string | null>(null);
  const [selectedBook, setSelectedBook] = useState<RazBook | null>(null);
  const [searchQuery, setSearchQuery] = useState('');

  // 获取当前级别的绘本
  const currentBooks = useMemo(() => {
    if (!selectedLevel) return [];
    const books = getRazBooksByLevel(selectedLevel);
    if (!searchQuery) return books;

    const query = searchQuery.toLowerCase();
    return books.filter(book =>
      book.title.toLowerCase().includes(query) ||
      book.extensionEn.toLowerCase().includes(query) ||
      book.extensionCn.toLowerCase().includes(query)
    );
  }, [selectedLevel, searchQuery]);

  // 当前级别信息
  const currentLevelInfo = useMemo(() => {
    return razLevels.find(l => l.id === selectedLevel);
  }, [selectedLevel]);

  return (
    <div className="relative overflow-hidden rounded-3xl border border-sky-100 bg-gradient-to-br from-sky-50 via-white to-blue-50">
      {/* 背景装饰 */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{ y: [-5, 5, -5], rotate: [0, 5, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-20 left-10 text-6xl opacity-10"
        >
          📖
        </motion.div>
        <motion.div
          animate={{ y: [-5, 5, -5] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute top-40 right-20 text-5xl opacity-10"
        >
          🌳
        </motion.div>
        <motion.div
          animate={{ y: [-5, 5, -5], rotate: [0, -5, 0] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute bottom-40 left-20 text-4xl opacity-10"
        >
          ✨
        </motion.div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 py-8">
        <AnimatePresence mode="wait">
          {!selectedLevel ? (
            // 级别选择页面
            <LevelSelector
              key="selector"
              onSelectLevel={setSelectedLevel}
            />
          ) : !selectedBook ? (
            // 绘本列表页面
            <BookList
              key="list"
              level={currentLevelInfo}
              books={currentBooks}
              searchQuery={searchQuery}
              onSearchChange={setSearchQuery}
              onSelectBook={setSelectedBook}
              onBack={() => setSelectedLevel(null)}
            />
          ) : (
            // 绘本详情页面
            <BookDetail
              key="detail"
              book={selectedBook}
              onBack={() => setSelectedBook(null)}
            />
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}

// 级别选择组件
function LevelSelector({ onSelectLevel }: { onSelectLevel: (level: string) => void }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="space-y-8"
    >
      {/* 标题 */}
      <div className="text-center space-y-4 py-8">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", stiffness: 200, damping: 15 }}
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white shadow-lg border border-sky-100"
        >
          <BookOpen className="w-4 h-4 text-sky-500" />
          <span className="text-sky-600 text-sm font-semibold">RAZ 精读</span>
          <Sparkles className="w-4 h-4 text-sky-500" />
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-4xl md:text-5xl font-bold"
        >
          <span className="bg-gradient-to-r from-sky-500 via-blue-500 to-indigo-500 bg-clip-text text-transparent">
            Reading A-Z
          </span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-gray-500 max-w-lg mx-auto text-base"
        >
          选择对应级别，开启 RAZ 精读之旅
        </motion.p>
      </div>

      {/* 级别网格 */}
      <div className="grid grid-cols-2 gap-3 md:gap-5 lg:grid-cols-3">
        {razLevels.map((level, index) => {
          const style = getLevelStyle(level.id);
          return (
            <motion.button
              key={level.id}
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              onClick={() => onSelectLevel(level.id)}
              className="group relative text-left rounded-3xl overflow-hidden bg-white shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-100"
            >
              {/* 顶部渐变色块 */}
              <div className={`h-20 md:h-32 bg-gradient-to-br ${style.gradient} relative overflow-hidden`}>
                <div className="absolute inset-0 bg-white/10" />
                <div className="absolute top-4 right-4 text-6xl opacity-30 transform group-hover:scale-110 group-hover:rotate-12 transition-transform duration-500">
                  📚
                </div>
                <div className="absolute bottom-2 left-4 md:bottom-4 md:left-5">
                  <span className="text-3xl md:text-5xl font-bold text-white">{level.id.toUpperCase()}</span>
                </div>
              </div>

              {/* 内容区域 */}
              <div className="p-3 md:p-5 space-y-2 md:space-y-3">
                <h3 className="text-xl font-bold text-gray-800 group-hover:text-sky-600 transition-colors">
                  {level.name}
                </h3>

                <p className="text-sm text-gray-500 line-clamp-2">
                  {level.description}
                </p>

                {/* 统计信息 */}
                <div className="flex items-center gap-3 pt-1 md:pt-2">
                  <span className={`inline-flex items-center gap-1 px-2 md:px-3 py-0.5 md:py-1 rounded-full ${style.light} ${style.text} text-[10px] md:text-xs font-semibold`}>
                    <BookOpen className="w-2.5 h-2.5 md:w-3 md:h-3" />
                    {level.bookCount}本
                  </span>
                </div>

                {/* 箭头指示 */}
                <div className="flex items-center justify-between pt-2">
                  <span className="text-sm text-gray-400">点击进入</span>
                  <div className={`w-8 h-8 rounded-full ${style.light} flex items-center justify-center group-hover:${style.bg.replace('bg-', 'bg-').replace('50', '500')} transition-colors`}>
                    <ChevronRight className={`w-4 h-4 ${style.text} group-hover:text-white transition-colors`} />
                  </div>
                </div>
              </div>
            </motion.button>
          );
        })}
      </div>
    </motion.div>
  );
}

// 绘本列表组件
function BookList({
  level,
  books,
  searchQuery,
  onSearchChange,
  onSelectBook,
  onBack
}: {
  level: typeof razLevels[0] | undefined;
  books: RazBook[];
  searchQuery: string;
  onSearchChange: (query: string) => void;
  onSelectBook: (book: RazBook) => void;
  onBack: () => void;
}) {
  if (!level) return null;
  const style = getLevelStyle(level.id);

  return (
    <motion.div
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -50 }}
      className="space-y-6"
    >
      {/* 返回按钮和标题 */}
      <div className="space-y-4">
        <div className="sticky top-16 md:top-20 z-40 bg-white/90 backdrop-blur-md rounded-2xl p-2 shadow-sm border border-sky-100">
          <button
            onClick={onBack}
            className="w-full md:w-auto inline-flex items-center justify-center gap-2 px-4 py-2 rounded-xl bg-white hover:bg-sky-50 text-sm font-semibold text-gray-600 hover:text-sky-600 transition-all"
          >
            <ArrowLeft className="w-4 h-4" />
            返回级别选择
          </button>
        </div>

        <div className={`rounded-3xl p-6 md:p-8 bg-gradient-to-r ${style.gradient} text-white shadow-xl relative overflow-hidden`}
        >
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-0 right-0 w-64 h-64 rounded-full bg-white/20 blur-3xl" />
          </div>

          <div className="relative">
            <div className="flex items-center gap-4">
              <span className="text-5xl font-bold">{level.id.toUpperCase()}</span>
              <div>
                <h2 className="text-2xl md:text-3xl font-bold">{level.name}</h2>
                <p className="text-white/90 mt-1">{level.description}</p>
              </div>
            </div>

            <div className="flex items-center gap-4 mt-4 text-white/90">
              <span className="inline-flex items-center gap-1">
                <BookOpen className="w-4 h-4" />
                {level.bookCount} 本绘本
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* 搜索 (吸顶) */}
      <div className="sticky top-[136px] md:top-[160px] z-30 flex flex-col md:flex-row gap-3 md:items-center md:justify-between bg-white/90 backdrop-blur-md rounded-2xl p-3 md:p-4 shadow-sm border border-gray-100"
      >
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
          <input
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            placeholder="搜索绘本..."
            className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-2.5 pl-10 text-sm text-gray-700 shadow-inner focus:border-sky-300 focus:outline-none focus:ring-2 focus:ring-sky-100 transition-all"
          />
        </div>
        <p className="text-xs md:text-sm text-gray-500 text-right md:text-left">
          共 <span className={`font-semibold ${style.text}`}>{books.length}</span> 本
        </p>
      </div>

      {/* 绘本网格 */}
      <div className="grid grid-cols-2 gap-3 md:gap-4">
        {books.map((book, index) => (
          <motion.button
            key={book.id}
            custom={index}
            variants={cardVariants}
            initial="hidden"
            animate="visible"
            onClick={() => onSelectBook(book)}
            className="group text-left rounded-2xl bg-white p-3 md:p-5 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-100 hover:border-sky-200"
          >
            <div className="flex items-start gap-2 md:gap-4">
              {/* 序号 */}
              <div className={`w-10 h-10 md:w-14 md:h-14 rounded-xl md:rounded-2xl ${style.light} flex items-center justify-center text-sm md:text-xl font-bold ${style.text} shadow-inner group-hover:scale-110 transition-transform`}>
                {book.episode}
              </div>

              <div className="flex-1 min-w-0">
                <h3 className="text-sm md:text-lg font-bold text-gray-800 group-hover:text-sky-600 transition-colors mb-0.5 md:mb-1 line-clamp-1">
                  {book.title}
                </h3>

                <div className="flex items-center gap-2 text-sm text-gray-500">
                  <Clock className="w-3.5 h-3.5" />
                  <span>精读拓展</span>
                </div>

                {/* 词汇数量预览 */}
                {book.vocabulary && book.vocabulary.length > 0 && (
                  <div className="flex flex-wrap gap-1.5 mt-3">
                    <span className={`px-2 py-0.5 rounded-full text-xs ${style.light} ${style.text}`}>
                      📖 {book.vocabulary.length}个词汇
                    </span>
                    {book.qa && book.qa.length > 0 && (
                      <span className={`px-2 py-0.5 rounded-full text-xs ${style.light} ${style.text}`}>
                        💬 {book.qa.length}组问答
                      </span>
                    )}
                  </div>
                )}
              </div>

              <ChevronRight className="w-5 h-5 text-gray-300 group-hover:text-sky-400 group-hover:translate-x-1 transition-all" />
            </div>
          </motion.button>
        ))}
      </div>

      {books.length === 0 && (
        <div className="rounded-3xl border-2 border-dashed border-sky-200 p-12 text-center bg-white/50"
        >
          <div className="text-6xl mb-4">🔍</div>
          <p className="text-gray-500 text-lg">没有找到匹配的绘本</p>
          <p className="text-gray-400 text-sm mt-2">请换个关键词试试</p>
        </div>
      )}
    </motion.div>
  );
}

// 绘本详情组件
function BookDetail({ book, onBack }: { book: RazBook; onBack: () => void }) {
  const style = getLevelStyle('b');

  return (
    <motion.div
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -50 }}
      className="space-y-6"
    >
      {/* 导航栏 (吸顶) */}
      <div className="sticky top-16 md:top-20 z-40 flex items-center gap-2 md:gap-3 bg-white/90 backdrop-blur-md rounded-2xl p-3 md:p-4 shadow-sm border border-gray-100"
      >
        <button
          onClick={onBack}
          className="flex-shrink-0 inline-flex items-center gap-1 md:gap-2 px-3 py-1.5 md:px-4 md:py-2 rounded-full bg-gray-50 hover:bg-sky-50 text-xs md:text-sm font-semibold text-gray-600 hover:text-sky-600 transition-all"
        >
          <ArrowLeft className="w-3.5 h-3.5 md:w-4 md:h-4" />
          <span className="hidden md:inline">返回列表</span>
          <span className="md:hidden">返回</span>
        </button>
        <div className="flex items-center gap-1 md:gap-2 overflow-hidden text-xs md:text-sm">
          <span className="text-gray-300">/</span>
          <span className="text-gray-500">{book.episode}</span>
          <ChevronRight className="w-3.5 h-3.5 md:w-4 md:h-4 text-gray-300 flex-shrink-0" />
          <span className="font-semibold text-sky-600 bg-sky-50 px-2 py-0.5 md:px-3 md:py-1 rounded-full truncate">
            {book.title}
          </span>
        </div>
      </div>

      {/* 绘本标题卡片 */}
      <div className="rounded-3xl bg-white p-6 md:p-8 shadow-xl border border-sky-100 relative overflow-hidden"
      >
        <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-sky-100 to-blue-100 rounded-full blur-3xl opacity-50" />

        <div className="relative">
          <div className="flex items-center gap-5">
            <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${style.gradient} flex items-center justify-center text-3xl font-bold text-white shadow-lg`}>
              {book.episode}
            </div>

            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-800">{book.title}</h2>
              <p className="text-gray-500 mt-2 flex items-center gap-2">
                <BookOpen className="w-4 h-4 text-sky-400" />
                RAZ {book.level} 精读拓展
              </p>
            </div>
          </div>
        </div>
      </div>



      {/* 核心词汇 */}
      {book.vocabulary && book.vocabulary.length > 0 && (
        <div className="rounded-2xl bg-white p-6 shadow-md border border-gray-100"
        >
          <h3 className="text-lg font-bold text-gray-800 mb-4 flex items-center gap-2">
            <span className="w-8 h-8 rounded-lg bg-sky-100 text-sky-600 flex items-center justify-center">
              📖
            </span>
            核心词汇 ({book.vocabulary.length}个)
          </h3>
          <div className="grid gap-2">
            {book.vocabulary.map((vocab, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.03 }}
                className="flex items-center gap-3 p-3 rounded-xl bg-gray-50 hover:bg-sky-50 transition-colors"
              >
                <span className="w-6 h-6 rounded-full bg-sky-200 text-sky-700 flex items-center justify-center text-xs font-bold flex-shrink-0">
                  {index + 1}
                </span>
                <div className="flex-1">
                  <span className="font-bold text-gray-800">{vocab.word}</span>
                  <span className="text-gray-500 mx-2">{vocab.phonetic}</span>
                  <span className="text-sky-600">{vocab.meaning}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      )}

      {/* 亲子互动问答 */}
      {book.qa && book.qa.length > 0 && (
        <div className="rounded-2xl bg-gradient-to-br from-blue-50 to-indigo-50 p-6 border border-blue-100"
        >
          <h3 className="text-lg font-bold text-blue-700 mb-4 flex items-center gap-2">
            <span className="w-8 h-8 rounded-lg bg-blue-100 text-blue-600 flex items-center justify-center">
              💬
            </span>
            亲子互动问答 ({book.qa.length}组)
          </h3>
          <div className="space-y-3">
            {book.qa.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
                className="bg-white rounded-xl p-4 shadow-sm"
              >
                <div className="flex items-start gap-3 mb-2">
                  <span className="w-6 h-6 rounded-full bg-blue-500 text-white flex items-center justify-center text-xs font-bold flex-shrink-0">
                    Q
                  </span>
                  <p className="text-gray-800 font-medium">{item.question}</p>
                </div>
                <div className="flex items-start gap-3 pl-9">
                  <span className="text-blue-500 text-sm">{item.answer}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      )}

      {/* 精读拓展内容 */}
      <div className="rounded-2xl bg-white p-6 md:p-8 shadow-md border border-gray-100"
      >
        <h3 className="text-lg font-bold text-gray-800 mb-6 flex items-center gap-2">
          <span className="w-8 h-8 rounded-lg bg-gradient-to-br from-sky-400 to-blue-500 text-white flex items-center justify-center text-sm">
            Susan
          </span>
          老师精读拓展
        </h3>

        {/* 英文原文 */}
        <div className="mb-8">
          <h4 className="text-sm font-semibold text-sky-600 mb-3 flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-sky-500"></span>
            英文原文
          </h4>
          <div className="prose prose-sky max-w-none">
            {book.extensionEn.split('\n\n').filter(p => p.trim()).map((paragraph, index) => (
              <motion.p
                key={index}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.03 }}
                className="text-gray-700 leading-relaxed mb-4 text-base"
              >
                {paragraph}
              </motion.p>
            ))}
          </div>
        </div>

        {/* 中文翻译 */}
        <div className="border-t border-gray-100 pt-6">
          <h4 className="text-sm font-semibold text-blue-600 mb-3 flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span>
            中文翻译
          </h4>
          <div className="prose prose-blue max-w-none">
            {book.extensionCn.split('\n\n').filter(p => p.trim()).map((paragraph, index) => (
              <motion.p
                key={index}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.03 }}
                className="text-gray-600 leading-relaxed mb-4 text-base"
              >
                {paragraph}
              </motion.p>
            ))}
          </div>
        </div>
      </div>

      {/* 底部提示 */}
      <div className="text-center py-8">
        <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-gradient-to-r from-sky-100 to-blue-100 text-sky-600 shadow-md">
          <Sparkles className="w-5 h-5" />
          <span className="font-semibold">继续加油，阅读让我们成长！</span>
          <Sparkles className="w-5 h-5" />
        </div>
      </div>
    </motion.div>
  );
}
