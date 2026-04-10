'use client';

import { useEffect, useRef } from 'react';
import Reveal from 'reveal.js';
import Link from 'next/link';

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
    <div className="reveal" ref={deckRef} style={{ width: '100%', height: '100vh' }}>
      <div className="slides">
        {/* 슬라이드 1: 타이틀 */}
        <section style={{ background: 'linear-gradient(135deg, #1e293b 0%, #0f172a 100%)' }}>
          <h1 style={{ fontSize: '3.5em', color: '#60a5fa', fontWeight: 'bold' }}>
            OpenClaw 설치하기
          </h1>
          <p style={{ fontSize: '1.5em', color: '#cbd5e1', marginTop: '1em' }}>
            완벽한 단계별 가이드
          </p>
        </section>

        {/* 슬라이드 2: 개요 */}
        <section style={{ background: 'linear-gradient(135deg, #1e293b 0%, #0f172a 100%)' }}>
          <h2 style={{ color: '#a78bfa', fontSize: '2.5em' }}>설치 전 준비물</h2>
          <ul style={{ fontSize: '1.3em', color: '#e2e8f0', marginTop: '1.5em' }}>
            <li style={{ marginBottom: '0.8em' }}>💻 Mac, Linux, 또는 Windows</li>
            <li style={{ marginBottom: '0.8em' }}>📦 Node.js 14 이상</li>
            <li style={{ marginBottom: '0.8em' }}>🔧 npm 또는 yarn</li>
            <li style={{ marginBottom: '0.8em' }}>🌐 인터넷 연결</li>
            <li style={{ marginBottom: '0.8em' }}>💾 약 500MB 여유 공간</li>
          </ul>
        </section>

        {/* 슬라이드 3: Node.js 설치 */}
        <section style={{ background: 'linear-gradient(135deg, #1e293b 0%, #0f172a 100%)' }}>
          <h2 style={{ color: '#a78bfa', fontSize: '2.5em' }}>Step 1: Node.js 설치</h2>
          <div style={{ marginTop: '2em', textAlign: 'left', fontSize: '1.1em', color: '#e2e8f0' }}>
            <p style={{ marginBottom: '1em' }}>1️⃣ https://nodejs.org 접속</p>
            <p style={{ marginBottom: '1em' }}>2️⃣ LTS 버전 다운로드 (현재: 20.x)</p>
            <p style={{ marginBottom: '1em' }}>3️⃣ 설치 마법사 따라 진행</p>
            <p style={{ marginBottom: '1em', color: '#94a3b8' }}>
              ✅ 설치 후 터미널에서:
            </p>
            <pre
              style={{
                background: '#0f172a',
                padding: '1em',
                borderRadius: '0.5em',
                overflow: 'auto',
                color: '#10b981',
              }}
            >
              node --version
            </pre>
          </div>
        </section>

        {/* 슬라이드 4: OpenClaw 설치 */}
        <section style={{ background: 'linear-gradient(135deg, #1e293b 0%, #0f172a 100%)' }}>
          <h2 style={{ color: '#a78bfa', fontSize: '2.5em' }}>Step 2: OpenClaw 설치</h2>
          <div style={{ marginTop: '2em', textAlign: 'left', fontSize: '1.1em', color: '#e2e8f0' }}>
            <p style={{ marginBottom: '1.5em' }}>터미널을 열고 다음을 실행하세요:</p>
            <pre
              style={{
                background: '#0f172a',
                padding: '1.5em',
                borderRadius: '0.5em',
                overflow: 'auto',
                color: '#10b981',
                fontSize: '1em',
              }}
            >
              npm install -g openclaw
            </pre>
            <p style={{ marginTop: '1.5em', color: '#94a3b8' }}>
              (macOS: 필요시 sudo 사용)
            </p>
          </div>
        </section>

        {/* 슬라이드 5: 버전 확인 */}
        <section style={{ background: 'linear-gradient(135deg, #1e293b 0%, #0f172a 100%)' }}>
          <h2 style={{ color: '#a78bfa', fontSize: '2.5em' }}>Step 3: 설치 확인</h2>
          <div style={{ marginTop: '2em', textAlign: 'left', fontSize: '1.1em', color: '#e2e8f0' }}>
            <p style={{ marginBottom: '1.5em' }}>설치가 완료되었는지 확인:</p>
            <pre
              style={{
                background: '#0f172a',
                padding: '1.5em',
                borderRadius: '0.5em',
                overflow: 'auto',
                color: '#10b981',
              }}
            >
              openclaw --version
            </pre>
            <p style={{ marginTop: '1.5em', color: '#10b981', fontWeight: 'bold' }}>
              ✅ 버전 번호가 나오면 성공!
            </p>
          </div>
        </section>

        {/* 슬라이드 6: Gateway 시작 */}
        <section style={{ background: 'linear-gradient(135deg, #1e293b 0%, #0f172a 100%)' }}>
          <h2 style={{ color: '#a78bfa', fontSize: '2.5em' }}>Step 4: Gateway 실행</h2>
          <div style={{ marginTop: '2em', textAlign: 'left', fontSize: '1.1em', color: '#e2e8f0' }}>
            <p style={{ marginBottom: '1.5em' }}>OpenClaw Gateway 서버 시작:</p>
            <pre
              style={{
                background: '#0f172a',
                padding: '1.5em',
                borderRadius: '0.5em',
                overflow: 'auto',
                color: '#10b981',
              }}
            >
              openclaw gateway start
            </pre>
            <p style={{ marginTop: '1.5em', color: '#94a3b8' }}>
              💡 상태 확인: <code style={{ color: '#60a5fa' }}>openclaw gateway status</code>
            </p>
          </div>
        </section>

        {/* 슬라이드 7: 완료 */}
        <section style={{ background: 'linear-gradient(135deg, #1e293b 0%, #0f172a 100%)' }}>
          <h1 style={{ color: '#10b981', fontSize: '3em' }}>🎉 설치 완료!</h1>
          <p style={{ fontSize: '1.3em', color: '#e2e8f0', marginTop: '2em' }}>
            이제 Slack 연동으로 넘어갈 준비가 됐습니다.
          </p>
          <div style={{ marginTop: '3em' }}>
            <Link
              href="/slack-integration"
              style={{
                display: 'inline-block',
                padding: '0.8em 2em',
                backgroundColor: '#a78bfa',
                color: '#0f172a',
                borderRadius: '0.5em',
                fontSize: '1.2em',
                fontWeight: 'bold',
                textDecoration: 'none',
                marginRight: '1em',
              }}
            >
              다음: Slack 연동 →
            </Link>
            <Link
              href="/"
              style={{
                display: 'inline-block',
                padding: '0.8em 2em',
                backgroundColor: '#475569',
                color: '#e2e8f0',
                borderRadius: '0.5em',
                fontSize: '1.2em',
                fontWeight: 'bold',
                textDecoration: 'none',
              }}
            >
              홈으로
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}
