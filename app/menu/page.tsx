import type { Metadata } from "next";
import Image from "next/image";
import SubpageHeader from "@/components/SubpageHeader";

export const metadata: Metadata = {
  title: "Menú - Chicken Frito",
  description:
    "Disfruta de nuestro menú completo. El mejor pollo frito de Costa Rica, preparado con nuestra receta secreta y un crujido insuperable.",
};

export default function MenuPage() {
  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none grayscale z-0">
        <Image
          src="/fondo-about.webp"
          alt="Texture"
          fill
          unoptimized
          quality={100}
          className="object-cover"
        />
      </div>

      <SubpageHeader />

      <main className="relative z-10 flex-1 flex flex-col items-center py-10 px-4 md:px-8">
        <div className="w-full max-w-4xl flex flex-col items-center">
          <div className="text-center mb-8">
            <span className="text-xs md:text-sm font-black uppercase tracking-[0.25em] text-primary mb-2 block">
              Nuestra Carta
            </span>
            <h1 className="text-4xl md:text-6xl font-black text-foreground italic uppercase tracking-tighter">
              EL MEN<span className="fake-accent">U</span>
            </h1>
          </div>

          <div className="flex flex-col gap-6 md:gap-8 w-full">
            <div className="relative w-full rounded-2xl overflow-hidden shadow-xl md:shadow-2xl border border-foreground/5 bg-white">
              <Image
                src="/menu-pagina/1.webp"
                alt="Menú Página 1"
                width={1790}
                height={2000}
                priority
                sizes="(max-width: 1024px) 100vw, 1000px"
                className="w-full h-auto object-contain"
              />
            </div>
            <div className="relative w-full rounded-2xl overflow-hidden shadow-xl md:shadow-2xl border border-foreground/5 bg-white">
              <Image
                src="/menu-pagina/2.webp"
                alt="Menú Página 2"
                width={1790}
                height={2000}
                loading="lazy"
                sizes="(max-width: 1024px) 100vw, 1000px"
                className="w-full h-auto object-contain"
              />
            </div>
          </div>
        </div>
      </main>

      <footer className="relative z-10 py-8 text-center border-t border-foreground/5 mt-12 bg-white/30 backdrop-blur-sm">
        <p className="text-foreground/40 text-[10px] font-black uppercase tracking-widest">
          © {new Date().getFullYear()} Chicken Frito. Todos los derechos reservados.
        </p>
      </footer>
    </div>
  );
}