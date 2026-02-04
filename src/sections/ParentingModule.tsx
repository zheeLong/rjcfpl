import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, Sparkles, MessageCircle, BookOpen, ChevronRight } from 'lucide-react';
import { parentingGroups } from '@/data/parenting';

// 大场景图标映射
const groupIcons: Record<string, string> = {
  newyear: '🧧',
  mall: '🛍️',
  supermarket: '🛒',
  home: '🏠',
  outdoor: '🌳',
  transportation: '🚗',
  daily: '📅',
};

// 大场景渐变色映射
const groupGradients: Record<string, string> = {
  newyear: 'from-red-400 via-pink-400 to-rose-300',
  mall: 'from-purple-400 via-pink-400 to-rose-300',
  supermarket: 'from-green-400 via-emerald-400 to-teal-300',
  home: 'from-orange-400 via-amber-400 to-yellow-300',
  outdoor: 'from-blue-400 via-cyan-400 to-teal-300',
  transportation: 'from-indigo-400 via-purple-400 to-pink-300',
  daily: 'from-pink-400 via-rose-400 to-orange-300',
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

// 获取大场景渐变色
const getGroupGradient = (groupId: string): string => {
  return groupGradients[groupId] || 'from-pink-400 via-rose-400 to-orange-300';
};

export function ParentingModule() {
  const [activeGroupId, setActiveGroupId] = useState<string | null>(null);
  const [activeSceneId, setActiveSceneId] = useState<string | null>(null);

  const activeGroup = parentingGroups.find((group) => group.id === activeGroupId) || null;
  const activeScene = activeGroup?.scenes.find((scene) => scene.id === activeSceneId) || null;

  const resetToGroups = () => {
    setActiveGroupId(null);
    setActiveSceneId(null);
  };

  const resetToScenes = () => {
    setActiveSceneId(null);
  };

  // 计算总句数
  const totalLines = activeGroup?.scenes.reduce((sum, scene) => sum + scene.lines.length, 0) || 0;

  return (
    <div className="mt-8 space-y-8">
      <AnimatePresence mode="wait">
        {/* 大场景列表 */}
        {!activeGroup && (
          <motion.section
            key="groups"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="space-y-6"
          >
            {/* 标题区域 */}
            <div className="text-center space-y-3 py-4">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-pink-100 to-rose-100 text-pink-600 text-sm font-medium">
                <Sparkles className="w-4 h-4" />
                <span>精选亲子英语场景</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-pink-500 to-rose-500 bg-clip-text text-transparent">
                亲子英语场景库
              </h2>
              <p className="text-gray-500 max-w-md mx-auto">
                选择感兴趣的大场景，探索实用的亲子英语表达，让英语融入日常生活
              </p>
            </div>

            {/* 大场景卡片网格 */}
            <div className="grid gap-4 md:gap-6 md:grid-cols-2 lg:grid-cols-3">
              {parentingGroups.map((group, index) => (
                <motion.button
                  key={group.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  onClick={() => setActiveGroupId(group.id)}
                  className="group relative text-left rounded-3xl overflow-hidden bg-white shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
                >
                  {/* 顶部渐变色块 */}
                  <div className={`h-32 bg-gradient-to-br ${getGroupGradient(group.id)} relative overflow-hidden`}>
                    <div className="absolute inset-0 bg-white/10" />
                    <div className="absolute top-4 right-4 text-6xl opacity-30 transform group-hover:scale-110 group-hover:rotate-12 transition-transform duration-500">
                      {getGroupIcon(group.id)}
                    </div>
                    <div className="absolute bottom-4 left-4">
                      <span className="text-4xl">{getGroupIcon(group.id)}</span>
                    </div>
                  </div>

                  {/* 内容区域 */}
                  <div className="p-5 space-y-3">
                    <h3 className="text-xl font-bold text-gray-800 group-hover:text-pink-600 transition-colors">
                      {group.title}
                    </h3>
                    
                    {/* 统计信息 */}
                    <div className="flex items-center gap-3">
                      <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-pink-50 text-pink-600 text-xs font-semibold">
                        <BookOpen className="w-3 h-3" />
                        {group.scenes.length} 个小场景
                      </span>
                      <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-rose-50 text-rose-600 text-xs font-semibold">
                        <MessageCircle className="w-3 h-3" />
                        {group.scenes.reduce((sum, s) => sum + s.lines.length, 0)} 句表达
                      </span>
                    </div>

                    {/* 箭头指示 */}
                    <div className="flex items-center justify-between pt-2">
                      <span className="text-sm text-gray-400">点击进入</span>
                      <div className="w-8 h-8 rounded-full bg-pink-100 flex items-center justify-center group-hover:bg-pink-500 transition-colors">
                        <ChevronRight className="w-4 h-4 text-pink-500 group-hover:text-white transition-colors" />
                      </div>
                    </div>
                  </div>
                </motion.button>
              ))}
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
            transition={{ duration: 0.3 }}
            className="space-y-6"
          >
            {/* 返回按钮和标题 */}
            <div className="space-y-4">
              <button
                onClick={resetToGroups}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white shadow-md hover:shadow-lg text-sm font-semibold text-pink-600 hover:text-pink-700 transition-all hover:-translate-y-0.5"
              >
                <ArrowLeft className="w-4 h-4" />
                返回场景总览
              </button>

              {/* 大场景标题卡片 */}
              <div className={`rounded-3xl p-6 md:p-8 bg-gradient-to-r ${getGroupGradient(activeGroup.id)} text-white shadow-xl`}>
                <div className="flex items-start gap-4">
                  <span className="text-5xl md:text-6xl">{getGroupIcon(activeGroup.id)}</span>
                  <div className="flex-1">
                    <h2 className="text-2xl md:text-3xl font-bold mb-2">{activeGroup.title}</h2>
                    <div className="flex flex-wrap items-center gap-3 text-white/90">
                      <span className="inline-flex items-center gap-1">
                        <BookOpen className="w-4 h-4" />
                        {activeGroup.scenes.length} 个小场景
                      </span>
                      <span>·</span>
                      <span className="inline-flex items-center gap-1">
                        <MessageCircle className="w-4 h-4" />
                        {totalLines} 句亲子表达
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* 小场景网格 */}
            <div className="grid gap-4 md:grid-cols-2">
              {activeGroup.scenes.map((scene, index) => (
                <motion.button
                  key={scene.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  onClick={() => setActiveSceneId(scene.id)}
                  className="group text-left rounded-2xl bg-white p-5 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-2 border-transparent hover:border-pink-200"
                >
                  <div className="flex items-start gap-4">
                    {/* Emoji图标 */}
                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-pink-50 to-rose-50 flex items-center justify-center text-3xl shadow-inner group-hover:scale-110 transition-transform">
                      {getSceneEmoji(scene.id)}
                    </div>
                    
                    <div className="flex-1 min-w-0">
                      <h3 className="text-lg font-bold text-gray-800 group-hover:text-pink-600 transition-colors mb-1">
                        {scene.title}
                      </h3>
                      <div className="flex items-center gap-2 text-sm text-gray-500">
                        <MessageCircle className="w-3.5 h-3.5" />
                        <span>{scene.lines.length} 句亲子表达</span>
                      </div>
                    </div>

                    {/* 箭头 */}
                    <ChevronRight className="w-5 h-5 text-gray-300 group-hover:text-pink-400 group-hover:translate-x-1 transition-all" />
                  </div>
                </motion.button>
              ))}
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
            transition={{ duration: 0.3 }}
            className="space-y-6"
          >
            {/* 导航栏 */}
            <div className="flex flex-wrap items-center gap-3">
              <button
                onClick={resetToScenes}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white shadow-md hover:shadow-lg text-sm font-semibold text-pink-600 hover:text-pink-700 transition-all hover:-translate-y-0.5"
              >
                <ArrowLeft className="w-4 h-4" />
                返回小场景
              </button>
              <span className="text-gray-300">|</span>
              <span className="text-sm text-gray-500">{activeGroup.title}</span>
              <ChevronRight className="w-4 h-4 text-gray-300" />
              <span className="text-sm font-medium text-pink-600">{activeScene.title}</span>
            </div>

            {/* 场景标题卡片 */}
            <div className="rounded-3xl bg-gradient-to-br from-white to-pink-50/50 p-6 md:p-8 shadow-lg border border-pink-100">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-pink-400 to-rose-400 flex items-center justify-center text-3xl shadow-lg">
                  {getSceneEmoji(activeScene.id)}
                </div>
                <div>
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-800">{activeScene.title}</h2>
                  <p className="text-gray-500 mt-1 flex items-center gap-2">
                    <MessageCircle className="w-4 h-4" />
                    共 {activeScene.lines.length} 句亲子英语表达
                  </p>
                </div>
              </div>
            </div>

            {/* 对话列表 - 交替气泡样式 */}
            <div className="space-y-4">
              {activeScene.lines.map((line, index) => (
                <motion.div
                  key={`${activeScene.id}-${index}`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.03 }}
                  className={`flex gap-4 ${index % 2 === 0 ? '' : 'flex-row-reverse'}`}
                >
                  {/* 头像/序号 */}
                  <div className={`flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold shadow-md ${
                    index % 2 === 0 
                      ? 'bg-gradient-to-br from-pink-400 to-rose-400 text-white' 
                      : 'bg-gradient-to-br from-amber-400 to-orange-400 text-white'
                  }`}>
                    {index + 1}
                  </div>

                  {/* 气泡内容 */}
                  <div className={`flex-1 max-w-[85%] ${index % 2 === 0 ? '' : 'text-right'}`}>
                    {/* 英文气泡 */}
                    <div className={`inline-block rounded-2xl px-5 py-3 shadow-md mb-2 ${
                      index % 2 === 0
                        ? 'bg-gradient-to-r from-pink-500 to-rose-500 text-white rounded-tl-none'
                        : 'bg-gradient-to-r from-amber-400 to-orange-400 text-white rounded-tr-none'
                    }`}>
                      <p className="text-base md:text-lg font-medium leading-relaxed">
                        {line.en}
                      </p>
                    </div>
                    
                    {/* 中文翻译 */}
                    <div className={`text-sm text-gray-500 ${index % 2 === 0 ? '' : ''}`}>
                      {line.cn}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* 底部提示 */}
            <div className="text-center py-6">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-pink-50 text-pink-600 text-sm">
                <Sparkles className="w-4 h-4" />
                <span>已学完 {activeScene.lines.length} 句表达，真棒！</span>
              </div>
            </div>
          </motion.section>
        )}
      </AnimatePresence>
    </div>
  );
}
