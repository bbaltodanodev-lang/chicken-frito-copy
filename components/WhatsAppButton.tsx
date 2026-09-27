import { WhatsAppIcon } from "@/components/Icons";

const WHATSAPP_URL =
  "https://wa.me/50684225656?text=Hola%20Chicken%20Frito!%20Me%20gustar%C3%ADa%20hacer%20un%20pedido.";

export default function WhatsAppButton() {
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-8 right-8 z-[100] flex h-16 w-16 items-center justify-center rounded-full bg-[#25D366] text-white shadow-2xl transition-all hover:scale-110 hover:shadow-[0_0_30px_rgba(37,211,102,0.5)] active:scale-95 group"
    >
      <div className="absolute inset-0 animate-ping rounded-full bg-[#25D366] opacity-20 group-hover:hidden" />
      <WhatsAppIcon className="h-9 w-9 fill-current" />
    </a>
  );
}