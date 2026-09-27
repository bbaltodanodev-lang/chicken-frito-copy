import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Políticas de Privacidad - Chicken Frito",
  description:
    "Disfruta del mejor pollo frito de Costa Rica. Receta original secreta, pollo 100% fresco y un crujido insuperable. Pedí online o visitá nuestras sucursales.",
};

export default function PrivacidadPage() {
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
          Pol<span className="fake-accent">i</span>ticas de Privacidad
        </h1>
        <div className="prose prose-lg dark:prose-invert text-foreground/80 font-medium">
          <p className="mb-4">
            En Chicken Frito nos tomamos muy en serio tu privacidad y la seguridad de tus datos personales.
          </p>
          <h2 className="text-2xl font-black text-foreground mt-8 mb-4 italic uppercase tracking-tighter">
            Recopilaci<span className="fake-accent">O</span>n de Datos del Formulario
          </h2>
          <p className="mb-4">
            Al utilizar nuestro formulario para realizar pedidos, solicitamos información como tu{" "}
            <strong>Nombre Completo, número de WhatsApp y Dirección de Entrega</strong>. Estos datos son utilizados
            exclusivamente con el fin de:
          </p>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li>Procesar y preparar tu pedido correctamente.</li>
            <li>Enviarte tu pedido a la dirección indicada.</li>
            <li>
              Comunicarnos contigo a través de WhatsApp para confirmar detalles, enviar el ticket o informar sobre el
              estado de la entrega.
            </li>
          </ul>
          <h2 className="text-2xl font-black text-foreground mt-8 mb-4 italic uppercase tracking-tighter">
            Protecci<span className="fake-accent">O</span>n de la Informaci
            <span className="fake-accent">O</span>n
          </h2>
          <p className="mb-4">
            Los datos que proporcionas se transmiten directamente a través de WhatsApp y no los almacenamos en bases de
            datos públicas ni los compartimos con terceros para fines publicitarios. Tu información es estrictamente
            confidencial.
          </p>
          <h2 className="text-2xl font-black text-foreground mt-8 mb-4 italic uppercase tracking-tighter">
            Consentimiento
          </h2>
          <p className="mb-4">
            Al enviar tus datos a través del formulario de pedido, aceptas y das tu consentimiento para que utilicemos
            dicha información bajo los fines mencionados en este documento.
          </p>
        </div>
      </div>
    </div>
  );
}