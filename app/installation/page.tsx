'use client';

import { useEffect, useRef } from 'react';
import Reveal from 'reveal.js';
import Link from 'next/link';
import { Home, ChevronRight } from 'lucide-react';

export default function Installation() {
  const deckRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!deckRef.current) return;

    const deck = new Reveal(deckRef.current, {
      hash: true,
      transition: 'slide',
      transitionSpeed: 'default',
      controls: true,
      progress: true,
      center: true,
      touch: true,
      width: '100%',
      height: '100%',
      margin: 0.1,
    });

    deck.initialize();

    return () => {
      try {
        deck.destroy();
      } catch (e) {
        // Ignore destroy errors
      }
    };
  }, []);

  return (
    <>
      {/* 네비게이션 바 */}
      <div className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-b from-slate-900/80 to-transparent backdrop-blur-sm px-6 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 text-slate-300 hover:text-white transition-colors group">
          <Home className="w-5 h-5 group-hover:-translate-y-0.5 transition-transform" />
          <span className="text-sm font-medium">홈으로</span>
        </Link>
        <div className="text-slate-400 text-sm">OpenClaw 설치 가이드</div>
      </div>

      {/* Reveal.js 슬라이드 */}
      <div className="reveal" ref={deckRef} style={{ width: '100%', height: '100vh' }}>
        <div className="slides">
          {/* 슬라이드 1: 타이틀 */}
          <section style={{
            background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #1e1b4b 100%)',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            padding: '3rem',
          }}>
            <div style={{ textAlign: 'center' }}>
              <div style={{
                width: '80px',
                height: '80px',
                borderRadius: '20px',
                background: 'linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%)',
                margin: '0 auto 2rem',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '2.5rem',
                boxShadow: '0 20px 60px rgba(59, 130, 246, 0.3)',
              }}>⚡</div>
              <h1 style={{
                fontSize: '3.5em',
                color: '#93c5fd',
                fontWeight: 'bold',
                margin: '0.5em 0',
                background: 'linear-gradient(135deg, #93c5fd 0%, #c4b5fd 100%)',
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}>
                OpenClaw 설치하기
              </h1>
              <p style={{ fontSize: '1.5em', color: '#cbd5e1', marginTop: '1em' }}>
                완벽한 단계별 가이드
              </p>
            </div>
          </section>

          {/* 슬라이드 2: 준비물 */}
          <section style={{
            background: 'linear-gradient(135deg, #1e293b 0%, #0f172a 100%)',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'flex-start',
            padding: '3rem',
          }}>
            <h2 style={{
              color: '#c4b5fd',
              fontSize: '2.5em',
              marginBottom: '1.5em',
              width: '100%',
            }}>설치 전 준비물</h2>
            <div style={{ fontSize: '1.3em', color: '#e2e8f0', width: '100%' }}>
              <div style={{ marginBottom: '1.2em', display: 'flex', alignItems: 'center', gap: '1em' }}>
                <span style={{ fontSize: '1.8em' }}>💻</span>
                <span>Mac, Linux, 또는 Windows</span>
              </div>
              <div style={{ marginBottom: '1.2em', display: 'flex', alignItems: 'center', gap: '1em' }}>
                <span style={{ fontSize: '1.8em' }}>📦</span>
                <span>Node.js 14 이상</span>
              </div>
              <div style={{ marginBottom: '1.2em', display: 'flex', alignItems: 'center', gap: '1em' }}>
                <span style={{ fontSize: '1.8em' }}>🔧</span>
                <span>npm 또는 yarn</span>
              </div>
              <div style={{ marginBottom: '1.2em', display: 'flex', alignItems: 'center', gap: '1em' }}>
                <span style={{ fontSize: '1.8em' }}>🌐</span>
                <span>인터넷 연결</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1em' }}>
                <span style={{ fontSize: '1.8em' }}>💾</span>
                <span>약 500MB 여유 공간</span>
              </div>
            </div>
          </section>

          {/* 슬라이드 3: Node.js 설치 */}
          <section style={{
            background: 'linear-gradient(135deg, #1e293b 0%, #0f172a 100%)',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'flex-start',
            padding: '3rem',
          }}>
            <h2 style={{ color: '#c4b5fd', fontSize: '2.5em', marginBottom: '1.5em', width: '100%' }}>
              Step 1: Node.js 설치
            </h2>
            <div style={{ fontSize: '1.1em', color: '#e2e8f0', width: '100%' }}>
              <div style={{ marginBottom: '1em', display: 'flex', alignItems: 'center', gap: '0.8em' }}>
                <span style={{ background: '#3b82f6', color: 'white', width: '2em', height: '2em', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.9em' }}>1</span>
                <span>https://nodejs.org 접속</span>
              </div>
              <div style={{ marginBottom: '1em', display: 'flex', alignItems: 'center', gap: '0.8em' }}>
                <span style={{ background: '#3b82f6', color: 'white', width: '2em', height: '2em', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.9em' }}>2</span>
                <span>LTS 버전 다운로드 (현재: 20.x)</span>
              </div>
              <div style={{ marginBottom: '1em', display: 'flex', alignItems: 'center', gap: '0.8em' }}>
                <span style={{ background: '#3b82f6', color: 'white', width: '2em', height: '2em', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.9em' }}>3</span>
                <span>설치 마법사 따라 진행</span>
              </div>
              <div style={{ marginTop: '2em', marginBottom: '1em', color: '#94a3b8' }}>
                ✅ 설치 후 터미널에서:
              </div>
              <pre style={{
                background: '#0f172a',
                padding: '1em',
                borderRadius: '0.5em',
                overflow: 'auto',
                color: '#10b981',
                border: '2px solid #3b82f6',
                borderLeft: '4px solid #3b82f6',
              }}>node --version</pre>
            </div>
          </section>

          {/* 슬라이드 4: OpenClaw 설치 */}
          <section style={{
            background: 'linear-gradient(135deg, #1e293b 0%, #0f172a 100%)',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'flex-start',
            padding: '3rem',
          }}>
            <h2 style={{ color: '#c4b5fd', fontSize: '2.5em', marginBottom: '1.5em', width: '100%' }}>
              Step 2: OpenClaw 설치
            </h2>
            <div style={{ fontSize: '1.1em', color: '#e2e8f0', width: '100%' }}>
              <p style={{ marginBottom: '1.5em', color: '#cbd5e1' }}>터미널을 열고 다음을 실행하세요:</p>
              <pre style={{
                background: '#0f172a',
                padding: '1.5em',
                borderRadius: '0.5em',
                overflow: 'auto',
                color: '#10b981',
                fontSize: '1em',
                border: '2px solid #8b5cf6',
                borderLeft: '4px solid #8b5cf6',
              }}>npm install -g openclaw</pre>
              <p style={{ marginTop: '1.5em', color: '#94a3b8' }}>
                💡 macOS: 필요시 sudo를 사용해야 할 수 있습니다
              </p>
            </div>
          </section>

          {/* 슬라이드 5: 버전 확인 */}
          <section style={{
            background: 'linear-gradient(135deg, #1e293b 0%, #0f172a 100%)',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'flex-start',
            padding: '3rem',
          }}>
            <h2 style={{ color: '#c4b5fd', fontSize: '2.5em', marginBottom: '1.5em', width: '100%' }}>
              Step 3: 설치 확인
            </h2>
            <div style={{ fontSize: '1.1em', color: '#e2e8f0', width: '100%' }}>
              <p style={{ marginBottom: '1.5em', color: '#cbd5e1' }}>설치가 완료되었는지 확인:</p>
              <pre style={{
                background: '#0f172a',
                padding: '1.5em',
                borderRadius: '0.5em',
                overflow: 'auto',
                color: '#10b981',
                border: '2px solid #06b6d4',
                borderLeft: '4px solid #06b6d4',
              }}>openclaw --version</pre>
              <div style={{
                marginTop: '2em',
                padding: '1em',
                borderRadius: '0.5em',
                background: 'rgba(16, 185, 129, 0.1)',
                borderLeft: '4px solid #10b981',
              }}>
                <p style={{ color: '#10b981', fontWeight: 'bold', margin: 0 }}>
                  ✅ 버전 번호가 나오면 성공!
                </p>
              </div>
            </div>
          </section>

          {/* 슬라이드 6: Gateway 시작 */}
          <section style={{
            background: 'linear-gradient(135deg, #1e293b 0%, #0f172a 100%)',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'flex-start',
            padding: '3rem',
          }}>
            <h2 style={{ color: '#c4b5fd', fontSize: '2.5em', marginBottom: '1.5em', width: '100%' }}>
              Step 4: Gateway 실행
            </h2>
            <div style={{ fontSize: '1.1em', color: '#e2e8f0', width: '100%' }}>
              <p style={{ marginBottom: '1.5em', color: '#cbd5e1' }}>OpenClaw Gateway 서버 시작:</p>
              <pre style={{
                background: '#0f172a',
                padding: '1.5em',
                borderRadius: '0.5em',
                overflow: 'auto',
                color: '#10b981',
                border: '2px solid #f97316',
                borderLeft: '4px solid #f97316',
              }}>openclaw gateway start</pre>
              <div style={{
                marginTop: '2em',
                padding: '1em',
                borderRadius: '0.5em',
                background: 'rgba(59, 130, 246, 0.1)',
                borderLeft: '4px solid #3b82f6',
              }}>
                <p style={{ color: '#94a3b8', margin: 0 }}>
                  💡 상태 확인: <code style={{ color: '#60a5fa', background: '#1e293b', padding: '0.2em 0.5em', borderRadius: '0.3em' }}>openclaw gateway status</code>
                </p>
              </div>
            </div>
          </section>

          {/* 슬라이드 7: 완료 */}
          <section style={{
            background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #1e1b4b 100%)',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            padding: '3rem',
            textAlign: 'center',
          }}>
            <h1 style={{ color: '#10b981', fontSize: '3em', marginBottom: '0.5em' }}>
              🎉 설치 완료!
            </h1>
            <p style={{ fontSize: '1.3em', color: '#e2e8f0', marginTop: '1em', marginBottom: '2em' }}>
              이제 Slack 연동으로 넘어갈 준비가 됐습니다.
            </p>
            <div style={{ display: 'flex', gap: '1em', justifyContent: 'center', marginTop: '2em' }}>
              <a
                href="/slack-integration"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.5em',
                  padding: '0.8em 1.5em',
                  backgroundColor: '#c4b5fd',
                  color: '#0f172a',
                  borderRadius: '0.5em',
                  fontSize: '1.1em',
                  fontWeight: 'bold',
                  textDecoration: 'none',
                  transition: 'all 0.3s',
                  boxShadow: '0 10px 30px rgba(196, 181, 253, 0.3)',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-3px)';
                  e.currentTarget.style.boxShadow = '0 15px 40px rgba(196, 181, 253, 0.4)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 10px 30px rgba(196, 181, 253, 0.3)';
                }}
              >
                다음: Slack 연동
                <ChevronRight style={{ width: '1.2em', height: '1.2em' }} />
              </a>
              <a
                href="/"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.5em',
                  padding: '0.8em 1.5em',
                  backgroundColor: '#475569',
                  color: '#e2e8f0',
                  borderRadius: '0.5em',
                  fontSize: '1.1em',
                  fontWeight: 'bold',
                  textDecoration: 'none',
                  transition: 'all 0.3s',
                  boxShadow: '0 10px 30px rgba(71, 85, 105, 0.3)',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-3px)';
                  e.currentTarget.style.boxShadow = '0 15px 40px rgba(71, 85, 105, 0.4)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 10px 30px rgba(71, 85, 105, 0.3)';
                }}
              >
                🏠 홈으로
              </a>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}
