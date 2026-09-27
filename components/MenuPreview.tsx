"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowRight } from "@/components/Icons";

gsap.registerPlugin(ScrollTrigger);

const MENU_ITEMS = [
  { title: "ALAS", sub: "Chicken Alas", img: "/menu/chicken-alas.webp", type: "white" },
  { title: "FAMILIA", sub: "Chicken Familia", img: "/menu/chicken-familia.webp", type: "red" },
  { title: "CHICKENCITOS", sub: "Chickencitos", img: "/menu/chickencitos.webp", type: "white" },
  { title: "SHAKES", sub: "Frito Shakes", img: "/menu/frito-shakes.webp", type: "red" },
  {
    title: "MEGA BOX",
    sub: "Mega Chicken Box",
    img: "/menu/mega-chicken-box.webp",
    type: "white",
    imgClass: "scale-[0.80] translate-y-6 translate-x-6 rotate-[-5deg]",
  },
  { title: "FRIES", sub: "Signature Frito Chicken Fries", img: "/menu/signature-frito-chicken-fries.webp", type: "red" },
];

export default function MenuPreview() {
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      gsap.from(".menu-header-reveal > *", {
        scrollTrigger: { trigger: "#menu", start: "top bottom-=100", once: true },
        yPercent: 100,
        stagger: 0.2,
        duration: 1.2,
        ease: "power4.out",
        immediateRender: false,
      });
      gsap.from(".menu-card", {
        scrollTrigger: { trigger: ".menu-grid-container", start: "top bottom", once: true },
        y: 40,
        opacity: 0,
        stagger: 0.05,
        duration: 0.6,
        ease: "power2.out",
        immediateRender: false,
      });
      gsap.to(".menu-watermark", {
        scrollTrigger: { trigger: "#menu", start: "top bottom", end: "bottom top", scrub: 1 },
        y: 150,
        ease: "none",
      });
      gsap.to(".menu-header-reveal", {
        scrollTrigger: { trigger: "#menu", start: "top bottom", end: "bottom top", scrub: 0.5 },
        y: -50,
        ease: "none",
      });
    },
    { dependencies: [] }
  );

  return (
    <section id="menu" ref={sectionRef} className="relative bg-background py-24 md:py-32 overflow-hidden">
      <div className="menu-watermark absolute -top-24 -right-48 w-[400px] md:w-[800px] opacity-[0.08] pointer-events-none grayscale rotate-[-15deg]">
        <Image
          src="/logo.webp"
          alt="Logo Watermark"
          width={800}
          height={800}
          unoptimized
          quality={100}
          className="object-contain"
        />
      </div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="mb-16 flex flex-col items-center text-center">
          <div className="menu-header-reveal overflow-hidden">
            <span className="mb-4 block text-sm font-black uppercase tracking-[0.3em] text-primary">Nuestra Carta</span>
          </div>
          <div className="menu-header-reveal overflow-hidden">
            <h2 className="mb-8 text-4xl font-black text-foreground md:text-8xl leading-none">
              DESCUBRE <span className="text-primary">LO MEJOR</span> <br />
              DE NUESTRO SABOR
            </h2>
          </div>
          <div className="menu-header-reveal overflow-hidden mt-4">
            <Link
              href="/menu"
              className="group relative flex h-14 items-center justify-center overflow-hidden rounded-full bg-primary px-8 text-sm font-black uppercase tracking-widest text-white shadow-xl transition-all hover:scale-105 hover:bg-accent active:scale-95"
            >
              <span>
                Ver el Men<span className="fake-accent">u</span> Completo
              </span>
              <div className="ml-3 transition-transform group-hover:translate-x-1">
                <ArrowRight className="h-4 w-4" />
              </div>
            </Link>
          </div>
        </div>

        <div className="menu-grid-container grid gap-6 md:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto">
          {MENU_ITEMS.map((item, i) => {
            const isRed = item.type === "red";
            return (
              <div
                key={item.title + i}
                className={`menu-card group relative h-[220px] md:h-[240px] overflow-hidden rounded-[2rem] p-6 md:p-8 transition-all hover:scale-[1.03] ${
                  isRed
                    ? "bg-primary text-white shadow-[0_15px_30px_rgba(237,28,36,0.15)]"
                    : "bg-white text-foreground shadow-lg border border-foreground/5"
                }`}
              >
                <div className="relative z-20 flex h-full flex-col justify-between">
                  <div>
                    <h3 className="text-2xl md:text-3xl font-black leading-none tracking-tighter mb-1 italic">
                      {item.title}
                    </h3>
                    <p
                      className={`text-xs md:text-sm font-bold uppercase tracking-widest opacity-70 ${
                        isRed ? "text-white/80" : "text-foreground/60"
                      }`}
                    >
                      {item.sub}
                    </p>
                  </div>
                  <Link
                    href="/pedir-ahora"
                    className={`w-fit rounded-full px-6 py-2 text-[10px] md:text-xs font-black uppercase tracking-widest transition-transform active:scale-95 ${
                      isRed ? "bg-accent text-foreground hover:bg-white" : "bg-primary text-white hover:bg-accent"
                    }`}
                  >
                    Pedir Ahora
                  </Link>
                </div>
                <div
                  className={`absolute top-1/2 -right-8 h-48 w-48 -translate-y-1/2 rounded-full transition-transform duration-700 group-hover:scale-110 z-0 ${
                    isRed ? "bg-white" : "bg-accent"
                  }`}
                />
                <div className="absolute bottom-4 -right-8 w-[75%] h-[85%] transition-transform duration-500 group-hover:scale-110 group-hover:-rotate-6 z-10">
                  <Image
                    src={item.img}
                    alt={item.sub}
                    fill
                    unoptimized
                    quality={100}
                    className={`relative z-10 object-contain drop-shadow-[0_15px_25px_rgba(0,0,0,0.3)] ${item.imgClass || ""}`}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}