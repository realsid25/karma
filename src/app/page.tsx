// app/page.tsx
'use client';
import Lenis from 'lenis';
import React, { useEffect } from 'react';

export default function Home() {
  useEffect(() => {
    const lenis = new Lenis();
    function raf(time: any) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
  }, []);

  return (
    <main className="min-h-screen bg-transparent">
      <section className="h-screen flex flex-col items-center justify-center relative">
        <div className="text-6xl font-bold">KARMA</div>
        <div className="text-2xl">PSC ACADEMY</div>
      </section>

      <section className="h-screen flex items-center justify-center relative">
        <div className="relative w-[110%] -left-[5%]">
          <div
            className="
              marquee-horizontal 
              relative 
              flex 
              justify-start 
              items-center 
              overflow-hidden 
              border-t 
              border-b 
              border-light-purple 
              bg-night-purple 
              py-10 
              -rotate-[5deg]
              z-[200]
            "
          >
            <style>{`
              @keyframes marquee {
                from { transform: translateX(0); }
                to { transform: translateX(-50%); }
              }
              .track-horizontal {
                animation: marquee 10s linear infinite;
                display: flex;
                justify-content: flex-start;
                align-items: center;
              }
            `}</style>
            <div className="track-horizontal whitespace-nowrap">
              {[...Array(10)].map((_, index) => (
                <div key={index} className="inline-flex items-center">
                  <div className="marquee-text uppercase text-white mx-[8vw] flex-none">
                    <div className="text-4xl font-bold">Classes starting soon</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="h-screen flex items-center justify-center relative">
        <div className="relative z-10">Section 3</div>
      </section>
      <section className="h-screen flex items-center justify-center relative">
        <div className="relative z-10">Section 3</div>
      </section>
    </main>
  );
}