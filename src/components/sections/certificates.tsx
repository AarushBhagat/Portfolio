"use client";

import React, { useRef, useLayoutEffect } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { cn } from "@/lib/utils";
import { TypographyH2 } from "../ui/typography";

const certificates = [
  { src: "/assets/certificates/App development Certi.jpg", title: "App Development Certi" },
  { src: "/assets/certificates/BitsNBytes.png", title: "BitsNBytes" },
  { src: "/assets/certificates/C.png", title: "C" },
  { src: "/assets/certificates/Computational.png", title: "Computational" },
  { src: "/assets/certificates/DigitalSystem.png", title: "Digital System" },
  { src: "/assets/certificates/DSA.png", title: "DSA" },
  { src: "/assets/certificates/Fundamental.png", title: "Fundamental" },
  { src: "/assets/certificates/GenerativeAi.png", title: "Generative AI" },
  { src: "/assets/certificates/javaC.png", title: "Java C" },
  { src: "/assets/certificates/MasterAi.png", title: "Master AI" },
  { src: "/assets/certificates/OS.png", title: "OS" },
  { src: "/assets/certificates/P-P.png", title: "P-P" },
  { src: "/assets/certificates/PacketSwitching.png", title: "Packet Switching" },
  { src: "/assets/certificates/Prompt.png", title: "Prompt" },
  { src: "/assets/certificates/TCP-IP.png", title: "TCP-IP" },
];

const CertificatesSection = () => {
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
          ".staggered-reveal",
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
    <div ref={sectionRef} className="relative overflow-hidden bg-slate-100 dark:bg-transparent">
      {/* Mobile View */}
      <div className="md:hidden py-10 px-4">
        <TypographyH2 className="text-center mb-8">Certificates</TypographyH2>
        <div className="grid grid-cols-1 gap-6">
          {certificates.map((cert, index) => (
            <div
              key={index}
              className="relative w-full aspect-[4/3] rounded-xl overflow-hidden shadow-lg border border-white/10 group"
            >
              <Image
                src={cert.src}
                alt={cert.title}
                fill
                className="object-contain bg-slate-200 dark:bg-slate-900"
              />
              <div className="absolute inset-x-0 bottom-0 bg-black/60 p-2 text-white text-sm text-center">
                {cert.title}
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
            className="staggered-reveal text-[10vw] font-bold text-neutral-800/5 dark:text-white/5 absolute top-20 left-10 pointer-events-none whitespace-nowrap z-0"
          >
            CERTIFICATES
          </h2>
          <div className="staggered-reveal mb-8 z-10">
            <TypographyH2>Certificates</TypographyH2>
          </div>

          <div ref={cardsRef} className="flex gap-4 md:gap-10 z-10 pl-4 md:pl-4 w-fit">
            {certificates.map((cert, index) => (
              <div
                key={index}
                className="certificate-card staggered-reveal relative h-[250px] sm:h-[320px] md:h-[400px] w-[280px] sm:w-[400px] md:w-[600px] flex-shrink-0 rounded-2xl overflow-hidden shadow-2xl border border-white/10 group bg-slate-200 dark:bg-slate-900"
              >
                <div className="relative w-full h-full p-4">
                  <Image
                    src={cert.src}
                    alt={cert.title}
                    fill
                    className="object-contain transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-6 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <h3 className="text-white text-xl font-bold">{cert.title}</h3>
                </div>
              </div>
            ))}
            {/* Added extra padding div to ensure scroll goes far enough */}
            <div className="w-[50vw] flex-shrink-0" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CertificatesSection;
