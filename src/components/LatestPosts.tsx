import Image from "next/image";
import { Calendar, Clock, ArrowRight } from "lucide-react";
import { POSTS } from "@/data/posts";

// Bento-style asymmetric spans for an editorial, photo-first showcase —
// post[0] runs as a large featured card, the rest fill in around it.
const SPANS = [
  "sm:col-span-2 lg:col-span-4 lg:row-span-2",
  "lg:col-span-2 lg:row-span-1",
  "lg:col-span-2 lg:row-span-1",
  "lg:col-span-2 lg:row-span-1",
  "lg:col-span-2 lg:row-span-1",
  "lg:col-span-2 lg:row-span-1",
];

export default function LatestPosts() {
  return (
    <section id="blog" className="mx-auto max-w-8xl px-5 py-24 sm:px-8 sm:py-32">
      <div className="flex flex-wrap items-end justify-between gap-6">
        <div>
          <p className="eyebrow">Latest Stories</p>
          <h2 className="section-title mt-3">最新游记</h2>
        </div>
        <a
          href="#"
          className="group inline-flex items-center gap-1.5 text-sm font-medium text-ocean-700 hover:text-slate-900"
        >
          查看全部文章
          <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
        </a>
      </div>

      <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-6 lg:auto-rows-[260px]">
        {POSTS.map((post, index) => {
          const isFeatured = index === 0;
          const href = post.hasDetailPage ? `/blog/${post.slug}` : "#";
          return (
            <article
              key={post.slug}
              className={`group relative h-72 overflow-hidden rounded-3xl shadow-md transition-all duration-500 hover:-translate-y-1 hover:shadow-xl sm:h-80 lg:h-auto ${
                SPANS[index] ?? "lg:col-span-2 lg:row-span-1"
              }`}
            >
              <a href={href} className="absolute inset-0 block">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/25 to-transparent" />

                <span className="glass-badge absolute left-5 top-5 px-3 py-1 text-xs font-semibold text-white">
                  {post.category}
                </span>

                <div className={`absolute inset-x-0 bottom-0 p-5 sm:p-6 ${isFeatured ? "sm:p-8" : ""}`}>
                  <h3
                    className={`font-display font-semibold leading-tight tracking-tight text-white ${
                      isFeatured ? "text-2xl sm:text-3xl" : "text-lg"
                    }`}
                  >
                    {post.title}
                  </h3>
                  {isFeatured && (
                    <p className="mt-3 max-w-lg text-sm leading-relaxed text-white/75 line-clamp-2">
                      {post.excerpt}
                    </p>
                  )}
                  <div className="mt-4 flex items-center gap-4 text-xs text-white/70">
                    <span className="inline-flex items-center gap-1.5">
                      <Calendar className="h-3.5 w-3.5" />
                      {post.date}
                    </span>
                    <span className="inline-flex items-center gap-1.5">
                      <Clock className="h-3.5 w-3.5" />
                      {post.readTime}
                    </span>
                  </div>
                </div>
              </a>
            </article>
          );
        })}
      </div>
    </section>
  );
}
