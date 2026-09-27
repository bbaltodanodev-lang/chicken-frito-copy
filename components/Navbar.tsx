"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { InstagramIcon } from "@/components/Icons";

const NAV_LINKS = [
  { label: "Inicio", href: "#top" },
  { label: "Nosotros", href: "#nosotros" },
  { label: "Men<span class='fake-accent'>u</span>", href: "#menu" },
  { label: "Delivery", href: "#delivery" },
  { label: "FAQ", href: "#features" },
  { label: "Contacto", href: "#contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const overlayRef = useRef<HTMLDivElement>(null);
  const linksRef = useRef<HTMLDivElement>(null);
  const bar1Ref = useRef<HTMLSpanElement>(null);
  const bar2Ref = useRef<HTMLSpanElement>(null);
  const bar3Ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const onScroll = () => {
      if (open) setOpen(false);
    };
    if (open) window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [open]);

  useGSAP(
    () => {
      if (overlayRef.current) {
        if (open) {
          gsap.killTweensOf(overlayRef.current);
          gsap.set(overlayRef.current, { visibility: "visible" });
          gsap.to(overlayRef.current, { yPercent: 100, duration: 0.6, ease: "power4.out" });
          if (linksRef.current) {
            gsap.fromTo(
              linksRef.current.children,
              { y: 30, opacity: 0 },
              { y: 0, opacity: 1, stagger: 0.08, duration: 0.5, ease: "power3.out", delay: 0.2 }
            );
          }
          gsap.to(bar1Ref.current, { rotate: 45, y: 7, duration: 0.4, ease: "power3.inOut" });
          gsap.to(bar2Ref.current, { opacity: 0, x: 20, duration: 0.3 });
          gsap.to(bar3Ref.current, { rotate: -45, y: -7, duration: 0.4, ease: "power3.inOut" });
          document.body.classList.add("overflow-hidden");
        } else {
          gsap.killTweensOf(overlayRef.current);
          gsap.to(overlayRef.current, {
            yPercent: 0,
            duration: 0.5,
            ease: "power4.in",
            onComplete: () => {
              gsap.set(overlayRef.current, { visibility: "hidden" });
            },
          });
          gsap.to(bar1Ref.current, { rotate: 0, y: 0, duration: 0.4, ease: "power3.inOut" });
          gsap.to(bar2Ref.current, { opacity: 1, x: 0, duration: 0.4 });
          gsap.to(bar3Ref.current, { rotate: 0, y: 0, duration: 0.4, ease: "power3.inOut" });
          document.body.classList.remove("overflow-hidden");
        }
      }
    },
    { dependencies: [open] }
  );

  return (
    <>
      <div
        ref={overlayRef}
        style={{ top: "-110vh", visibility: "hidden" }}
        className="fixed left-0 z-[100] flex h-[110vh] w-screen flex-col bg-background md:hidden"
      >
        <div className="flex h-full flex-col overflow-y-auto pt-32 pb-12">
          <div className="absolute inset-0 opacity-[0.03] pointer-events-none grayscale">
            <Image
              src="/fondo-about.webp"
              alt="Texture"
              fill
              unoptimized
              quality={100}
              className="object-cover"
            />
          </div>
          <div ref={linksRef} className="container relative z-10 mx-auto flex flex-col items-center gap-6 px-6 text-center">
            {NAV_LINKS.map((link, i) => (
              <a
                key={link.href + i}
                href={link.href}
                onClick={() => setOpen(false)}
                className="mobile-nav-link text-3xl font-black uppercase italic tracking-tighter text-foreground transition-colors hover:text-primary"
                dangerouslySetInnerHTML={{ __html: link.label }}
              />
            ))}
            <div className="mt-4 flex flex-col gap-4 w-full max-w-xs">
              <Link
                href="/pedir-ahora"
                onClick={() => setOpen(false)}
                className="flex items-center justify-center h-14 w-full rounded-full bg-primary text-base font-black uppercase tracking-widest text-white shadow-xl"
              >
                Pedir Ahora
              </Link>
              <div className="flex justify-center pt-6">
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="h-12 w-12 rounded-full bg-foreground/5 flex items-center justify-center text-foreground/40 hover:bg-primary hover:text-white transition-colors shadow-sm"
                >
                  <span className="sr-only">Instagram</span>
                  <InstagramIcon className="h-6 w-6" />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 w-48 h-48 opacity-10 grayscale pointer-events-none">
          <Image
            src="/logo.webp"
            alt="Decoration"
            fill
            unoptimized
            quality={100}
            className="object-contain"
          />
        </div>
      </div>

      <nav className="fixed top-0 z-[110] w-full px-4 py-4 md:px-12 md:py-6">
        <div className="mx-auto flex max-w-7xl items-center justify-between rounded-full bg-background px-6 py-2 shadow-xl md:px-8 md:py-3">
          <div className="flex items-center gap-2">
            <Link href="#top" aria-label="Chicken Frito">
              <Image
                src="/logo-navbar.webp"
                alt="Chicken Frito Logo"
                width={200}
                height={64}
                unoptimized
                quality={100}
                className="h-12 md:h-16 w-auto object-contain"
              />
            </Link>
          </div>
          <div className="hidden items-center gap-8 md:flex">
            {NAV_LINKS.map((link, i) => (
              <a
                key={link.href + i}
                href={link.href}
                className="text-sm font-medium uppercase tracking-wider text-foreground/70 transition-colors hover:text-primary"
                dangerouslySetInnerHTML={{ __html: link.label }}
              />
            ))}
          </div>
          <div className="hidden items-center gap-4 md:flex">
            <Link
              href="/pedir-ahora"
              className="flex items-center justify-center rounded-full bg-primary px-6 py-2 text-sm font-bold uppercase text-white transition-transform hover:scale-105 active:scale-95"
            >
              Pedir Ahora
            </Link>
          </div>
          <button
            onClick={() => setOpen((p) => !p)}
            className="flex h-11 w-11 flex-col items-center justify-center gap-[5px] rounded-full bg-primary/5 md:hidden"
            aria-label="Toggle Menu"
          >
            <span
              ref={bar1Ref}
              className={`h-[2px] w-6 rounded-full transition-colors duration-300 ${open ? "bg-red-600" : "bg-primary"}`}
            />
            <span ref={bar2Ref} className="h-[2px] w-6 rounded-full bg-primary transition-all" />
            <span
              ref={bar3Ref}
              className={`h-[2px] w-6 rounded-full transition-colors duration-300 ${open ? "bg-red-600" : "bg-primary"}`}
            />
          </button>
        </div>
      </nav>
    </>
  );
}