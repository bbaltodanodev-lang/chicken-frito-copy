"use client";

import { useEffect, useState } from "react";

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (localStorage.getItem("cookie-consent") !== "true") {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setVisible(true);
    }
  }, []);

  const accept = () => {
    localStorage.setItem("cookie-consent", "true");
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 w-full z-[1000] p-4 md:p-6 pointer-events-none flex justify-center">
      <div className="bg-white rounded-3xl shadow-[0_10px_40px_rgba(0,0,0,0.2)] p-6 md:p-8 max-w-4xl w-full border-2 border-primary/10 pointer-events-auto flex flex-col md:flex-row items-center gap-6 justify-between animate-in slide-in-from-bottom-10 fade-in duration-500">
        <div className="flex-1">
          <h3 className="text-xl font-black text-foreground italic mb-2">
            Usamos Cookies 🍪
          </h3>
          <p
            className="text-foreground/70 font-medium text-sm leading-relaxed"
            style={{ fontFamily: "var(--font-geist-sans)" }}
          >
            Utilizamos cookies para mejorar tu experiencia y garantizar el
            correcto funcionamiento de nuestra web. Al continuar navegando,
            aceptas nuestra{" "}
            <a className="text-primary font-bold hover:underline" href="/privacidad">
              política de privacidad
            </a>{" "}
            y términos de uso.
          </p>
        </div>
        <div className="flex gap-3 w-full md:w-auto shrink-0">
          <button
            onClick={accept}
            className="flex-1 md:flex-none h-12 rounded-full bg-primary px-8 text-sm font-black uppercase tracking-widest text-white shadow-xl transition-all hover:scale-105 active:scale-95 whitespace-nowrap"
          >
            Aceptar
          </button>
        </div>
      </div>
    </div>
  );
}