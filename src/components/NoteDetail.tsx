import { motion, AnimatePresence } from 'framer-motion';
import { X, BookOpen, MessageCircle, Lightbulb, HelpCircle, Gamepad2, Star, ScrollText } from 'lucide-react';
import { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Badge } from '@/components/ui/badge';
import { getNoteByEpisodeId } from '@/data/notes';
import { getEpisodeById } from '@/data/episodes';
import { seasons } from '@/data/seasons';
import type { ViewState, Note } from '@/types';

interface NoteDetailProps {
  episodeId: string;
  onNavigate: (view: ViewState) => void;
}

export function NoteDetail({ episodeId, onNavigate }: NoteDetailProps) {
  const note = getNoteByEpisodeId(episodeId);
  const episode = getEpisodeById(episodeId);
  const season = episode ? seasons.find(s => s.id === episode.seasonId) : null;
  const [activeTab, setActiveTab] = useState('highlights');

  if (!note || !episode) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <p className="text-gray-500">笔记内容加载中...</p>
        </div>
      </div>
    );
  }

  const tabItems = [
    { id: 'highlights', label: '亮点概述', icon: Star },
    { id: 'dialogues', label: '核心台词', icon: MessageCircle },
    { id: 'fullscript', label: '完整台词', icon: ScrollText },
    { id: 'vocabulary', label: '重点词汇', icon: BookOpen },
    { id: 'patterns', label: '核心句型', icon: Lightbulb },
    { id: 'qa', label: '互动问答', icon: HelpCircle },
    { id: 'games', label: '亲子游戏', icon: Gamepad2 },
  ];

  return (
    <section className="py-20 md:py-28 pt-28 min-h-screen">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          {/* Back Button */}
          <motion.button
            onClick={() => onNavigate({ type: 'season', seasonId: episode.seasonId })}
            className="flex items-center gap-2 text-gray-500 hover:text-pink-500 transition-colors mb-4"
            whileHover={{ x: -3 }}
          >
            <X className="w-5 h-5" />
            <span className="font-medium">返回集数列表</span>
          </motion.button>

          {/* Episode Info */}
          <div 
            className="relative overflow-hidden rounded-3xl p-6 md:p-8"
            style={{ backgroundColor: season?.bgColor || '#FFE4EC' }}
          >
            <div 
              className="absolute -top-10 -right-10 w-32 h-32 rounded-full opacity-20"
              style={{ backgroundColor: season?.color || '#FF8AB0' }}
            />
            <div className="relative z-10">
              <div className="flex flex-wrap items-center gap-2 mb-3">
                <Badge 
                  variant="secondary"
                  className="text-xs font-bold"
                  style={{ 
                    backgroundColor: `${season?.color}30`,
                    color: season?.color,
                  }}
                >
                  {episode.id.toUpperCase()}
                </Badge>
              </div>
              <h1 className="text-2xl md:text-3xl font-bold text-gray-800 mb-1">
                {episode.titleEn}
              </h1>
              <p className="text-lg text-gray-600">{episode.titleCn}</p>
            </div>
          </div>
        </motion.div>

        {/* Content Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
        >
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            {/* Tab List - Scrollable on mobile */}
            <div className="relative mb-6">
              <ScrollArea className="w-full">
                <TabsList className="inline-flex h-auto p-1.5 bg-pink-50/80 rounded-2xl w-auto min-w-full">
                  {tabItems.map((item) => (
                    <TabsTrigger
                      key={item.id}
                      value={item.id}
                      className="flex items-center gap-1.5 px-3 py-2.5 rounded-xl text-sm font-medium data-[state=active]:bg-white data-[state=active]:text-pink-600 data-[state=active]:shadow-sm transition-all whitespace-nowrap"
                    >
                      <item.icon className="w-4 h-4" />
                      <span className="hidden sm:inline">{item.label}</span>
                    </TabsTrigger>
                  ))}
                </TabsList>
              </ScrollArea>
            </div>

            {/* Tab Contents */}
            <AnimatePresence mode="wait">
              <TabsContent value="highlights" className="mt-0">
                <HighlightsContent highlights={note.highlights} />
              </TabsContent>

              <TabsContent value="dialogues" className="mt-0">
                <DialoguesContent dialogues={note.dialogues} />
              </TabsContent>

              <TabsContent value="fullscript" className="mt-0">
                <FullScriptContent fullScript={note.fullScript} />
              </TabsContent>

              <TabsContent value="vocabulary" className="mt-0">
                <VocabularyContent vocabulary={note.vocabulary} />
              </TabsContent>

              <TabsContent value="patterns" className="mt-0">
                <PatternsContent patterns={note.patterns} />
              </TabsContent>

              <TabsContent value="qa" className="mt-0">
                <QAContent qa={note.qa} />
              </TabsContent>

              <TabsContent value="games" className="mt-0">
                <GamesContent games={note.games} />
              </TabsContent>
            </AnimatePresence>
          </Tabs>
        </motion.div>
      </div>
    </section>
  );
}

// Highlights Content
function HighlightsContent({ highlights }: { highlights: Note['highlights'] }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="space-y-6"
    >
      {/* Summary Cards */}
      <div className="grid md:grid-cols-2 gap-5">
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-pink-100">
          <h3 className="text-lg font-bold text-gray-800 mb-3 flex items-center gap-2">
            <span className="w-8 h-8 rounded-lg bg-pink-100 flex items-center justify-center">
              <span className="text-pink-500 text-sm">中</span>
            </span>
            中文概述
          </h3>
          <p className="text-gray-600 leading-relaxed">{highlights.summaryCn}</p>
        </div>

        <div className="bg-white rounded-2xl p-6 shadow-sm border border-pink-100">
          <h3 className="text-lg font-bold text-gray-800 mb-3 flex items-center gap-2">
            <span className="w-8 h-8 rounded-lg bg-blue-100 flex items-center justify-center">
              <span className="text-blue-500 text-sm">EN</span>
            </span>
            English Summary
          </h3>
          <p className="text-gray-600 leading-relaxed">{highlights.summaryEn}</p>
        </div>
      </div>

      {/* Themes */}
      <div className="bg-gradient-to-r from-pink-50 to-purple-50 rounded-2xl p-6">
        <h3 className="text-lg font-bold text-gray-800 mb-4">情感主题</h3>
        <div className="flex flex-wrap gap-3">
          {highlights.themes.map((theme, index) => (
            <span
              key={index}
              className="px-4 py-2 bg-white rounded-full text-pink-600 font-medium shadow-sm"
            >
              ✨ {theme}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

// Dialogues Content
function DialoguesContent({ dialogues }: { dialogues: Note['dialogues'] }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="space-y-4"
    >
      {dialogues.map((dialogue, index) => (
        <motion.div
          key={dialogue.id}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: index * 0.05 }}
          className="bg-white rounded-2xl p-5 shadow-sm border border-pink-100 hover:shadow-md transition-shadow"
        >
          <div className="flex items-start gap-4">
            <span className="flex-shrink-0 w-8 h-8 rounded-full bg-pink-100 text-pink-600 flex items-center justify-center text-sm font-bold">
              {dialogue.id}
            </span>
            <div className="flex-1 min-w-0">
              <p className="text-lg font-medium text-gray-800 mb-1">{dialogue.text}</p>
              <p className="text-gray-500 mb-2">{dialogue.translation}</p>
              <p className="text-sm text-pink-500 bg-pink-50 inline-block px-3 py-1 rounded-lg">
                💡 {dialogue.scenario}
              </p>
            </div>
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
}

// Full Script Content
function FullScriptContent({ fullScript }: { fullScript?: string[] }) {
  if (!fullScript || fullScript.length === 0) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        className="bg-white rounded-2xl p-6 shadow-sm border border-pink-100 text-gray-500"
      >
        暂无完整台词。
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="bg-white rounded-2xl p-6 shadow-sm border border-pink-100"
    >
      <div className="space-y-2">
        {fullScript.map((line, index) => {
          const match = line.match(/^([^:：]+)[:：]\s*(.*)$/);
          const speaker = match ? match[1].trim() : '';
          const speech = match ? match[2].trim() : line;
          return (
            <div
              key={`${index}-${line}`}
              className="grid grid-cols-[3rem_1fr] gap-2 items-start"
            >
              <span className="text-xs font-bold text-pink-500 pt-1 text-right">
                {index + 1}
              </span>
              <div className="bg-pink-50/40 rounded-xl px-4 py-3 border border-pink-100/60">
                {speaker ? (
                  <div className="flex flex-wrap items-baseline gap-2 mb-1">
                    <span className="text-sm font-semibold text-gray-800 bg-white/70 border border-pink-100 rounded-full px-2.5 py-0.5">
                      {speaker}
                    </span>
                    <span className="text-xs text-gray-400">says</span>
                  </div>
                ) : null}
                <p className="text-gray-700 leading-relaxed whitespace-pre-wrap">{speech}</p>
              </div>
            </div>
          );
        })}
      </div>
    </motion.div>
  );
}

// Vocabulary Content
function VocabularyContent({ vocabulary }: { vocabulary: Note['vocabulary'] }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="grid md:grid-cols-2 gap-4"
    >
      {vocabulary.map((item, index) => (
        <motion.div
          key={item.word}
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: index * 0.05 }}
          className="bg-white rounded-2xl p-5 shadow-sm border border-pink-100 hover:shadow-md transition-all"
        >
          <div className="flex items-start justify-between mb-3">
            <div>
              <h4 className="text-xl font-bold text-pink-600">{item.word}</h4>
              <p className="text-gray-500">{item.meaning}</p>
            </div>
            <span className="px-3 py-1 bg-gray-100 rounded-full text-sm font-mono text-gray-600">
              {item.phonetic}
            </span>
          </div>
          <div className="space-y-2">
            <p className="text-sm text-gray-600">
              <span className="text-pink-400">动画:</span> {item.exampleAnimation}
            </p>
            <p className="text-sm text-gray-600">
              <span className="text-green-500">生活:</span> {item.exampleLife}
            </p>
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
}

// Patterns Content
function PatternsContent({ patterns }: { patterns: Note['patterns'] }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="space-y-4"
    >
      {patterns.map((item, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: index * 0.05 }}
          className="bg-white rounded-2xl p-5 shadow-sm border border-pink-100"
        >
          <div className="flex items-start gap-4">
            <span className="flex-shrink-0 w-10 h-10 rounded-xl bg-gradient-to-br from-pink-400 to-pink-500 text-white flex items-center justify-center text-sm font-bold">
              {index + 1}
            </span>
            <div className="flex-1">
              <h4 className="text-lg font-bold text-gray-800 mb-2">{item.pattern}</h4>
              <div className="grid sm:grid-cols-3 gap-3 text-sm">
                <div className="bg-pink-50 rounded-lg p-3">
                  <span className="text-pink-500 font-medium block mb-1">讲解</span>
                  <span className="text-gray-600">{item.explanation}</span>
                </div>
                <div className="bg-blue-50 rounded-lg p-3">
                  <span className="text-blue-500 font-medium block mb-1">语法</span>
                  <span className="text-gray-600">{item.grammar}</span>
                </div>
                <div className="bg-green-50 rounded-lg p-3">
                  <span className="text-green-500 font-medium block mb-1">练习</span>
                  <span className="text-gray-600">{item.practice}</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
}

// Q&A Content
function QAContent({ qa }: { qa: Note['qa'] }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="grid md:grid-cols-2 gap-4"
    >
      {qa.map((item, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.05 }}
          className="bg-white rounded-2xl p-5 shadow-sm border border-pink-100"
        >
          <div className="flex items-start gap-3 mb-3">
            <span className="flex-shrink-0 w-6 h-6 rounded-full bg-pink-100 text-pink-600 flex items-center justify-center text-xs font-bold">
              Q
            </span>
            <p className="text-gray-700 font-medium">{item.question}</p>
          </div>
          <div className="flex items-start gap-3 pl-9">
            <span className="flex-shrink-0 w-6 h-6 rounded-full bg-green-100 text-green-600 flex items-center justify-center text-xs font-bold -ml-9 mr-3">
              A
            </span>
            <p className="text-gray-600">{item.answer}</p>
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
}

// Games Content
function GamesContent({ games }: { games: Note['games'] }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="space-y-6"
    >
      {games.map((game, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: index * 0.1 }}
          className="bg-white rounded-2xl p-6 shadow-sm border border-pink-100"
        >
          <h3 className="text-xl font-bold text-gray-800 mb-2 flex items-center gap-2">
            <span className="w-10 h-10 rounded-xl bg-gradient-to-br from-purple-400 to-pink-500 text-white flex items-center justify-center text-lg">
              🎮
            </span>
            {game.name}
          </h3>
          <p className="text-pink-600 font-medium mb-4 bg-pink-50 inline-block px-4 py-2 rounded-lg">
            目的: {game.purpose}
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="text-sm font-bold text-gray-500 uppercase mb-3">步骤</h4>
              <ol className="space-y-2">
                {game.steps.map((step, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-pink-100 text-pink-600 flex items-center justify-center text-xs font-bold">
                      {i + 1}
                    </span>
                    <span className="text-gray-600">{step}</span>
                  </li>
                ))}
              </ol>
            </div>

            <div>
              <h4 className="text-sm font-bold text-gray-500 uppercase mb-3">口令示范</h4>
              <div className="space-y-2">
                {game.commands.map((command, i) => (
                  <div
                    key={i}
                    className="bg-gray-50 rounded-lg px-4 py-2 text-gray-600 font-mono text-sm"
                  >
                    {command}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
}
