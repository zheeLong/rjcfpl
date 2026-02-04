// 季节类型
export interface Season {
  id: number;
  name: string;
  nameEn: string;
  episodeCount: number;
  color: string;
  bgColor: string;
  icon: string;
}

// 集数类型
export interface Episode {
  id: string;
  seasonId: number;
  episodeNumber: number;
  titleEn: string;
  titleCn: string;
  vocabularyCount: number;
  patternCount: number;
}

// 台词类型
export interface Dialogue {
  id: number;
  text: string;
  translation: string;
  scenario: string;
}

// 词汇类型
export interface Vocabulary {
  word: string;
  meaning: string;
  phonetic: string;
  exampleAnimation: string;
  exampleLife: string;
}

// 句型类型
export interface Pattern {
  pattern: string;
  explanation: string;
  grammar: string;
  practice: string;
}

// 问答类型
export interface QA {
  question: string;
  answer: string;
}

// 游戏类型
export interface Game {
  name: string;
  purpose: string;
  steps: string[];
  commands: string[];
}

// 笔记类型
export interface Note {
  episodeId: string;
  highlights: {
    summaryCn: string;
    summaryEn: string;
    themes: string[];
  };
  dialogues: Dialogue[];
  fullScript?: string[];
  vocabulary: Vocabulary[];
  patterns: Pattern[];
  qa: QA[];
  games: Game[];
}

// 模块类型
export type ModuleId =
  | 'parenting'
  | 'peppa'
  | 'oxford'
  | 'raz'
  | 'picturebooks'
  | 'picturebook-extension'
  | 'sharing';

export interface ModuleInfo {
  id: ModuleId;
  title: string;
  subtitle: string;
  description: string;
  highlights: string[];
  tag: string;
  color: string;
  bgColor: string;
}

// 视图状态类型
export type ViewState = 
  | { type: 'home' }
  | { type: 'season'; seasonId: number }
  | { type: 'note'; episodeId: string }
  | { type: 'module'; moduleId: ModuleId };
