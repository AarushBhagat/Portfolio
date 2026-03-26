"use client";

import React, { useRef, useLayoutEffect } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { cn } from "@/lib/utils";
import { TypographyH2 } from "../ui/typography";

const hackathons = [
  { src: "/assets/Hackathons/Cypher Schools Hackathon.jpg", title: "Cypher Schools Hackathon" },
  { src: "/assets/Hackathons/IIT-Jammu.png", title: "IIT Jammu" },
  { src: "/assets/Hackathons/StaXHack.png", title: "StaXHack" },
];

const HackathonsSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      const cardsElement = cardsRef.current;
      const titleElement = titleRef.current;
      const triggerElement = triggerRef.current;

      if (!cardsElement || !titleElement || !triggerElement) return;

      const totalWidth = cardsElement.scrollWidth;
      const windowWidth = window.innerWidth;
      const moveAmount = Math.max(0, totalWidth - windowWidth + 100);
      const amountToScroll = moveAmount + 600; // Extra scroll distance

      const isDesktop = window.innerWidth > 768;

      if (isDesktop && amountToScroll > 0) {
        // Pin logic
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: triggerElement,
            start: "top top",
            end: `+=${amountToScroll}`,
            pin: true,
            scrub: 1,
            invalidateOnRefresh: true,
          },
        });

        tl.to(cardsElement, {
          x: -moveAmount, // Move to left
          ease: "none",
        });

        // Parallax Title
        gsap.to(titleElement, {
          x: 200,
          ease: "none",
          scrollTrigger: {
            trigger: triggerElement,
            start: "top top",
            end: `+=${amountToScroll}`,
            scrub: 1,
          },
        });

        // Initial Staggered Reveal
        gsap.fromTo(
          ".staggered-reveal-hackathons",
          { opacity: 0, y: 50 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            stagger: 0.1,
            ease: "power2.out",
            scrollTrigger: {
              trigger: triggerElement,
              start: "top 80%",
              toggleActions: "play none none reverse",
            },
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={sectionRef} className="relative overflow-hidden bg-slate-100 dark:bg-transparent pt-20">
      {/* Mobile View */}
      <div className="md:hidden py-10 px-4">
        <TypographyH2 className="text-center mb-8">Hackathons</TypographyH2>
        <div className="grid grid-cols-1 gap-6">
          {hackathons.map((hackathon, index) => (
            <div
              key={index}
              className="relative w-full aspect-[4/3] rounded-xl overflow-hidden shadow-lg border border-white/10 group"
            >
              <Image
                src={hackathon.src}
                alt={hackathon.title}
                fill
                className="object-contain bg-slate-200 dark:bg-slate-900"
              />
              <div className="absolute inset-x-0 bottom-0 bg-black/60 p-2 text-white text-sm text-center">
                {hackathon.title}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Desktop View */}
      <div
        ref={triggerRef}
        className="hidden md:flex h-screen w-full items-center overflow-hidden relative"
      >
        <div className="relative h-full w-full flex flex-col justify-center pl-20">
          <h2
            ref={titleRef}
            className="staggered-reveal-hackathons text-[10vw] font-bold text-neutral-800/5 dark:text-white/5 absolute top-20 left-10 pointer-events-none whitespace-nowrap z-0 uppercase"
          >
            HACKATHONS
          </h2>
          <div className="staggered-reveal-hackathons mb-8 z-10">
            <TypographyH2>Hackathons</TypographyH2>
          </div>

          <div ref={cardsRef} className="flex gap-10 z-10 pl-4 w-fit">
            {hackathons.map((hackathon, index) => (
              <div
                key={index}
                className="hackathon-card staggered-reveal-hackathons relative h-[400px] w-[600px] flex-shrink-0 rounded-2xl overflow-hidden shadow-2xl border border-white/10 group bg-slate-200 dark:bg-slate-900"
              >
                <div className="relative w-full h-full p-4">
                  <Image
                    src={hackathon.src}
                    alt={hackathon.title}
                    fill
                    className="object-contain"
                  />
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <p className="text-white text-xl font-bold tracking-wider uppercase">
                      {hackathon.title}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HackathonsSection;
