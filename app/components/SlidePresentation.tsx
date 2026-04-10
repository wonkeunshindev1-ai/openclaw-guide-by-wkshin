'use client';

import { useEffect, useRef } from 'react';
import Reveal from 'reveal.js';

interface Slide {
  title: string;
  content: string;
  subslides?: Slide[];
}

interface SlidePresentationProps {
  slides: Slide[];
  theme?: string;
}

export default function SlidePresentation({
  slides,
  theme = 'dark',
}: SlidePresentationProps) {
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
    });

    deck.initialize();

    return () => {
      deck.destroy();
    };
  }, []);

  return (
    <div className="reveal" ref={deckRef}>
      <div className="slides">
        {slides.map((slide, index) => (
          <section key={index}>
            <section>
              <h1 className="text-5xl font-bold text-blue-400">{slide.title}</h1>
              <div
                className="text-xl text-slate-300 mt-8"
                dangerouslySetInnerHTML={{ __html: slide.content }}
              />
            </section>
            {slide.subslides &&
              slide.subslides.map((subslide, subindex) => (
                <section key={subindex}>
                  <h2 className="text-4xl font-bold text-purple-400">
                    {subslide.title}
                  </h2>
                  <div
                    className="text-lg text-slate-300 mt-6"
                    dangerouslySetInnerHTML={{ __html: subslide.content }}
                  />
                </section>
              ))}
          </section>
        ))}
      </div>
    </div>
  );
}
