import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { SOCIAL_LINKS, SOCIAL_ICONS } from "@/lib/constants";

export default function Hero() {
  return (
    <section id="home" className="relative flex min-h-[100svh] items-end overflow-hidden">
      {/* Background photo */}
      <Image
        src="/photos/hero-img3751.jpg"
        alt="Jinese Wong 背对镜头，坐在澳洲山顶岩石上眺望心形湖泊与群山"
        fill
        priority
        sizes="100vw"
        className="object-cover object-center"
      />
      {/* Rich navy gradient overlay for legible text */}
      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/95 via-slate-950/45 to-slate-950/10" />

      <div className="relative z-10 mx-auto w-full max-w-8xl px-5 pb-20 pt-40 sm:px-8 sm:pb-28">
        <p className="glass-badge px-4 py-1.5 text-xs sm:text-sm font-semibold tracking-[0.25em] uppercase text-white">
          户外 · 独自旅行 · 打工度假
        </p>

        <h1 className="mt-6 max-w-3xl font-display text-5xl font-semibold leading-[1.05] tracking-tight text-white sm:text-6xl md:text-7xl">
          跟着 Jinese，
          <br className="hidden sm:block" />
          走进山野与远方
        </h1>

        <p className="mt-6 max-w-xl text-base leading-relaxed text-white/80 sm:text-lg">
          分享真实的独旅故事、徒步路线与打工度假攻略，用双脚丈量世界，陪你勇敢出发。
        </p>

        <div className="mt-9 flex flex-wrap items-center gap-4">
          <a href="#blog" className="btn-primary">
            阅读最新游记
            <ArrowRight className="h-4 w-4" />
          </a>
          <a href="#about" className="btn-secondary">
            关于 Jinese
          </a>
        </div>

        {/* Quick-action social icons */}
        <div className="mt-10 flex items-center gap-4">
          <a
            href={SOCIAL_LINKS.xiaohongshu}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="小红书 Xiaohongshu"
            className="flex h-12 w-12 items-center justify-center rounded-full border border-white/20 bg-white/10 backdrop-blur-md transition-all duration-300 hover:-translate-y-0.5 hover:bg-white/20"
          >
            <Image src={SOCIAL_ICONS.xiaohongshu} alt="Xiaohongshu" width={24} height={24} className="rounded-md" />
          </a>
          <a
            href={SOCIAL_LINKS.instagram}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="flex h-12 w-12 items-center justify-center rounded-full border border-white/20 bg-white/10 backdrop-blur-md transition-all duration-300 hover:-translate-y-0.5 hover:bg-white/20"
          >
            <Image src={SOCIAL_ICONS.instagram} alt="Instagram" width={24} height={24} className="rounded-md" />
          </a>
          <a
            href={SOCIAL_LINKS.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp"
            className="flex h-12 w-12 items-center justify-center rounded-full border border-white/20 bg-white/10 backdrop-blur-md transition-all duration-300 hover:-translate-y-0.5 hover:bg-white/20"
          >
            <Image src={SOCIAL_ICONS.whatsapp} alt="WhatsApp" width={24} height={24} className="rounded-md" />
          </a>
        </div>
      </div>
    </section>
  );
}
