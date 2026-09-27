"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { WazeIcon, PinIcon, PhoneSmallIcon, ClockSmallIcon } from "@/components/Icons";

gsap.registerPlugin(ScrollTrigger);

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

export default function Branches() {
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      gsap.from(".branches-container h2, .branch-card", {
        scrollTrigger: { trigger: "#contact", start: "top 80%", once: true },
        y: 40,
        opacity: 0,
        stagger: 0.1,
        duration: 0.8,
        ease: "power3.out",
        clearProps: "all",
      });
    },
    { dependencies: [] }
  );

  return (
    <section id="contact" ref={sectionRef} className="relative py-24 md:py-32 bg-white/50">
      <div className="container mx-auto px-6 md:px-12">
        <div className="max-w-5xl mx-auto">
          <div className="branches-container">
            <h2 className="mb-12 text-center text-4xl font-black text-foreground md:text-5xl tracking-tighter">
              Nuestras <span className="text-primary italic">Sucursales</span>
            </h2>
            <div className="grid gap-8 md:grid-cols-2">
              {BRANCHES.map((branch, i) => (
                <div
                  key={branch.name + i}
                  className="branch-card group relative p-8 rounded-3xl bg-white shadow-xl border-2 border-transparent transition-all hover:border-primary/10"
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
                      allowFullScreen={false}
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      className="grayscale-[0.2] contrast-[1.1] transition-all duration-500 group-hover:grayscale-0"
                    />
                  </div>
                  <h3 className="mb-4 text-2xl font-black text-foreground italic relative z-10">{branch.name}</h3>
                  <div className="flex flex-col gap-3 relative z-10">
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
                    <div className="mt-4 flex w-full">
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
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}