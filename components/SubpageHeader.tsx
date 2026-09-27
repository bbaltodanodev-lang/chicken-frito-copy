import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "@/components/Icons";

export default function SubpageHeader() {
  return (
    <header className="relative z-10 w-full px-4 py-4 md:px-12 md:py-6 border-b border-foreground/5 bg-background/90 backdrop-blur-md sticky top-0">
      <div className="mx-auto flex max-w-7xl items-center justify-between">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-primary hover:text-accent font-black transition-colors uppercase tracking-wider text-xs md:text-sm group"
        >
          <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
          <span>Volver</span>
        </Link>
        <Link href="/" aria-label="Chicken Frito">
          <Image
            src="/logo-navbar.webp"
            alt="Chicken Frito Logo"
            width={160}
            height={50}
            priority
            unoptimized
            className="h-10 md:h-12 w-auto object-contain"
          />
        </Link>
        <div className="w-16 h-4 pointer-events-none opacity-0"></div>
      </div>
    </header>
  );
}