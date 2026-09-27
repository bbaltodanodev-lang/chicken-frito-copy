import Image from "next/image";
import Link from "next/link";
import {
  InstagramSimpleIcon,
  FacebookIcon,
  TwitterIcon,
  EnvelopeIcon,
  PhoneIcon,
  ClockIcon,
} from "@/components/Icons";

const EXPLORE_LINKS = ["Men<span class='fake-accent'>u</span>", "Sucursales", "Promos", "Nosotros"];

export default function Footer() {
  return (
    <footer className="bg-[#050505] pt-24 pb-12 overflow-hidden relative">
      <div className="container relative mx-auto px-6 md:px-12">
        <div className="grid gap-16 md:grid-cols-2 lg:grid-cols-4">
          <div className="flex flex-col gap-8">
            <div className="relative h-40 w-80 md:h-48 md:w-[400px]">
              <Image
                src="/footer.webp"
                alt="Chicken Frito Logo"
                fill
                unoptimized
                quality={100}
                className="object-contain object-left"
              />
            </div>
            <p
              className="text-white/60 font-medium leading-relaxed max-w-xs"
              dangerouslySetInnerHTML={{
                __html: "El mejor pollo frito de la ciudad, preparado con pasi<span class='fake-accent'>o</span>n y la receta original de la casa.",
              }}
            />
            <div className="flex gap-4">
              <a
                href="#"
                className="h-10 w-10 rounded-full bg-white/5 flex items-center justify-center transition-all hover:bg-primary hover:scale-110 text-white/80 hover:text-white"
                aria-label="Instagram"
              >
                <span className="sr-only">Instagram</span>
                <InstagramSimpleIcon className="h-5 w-5 fill-current" />
              </a>
              <a
                href="#"
                className="h-10 w-10 rounded-full bg-white/5 flex items-center justify-center transition-all hover:bg-primary hover:scale-110 text-white/80 hover:text-white"
                aria-label="Facebook"
              >
                <span className="sr-only">Facebook</span>
                <FacebookIcon className="h-5 w-5 fill-current" />
              </a>
              <a
                href="#"
                className="h-10 w-10 rounded-full bg-white/5 flex items-center justify-center transition-all hover:bg-primary hover:scale-110 text-white/80 hover:text-white"
                aria-label="Twitter"
              >
                <span className="sr-only">Twitter</span>
                <TwitterIcon className="h-5 w-5 fill-current" />
              </a>
            </div>
          </div>

          <div className="flex flex-col gap-8">
            <h4 className="text-white font-black uppercase tracking-widest text-sm">Explora</h4>
            <ul className="flex flex-col gap-4">
              {EXPLORE_LINKS.map((label) => (
                <li key={label}>
                  <a
                    href={`#${label.toLowerCase().replace(/<[^>]*>/g, "")}`}
                    className="text-white/60 font-bold hover:text-primary transition-colors uppercase tracking-tight text-sm"
                    dangerouslySetInnerHTML={{ __html: label }}
                  />
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col gap-8">
            <h4 className="text-white font-black uppercase tracking-widest text-sm">
              Contactan<span className="fake-accent">o</span>s
            </h4>
            <ul
              className="flex flex-col gap-4 text-white/60 font-bold text-sm"
              style={{ fontFamily: "var(--font-geist-sans), sans-serif" }}
            >
              <li className="flex items-center gap-3">
                <EnvelopeIcon className="text-primary h-4 w-4 shrink-0" />
                info@chickenfrito.com
              </li>
              <li className="flex items-center gap-3">
                <PhoneIcon className="text-primary h-4 w-4 shrink-0" />
                +506 8422 5656
              </li>
              <li className="flex items-center gap-3">
                <ClockIcon className="text-primary h-4 w-4 shrink-0" />
                Lun a Dom: 11:00 a.m. - 10:00 p.m.
              </li>
            </ul>
          </div>

          <div className="flex flex-col gap-8">
            <h4 className="text-white font-black uppercase tracking-widest text-sm">Legal</h4>
            <ul className="flex flex-col gap-4">
              <li>
                <Link
                  href="/terminos"
                  className="text-white/60 font-bold hover:text-primary transition-colors text-sm"
                >
                  T<span className="fake-accent">e</span>rminos y Condiciones
                </Link>
              </li>
              <li>
                <Link href="/privacidad" className="text-white/60 font-bold hover:text-primary transition-colors text-sm">
                  Privacidad y Datos
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-24 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-center md:justify-start items-center">
          <p className="text-white/40 text-[10px] font-black uppercase tracking-widest">
            © {new Date().getFullYear()} Chicken Frito. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}