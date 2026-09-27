import type { Metadata } from "next";
import Image from "next/image";
import SubpageHeader from "@/components/SubpageHeader";
import {
  WazeIcon,
  PinIcon,
  PhoneSmallIcon,
  ClockSmallIcon,
  ArrowRight,
} from "@/components/Icons";

export const metadata: Metadata = {
  title: "Pedir Ahora - Chicken Frito",
  description:
    "Ordená el mejor pollo frito de Costa Rica. Pedí online por Uber Eats o visitá nuestras sucursales en Alajuela y Heredia.",
};

const BRANCHES = [
  {
    name: "Sucursal Alajuela",
    address: "400 metros al oeste de la estación de servicio Alagas – Santa Anita – Plaza Ferias",
    phone: "+506 8422 5656",
    hours: "Lun a Dom: 11:00 a.m. - 10:00 p.m.",
    mapUrl:
      "https://www.google.com/maps/place/Chicken+Frito+Alajuela/@10.01374,-84.2244425,17z/data=!3m1!4b1!4m6!3m5!1s0x8fa0f9bc48aa5641:0x65542252fb4cba94!8m2!3d10.01374!4d-84.2218676!16s%2Fg%2F11z4blcvwr?entry=tts&g_ep=EgoyMDI2MDQyOS4wIPu8ASoASAFQAw%3D%3D&skid=68c78ed0-1896-4d56-85f1-32064e8555ab",
    iframeUrl: "https://maps.google.com/maps?q=10.01374,-84.2218676&hl=es&z=17&output=embed",
    wazeUrl: "https://waze.com/ul/hd1u0gqzqz",
  },
  {
    name: "Sucursal Heredia",
    address: "300 metros oeste del McDonald’s de Santa Lucía, Heredia",
    phone: "+506 8422 5656",
    hours: "Lun a Dom: 11:00 a.m. - 10:00 p.m.",
    mapUrl:
      "https://www.google.com/maps/place/Chicken+Frito+Heredia/@10.0116736,-84.1268137,17z/data=!3m1!4b1!4m6!3m5!1s0x8fa0fb89f3bcb4cd:0x520971945604edd1!8m2!3d10.0116736!4d-84.1242388!16s%2Fg%2F11z38jcr7n?entry=tts&g_ep=EgoyMDI2MDQyOS4wIPu8ASoASAFQAw%3D%3D&skid=441f6d09-1558-4247-a9cf-c6cdfd902666",
    iframeUrl: "https://maps.google.com/maps?q=10.0116736,-84.1242388&hl=es&z=17&output=embed",
    wazeUrl: "https://waze.com/ul/hd1u0vww9x",
  },
];

const UBER_URL =
  "https://www.ubereats.com/cr/brand/chicken-frito-?&utm_campaign=chicken-frito--cr&utm_source=instagram&utm_medium=brandpage";

export default function PedirAhoraPage() {
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

      <main className="relative z-10 flex-1 flex flex-col items-center py-12 px-4 md:px-8">
        <div className="w-full max-w-6xl flex flex-col items-center">
          <div className="text-center mb-16">
            <span className="text-xs md:text-sm font-black uppercase tracking-[0.25em] text-primary mb-2 block">
              ¿C<span className="fake-accent">o</span>mo quer<span className="fake-accent">e</span>s disfrutar?
            </span>
            <h1 className="text-4xl md:text-6xl font-black text-foreground italic uppercase tracking-tighter">
              PEDIR AHORA
            </h1>
          </div>

          <section className="w-full mb-24">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-5xl font-black text-foreground italic uppercase tracking-tighter mb-4">
                Pod<span className="fake-accent">e</span>s <span className="text-primary">visitarnos</span> al p
                <span className="fake-accent">u</span>blico
              </h2>
              <p className="text-foreground/60 font-bold max-w-lg mx-auto text-sm md:text-base leading-tight">
                Vení a disfrutar de nuestro pollo frito legendario recién salido del fuego en cualquiera de nuestras
                sucursales físicas.
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-2 max-w-5xl mx-auto">
              {BRANCHES.map((branch, i) => (
                <div
                  key={branch.name + i}
                  className="branch-card group relative p-6 md:p-8 rounded-3xl bg-white shadow-xl border-2 border-transparent transition-all hover:border-primary/10 flex flex-col justify-between"
                >
                  <div className="absolute -top-4 -right-4 h-12 w-12 rounded-full bg-accent flex items-center justify-center text-foreground font-black rotate-12 shadow-lg z-10">
                    {i + 1}
                  </div>
                  <div className="mb-6 h-48 w-full rounded-2xl overflow-hidden shadow-inner border border-foreground/5 relative z-0">
                    <iframe
                      src={branch.iframeUrl}
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      loading="lazy"
                      className="grayscale-[0.2] contrast-[1.1] transition-all duration-500 group-hover:grayscale-0"
                    />
                  </div>
                  <h3 className="mb-4 text-2xl font-black text-foreground italic relative z-10">{branch.name}</h3>
                  <div className="flex flex-col gap-3 relative z-10 mb-6">
                    <a
                      href={branch.mapUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-start gap-4 text-foreground/70 hover:text-primary transition-colors"
                    >
                      <PinIcon className="h-5 w-5 fill-primary shrink-0 mt-1" />
                      <span className="font-bold leading-tight">{branch.address}</span>
                    </a>
                    <div className="flex items-center gap-4 text-foreground/70">
                      <PhoneSmallIcon className="h-5 w-5 fill-primary" />
                      <span className="font-bold">{branch.phone}</span>
                    </div>
                    <div className="flex items-center gap-4 text-foreground/70">
                      <ClockSmallIcon className="h-5 w-5 fill-primary" />
                      <span className="font-bold">{branch.hours}</span>
                    </div>
                  </div>
                  <div className="mt-auto flex w-full relative z-10">
                    <a
                      href={branch.wazeUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-3 w-full rounded-2xl bg-white border-2 border-[#33ccff] px-6 py-4 text-sm font-black uppercase text-[#33ccff] shadow-lg transition-all hover:scale-[1.02] hover:bg-[#33ccff] hover:text-white hover:shadow-xl active:scale-95"
                    >
                      <WazeIcon className="h-6 w-6" />
                      Llega con Waze
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section className="w-full max-w-5xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-5xl font-black text-foreground italic uppercase tracking-tighter mb-4">
                O ped<span className="fake-accent-i">i</span> por <span className="text-primary">Uber Eats</span>
              </h2>
              <p className="text-foreground/60 font-bold max-w-lg mx-auto text-sm md:text-base leading-tight">
                Disfrutá del mejor pollo frito sin moverte de tu casa. Rápido, crujiente y caliente hasta tu puerta.
              </p>
            </div>

            <div className="relative rounded-[2rem] bg-primary shadow-xl overflow-visible max-w-4xl mx-auto mt-16">
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
                <div className="relative flex h-[250px] items-center justify-center md:h-[350px] z-40">
                  <div className="absolute h-[120%] w-[120%] max-w-[350px] md:max-w-[500px] lg:max-w-[550px] scale-[1.45] md:scale-[1.1] lg:scale-[1.25] -translate-y-6 lg:-translate-y-10 lg:translate-x-6 z-50">
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
                <div className="flex flex-col items-center p-8 text-center lg:items-start lg:text-left z-30">
                  <h3 className="mb-4 text-2xl font-black text-white md:text-4xl leading-tight tracking-tighter">
                    Ped<span className="fake-accent-i">i</span> por{" "}
                    <span className="text-accent italic">Uber Eats</span>
                  </h3>
                  <p className="mb-8 text-sm font-medium text-white/90 md:text-base max-w-sm leading-tight">
                    El pollo frito número uno de Costa Rica, directo a tu mesa con tan solo un clic.
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
          </section>
        </div>
      </main>

      <footer className="relative z-10 py-8 text-center border-t border-foreground/5 mt-20 bg-white/30 backdrop-blur-sm">
        <p className="text-foreground/40 text-[10px] font-black uppercase tracking-widest">
          © {new Date().getFullYear()} Chicken Frito. Todos los derechos reservados.
        </p>
      </footer>
    </div>
  );
}