import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { CATEGORIES } from "@/data/categories";

export default function Categories() {
  return (
    <section
      id="destinations"
      className="bg-gradient-to-b from-slate-900 via-slate-900 to-sky-950 py-24 sm:py-32"
    >
      <div className="mx-auto max-w-8xl px-5 sm:px-8">
        <p className="eyebrow text-sky-300">Explore By Category</p>
        <h2 className="section-title mt-3 text-white">旅行分类</h2>
        <p className="mt-4 max-w-xl text-base text-slate-300 sm:text-lg">
          按主题挑选你感兴趣的旅行内容，从徒步路线到打工度假，一站找到攻略。
        </p>

        <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {CATEGORIES.map(({ slug, title, englishTitle, description, image, icon: Icon }) => (
            <a
              key={slug}
              href={`#blog`}
              className="group relative flex aspect-[3/4] flex-col justify-end overflow-hidden rounded-3xl shadow-lg transition-all duration-500 hover:-translate-y-1 hover:shadow-2xl hover:shadow-black/40"
            >
              <Image
                src={image}
                alt={title}
                fill
                sizes="(min-width: 1024px) 22vw, (min-width: 640px) 45vw, 90vw"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/30 to-transparent" />

              <div className="relative z-10 flex items-start justify-between p-5">
                <span className="glass-badge h-10 w-10 justify-center text-white">
                  <Icon className="h-5 w-5" />
                </span>
                <ArrowUpRight className="h-5 w-5 text-white/0 transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-white/90" />
              </div>

              <div className="relative z-10 p-5 pt-0">
                <p className="text-xs uppercase tracking-widest text-sky-300/80">{englishTitle}</p>
                <h3 className="mt-1 font-display text-xl font-semibold tracking-tight text-white">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-white/75">{description}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
