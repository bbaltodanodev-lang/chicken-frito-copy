"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const FEATURES = [
  {
    title: "Receta Original Secreta",
    desc: "Combinamos 12 especias seleccionadas para lograr ese sabor legendario que solo encuentras aquí.",
  },
  {
    title: "Pollo 100 Fresco",
    desc: "Nunca congelado. Seleccionamos el mejor pollo local para garantizar jugosidad en cada bocado.",
  },
  {
    title: "Crujido Insuperable",
    desc: "Nuestro proceso de apanado artesanal crea una costra dorada y ultra crispy que te volar<span class='fake-accent'>a</span> la cabeza.",
  },
  {
    title: "Directo a tu Puerta",
    desc: "Entregas r<span class='fake-accent'>a</span>pidas y seguras para que disfrutes de tu pollo caliente y en su punto justo.",
  },
];

export default function Features() {
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      gsap.from(".features-content h2, .feature-item", {
        scrollTrigger: { trigger: "#features", start: "top 80%", once: true },
        x: -30,
        opacity: 0,
        stagger: 0.05,
        duration: 0.3,
        ease: "power2.out",
        clearProps: "all",
      });
      gsap.from(".features-visual", {
        scrollTrigger: { trigger: "#features", start: "top 80%", once: true },
        scale: 0.8,
        opacity: 0,
        duration: 0.8,
        ease: "back.out(1.7)",
        clearProps: "all",
      });
      gsap.to(".feature-image", {
        scrollTrigger: { trigger: "#features", start: "top bottom", end: "bottom top", scrub: 1 },
        y: -40,
      });
    },
    { dependencies: [] }
  );

  return (
    <section id="features" ref={sectionRef} className="relative overflow-hidden bg-background py-24 md:py-32">
      <div className="container relative mx-auto px-6 md:px-12">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          <div className="features-content order-1 lg:order-1">
            <h2 className="mb-12 text-4xl font-black text-foreground md:text-6xl leading-tight">
              ¿Por qu<span className="fake-accent">e</span> elegir <br />
              <span className="text-primary italic">Chicken Frito?</span>
            </h2>
            <div className="flex flex-col gap-6">
              {FEATURES.map((feature, i) => (
                <div
                  key={i}
                  className="feature-item group border-l-8 border-accent bg-primary p-8 shadow-2xl transition-all hover:scale-[1.02] hover:shadow-primary/20"
                >
                  <h3 className="mb-2 text-2xl font-black text-white italic tracking-tighter">{feature.title}</h3>
                  <p
                    className="text-sm font-bold text-white/90 leading-relaxed max-w-md"
                    dangerouslySetInnerHTML={{ __html: feature.desc }}
                  />
                </div>
              ))}
            </div>
          </div>

          <div className="features-visual relative order-2 mt-20 flex items-center justify-center lg:order-2 lg:mt-0 lg:translate-y-16">
            <div
              className="blob-shape absolute h-[300px] w-[300px] bg-accent rounded-full md:h-[460px] md:w-[460px]"
              style={{
                borderRadius: "42% 58% 70% 30% / 45% 45% 55% 55%",
                transform: "translateZ(0)",
                backfaceVisibility: "hidden",
              }}
            />
            <div className="feature-image relative z-10 w-[110%] scale-[1.5] md:scale-[1.45] lg:scale-[1.55] translate-y-8 md:translate-y-12">
              <Image
                src="/hero-2.webp"
                alt="Pollo Frito Premium"
                width={600}
                height={600}
                unoptimized
                quality={100}
                className="object-contain"
              />
            </div>
            <div className="absolute -bottom-16 z-30 lg:hidden">
              <Link
                href="/pedir-ahora"
                className="flex items-center justify-center h-14 rounded-full bg-primary px-8 text-sm font-black uppercase tracking-widest text-white shadow-2xl transition-transform hover:scale-105 active:scale-95"
              >
                Pedir Ahora
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-16 hidden justify-center lg:flex">
          <Link
            href="/pedir-ahora"
            className="flex items-center justify-center h-16 rounded-full bg-primary px-12 text-lg font-black uppercase tracking-widest text-white shadow-2xl transition-all hover:scale-110 hover:shadow-primary/20 active:scale-95"
          >
            Quiero mi Chicken Frito
          </Link>
        </div>
      </div>
    </section>
  );
}