import Image from "next/image";
import { SOCIAL_LINKS, SOCIAL_ICONS } from "@/lib/constants";

// Always-visible floating CTA — outdoor/travel audiences expect a one-tap
// way to message directly, especially on mobile from Xiaohongshu/Instagram.
export default function WhatsAppFloat() {
  return (
    <a
      href={SOCIAL_LINKS.whatsapp}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="透过 WhatsApp 联系 Jinese"
      className="fixed bottom-6 left-6 z-40 flex h-12 w-12 items-center justify-center rounded-full bg-[#25D366] shadow-xl shadow-black/20 transition-transform duration-300 hover:scale-110"
    >
      <Image src={SOCIAL_ICONS.whatsapp} alt="WhatsApp" width={28} height={28} className="rounded-md" />
    </a>
  );
}
