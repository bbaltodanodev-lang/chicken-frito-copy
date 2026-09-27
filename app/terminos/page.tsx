import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Términos y Condiciones - Chicken Frito",
  description:
    "Disfruta del mejor pollo frito de Costa Rica. Receta original secreta, pollo 100% fresco y un crujido insuperable. Pedí online o visitá nuestras sucursales.",
};

export default function TerminosPage() {
  return (
    <div className="min-h-screen bg-background pt-32 pb-24">
      <div className="container mx-auto px-6 md:px-12 max-w-4xl">
        <Link
          className="inline-flex items-center gap-2 text-primary hover:text-accent font-bold mb-8 transition-colors"
          href="/"
        >
          <svg
            stroke="currentColor"
            fill="currentColor"
            strokeWidth="0"
            viewBox="0 0 448 512"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M257.5 445.1l-22.2 22.2c-9.4 9.4-24.6 9.4-33.9 0L7 273c-9.4-9.4-9.4-24.6 0-33.9L201.4 44.7c9.4-9.4 24.6-9.4 33.9 0l22.2 22.2c9.5 9.5 9.3 25-.4 34.3L136.6 216H424c13.3 0 24 10.7 24 24v32c0 13.3-10.7 24-24 24H136.6l120.5 114.8c9.8 9.3 10 24.8.4 34.3z" />
          </svg>{" "}
          Volver al inicio
        </Link>
        <h1 className="text-4xl md:text-5xl font-black text-foreground mb-8 italic uppercase tracking-tighter">
          T<span className="fake-accent">e</span>rminos y Condiciones
        </h1>
        <div className="prose prose-lg dark:prose-invert text-foreground/80 font-medium">
          <p className="mb-4">
            Al utilizar nuestro sitio web y formulario de contacto, aceptas los presentes términos y condiciones.
          </p>
          <h2 className="text-2xl font-black text-foreground mt-8 mb-4 italic uppercase tracking-tighter">
            1. Pedidos y Entregas
          </h2>
          <p className="mb-4">
            Los pedidos realizados a través de WhatsApp están sujetos a disponibilidad y horarios de atención de
            nuestras sucursales. El tiempo de entrega es estimado y puede variar.
          </p>
          <h2 className="text-2xl font-black text-foreground mt-8 mb-4 italic uppercase tracking-tighter">
            2. Precios
          </h2>
          <p className="mb-4">
            Los precios y promociones están sujetos a cambios sin previo aviso. Nos reservamos el derecho de modificar
            el menú y los precios en cualquier momento.
          </p>
          <h2 className="text-2xl font-black text-foreground mt-8 mb-4 italic uppercase tracking-tighter">
            3. Modificaciones
          </h2>
          <p className="mb-4">
            Chicken Frito se reserva el derecho de actualizar estos términos en cualquier momento para reflejar cambios
            en nuestros servicios.
          </p>
        </div>
      </div>
    </div>
  );
}