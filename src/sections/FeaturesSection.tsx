import { motion } from 'framer-motion';
import { BookOpen, Users, Sparkles, Heart, MessageCircle, Gamepad2 } from 'lucide-react';
import { AnimatedSection, StaggerContainer, StaggerItem } from '@/components/AnimatedSection';

const features = [
  {
    icon: BookOpen,
    title: '系统化学习',
    description: '六大模块完整覆盖：亮点概述、核心台词、重点词汇、句型拆解、互动问答、亲子游戏',
    color: '#FF9AA2',
    bgColor: '#FFE4E8',
  },
  {
    icon: Users,
    title: '亲子互动',
    description: '精心设计的互动游戏，让家长和孩子一起参与，在游戏中自然习得英语',
    color: '#B5EAD7',
    bgColor: '#EEFCF7',
  },
  {
    icon: MessageCircle,
    title: '生活化应用',
    description: '场景化的英语表达，贴近日常生活，孩子学了就能用，培养英语思维',
    color: '#C7CEEA',
    bgColor: '#F0F2FC',
  },
];

const highlights = [
  { icon: Sparkles, text: '200+ 精选集数' },
  { icon: Heart, text: '适龄3-7岁' },
  { icon: Gamepad2, text: '趣味互动' },
];

export function FeaturesSection() {
  return (
    <section id="features" className="py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <AnimatedSection className="text-center mb-12 md:mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-pink-100 rounded-full mb-4">
            <Sparkles className="w-4 h-4 text-pink-500" />
            <span className="text-sm font-semibold text-pink-600">为什么选择我们</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            让英语启蒙变得 <span className="text-pink-500">轻松有趣</span>
          </h2>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto">
            专为家长和孩子设计的英语学习资源，让每一次观看都成为学习的机会
          </p>
        </AnimatedSection>

        {/* Features Grid */}
        <StaggerContainer className="grid md:grid-cols-3 gap-6 md:gap-8 mb-16">
          {features.map((feature, index) => (
            <StaggerItem key={index}>
              <FeatureCard {...feature} />
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* Highlights Bar */}
        <AnimatedSection delay={0.3}>
          <div className="bg-gradient-to-r from-pink-400 via-pink-500 to-pink-400 rounded-3xl p-6 md:p-8">
            <div className="flex flex-wrap justify-center gap-6 md:gap-12">
              {highlights.map((item, index) => (
                <motion.div
                  key={index}
                  className="flex items-center gap-3 text-white"
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center">
                    <item.icon className="w-5 h-5" />
                  </div>
                  <span className="font-semibold">{item.text}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}

interface FeatureCardProps {
  icon: React.ElementType;
  title: string;
  description: string;
  color: string;
  bgColor: string;
}

function FeatureCard({ icon: Icon, title, description, color, bgColor }: FeatureCardProps) {
  return (
    <motion.div
      className="group h-full"
      whileHover={{ y: -8 }}
    >
      <div 
        className="relative overflow-hidden rounded-3xl p-6 md:p-8 h-full transition-all duration-300"
        style={{ 
          backgroundColor: 'white',
          boxShadow: `0 8px 32px ${color}20`,
        }}
      >
        {/* Background Gradient */}
        <div 
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          style={{
            background: `linear-gradient(135deg, ${bgColor} 0%, white 100%)`,
          }}
        />

        {/* Content */}
        <div className="relative z-10">
          {/* Icon */}
          <div 
            className="w-14 h-14 rounded-2xl flex items-center justify-center mb-5 transition-transform duration-300 group-hover:scale-110"
            style={{ backgroundColor: color }}
          >
            <Icon className="w-7 h-7 text-white" />
          </div>

          {/* Title */}
          <h3 className="text-xl font-bold text-gray-800 mb-3">{title}</h3>

          {/* Description */}
          <p className="text-gray-500 leading-relaxed">{description}</p>
        </div>

        {/* Decorative Circle */}
        <div 
          className="absolute -bottom-6 -right-6 w-24 h-24 rounded-full opacity-10 transition-transform duration-500 group-hover:scale-150"
          style={{ backgroundColor: color }}
        />
      </div>
    </motion.div>
  );
}
