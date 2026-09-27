"use client";

import { useRef } from "react";
import Image from "next/image";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowRight } from "@/components/Icons";

gsap.registerPlugin(ScrollTrigger);

const UBER_URL =
  "https://www.ubereats.com/cr/brand/chicken-frito-?&utm_campaign=chicken-frito--cr&utm_source=instagram&utm_medium=brandpage";

export default function Delivery() {
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      gsap.from(".delivery-phones", {
        scrollTrigger: { trigger: ".delivery-phones", start: "top 85%", once: true },
        x: -100,
        opacity: 0,
        duration: 1.2,
        ease: "power4.out",
        clearProps: "all",
      });
      gsap.from(".delivery-content > *", {
        scrollTrigger: { trigger: ".delivery-content", start: "top 85%", once: true },
        y: 30,
        opacity: 0,
        stagger: 0.2,
        duration: 1,
        ease: "power3.out",
        clearProps: "all",
      });
    },
    { scope: sectionRef, dependencies: [] }
  );

  return (
    <section id="delivery" ref={sectionRef} className="relative z-20 py-24 pb-32">
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="relative rounded-[2rem] bg-primary shadow-xl overflow-visible">
          <div className="absolute inset-0 overflow-hidden rounded-[2rem]">
            <div className="absolute inset-0 opacity-10 grayscale">
              <Image
                src="/fondo-about.webp"
                alt="Texture"
                fill
                unoptimized
                quality={100}
                className="object-cover"
              />
            </div>
          </div>

          <div className="relative grid items-center lg:grid-cols-2">
            <div className="delivery-phones relative flex h-[250px] items-center justify-center md:h-[350px] z-40">
              <div className="absolute h-[120%] w-[120%] max-w-[350px] md:max-w-[500px] lg:max-w-[550px] scale-[1.85] md:scale-[1.4] lg:scale-[1.6] -translate-y-12 lg:-translate-y-16 lg:translate-x-12 z-50">
                <Image
                  src="/uber.webp"
                  alt="Uber Eats Delivery"
                  fill
                  unoptimized
                  quality={100}
                  className="object-contain drop-shadow-[0_35px_35px_rgba(0,0,0,0.5)]"
                />
              </div>
            </div>

            <div className="delivery-content flex flex-col items-center p-8 text-center lg:items-start lg:text-left z-30">
              <h2 className="mb-4 text-3xl font-black text-white md:text-5xl leading-tight tracking-tighter">
                Ped<span className="fake-accent-i">i</span> por{" "}
                <span className="text-accent italic">Uber Eats</span>
              </h2>
              <p className="mb-6 text-base font-medium text-white/90 md:text-lg max-w-sm leading-tight">
                Disfruta del mejor pollo frito sin moverte de tu casa. R
                <span className="fake-accent">a</span>pido y caliente.
              </p>
              <a
                href={UBER_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3 rounded-full bg-white px-8 py-4 text-sm font-black uppercase tracking-widest text-primary shadow-xl transition-all hover:scale-105 hover:bg-accent hover:text-white active:scale-95"
              >
                <span>Pedir por Uber Eats</span>
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}