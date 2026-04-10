'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { BookOpen, Zap, MessageCircle, ArrowRight } from 'lucide-react';

const FloatingElement = ({ delay, duration, children }: { delay: number; duration: number; children: React.ReactNode }) => (
  <motion.div
    animate={{
      y: [0, -20, 0],
      opacity: [0.3, 0.6, 0.3],
    }}
    transition={{
      duration,
      delay,
      repeat: Infinity,
    }}
    className="absolute"
  >
    {children}
  </motion.div>
);

export default function Home() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      } as any,
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 },
    },
  };

  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-br from-slate-950 via-purple-900 to-slate-950">
      {/* 배경 애니메이션 요소 */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-br from-blue-500/20 to-transparent rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gradient-to-tl from-purple-500/20 to-transparent rounded-full blur-3xl" />
        <div className="absolute top-1/2 right-0 w-96 h-96 bg-gradient-to-l from-pink-500/10 to-transparent rounded-full blur-3xl" />
      </div>

      {/* 그리드 배경 */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(148,163,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(148,163,255,0.03)_1px,transparent_1px)] bg-[size:50px_50px]" />

      {/* 메인 콘텐츠 */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 min-h-screen flex items-center justify-center px-4 py-20"
      >
        <div className="max-w-5xl w-full">
          {/* 헤더 섹션 */}
          <motion.div variants={itemVariants} className="text-center mb-12">
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 } as any}
              className="inline-block mb-6"
            >
              <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-blue-400 to-purple-600 flex items-center justify-center shadow-2xl shadow-purple-500/50">
                <Zap className="w-10 h-10 text-white" />
              </div>
            </motion.div>

            <h1 className="text-6xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-300 via-purple-300 to-pink-300 bg-clip-text text-transparent">
              OpenClaw
            </h1>
            <p className="text-xl md:text-2xl text-slate-300 font-light mb-2">
              설치부터 Slack 연동까지
            </p>
            <p className="text-lg text-slate-400">
              완벽한 단계별 가이드로 시작하세요
            </p>
          </motion.div>

          {/* 카드 섹션 */}
          <motion.div
            variants={itemVariants}
            className="grid md:grid-cols-2 gap-6 mb-12"
          >
            {/* 설치 가이드 카드 */}
            <motion.div
              whileHover={{ y: -10, boxShadow: '0 20px 60px rgba(59, 130, 246, 0.3)' }}
              className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-slate-800/40 to-slate-900/40 backdrop-blur-sm border border-blue-500/20 hover:border-blue-400/50 p-8 transition-all duration-300"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              <div className="relative z-10">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <BookOpen className="w-7 h-7 text-white" />
                </div>
                
                <h2 className="text-2xl font-bold text-white mb-3 group-hover:text-blue-300 transition-colors">
                  설치 가이드
                </h2>
                <p className="text-slate-300 mb-6 leading-relaxed">
                  OpenClaw를 처음부터 설치하는 방법을 단계별로 배워보세요. Node.js부터 Gateway 실행까지 모든 과정을 슬라이드로 설명합니다.
                </p>
                
                <Link
                  href="/installation"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-semibold transition-all duration-300 group/btn"
                >
                  시작하기
                  <ArrowRight className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform" />
                </Link>
              </div>
            </motion.div>

            {/* Slack 연동 카드 */}
            <motion.div
              whileHover={{ y: -10, boxShadow: '0 20px 60px rgba(168, 85, 247, 0.3)' }}
              className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-slate-800/40 to-slate-900/40 backdrop-blur-sm border border-purple-500/20 hover:border-purple-400/50 p-8 transition-all duration-300"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              <div className="relative z-10">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-purple-400 to-purple-600 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <MessageCircle className="w-7 h-7 text-white" />
                </div>
                
                <h2 className="text-2xl font-bold text-white mb-3 group-hover:text-purple-300 transition-colors">
                  Slack 연동
                </h2>
                <p className="text-slate-300 mb-6 leading-relaxed">
                  OpenClaw를 Slack 워크스페이스와 연동하는 방법을 배우세요. 앱 생성부터 권한 설정, 테스트까지 모든 단계를 다룹니다.
                </p>
                
                <Link
                  href="/slack-integration"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-gradient-to-r from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700 text-white font-semibold transition-all duration-300 group/btn"
                >
                  시작하기
                  <ArrowRight className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform" />
                </Link>
              </div>
            </motion.div>
          </motion.div>

          {/* 하단 섹션 */}
          <motion.div
            variants={itemVariants}
            className="text-center"
          >
            <div className="inline-block rounded-2xl bg-gradient-to-r from-slate-800/50 to-slate-900/50 backdrop-blur-sm border border-slate-700/50 px-8 py-4 mb-8">
              <p className="text-slate-300 mb-1">💡 팁</p>
              <p className="text-slate-400 text-sm">
                화살표 키로 슬라이드를 넘기거나 마우스로 클릭하세요
              </p>
            </div>

            <div className="flex gap-4 justify-center flex-wrap">
              <a
                href="https://docs.openclaw.ai"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-blue-300 transition-colors underline decoration-dashed underline-offset-4"
              >
                공식 문서
              </a>
              <span className="text-slate-600">·</span>
              <a
                href="https://github.com/openclaw/openclaw"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-blue-300 transition-colors underline decoration-dashed underline-offset-4"
              >
                GitHub
              </a>
              <span className="text-slate-600">·</span>
              <a
                href="https://discord.com/invite/clawd"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-blue-300 transition-colors underline decoration-dashed underline-offset-4"
              >
                커뮤니티
              </a>
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* 떠다니는 장식 요소 */}
      <FloatingElement delay={0} duration={6}>
        <div className="w-32 h-32 rounded-3xl bg-gradient-to-br from-blue-400/20 to-transparent" style={{ marginLeft: '5%', marginTop: '10%' }} />
      </FloatingElement>
      <FloatingElement delay={2} duration={8}>
        <div className="w-24 h-24 rounded-2xl bg-gradient-to-br from-purple-400/20 to-transparent" style={{ marginLeft: '85%', marginTop: '70%' }} />
      </FloatingElement>
      <FloatingElement delay={1} duration={7}>
        <div className="w-28 h-28 rounded-full bg-gradient-to-br from-pink-400/10 to-transparent" style={{ marginLeft: '50%', marginTop: '20%' }} />
      </FloatingElement>
    </div>
  );
}
