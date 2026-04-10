'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white flex items-center justify-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center space-y-8 px-4"
      >
        <div>
          <h1 className="text-6xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            OpenClaw
          </h1>
          <p className="text-2xl md:text-3xl text-slate-300 font-light">
            설치 및 Slack 연동 완벽 가이드
          </p>
        </div>

        <p className="text-slate-400 text-lg max-w-2xl mx-auto">
          OpenClaw를 설치하고 Slack과 연동하는 모든 과정을 슬라이드로 배워보세요.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
          <Link
            href="/installation"
            className="px-8 py-4 bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg font-semibold hover:from-blue-600 hover:to-blue-700 transition-all transform hover:scale-105"
          >
            설치 가이드 시작 →
          </Link>
          <Link
            href="/slack-integration"
            className="px-8 py-4 bg-gradient-to-r from-purple-500 to-purple-600 rounded-lg font-semibold hover:from-purple-600 hover:to-purple-700 transition-all transform hover:scale-105"
          >
            Slack 연동 가이드 →
          </Link>
        </div>

        <div className="pt-12 text-slate-500 text-sm">
          ↓ 클릭해서 슬라이드를 시작하세요 ↓
        </div>
      </motion.div>
    </div>
  );
}
