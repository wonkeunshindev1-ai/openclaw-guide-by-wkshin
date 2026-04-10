'use client';

import { useEffect, useRef } from 'react';
import Reveal from 'reveal.js';
import Link from 'next/link';

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
    <div className="reveal" ref={deckRef} style={{ width: '100%', height: '100vh' }}>
      <div className="slides">
        {/* 슬라이드 1: 타이틀 */}
        <section style={{ background: 'linear-gradient(135deg, #1e293b 0%, #0f172a 100%)' }}>
          <h1 style={{ fontSize: '3.5em', color: '#60a5fa', fontWeight: 'bold' }}>
            OpenClaw + Slack 연동
          </h1>
          <p style={{ fontSize: '1.5em', color: '#cbd5e1', marginTop: '1em' }}>
            Slack 워크스페이스와 연결하기
          </p>
        </section>

        {/* 슬라이드 2: Slack 앱 생성 */}
        <section style={{ background: 'linear-gradient(135deg, #1e293b 0%, #0f172a 100%)' }}>
          <h2 style={{ color: '#a78bfa', fontSize: '2.5em' }}>Step 1: Slack 앱 생성</h2>
          <div style={{ marginTop: '2em', textAlign: 'left', fontSize: '1.1em', color: '#e2e8f0' }}>
            <p style={{ marginBottom: '1em' }}>1️⃣ https://api.slack.com/apps 접속</p>
            <p style={{ marginBottom: '1em' }}>2️⃣ "Create New App" 클릭</p>
            <p style={{ marginBottom: '1em' }}>3️⃣ "From scratch" 선택</p>
            <p style={{ marginBottom: '1em' }}>4️⃣ App 이름: <code style={{ color: '#60a5fa' }}>openclaw</code></p>
            <p style={{ marginBottom: '1em' }}>5️⃣ 워크스페이스 선택</p>
            <p style={{ color: '#10b981', fontWeight: 'bold' }}>✅ "Create App" 클릭</p>
          </div>
        </section>

        {/* 슬라이드 3: Bot Token 생성 */}
        <section style={{ background: 'linear-gradient(135deg, #1e293b 0%, #0f172a 100%)' }}>
          <h2 style={{ color: '#a78bfa', fontSize: '2.5em' }}>Step 2: Bot Token 생성</h2>
          <div style={{ marginTop: '2em', textAlign: 'left', fontSize: '1.1em', color: '#e2e8f0' }}>
            <p style={{ marginBottom: '1.5em' }}>좌측 메뉴에서:</p>
            <ol style={{ marginLeft: '1.5em' }}>
              <li style={{ marginBottom: '0.8em' }}>1️⃣ "Socket Mode" 클릭</li>
              <li style={{ marginBottom: '0.8em' }}>2️⃣ "Enable Socket Mode" 토글 활성화</li>
              <li style={{ marginBottom: '0.8em' }}>3️⃣ App Token 이름 설정 (예: webclaw-token)</li>
              <li style={{ marginBottom: '0.8em' }}>4️⃣ Token 복사 및 저장</li>
            </ol>
          </div>
        </section>

        {/* 슬라이드 4: 권한 설정 */}
        <section style={{ background: 'linear-gradient(135deg, #1e293b 0%, #0f172a 100%)' }}>
          <h2 style={{ color: '#a78bfa', fontSize: '2.5em' }}>Step 3: 봇 권한 설정</h2>
          <div style={{ marginTop: '2em', textAlign: 'left', fontSize: '1.1em', color: '#e2e8f0' }}>
            <p style={{ marginBottom: '1.5em' }}>좌측 메뉴 "OAuth & Permissions":</p>
            <p style={{ marginBottom: '1em', color: '#94a3b8' }}>필수 Scopes:</p>
            <ul style={{ marginLeft: '1.5em' }}>
              <li>✅ chat:write</li>
              <li>✅ channels:read</li>
              <li>✅ reactions:read</li>
              <li>✅ files:read</li>
            </ul>
          </div>
        </section>

        {/* 슬라이드 5: OpenClaw 설정 */}
        <section style={{ background: 'linear-gradient(135deg, #1e293b 0%, #0f172a 100%)' }}>
          <h2 style={{ color: '#a78bfa', fontSize: '2.5em' }}>Step 4: OpenClaw 설정</h2>
          <div style={{ marginTop: '2em', textAlign: 'left', fontSize: '0.95em', color: '#e2e8f0' }}>
            <p style={{ marginBottom: '1.5em' }}>설정 파일 편집: <code style={{ color: '#60a5fa' }}>~/.openclaw/config.json</code></p>
            <pre
              style={{
                background: '#0f172a',
                padding: '1em',
                borderRadius: '0.5em',
                overflow: 'auto',
                color: '#10b981',
                fontSize: '0.9em',
              }}
            >
{`{
  "channels": {
    "slack": {
      "enabled": true,
      "token": "xapp-1-YOUR-TOKEN-HERE"
    }
  }
}`}
            </pre>
          </div>
        </section>

        {/* 슬라이드 6: OpenClaw 재시작 */}
        <section style={{ background: 'linear-gradient(135deg, #1e293b 0%, #0f172a 100%)' }}>
          <h2 style={{ color: '#a78bfa', fontSize: '2.5em' }}>Step 5: Gateway 재시작</h2>
          <div style={{ marginTop: '2em', textAlign: 'left', fontSize: '1.1em', color: '#e2e8f0' }}>
            <p style={{ marginBottom: '1.5em' }}>터미널에서:</p>
            <pre
              style={{
                background: '#0f172a',
                padding: '1.5em',
                borderRadius: '0.5em',
                overflow: 'auto',
                color: '#10b981',
              }}
            >
              openclaw gateway restart
            </pre>
            <p style={{ marginTop: '1.5em', color: '#94a3b8' }}>
              또는:
            </p>
            <pre
              style={{
                background: '#0f172a',
                padding: '0.8em',
                borderRadius: '0.5em',
                color: '#10b981',
                marginTop: '0.5em',
              }}
            >
              openclaw gateway stop && openclaw gateway start
            </pre>
          </div>
        </section>

        {/* 슬라이드 7: 테스트 */}
        <section style={{ background: 'linear-gradient(135deg, #1e293b 0%, #0f172a 100%)' }}>
          <h2 style={{ color: '#a78bfa', fontSize: '2.5em' }}>Step 6: 연동 테스트</h2>
          <div style={{ marginTop: '2em', textAlign: 'left', fontSize: '1.1em', color: '#e2e8f0' }}>
            <p style={{ marginBottom: '1.5em' }}>Slack 채널에서:</p>
            <ol style={{ marginLeft: '1.5em' }}>
              <li style={{ marginBottom: '0.8em' }}>1️⃣ OpenClaw 봇을 채널에 초대</li>
              <li style={{ marginBottom: '0.8em' }}>2️⃣ 메시지 작성 및 전송</li>
              <li style={{ marginBottom: '0.8em' }}>3️⃣ OpenClaw가 응답하면 성공! 🎉</li>
            </ol>
          </div>
        </section>

        {/* 슬라이드 8: 완료 */}
        <section style={{ background: 'linear-gradient(135deg, #1e293b 0%, #0f172a 100%)' }}>
          <h1 style={{ color: '#10b981', fontSize: '3em' }}>🎊 모든 설정 완료!</h1>
          <p style={{ fontSize: '1.3em', color: '#e2e8f0', marginTop: '2em' }}>
            이제 OpenClaw를 Slack에서 자유롭게 사용할 수 있습니다.
          </p>
          <p style={{ fontSize: '1.2em', color: '#94a3b8', marginTop: '1.5em' }}>
            더 많은 기능과 문서: https://docs.openclaw.ai
          </p>
          <div style={{ marginTop: '3em' }}>
            <Link
              href="/"
              style={{
                display: 'inline-block',
                padding: '0.8em 2em',
                backgroundColor: '#60a5fa',
                color: '#0f172a',
                borderRadius: '0.5em',
                fontSize: '1.2em',
                fontWeight: 'bold',
                textDecoration: 'none',
              }}
            >
              🏠 홈으로 돌아가기
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}
