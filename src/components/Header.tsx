"use client";

import { useState } from "react";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { NAV_LINKS, SITE_NAME, SOCIAL_LINKS, SOCIAL_ICONS } from "@/lib/constants";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-slate-900/5 bg-stone-50/70 backdrop-blur-xl">
      <div className="mx-auto flex max-w-8xl items-center justify-between px-5 py-4 sm:px-8">
        <a href="#home" className="font-display text-2xl font-bold tracking-tight text-slate-900">
          {SITE_NAME}
        </a>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-8 lg:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="group relative text-sm font-medium text-slate-600 transition-colors hover:text-slate-900"
            >
              {link.label}
              <span className="absolute -bottom-1 left-0 h-px w-0 bg-ocean-600 transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </nav>

        {/* Desktop social icons */}
        <div className="hidden items-center gap-4 lg:flex">
          <a
            href={SOCIAL_LINKS.xiaohongshu}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="小红书 Xiaohongshu"
            className="opacity-80 transition-opacity hover:opacity-100"
          >
            <Image src={SOCIAL_ICONS.xiaohongshu} alt="Xiaohongshu" width={22} height={22} className="rounded-md" />
          </a>
          <a
            href={SOCIAL_LINKS.instagram}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="opacity-80 transition-opacity hover:opacity-100"
          >
            <Image src={SOCIAL_ICONS.instagram} alt="Instagram" width={22} height={22} className="rounded-md" />
          </a>
          <a
            href={SOCIAL_LINKS.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp"
            className="opacity-80 transition-opacity hover:opacity-100"
          >
            <Image src={SOCIAL_ICONS.whatsapp} alt="WhatsApp" width={22} height={22} className="rounded-md" />
          </a>
        </div>

        {/* Mobile menu toggle */}
        <button
          type="button"
          onClick={() => setIsMenuOpen((open) => !open)}
          className="inline-flex items-center justify-center rounded-full p-2 text-slate-900 lg:hidden"
          aria-label={isMenuOpen ? "关闭菜单" : "打开菜单"}
          aria-expanded={isMenuOpen}
        >
          {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile nav panel */}
      {isMenuOpen && (
        <div className="border-t border-slate-900/5 bg-stone-50/95 px-5 pb-6 pt-2 backdrop-blur-xl lg:hidden">
          <nav className="flex flex-col gap-1">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setIsMenuOpen(false)}
                className="rounded-lg px-2 py-3 text-base font-medium text-slate-700 transition-colors hover:bg-ocean-50 hover:text-slate-900"
              >
                {link.label}
              </a>
            ))}
          </nav>
          <div className="mt-4 flex items-center gap-5 px-2">
            <a href={SOCIAL_LINKS.xiaohongshu} target="_blank" rel="noopener noreferrer" aria-label="小红书 Xiaohongshu">
              <Image src={SOCIAL_ICONS.xiaohongshu} alt="Xiaohongshu" width={26} height={26} className="rounded-md" />
            </a>
            <a href={SOCIAL_LINKS.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <Image src={SOCIAL_ICONS.instagram} alt="Instagram" width={26} height={26} className="rounded-md" />
            </a>
            <a href={SOCIAL_LINKS.whatsapp} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
              <Image src={SOCIAL_ICONS.whatsapp} alt="WhatsApp" width={26} height={26} className="rounded-md" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
