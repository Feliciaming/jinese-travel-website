import Image from "next/image";
import { NAV_LINKS, SITE_NAME, SOCIAL_LINKS, SOCIAL_ICONS } from "@/lib/constants";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-slate-950 to-sky-950 text-white">
      <div className="mx-auto max-w-8xl px-5 py-16 sm:px-8">
        <div className="flex flex-col gap-10 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <p className="font-display text-xl font-bold tracking-tight">{SITE_NAME}</p>
            <p className="mt-3 max-w-xs text-sm leading-relaxed text-white/60">
              户外旅行 · 独自出发 · 打工度假 —— 用双脚丈量世界，用镜头记录真实。
            </p>
          </div>

          <nav className="flex flex-wrap gap-x-8 gap-y-3">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-white/70 transition-colors hover:text-white"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-4">
            <a
              href={SOCIAL_LINKS.xiaohongshu}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="小红书 Xiaohongshu"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/10 backdrop-blur-md transition-colors hover:bg-white/20"
            >
              <Image src={SOCIAL_ICONS.xiaohongshu} alt="Xiaohongshu" width={20} height={20} className="rounded-md" />
            </a>
            <a
              href={SOCIAL_LINKS.instagram}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/10 backdrop-blur-md transition-colors hover:bg-white/20"
            >
              <Image src={SOCIAL_ICONS.instagram} alt="Instagram" width={20} height={20} className="rounded-md" />
            </a>
            <a
              href={SOCIAL_LINKS.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/10 backdrop-blur-md transition-colors hover:bg-white/20"
            >
              <Image src={SOCIAL_ICONS.whatsapp} alt="WhatsApp" width={20} height={20} className="rounded-md" />
            </a>
          </div>
        </div>

        <div className="mt-10 border-t border-white/10 pt-6 text-xs text-white/50">
          © {new Date().getFullYear()} {SITE_NAME}. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
