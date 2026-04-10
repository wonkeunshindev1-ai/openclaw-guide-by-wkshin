'use client';

import { useEffect, useRef } from 'react';
import Reveal from 'reveal.js';
import Link from 'next/link';
import { Home, ChevronRight } from 'lucide-react';

export default function SlackIntegration() {
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
        <div className="text-slate-400 text-sm">OpenClaw + Slack 연동</div>
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
                background: 'linear-gradient(135deg, #8b5cf6 0%, #ec4899 100%)',
                margin: '0 auto 2rem',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '2.5rem',
                boxShadow: '0 20px 60px rgba(139, 92, 246, 0.3)',
              }}>🔗</div>
              <h1 style={{
                fontSize: '3.5em',
                color: '#c4b5fd',
                fontWeight: 'bold',
                margin: '0.5em 0',
                background: 'linear-gradient(135deg, #c4b5fd 0%, #f472b6 100%)',
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}>
                OpenClaw + Slack
              </h1>
              <p style={{ fontSize: '1.5em', color: '#cbd5e1', marginTop: '1em' }}>
                완벽한 연동 가이드
              </p>
            </div>
          </section>

          {/* 슬라이드 2: Slack 앱 생성 */}
          <section style={{
            background: 'linear-gradient(135deg, #1e293b 0%, #0f172a 100%)',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'flex-start',
            padding: '3rem',
          }}>
            <h2 style={{ color: '#c4b5fd', fontSize: '2.5em', marginBottom: '1.5em', width: '100%' }}>
              Step 1: Slack 앱 생성
            </h2>
            <div style={{ fontSize: '1.1em', color: '#e2e8f0', width: '100%' }}>
              <div style={{ marginBottom: '1em', display: 'flex', alignItems: 'center', gap: '0.8em' }}>
                <span style={{ background: '#8b5cf6', color: 'white', width: '2em', height: '2em', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.9em' }}>1</span>
                <span>https://api.slack.com/apps 접속</span>
              </div>
              <div style={{ marginBottom: '1em', display: 'flex', alignItems: 'center', gap: '0.8em' }}>
                <span style={{ background: '#8b5cf6', color: 'white', width: '2em', height: '2em', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.9em' }}>2</span>
                <span>"Create New App" 클릭</span>
              </div>
              <div style={{ marginBottom: '1em', display: 'flex', alignItems: 'center', gap: '0.8em' }}>
                <span style={{ background: '#8b5cf6', color: 'white', width: '2em', height: '2em', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.9em' }}>3</span>
                <span>"From scratch" 선택</span>
              </div>
              <div style={{ marginBottom: '1em', display: 'flex', alignItems: 'center', gap: '0.8em' }}>
                <span style={{ background: '#8b5cf6', color: 'white', width: '2em', height: '2em', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.9em' }}>4</span>
                <span>App 이름: <code style={{ color: '#60a5fa', background: '#1e293b', padding: '0.2em 0.5em', borderRadius: '0.3em' }}>openclaw</code></span>
              </div>
              <div style={{ marginBottom: '1em', display: 'flex', alignItems: 'center', gap: '0.8em' }}>
                <span style={{ background: '#8b5cf6', color: 'white', width: '2em', height: '2em', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.9em' }}>5</span>
                <span>워크스페이스 선택</span>
              </div>
              <div style={{
                marginTop: '2em',
                padding: '1em',
                borderRadius: '0.5em',
                background: 'rgba(16, 185, 129, 0.1)',
                borderLeft: '4px solid #10b981',
              }}>
                <p style={{ color: '#10b981', fontWeight: 'bold', margin: 0 }}>
                  ✅ "Create App" 클릭
                </p>
              </div>
            </div>
          </section>

          {/* 슬라이드 3: Bot Token 생성 */}
          <section style={{
            background: 'linear-gradient(135deg, #1e293b 0%, #0f172a 100%)',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'flex-start',
            padding: '3rem',
          }}>
            <h2 style={{ color: '#c4b5fd', fontSize: '2.5em', marginBottom: '1.5em', width: '100%' }}>
              Step 2: Bot Token 생성
            </h2>
            <div style={{ fontSize: '1.1em', color: '#e2e8f0', width: '100%' }}>
              <p style={{ marginBottom: '1.5em', color: '#cbd5e1' }}>좌측 메뉴에서:</p>
              <div style={{ marginBottom: '1em', display: 'flex', alignItems: 'center', gap: '0.8em' }}>
                <span style={{ background: '#ec4899', color: 'white', width: '2em', height: '2em', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.9em' }}>1</span>
                <span>"Socket Mode" 클릭</span>
              </div>
              <div style={{ marginBottom: '1em', display: 'flex', alignItems: 'center', gap: '0.8em' }}>
                <span style={{ background: '#ec4899', color: 'white', width: '2em', height: '2em', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.9em' }}>2</span>
                <span>"Enable Socket Mode" 토글 활성화</span>
              </div>
              <div style={{ marginBottom: '1em', display: 'flex', alignItems: 'center', gap: '0.8em' }}>
                <span style={{ background: '#ec4899', color: 'white', width: '2em', height: '2em', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.9em' }}>3</span>
                <span>App Token 이름 설정 (예: openclaw-token)</span>
              </div>
              <div style={{ marginBottom: '1em', display: 'flex', alignItems: 'center', gap: '0.8em' }}>
                <span style={{ background: '#ec4899', color: 'white', width: '2em', height: '2em', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.9em' }}>4</span>
                <span>Token 복사 및 안전하게 저장</span>
              </div>
            </div>
          </section>

          {/* 슬라이드 4: 권한 설정 */}
          <section style={{
            background: 'linear-gradient(135deg, #1e293b 0%, #0f172a 100%)',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'flex-start',
            padding: '3rem',
          }}>
            <h2 style={{ color: '#c4b5fd', fontSize: '2.5em', marginBottom: '1.5em', width: '100%' }}>
              Step 3: 봇 권한 설정
            </h2>
            <div style={{ fontSize: '1.1em', color: '#e2e8f0', width: '100%' }}>
              <p style={{ marginBottom: '1.5em', color: '#cbd5e1' }}>좌측 메뉴 "OAuth & Permissions":</p>
              <p style={{ marginBottom: '1em', color: '#94a3b8' }}>필수 Scopes:</p>
              <div style={{ paddingLeft: '1.5em' }}>
                <div style={{ marginBottom: '0.8em', display: 'flex', alignItems: 'center', gap: '0.8em' }}>
                  <span style={{ color: '#10b981', fontSize: '1.2em' }}>✅</span>
                  <code style={{ color: '#60a5fa', background: '#1e293b', padding: '0.2em 0.5em', borderRadius: '0.3em' }}>chat:write</code>
                </div>
                <div style={{ marginBottom: '0.8em', display: 'flex', alignItems: 'center', gap: '0.8em' }}>
                  <span style={{ color: '#10b981', fontSize: '1.2em' }}>✅</span>
                  <code style={{ color: '#60a5fa', background: '#1e293b', padding: '0.2em 0.5em', borderRadius: '0.3em' }}>channels:read</code>
                </div>
                <div style={{ marginBottom: '0.8em', display: 'flex', alignItems: 'center', gap: '0.8em' }}>
                  <span style={{ color: '#10b981', fontSize: '1.2em' }}>✅</span>
                  <code style={{ color: '#60a5fa', background: '#1e293b', padding: '0.2em 0.5em', borderRadius: '0.3em' }}>reactions:read</code>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.8em' }}>
                  <span style={{ color: '#10b981', fontSize: '1.2em' }}>✅</span>
                  <code style={{ color: '#60a5fa', background: '#1e293b', padding: '0.2em 0.5em', borderRadius: '0.3em' }}>files:read</code>
                </div>
              </div>
            </div>
          </section>

          {/* 슬라이드 5: OpenClaw 설정 */}
          <section style={{
            background: 'linear-gradient(135deg, #1e293b 0%, #0f172a 100%)',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'flex-start',
            padding: '3rem',
          }}>
            <h2 style={{ color: '#c4b5fd', fontSize: '2.5em', marginBottom: '1.5em', width: '100%' }}>
              Step 4: OpenClaw 설정
            </h2>
            <div style={{ fontSize: '1em', color: '#e2e8f0', width: '100%' }}>
              <p style={{ marginBottom: '1.5em', color: '#cbd5e1' }}>설정 파일 편집:</p>
              <p style={{ marginBottom: '1em', color: '#94a3b8' }}>
                <code style={{ color: '#60a5fa', background: '#1e293b', padding: '0.3em 0.8em', borderRadius: '0.3em' }}>~/.openclaw/config.json</code>
              </p>
              <pre style={{
                background: '#0f172a',
                padding: '1em',
                borderRadius: '0.5em',
                overflow: 'auto',
                color: '#10b981',
                border: '2px solid #8b5cf6',
                borderLeft: '4px solid #8b5cf6',
                fontSize: '0.9em',
              }}>{`{
  "channels": {
    "slack": {
      "enabled": true,
      "token": "xapp-1-YOUR-TOKEN"
    }
  }
}`}</pre>
            </div>
          </section>

          {/* 슬라이드 6: Gateway 재시작 */}
          <section style={{
            background: 'linear-gradient(135deg, #1e293b 0%, #0f172a 100%)',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'flex-start',
            padding: '3rem',
          }}>
            <h2 style={{ color: '#c4b5fd', fontSize: '2.5em', marginBottom: '1.5em', width: '100%' }}>
              Step 5: Gateway 재시작
            </h2>
            <div style={{ fontSize: '1.1em', color: '#e2e8f0', width: '100%' }}>
              <p style={{ marginBottom: '1.5em', color: '#cbd5e1' }}>터미널에서:</p>
              <pre style={{
                background: '#0f172a',
                padding: '1.5em',
                borderRadius: '0.5em',
                overflow: 'auto',
                color: '#10b981',
                border: '2px solid #f97316',
                borderLeft: '4px solid #f97316',
              }}>openclaw gateway restart</pre>
              <p style={{ marginTop: '1.5em', color: '#94a3b8', marginBottom: '1em' }}>
                또는:
              </p>
              <pre style={{
                background: '#0f172a',
                padding: '1em',
                borderRadius: '0.5em',
                color: '#10b981',
                border: '2px solid #06b6d4',
                borderLeft: '4px solid #06b6d4',
              }}>openclaw gateway stop && openclaw gateway start</pre>
            </div>
          </section>

          {/* 슬라이드 7: 테스트 */}
          <section style={{
            background: 'linear-gradient(135deg, #1e293b 0%, #0f172a 100%)',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'flex-start',
            padding: '3rem',
          }}>
            <h2 style={{ color: '#c4b5fd', fontSize: '2.5em', marginBottom: '1.5em', width: '100%' }}>
              Step 6: 연동 테스트
            </h2>
            <div style={{ fontSize: '1.1em', color: '#e2e8f0', width: '100%' }}>
              <p style={{ marginBottom: '1.5em', color: '#cbd5e1' }}>Slack 채널에서:</p>
              <div style={{ marginBottom: '1em', display: 'flex', alignItems: 'center', gap: '0.8em' }}>
                <span style={{ background: '#06b6d4', color: 'white', width: '2em', height: '2em', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.9em' }}>1</span>
                <span>OpenClaw 봇을 채널에 초대</span>
              </div>
              <div style={{ marginBottom: '1em', display: 'flex', alignItems: 'center', gap: '0.8em' }}>
                <span style={{ background: '#06b6d4', color: 'white', width: '2em', height: '2em', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.9em' }}>2</span>
                <span>메시지 작성 및 전송</span>
              </div>
              <div style={{ marginBottom: '1em', display: 'flex', alignItems: 'center', gap: '0.8em' }}>
                <span style={{ background: '#06b6d4', color: 'white', width: '2em', height: '2em', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.9em' }}>3</span>
                <span>OpenClaw가 응답하면 성공! 🎉</span>
              </div>
            </div>
          </section>

          {/* 슬라이드 8: 완료 */}
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
              🎊 모든 설정 완료!
            </h1>
            <p style={{ fontSize: '1.3em', color: '#e2e8f0', marginTop: '1em', marginBottom: '1.5em' }}>
              이제 OpenClaw를 Slack에서 자유롭게 사용할 수 있습니다.
            </p>
            <p style={{ fontSize: '1.1em', color: '#94a3b8', marginBottom: '2em' }}>
              더 많은 기능과 문서: <a href="https://docs.openclaw.ai" style={{ color: '#60a5fa', textDecoration: 'none' }}>docs.openclaw.ai</a>
            </p>
            <div style={{ display: 'flex', gap: '1em', justifyContent: 'center' }}>
              <a
                href="/"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.5em',
                  padding: '0.8em 1.5em',
                  backgroundColor: '#60a5fa',
                  color: '#0f172a',
                  borderRadius: '0.5em',
                  fontSize: '1.1em',
                  fontWeight: 'bold',
                  textDecoration: 'none',
                  transition: 'all 0.3s',
                  boxShadow: '0 10px 30px rgba(96, 165, 250, 0.3)',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-3px)';
                  e.currentTarget.style.boxShadow = '0 15px 40px rgba(96, 165, 250, 0.4)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 10px 30px rgba(96, 165, 250, 0.3)';
                }}
              >
                🏠 홈으로 돌아가기
              </a>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}
