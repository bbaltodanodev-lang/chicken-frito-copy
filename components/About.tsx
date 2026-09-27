"use client";

import { useRef } from "react";
import Image from "next/image";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { CheckIcon } from "@/components/Icons";

gsap.registerPlugin(ScrollTrigger);

const LIST_ITEMS = [
  "Ingredientes 100 Naturales",
  "Pollo Fresco, Nunca Congelado",
  "Receta Secreta Original",
  "Sabor que une familias",
];

export default function About() {
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: "#nosotros",
          start: "top 80%",
          toggleActions: "play none none none",
        },
      });
      tl.from(".about-image-container", {
        scale: 0.8,
        rotate: -5,
        opacity: 0,
        duration: 1,
        ease: "power4.out",
      })
        .from(".about-decoration", { scale: 0, stagger: 0.1, duration: 0.6, ease: "back.out(2)" }, "-=0.8")
        .from(".about-content-title > *", { y: 30, opacity: 0, stagger: 0.1, duration: 0.6, ease: "power3.out" }, "-=0.6")
        .from(".about-content-text", { y: 20, opacity: 0, duration: 0.6, ease: "power3.out" }, "-=0.4")
        .from(".about-list-item", { x: -15, opacity: 0, stagger: 0.05, duration: 0.5, ease: "power2.out" }, "-=0.3");
    },
    { dependencies: [] }
  );

  return (
    <section id="nosotros" ref={sectionRef} className="relative bg-background py-24 md:py-32 overflow-hidden">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          <div className="about-image-container relative flex justify-center">
            <div className="relative h-[300px] w-[300px] md:h-[450px] md:w-[450px]">
              <div className="absolute inset-0 overflow-hidden rounded-full border-[10px] border-white shadow-2xl">
                <Image
                  src="/fondo-about.webp"
                  alt="Background"
                  fill
                  unoptimized
                  className="object-cover opacity-40"
                />
              </div>
              <div className="absolute inset-0 z-10 flex items-center justify-center">
                <Image
                  src="/about-per.webp"
                  alt="Our Quality"
                  fill
                  unoptimized
                  className="object-contain scale-160 translate-y-[-15%] translate-x-[5%] drop-shadow-[0_25px_25px_rgba(0,0,0,0.4)]"
                />
              </div>
              <div className="about-decoration absolute -left-6 top-4 h-24 w-24 rotate-[-15deg] fill-[#cc0000] drop-shadow-xl opacity-90">
                <svg viewBox="0 0 100 100">
                  <path d="M50,10 C60,5 75,15 70,30 C85,25 95,45 85,55 C100,65 85,85 70,80 C75,95 55,100 45,85 C30,100 10,85 20,70 C0,75 0,50 15,45 C5,30 25,10 45,20 C45,5 55,5 50,10 Z" />
                  <circle cx="40" cy="35" r="5" fill="white" opacity="0.3" />
                </svg>
              </div>
              <div className="about-decoration absolute -right-8 bottom-12 h-20 w-20 rotate-[25deg] fill-[#f7941d] drop-shadow-lg opacity-90">
                <svg viewBox="0 0 100 100">
                  <path d="M50,15 C65,10 80,25 75,40 C90,45 85,65 70,70 C75,85 55,90 45,75 C30,85 15,70 25,55 C10,50 15,30 30,30 C35,15 45,10 50,15 Z" />
                  <circle cx="45" cy="40" r="4" fill="white" opacity="0.3" />
                </svg>
              </div>
              <div className="about-decoration absolute -bottom-4 left-4 h-16 w-16 fill-[#cc0000] opacity-80 rotate-[10deg]">
                <svg viewBox="0 0 100 100">
                  <path d="M50,20 C60,15 70,25 65,35 C75,40 70,55 60,60 C65,70 50,75 40,65 C30,70 20,60 25,50 C15,45 20,30 35,30 C40,20 45,15 50,20 Z" />
                </svg>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-8">
            <div className="about-content-title flex flex-col gap-4">
              <span className="text-sm font-black uppercase tracking-widest text-primary">Sobre Nosotros</span>
              <h2 className="text-4xl font-black text-foreground md:text-7xl leading-tight">
                EL SECRETO DEL <br />
                <span className="text-primary">MEJOR POLLO</span>
              </h2>
            </div>
            <p className="about-content-text text-lg leading-relaxed text-foreground/70 md:text-xl">
              En Chicken Frito, no solo servimos comida; creamos experiencias legendarias. Cada pieza de
              nuestro pollo es el resultado de d<span className="fake-accent">e</span>cadas de perfeccionamiento,
              marinado con 12 especias secretas y cocinado a la perfecci<span className="fake-accent">o</span>n
              para lograr ese crujido inigualable.
            </p>
            <div className="grid gap-4 sm:grid-cols-2">
              {LIST_ITEMS.map((item, i) => (
                <div key={i} className="about-list-item flex items-center gap-3">
                  <div className="flex h-6 w-6 items-center justify-center rounded-full bg-primary text-white">
                    <CheckIcon className="h-4 w-4 fill-current" />
                  </div>
                  <span className="font-bold text-foreground/80">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}