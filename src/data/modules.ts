import { BookOpen, Users, BookText, MessageCircle, GraduationCap, Library, Sparkles } from 'lucide-react';
import type { ModuleInfo } from '@/types';

export const modules: ModuleInfo[] = [
  {
    id: 'parenting',
    title: '亲子英语',
    subtitle: '高频生活场景表达',
    description: '把英语融入日常：起床、洗漱、吃饭、出行，每天 5 分钟轻量练习。',
    highlights: [
      '可直接套用的亲子对话模板',
      '生活化句型 + 口语表达',
      '适合 3-8 岁家庭日常陪伴',
    ],
    tag: '家庭场景',
    color: '#FFA69E',
    bgColor: '#FFF1EF',
  },
  {
    id: 'peppa',
    title: '佩奇笔记',
    subtitle: '跟着动画系统学英语',
    description: '每集包含台词、词汇、句型、问答与亲子游戏，帮助孩子边看边学。',
    highlights: [
      '完整台词 + 角色区分展示',
      '词汇、句型、问答一体化',
      '适合动画启蒙阶段精读',
    ],
    tag: '动画精读',
    color: '#FF7EB6',
    bgColor: '#FFE7F1',
  },
  {
    id: 'oxford',
    title: '牛津树精读',
    subtitle: 'Oxford Reading Tree 精读',
    description: '按级别梳理精读重点，配套提问、词句与输出练习。',
    highlights: [
      '分级阅读节奏规划',
      '精读重点与提问设计',
      '复盘记录与输出建议',
    ],
    tag: '分级精读',
    color: '#FFD166',
    bgColor: '#FFF6DB',
  },
  {
    id: 'raz',
    title: 'RAZ 精读',
    subtitle: 'Reading A-Z 精读体系',
    description: '针对 RAZ 级别整理精读笔记，帮助孩子稳步提升阅读力。',
    highlights: [
      '级别衔接与规划',
      '核心词句与理解点',
      '朗读与复述练习',
    ],
    tag: '分级精读',
    color: '#9EE6CF',
    bgColor: '#ECFBF6',
  },
  {
    id: 'picturebooks',
    title: '绘本推荐',
    subtitle: '分级阅读清单',
    description: '按年龄与主题推荐绘本，附亲子共读方法与延伸活动。',
    highlights: [
      '按年龄段与主题分类',
      '每本书的精读重点',
      '配套共读玩法与提问',
    ],
    tag: '共读计划',
    color: '#8BD3DD',
    bgColor: '#E8FAFC',
  },
  {
    id: 'picturebook-extension',
    title: '绘本拓展',
    subtitle: '主题延伸活动',
    description: '用手工、游戏、表达任务把绘本内容延伸到生活。',
    highlights: [
      '主题词汇拓展',
      '亲子互动活动',
      '输出表达与复盘',
    ],
    tag: '延伸训练',
    color: '#F4A261',
    bgColor: '#FFF1E5',
  },
  {
    id: 'sharing',
    title: '经验分享',
    subtitle: '启蒙方法与复盘',
    description: '学习路径、资源选择、踩坑总结，让启蒙更高效。',
    highlights: [
      '真实家庭启蒙路线图',
      '阶段性目标与复盘',
      '资源筛选与使用建议',
    ],
    tag: '成长记录',
    color: '#CDB4DB',
    bgColor: '#F4ECFA',
  },
];

export const moduleIcons = {
  parenting: Users,
  peppa: BookOpen,
  oxford: Library,
  raz: GraduationCap,
  picturebooks: BookText,
  'picturebook-extension': Sparkles,
  sharing: MessageCircle,
} as const;
