"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ArrowRight } from "@/components/Icons";

const SLIDES = [
  {
    id: 1,
    badge: "El sabor que quema",
    title: ["Crujiente,", "Caliente", "y Original."],
    description:
      "Descubre el pollo frito m<span class='fake-accent'>a</span>s legendario de la ciudad. Preparado con nuestra receta secreta y ese toque de fuego que nos hace <span class='fake-accent'>U</span>nicos.",
    image: "/hero-1.webp",
    accent: "#f7941d",
    scale: "scale-125 md:scale-[1.40]",
  },
  {
    id: 2,
    badge: "Receta Original",
    title: [
      "Sabor,",
      "Tradici<span class='fake-accent'>o</span>n",
      "y Fuego.",
    ],
    description:
      "La receta que lo inici<span class='fake-accent'>o</span> todo. Pollo marinado por 24 horas para una explosi<span class='fake-accent'>o</span>n de sabor en cada bocado.",
    image: "/hero-2.webp",
    accent: "#f7941d",
    scale: "scale-125 md:scale-[1.40]",
  },
  {
    id: 3,
    badge: "Nuevo Combo",
    title: ["Grande,", "Extra", "y Picante."],
    description:
      "Para los que no se conforman con poco. Nuestro nuevo combo familiar viene cargado con todo el poder del Chicken Frito.",
    image: "/hero-3.webp",
    accent: "#f7941d",
    scale: "scale-110 md:scale-125",
  },
];

export default function Hero() {
  const [index, setIndex] = useState(0);
  const heroRef = useRef<HTMLElement>(null);
  const stripeRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const transitionRef = useRef(false);
  const mountedRef = useRef(true);

  const slide = SLIDES[index];

  const goTo = useCallback(
    (target: number) => {
      if (transitionRef.current || target === index) return;
      transitionRef.current = true;
      const tl = gsap.timeline({
        onComplete: () => {
          setIndex(target);
          transitionRef.current = false;
        },
      });
      tl.to([contentRef.current, imageRef.current], {
        opacity: 0,
        x: -50,
        duration: 0.5,
        ease: "power2.in",
      });
      tl.to(stripeRef.current, { opacity: 0, scale: 0.8, duration: 0.4 }, "-=0.3");
    },
    [index],
  );

  useEffect(() => {
    const timer = setInterval(() => {
      goTo((index + 1) % SLIDES.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [index, goTo]);

  useGSAP(
    () => {
      if (mountedRef.current) {
        mountedRef.current = false;
        return;
      }
      const tl = gsap.timeline({ defaults: { ease: "power4.out", duration: 1 } });
      gsap.set([contentRef.current, imageRef.current], { opacity: 0, x: 50 });
      gsap.set(stripeRef.current, { opacity: 0, scale: 0.8 });
      tl.to(stripeRef.current, { opacity: 1, scale: 1, duration: 1 }, 0);
      tl.to(contentRef.current, { opacity: 1, x: 0, duration: 0.8 }, 0.3);
      tl.to(imageRef.current, { opacity: 1, x: 0, duration: 1 }, 0.2);
    },
    { scope: heroRef, dependencies: [index] }
  );

  useGSAP(
    () => {
      const tl = gsap.timeline({ defaults: { ease: "power4.out", duration: 1.2 } });
      gsap.set(stripeRef.current, { opacity: 1, scale: 1, x: 0 });
      tl.from(stripeRef.current, { x: 200, opacity: 0, scale: 0.8, duration: 0.8 }, 0);
      gsap.set(contentRef.current, { opacity: 1, x: 0 });
      tl.from(contentRef.current?.children || [], { y: 50, opacity: 0, stagger: 0.08 }, 0.2);
      gsap.set(imageRef.current, { opacity: 1, x: 0 });
      tl.from(imageRef.current, { x: 150, opacity: 0.5, scale: 0.9, duration: 1 }, 0);
    },
    { scope: heroRef, dependencies: [] }
  );

  return (
    <section
      id="top"
      ref={heroRef}
      className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-primary pt-32 pb-24 md:pt-20 md:pb-0"
    >
      <div
        ref={stripeRef}
        className="absolute top-1/2 -right-[40%] h-[200%] w-[90%] -translate-y-1/2 bg-[#f7941d] rotate-[35deg] [transform:rotateY(-35deg)]"
        style={{ borderRadius: "50%" }}
      />

      <div className="container relative z-10 mx-auto px-6 md:px-12 mt-4 md:mt-0">
        <div className="relative grid items-center lg:grid-cols-2">
          <div
            ref={contentRef}
            className="relative z-10 flex flex-col items-start text-left max-w-[65%] lg:max-w-none lg:items-start lg:text-left"
          >
            <span className="mb-6 inline-block rounded-full border border-white/20 bg-white/10 px-4 py-1 text-xs font-black uppercase tracking-widest text-white backdrop-blur-sm">
              {slide.badge}
            </span>
            <h1 className="mb-4 text-[2rem] leading-[0.95] md:text-[6.5rem] uppercase">
              <span className="text-outline" dangerouslySetInnerHTML={{ __html: slide.title[0] }} />{" "}
              <br />
              <span className="text-outline-white" dangerouslySetInnerHTML={{ __html: slide.title[1] }} />{" "}
              <br />
              <span className="text-outline" dangerouslySetInnerHTML={{ __html: slide.title[2] }} />
            </h1>
            <p
              className="mb-8 text-xs font-medium tracking-wide text-white/80 max-w-[280px] md:text-sm lg:max-w-lg"
              dangerouslySetInnerHTML={{ __html: slide.description }}
            />
            <div className="flex flex-col gap-3 sm:flex-row sm:justify-start lg:justify-start mt-6">
              <Link
                href="/menu"
                className="group relative flex h-12 items-center justify-center overflow-hidden rounded-full bg-white px-6 text-sm font-bold uppercase text-primary transition-all hover:bg-accent hover:text-white"
              >
                VER MEN
                <span className="fake-accent">U</span>
                <div className="ml-2 transition-transform group-hover:translate-x-1">
                  <ArrowRight className="h-4 w-4" />
                </div>
              </Link>
              <Link
                href="/pedir-ahora"
                className="flex h-12 items-center justify-center rounded-full border-2 border-white/30 px-6 text-sm font-bold uppercase text-white transition-all hover:bg-white hover:text-primary hover:border-white"
              >
                Pedir Ahora
              </Link>
            </div>
            <div className="mt-6 flex flex-col items-start gap-1">
              <div className="flex items-center gap-2">
                <div className="flex text-accent text-sm">
                  {"★★★★★".split("").map((star, i) => (
                    <span key={i}>{star}</span>
                  ))}
                </div>
                <span className="text-xs font-medium text-white/80">Google Reviews</span>
              </div>
              <span className="text-sm font-black text-white">10k Clientes Felices</span>
            </div>
          </div>

          <div className="absolute right-[-50%] top-[5%] w-[90vw] h-[450px] lg:relative lg:right-0 lg:top-0 lg:w-full lg:h-[600px] flex justify-center lg:justify-end lg:-translate-y-16 mt-0 lg:mt-0 pointer-events-none lg:pointer-events-auto">
            <div
              ref={imageRef}
              className="relative h-full w-full scale-110 md:scale-100 origin-center lg:origin-right"
            >
              <Image
                src={slide.image}
                alt="Chicken Frito Combo"
                fill
                priority
                quality={100}
                sizes="(max-width: 768px) 100vw, 1200px"
                unoptimized
                className={`relative z-10 object-contain drop-shadow-[0_35px_35px_rgba(0,0,0,0.4)] transition-transform duration-500 ${slide.scale}`}
              />
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-20 left-1/2 z-20 flex -translate-x-1/2 gap-2">
        {SLIDES.map((s, i) => (
          <button
            key={s.id}
            onClick={() => goTo(i)}
            className={`h-2 rounded-full transition-all duration-500 ${
              i === index
                ? "w-10 bg-white shadow-[0_0_10px_rgba(255,255,255,0.5)]"
                : "w-6 bg-white/20 hover:bg-white/40"
            }`}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>

      <div className="absolute bottom-[-2px] left-0 w-full overflow-hidden leading-[0]">
        <svg
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="relative block h-12 md:h-16 w-full fill-background"
        >
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.8C57.21,103.4,115,100.86,170,90.41,217,81.44,264.8,66.92,321.39,56.44Z" />
        </svg>
      </div>
    </section>
  );
}