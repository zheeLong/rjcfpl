import { useMemo, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, Sparkles, MessageCircle, BookOpen, ChevronRight, Search, Heart, Star, Volume2 } from 'lucide-react';
import { parentingGroups } from '@/data/parenting';

// 大场景图标映射
const groupIcons: Record<string, string> = {
  newyear: '🧧',
  mall: '🛍️',
  supermarket: '🛒',
  market: '🥬',
  home: '🏠',
  outdoor: '🌳',
  playground: '🎠',
  toys: '🧸',
  daily: '📅',
  'daily-extended': '🌅',
  transport: '🚅',
  car: '🚗',
  time: '⏰',
  baby: '👶',
  medical: '🩺',
  sports: '🏃',
  social: '🤝',
  travel: '🧳',
  festivals: '🎉',
  habits: '✍️',
};

// 大场景渐变色映射 - 更柔和高级的配色
const groupGradients: Record<string, { bg: string; text: string; accent: string; soft: string }> = {
  newyear: { bg: 'from-rose-300 via-pink-300 to-red-200', text: 'text-rose-600', accent: 'bg-rose-500', soft: 'bg-rose-50' },
  mall: { bg: 'from-violet-300 via-purple-300 to-fuchsia-200', text: 'text-violet-600', accent: 'bg-violet-500', soft: 'bg-violet-50' },
  supermarket: { bg: 'from-emerald-300 via-teal-300 to-cyan-200', text: 'text-emerald-600', accent: 'bg-emerald-500', soft: 'bg-emerald-50' },
  market: { bg: 'from-green-300 via-lime-300 to-yellow-200', text: 'text-green-600', accent: 'bg-green-500', soft: 'bg-green-50' },
  home: { bg: 'from-amber-300 via-orange-300 to-yellow-200', text: 'text-amber-600', accent: 'bg-amber-500', soft: 'bg-amber-50' },
  outdoor: { bg: 'from-sky-300 via-blue-300 to-indigo-200', text: 'text-sky-600', accent: 'bg-sky-500', soft: 'bg-sky-50' },
  playground: { bg: 'from-indigo-300 via-purple-300 to-pink-200', text: 'text-indigo-600', accent: 'bg-indigo-500', soft: 'bg-indigo-50' },
  toys: { bg: 'from-fuchsia-300 via-pink-300 to-rose-200', text: 'text-fuchsia-600', accent: 'bg-fuchsia-500', soft: 'bg-fuchsia-50' },
  daily: { bg: 'from-pink-300 via-rose-300 to-orange-200', text: 'text-pink-600', accent: 'bg-pink-500', soft: 'bg-pink-50' },
  'daily-extended': { bg: 'from-rose-300 via-orange-300 to-amber-200', text: 'text-rose-600', accent: 'bg-rose-500', soft: 'bg-rose-50' },
  transport: { bg: 'from-blue-300 via-indigo-300 to-violet-200', text: 'text-blue-600', accent: 'bg-blue-500', soft: 'bg-blue-50' },
  car: { bg: 'from-slate-300 via-gray-300 to-zinc-200', text: 'text-slate-600', accent: 'bg-slate-500', soft: 'bg-slate-50' },
  time: { bg: 'from-yellow-300 via-amber-300 to-orange-200', text: 'text-yellow-600', accent: 'bg-yellow-500', soft: 'bg-yellow-50' },
  baby: { bg: 'from-cyan-300 via-sky-300 to-blue-200', text: 'text-cyan-600', accent: 'bg-cyan-500', soft: 'bg-cyan-50' },
  medical: { bg: 'from-teal-300 via-emerald-300 to-green-200', text: 'text-teal-600', accent: 'bg-teal-500', soft: 'bg-teal-50' },
  sports: { bg: 'from-lime-300 via-green-300 to-emerald-200', text: 'text-lime-600', accent: 'bg-lime-500', soft: 'bg-lime-50' },
  social: { bg: 'from-purple-300 via-violet-300 to-fuchsia-200', text: 'text-purple-600', accent: 'bg-purple-500', soft: 'bg-purple-50' },
  travel: { bg: 'from-blue-300 via-sky-300 to-cyan-200', text: 'text-blue-600', accent: 'bg-blue-500', soft: 'bg-blue-50' },
  festivals: { bg: 'from-red-300 via-pink-300 to-rose-200', text: 'text-red-600', accent: 'bg-red-500', soft: 'bg-red-50' },
  habits: { bg: 'from-orange-300 via-amber-300 to-yellow-200', text: 'text-orange-600', accent: 'bg-orange-500', soft: 'bg-orange-50' },
};

// 小场景emoji映射
const sceneEmojis: Record<string, string> = {
  // 新年场景
  'newyear-01': '🎊',
  'newyear-02': '📝',
  'newyear-03': '🛒',
  'newyear-04': '👗',
  'newyear-05': '🏮',
  'newyear-06': '📜',
  'newyear-07': '🎀',
  'newyear-08': '🧹',
  'newyear-09': '🍽️',
  'newyear-10': '📺',
  'newyear-11': '✨',
  'newyear-12': '🎆',
  'newyear-13': '🧨',
  'newyear-14': '🥟',
  'newyear-15': '🥟',
  'newyear-16': '🐉',
  'newyear-17': '🐭',
  // 商场场景
  'mall-01': '🏬',
  'mall-02': '🗺️',
  'mall-03': '👕',
  'mall-04': '👟',
  'mall-05': '📚',
  'mall-06': '🎮',
  'mall-07': '🧸',
  'mall-08': '🎬',
  'mall-09': '🍿',
  'mall-10': '🐕',
  'mall-11': '👓',
};

// 获取场景emoji
const getSceneEmoji = (sceneId: string): string => {
  return sceneEmojis[sceneId] || '💬';
};

// 获取大场景图标
const getGroupIcon = (groupId: string): string => {
  return groupIcons[groupId] || '📚';
};

// 获取大场景配色
const getGroupColors = (groupId: string) => {
  return groupGradients[groupId] || {
    bg: 'from-pink-300 via-rose-300 to-orange-200',
    text: 'text-pink-600',
    accent: 'bg-pink-500',
    soft: 'bg-pink-50'
  };
};

// 卡片进入动画
const cardVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      delay: i * 0.08,
      duration: 0.5,
      ease: "easeOut" as const
    }
  })
};

// 气泡对话动画
const bubbleVariants = {
  hidden: { opacity: 0, x: -20, scale: 0.9 },
  visible: (i: number) => ({
    opacity: 1,
    x: 0,
    scale: 1,
    transition: {
      delay: i * 0.05,
      duration: 0.4,
      ease: "easeOut" as const
    }
  })
};

export function ParentingModule() {
  const [activeGroupId, setActiveGroupId] = useState<string | null>(null);
  const [activeSceneId, setActiveSceneId] = useState<string | null>(null);
  const [groupQuery, setGroupQuery] = useState('');
  const [sceneQuery, setSceneQuery] = useState('');
  const [groupSort, setGroupSort] = useState<'recommended' | 'name' | 'count'>('recommended');
  const [sceneSort, setSceneSort] = useState<'recommended' | 'name' | 'count'>('recommended');
  const [favorites, setFavorites] = useState<Set<string>>(new Set());

  const activeGroup = parentingGroups.find((group) => group.id === activeGroupId) || null;
  const activeScene = activeGroup?.scenes.find((scene) => scene.id === activeSceneId) || null;

  const resetToGroups = () => {
    setActiveGroupId(null);
    setActiveSceneId(null);
    setSceneQuery('');
  };

  const resetToScenes = () => {
    setActiveSceneId(null);
  };

  const toggleFavorite = (lineId: string) => {
    setFavorites(prev => {
      const newFavorites = new Set(prev);
      if (newFavorites.has(lineId)) {
        newFavorites.delete(lineId);
      } else {
        newFavorites.add(lineId);
      }
      return newFavorites;
    });
  };

  const normalizedGroupQuery = groupQuery.trim().toLowerCase();
  const normalizedSceneQuery = sceneQuery.trim().toLowerCase();

  const filteredGroups = useMemo(() => {
    let groups = parentingGroups.filter((group) => {
      if (!normalizedGroupQuery) return true;
      const inTitle = group.title.toLowerCase().includes(normalizedGroupQuery);
      const inSceneTitle = group.scenes.some((scene) =>
        scene.title.toLowerCase().includes(normalizedGroupQuery)
      );
      const inLine = group.scenes.some((scene) =>
        scene.lines.some(
          (line) =>
            line.en.toLowerCase().includes(normalizedGroupQuery) ||
            line.cn.toLowerCase().includes(normalizedGroupQuery)
        )
      );
      return inTitle || inSceneTitle || inLine;
    });

    if (groupSort === 'name') {
      groups = [...groups].sort((a, b) => a.title.localeCompare(b.title, 'zh-CN'));
    } else if (groupSort === 'count') {
      groups = [...groups].sort((a, b) => b.scenes.length - a.scenes.length);
    }
    return groups;
  }, [groupSort, normalizedGroupQuery]);

  const filteredScenes = useMemo(() => {
    if (!activeGroup) return [];
    let scenes = activeGroup.scenes.filter((scene) => {
      if (!normalizedSceneQuery) return true;
      const inTitle = scene.title.toLowerCase().includes(normalizedSceneQuery);
      const inLine = scene.lines.some(
        (line) =>
          line.en.toLowerCase().includes(normalizedSceneQuery) ||
          line.cn.toLowerCase().includes(normalizedSceneQuery)
      );
      return inTitle || inLine;
    });
    if (sceneSort === 'name') {
      scenes = [...scenes].sort((a, b) => a.title.localeCompare(b.title, 'zh-CN'));
    } else if (sceneSort === 'count') {
      scenes = [...scenes].sort((a, b) => b.lines.length - a.lines.length);
    }
    return scenes;
  }, [activeGroup, normalizedSceneQuery, sceneSort]);

  // 计算总句数
  const totalLines = activeGroup?.scenes.reduce((sum, scene) => sum + scene.lines.length, 0) || 0;

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-white to-rose-50">
      {/* 可爱的背景装饰 */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{ y: [-5, 5, -5] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-20 left-10 text-6xl opacity-10"
        >
          🌸
        </motion.div>
        <motion.div
          animate={{ y: [-5, 5, -5] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute top-40 right-20 text-5xl opacity-10"
        >
          ⭐
        </motion.div>
        <motion.div
          animate={{ y: [-5, 5, -5] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute bottom-40 left-20 text-4xl opacity-10"
        >
          🎈
        </motion.div>
        <motion.div
          animate={{ y: [-5, 5, -5] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
          className="absolute bottom-20 right-10 text-5xl opacity-10"
        >
          🌺
        </motion.div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 pt-24 pb-8 md:pt-32">
        <AnimatePresence mode="wait">
          {/* 大场景列表 */}
          {!activeGroup && (
            <motion.section
              key="groups"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="space-y-8"
            >
              {/* 标题区域 - 更可爱高级 */}
              <div className="text-center space-y-2 md:space-y-3 py-6">
                <motion.h2
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
                  className="text-2xl md:text-4xl font-bold"
                >
                  <span className="bg-gradient-to-r from-pink-500 via-rose-500 to-orange-400 bg-clip-text text-transparent">
                    亲子英语场景库
                  </span>
                </motion.h2>
              </div>

              {/* 搜索与排序 - 更精致 */}
              {/* 搜索与排序 - 更精致 (吸顶) */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="sticky top-16 md:top-20 z-40 flex flex-col md:flex-row gap-3 md:items-center md:justify-between bg-white/90 backdrop-blur-md rounded-2xl p-3 md:p-4 shadow-sm border border-pink-100 mb-6"
              >
                <div className="relative flex-1">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                  <input
                    value={groupQuery}
                    onChange={(event) => setGroupQuery(event.target.value)}
                    placeholder="搜索大场景 / 小场景..."
                    className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-2.5 pl-10 text-sm text-gray-700 shadow-inner focus:border-pink-300 focus:outline-none focus:ring-2 focus:ring-pink-100 transition-all"
                  />
                </div>
                <div className="flex items-center justify-end gap-2 text-sm">
                  <span className="text-gray-400 font-medium text-xs md:text-sm">排序</span>
                  <select
                    value={groupSort}
                    onChange={(event) => setGroupSort(event.target.value as 'recommended' | 'name' | 'count')}
                    className="rounded-lg border border-gray-200 bg-white px-2 py-1.5 text-sm text-gray-700 shadow-sm focus:border-pink-300 focus:outline-none cursor-pointer"
                  >
                    <option value="recommended">✨ 推荐</option>
                    <option value="name">🔤 名称</option>
                    <option value="count">📊 数量</option>
                  </select>
                </div>
              </motion.div>

              {/* 大场景卡片网格 - 全新设计 */}
              <div className="grid grid-cols-2 gap-3 md:gap-6 lg:grid-cols-3">
                {filteredGroups.map((group, index) => {
                  const colors = getGroupColors(group.id);
                  const sceneCount = group.scenes.length;
                  const lineCount = group.scenes.reduce((sum, s) => sum + s.lines.length, 0);

                  return (
                    <motion.button
                      key={group.id}
                      custom={index}
                      variants={cardVariants}
                      initial="hidden"
                      animate="visible"
                      onClick={() => setActiveGroupId(group.id)}
                      className="group relative text-left rounded-2xl md:rounded-3xl overflow-hidden bg-white shadow-md hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-100"
                    >
                      {/* 顶部渐变色块 - 更柔和 */}
                      <div className={`h-24 md:h-36 bg-gradient-to-br ${colors.bg} relative overflow-hidden`}>
                        {/* 装饰图案 */}
                        <div className="absolute inset-0 opacity-20">
                          <div className="absolute top-4 right-4 w-20 h-20 rounded-full bg-white/30 blur-xl" />
                          <div className="absolute bottom-4 left-4 w-16 h-16 rounded-full bg-white/20 blur-lg" />
                        </div>

                        {/* 大图标 */}
                        <motion.div
                          className="absolute top-4 right-4 text-7xl opacity-40"
                          whileHover={{ scale: 1.1, rotate: 10 }}
                          transition={{ type: "spring", stiffness: 300 }}
                        >
                          {getGroupIcon(group.id)}
                        </motion.div>

                        {/* 小图标和标题 */}
                        <div className="absolute bottom-2 left-3 md:bottom-4 md:left-5">
                          <div className="w-10 h-10 md:w-14 md:h-14 rounded-xl md:rounded-2xl bg-white/30 backdrop-blur-sm flex items-center justify-center text-2xl md:text-3xl shadow-lg">
                            {getGroupIcon(group.id)}
                          </div>
                        </div>

                        {/* 星星装饰 */}
                        <div className="absolute top-6 left-6">
                          <Star className="w-4 h-4 text-white/60 fill-white/40" />
                        </div>
                      </div>

                      {/* 内容区域 - 更精致 */}
                      <div className="p-3 md:p-5 space-y-2 md:space-y-4">
                        <div>
                          <h3 className={`text-base md:text-xl font-bold text-gray-800 group-hover:${colors.text} transition-colors line-clamp-1`}>
                            {group.title}
                          </h3>
                          <p className="hidden md:block text-gray-400 text-sm mt-1">探索实用亲子英语</p>
                        </div>

                        {/* 底部统计和操作区 */}
                        <div className="space-y-3 pt-2">
                          {/* 统计信息 */}
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-2">
                              <span className={`inline-flex items-center gap-1 px-2.5 py-1 rounded-full ${colors.soft} ${colors.text} text-xs font-semibold`}>
                                <BookOpen className="w-3 h-3" />
                                {sceneCount}场景
                              </span>
                              <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-gray-50 text-gray-600 text-xs font-semibold">
                                <MessageCircle className="w-3 h-3" />
                                {lineCount}句
                              </span>
                            </div>
                            <motion.div
                              className={`w-9 h-9 rounded-full ${colors.soft} flex items-center justify-center group-hover:${colors.accent} transition-all duration-300`}
                              whileHover={{ scale: 1.1 }}
                            >
                              <ChevronRight className={`w-4 h-4 ${colors.text} group-hover:text-white transition-colors`} />
                            </motion.div>
                          </div>

                          {/* 进度条装饰 */}
                          <div className="flex items-center gap-1.5">
                            <div className="flex-1 h-1.5 bg-gray-100 rounded-full overflow-hidden">
                              <motion.div
                                className={`h-full bg-gradient-to-r ${colors.bg} rounded-full`}
                                initial={{ width: 0 }}
                                animate={{ width: '100%' }}
                                transition={{ duration: 1, delay: index * 0.1 }}
                              />
                            </div>
                            <span className="text-[10px] text-gray-400 font-medium">已收录</span>
                          </div>
                        </div>
                      </div>

                      {/* 悬停光效 */}
                      <div className="absolute inset-0 bg-gradient-to-t from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                    </motion.button>
                  );
                })}
                {filteredGroups.length === 0 && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="col-span-full rounded-3xl border-2 border-dashed border-pink-200 p-12 text-center bg-white/50"
                  >
                    <div className="text-6xl mb-4">🔍</div>
                    <p className="text-gray-500 text-lg">没有找到匹配的大场景</p>
                    <p className="text-gray-400 text-sm mt-2">请换个关键词试试</p>
                  </motion.div>
                )}
              </div>
            </motion.section>
          )}

          {/* 小场景列表 */}
          {activeGroup && !activeScene && (
            <motion.section
              key="scenes"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="space-y-6"
            >
              {/* 返回按钮和标题 */}
              <div className="space-y-4">
                <motion.button
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  onClick={resetToGroups}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white shadow-md hover:shadow-lg text-sm font-semibold text-gray-600 hover:text-pink-600 transition-all hover:-translate-y-0.5 border border-gray-100"
                >
                  <ArrowLeft className="w-4 h-4" />
                  返回场景总览
                </motion.button>

                {/* 大场景标题卡片 - 更高级 */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
                  className={`rounded-3xl p-6 md:p-8 bg-gradient-to-br ${getGroupColors(activeGroup.id).bg} text-white shadow-2xl relative overflow-hidden`}
                >
                  {/* 背景装饰 */}
                  <div className="absolute inset-0 opacity-20">
                    <div className="absolute top-0 right-0 w-64 h-64 rounded-full bg-white/20 blur-3xl" />
                    <div className="absolute bottom-0 left-0 w-48 h-48 rounded-full bg-white/10 blur-2xl" />
                  </div>

                  <div className="relative flex items-start gap-5">
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ type: "spring", stiffness: 200, delay: 0.2 }}
                      className="w-20 h-20 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center text-5xl shadow-lg"
                    >
                      {getGroupIcon(activeGroup.id)}
                    </motion.div>
                    <div className="flex-1">
                      <h2 className="text-3xl md:text-4xl font-bold mb-3">{activeGroup.title}</h2>
                      <div className="flex flex-wrap items-center gap-4 text-white/90">
                        <span className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-1.5 rounded-full">
                          <BookOpen className="w-4 h-4" />
                          {activeGroup.scenes.length} 个小场景
                        </span>
                        <span className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-1.5 rounded-full">
                          <MessageCircle className="w-4 h-4" />
                          {totalLines} 句亲子表达
                        </span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>

              {/* 小场景搜索与排序 */}
              {/* 小场景搜索与排序 (吸顶) */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="sticky top-16 md:top-20 z-40 flex flex-col md:flex-row gap-3 md:items-center md:justify-between bg-white/90 backdrop-blur-md rounded-2xl p-3 md:p-4 shadow-sm border border-gray-100 mb-6"
              >
                <div className="relative flex-1">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                  <input
                    value={sceneQuery}
                    onChange={(event) => setSceneQuery(event.target.value)}
                    placeholder="搜索小场景 / 句子..."
                    className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-2.5 pl-10 text-sm text-gray-700 shadow-inner focus:border-pink-300 focus:outline-none focus:ring-2 focus:ring-pink-100 transition-all"
                  />
                </div>
                <div className="flex items-center justify-end gap-2 text-sm">
                  <span className="text-gray-400 font-medium text-xs md:text-sm">排序</span>
                  <select
                    value={sceneSort}
                    onChange={(event) => setSceneSort(event.target.value as 'recommended' | 'name' | 'count')}
                    className="rounded-lg border border-gray-200 bg-white px-2 py-1.5 text-sm text-gray-700 shadow-sm focus:border-pink-300 focus:outline-none cursor-pointer"
                  >
                    <option value="recommended">✨ 推荐</option>
                    <option value="name">🔤 名称</option>
                    <option value="count">📊 数量</option>
                  </select>
                </div>
              </motion.div>

              {/* 小场景网格 - 更精致 */}
              <div className="grid grid-cols-2 gap-3 md:gap-4">
                {filteredScenes.map((scene, index) => (
                  <motion.button
                    key={scene.id}
                    custom={index}
                    variants={cardVariants}
                    initial="hidden"
                    animate="visible"
                    onClick={() => setActiveSceneId(scene.id)}
                    className="group text-left rounded-2xl bg-white p-3 md:p-5 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-100 hover:border-pink-200 relative overflow-hidden"
                  >
                    {/* 悬停背景 */}
                    <div className="absolute inset-0 bg-gradient-to-r from-pink-50/0 via-pink-50/50 to-pink-50/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                    <div className="relative flex items-start gap-4">
                      {/* Emoji图标 - 更立体 */}
                      <motion.div
                        className="w-10 h-10 md:w-16 md:h-16 rounded-xl md:rounded-2xl bg-gradient-to-br from-pink-100 to-rose-100 flex items-center justify-center text-xl md:text-3xl shadow-inner group-hover:shadow-lg group-hover:scale-110 transition-all duration-300"
                        whileHover={{ rotate: [0, -5, 5, 0] }}
                        transition={{ duration: 0.5 }}
                      >
                        {getSceneEmoji(scene.id)}
                      </motion.div>

                      <div className="flex-1 min-w-0">
                        <h3 className="text-lg font-bold text-gray-800 group-hover:text-pink-600 transition-colors mb-2">
                          {scene.title}
                        </h3>
                        <div className="flex flex-col md:flex-row md:items-center gap-1 md:gap-3">
                          <span className="inline-flex items-center gap-1 md:gap-1.5 text-xs md:text-sm text-gray-500">
                            <MessageCircle className="w-3 h-3 md:w-3.5 md:h-3.5" />
                            {scene.lines.length} 句
                          </span>
                          <span className="hidden md:inline text-gray-300">|</span>
                          <span className="text-[10px] md:text-xs text-pink-400 font-medium">开始学习</span>
                        </div>
                      </div>

                      {/* 箭头 - 更精致 */}
                      <div className="w-10 h-10 rounded-full bg-gray-50 group-hover:bg-pink-100 flex items-center justify-center transition-colors">
                        <ChevronRight className="w-5 h-5 text-gray-300 group-hover:text-pink-500 group-hover:translate-x-1 transition-all" />
                      </div>
                    </div>
                  </motion.button>
                ))}
                {filteredScenes.length === 0 && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="col-span-full rounded-3xl border-2 border-dashed border-pink-200 p-12 text-center bg-white/50"
                  >
                    <div className="text-6xl mb-4">🎯</div>
                    <p className="text-gray-500 text-lg">没有找到匹配的小场景</p>
                    <p className="text-gray-400 text-sm mt-2">请换个关键词试试</p>
                  </motion.div>
                )}
              </div>
            </motion.section>
          )}

          {/* 对话详情 */}
          {activeGroup && activeScene && (
            <motion.section
              key="lines"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="space-y-6"
            >
              {/* 导航栏 - 更精致 */}
              {/* 导航栏 - 更精致 (吸顶) */}
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                className="sticky top-16 md:top-20 z-40 flex items-center gap-2 md:gap-3 bg-white/90 backdrop-blur-md rounded-2xl p-3 md:p-4 shadow-sm border border-gray-100 mb-6"
              >
                <button
                  onClick={resetToScenes}
                  className="flex-shrink-0 inline-flex items-center gap-1 md:gap-2 px-3 py-1.5 md:px-4 md:py-2 rounded-full bg-gray-50 hover:bg-pink-50 text-xs md:text-sm font-semibold text-gray-600 hover:text-pink-600 transition-all"
                >
                  <ArrowLeft className="w-3.5 h-3.5 md:w-4 md:h-4" />
                  <span className="hidden md:inline">返回小场景</span>
                  <span className="md:hidden">返回</span>
                </button>
                <div className="flex items-center gap-1 md:gap-2 overflow-hidden text-xs md:text-sm">
                  <span className="text-gray-300">/</span>
                  <span className="text-gray-500 truncate">{activeGroup.title}</span>
                  <ChevronRight className="w-3.5 h-3.5 md:w-4 md:h-4 text-gray-300 flex-shrink-0" />
                  <span className="font-semibold text-pink-600 bg-pink-50 px-2 py-0.5 md:px-3 md:py-1 rounded-full truncate">{activeScene.title}</span>
                </div>
              </motion.div>

              {/* 场景标题卡片 - 更高级 */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="rounded-3xl bg-white p-6 md:p-8 shadow-xl border border-pink-100 relative overflow-hidden"
              >
                {/* 背景装饰 */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-pink-100 to-rose-100 rounded-full blur-3xl opacity-50" />
                <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-amber-100 to-yellow-100 rounded-full blur-2xl opacity-50" />

                <div className="relative flex items-center gap-5">
                  <motion.div
                    initial={{ scale: 0, rotate: -180 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{ type: "spring", stiffness: 200, delay: 0.2 }}
                    className="w-20 h-20 rounded-2xl bg-gradient-to-br from-pink-400 via-rose-400 to-orange-400 flex items-center justify-center text-4xl shadow-lg"
                  >
                    {getSceneEmoji(activeScene.id)}
                  </motion.div>
                  <div>
                    <h2 className="text-2xl md:text-3xl font-bold text-gray-800">{activeScene.title}</h2>
                    <p className="text-gray-500 mt-2 flex items-center gap-2">
                      <MessageCircle className="w-4 h-4 text-pink-400" />
                      共 {activeScene.lines.length} 句亲子英语表达
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* 对话列表 - 全新气泡样式 */}
              <div className="space-y-5">
                {activeScene.lines.map((line, index) => {
                  const isEven = index % 2 === 0;
                  const lineId = `${activeScene.id}-${index}`;
                  const isFavorite = favorites.has(lineId);

                  return (
                    <motion.div
                      key={lineId}
                      custom={index}
                      variants={bubbleVariants}
                      initial="hidden"
                      animate="visible"
                      className={`flex gap-4 ${isEven ? '' : 'flex-row-reverse'}`}
                    >
                      {/* 头像 - 更可爱 */}
                      <motion.div
                        className={`flex-shrink-0 w-12 h-12 rounded-2xl flex items-center justify-center text-lg shadow-lg ${isEven
                          ? 'bg-gradient-to-br from-pink-400 to-rose-400 text-white'
                          : 'bg-gradient-to-br from-amber-400 to-orange-400 text-white'
                          }`}
                        whileHover={{ scale: 1.1, rotate: isEven ? -5 : 5 }}
                      >
                        {isEven ? '👩' : '👶'}
                      </motion.div>

                      {/* 气泡内容 */}
                      <div className={`flex-1 max-w-[85%] ${isEven ? '' : 'text-right'}`}>
                        {/* 英文气泡 - 更立体 */}
                        <motion.div
                          className={`relative inline-block rounded-2xl px-6 py-4 shadow-lg mb-2 ${isEven
                            ? 'bg-gradient-to-r from-pink-500 via-rose-500 to-pink-600 text-white rounded-tl-none'
                            : 'bg-gradient-to-r from-amber-400 via-orange-400 to-amber-500 text-white rounded-tr-none'
                            }`}
                          whileHover={{ scale: 1.02 }}
                          transition={{ type: "spring", stiffness: 400 }}
                        >
                          {/* 小尾巴 */}
                          <div className={`absolute top-0 w-4 h-4 ${isEven
                            ? '-left-2 bg-pink-500'
                            : '-right-2 bg-amber-400'
                            }`} style={{
                              clipPath: isEven ? 'polygon(100% 0, 0 0, 100% 100%)' : 'polygon(0 0, 100% 0, 0 100%)'
                            }} />

                          <p className="text-base md:text-lg font-medium leading-relaxed relative z-10">
                            {line.en}
                          </p>

                          {/* 收藏按钮 */}
                          <button
                            onClick={() => toggleFavorite(lineId)}
                            className="absolute top-2 right-2 w-6 h-6 rounded-full bg-white/20 hover:bg-white/30 flex items-center justify-center transition-colors"
                          >
                            <Heart className={`w-3.5 h-3.5 ${isFavorite ? 'fill-white text-white' : 'text-white/70'}`} />
                          </button>
                        </motion.div>

                        {/* 中文翻译 - 更精致 */}
                        <div className={`flex items-center gap-2 ${isEven ? '' : 'justify-end'}`}>
                          <span className="text-sm text-gray-500 bg-gray-50 px-3 py-1.5 rounded-full">
                            {line.cn}
                          </span>
                          <button className="w-7 h-7 rounded-full bg-pink-50 hover:bg-pink-100 flex items-center justify-center transition-colors">
                            <Volume2 className="w-3.5 h-3.5 text-pink-500" />
                          </button>
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </div>

              {/* 底部提示 - 更可爱 */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="text-center py-8"
              >
                <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-gradient-to-r from-pink-100 to-rose-100 text-pink-600 shadow-md">
                  <motion.div
                    animate={{ rotate: [0, 15, -15, 0] }}
                    transition={{ duration: 0.5, repeat: Infinity, repeatDelay: 2 }}
                  >
                    <Sparkles className="w-5 h-5" />
                  </motion.div>
                  <span className="font-semibold">已学完 {activeScene.lines.length} 句表达，真棒！</span>
                  <motion.div
                    animate={{ rotate: [0, -15, 15, 0] }}
                    transition={{ duration: 0.5, repeat: Infinity, repeatDelay: 2 }}
                  >
                    <Sparkles className="w-5 h-5" />
                  </motion.div>
                </div>

                {/* 装饰 */}
                <div className="flex justify-center gap-4 mt-6 text-3xl opacity-30">
                  <motion.span
                    animate={{ y: [0, -10, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    🎉
                  </motion.span>
                  <motion.span
                    animate={{ y: [0, -10, 0] }}
                    transition={{ duration: 2, repeat: Infinity, delay: 0.3 }}
                  >
                    ⭐
                  </motion.span>
                  <motion.span
                    animate={{ y: [0, -10, 0] }}
                    transition={{ duration: 2, repeat: Infinity, delay: 0.6 }}
                  >
                    🎊
                  </motion.span>
                </div>
              </motion.div>
            </motion.section>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
