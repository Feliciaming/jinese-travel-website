import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { ArrowLeft, Bus, Ship, AlertTriangle, Calendar, Clock, MapPin } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import { BLOG_POST } from "@/data/blogPost";
import { SOCIAL_LINKS, SOCIAL_ICONS } from "@/lib/constants";

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  if (params.slug !== BLOG_POST.slug) return {};
  return {
    title: `${BLOG_POST.title} | Jinese Wong`,
    description: BLOG_POST.intro,
  };
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  if (params.slug !== BLOG_POST.slug) {
    notFound();
  }

  const post = BLOG_POST;

  return (
    <>
      <Header />
      <main>
        {/* Cover */}
        <section className="relative flex min-h-[75svh] items-end overflow-hidden">
          <Image
            src={post.coverImage}
            alt={post.title}
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/95 via-slate-950/40 to-slate-950/10" />

          <div className="relative z-10 mx-auto w-full max-w-3xl px-5 pb-14 pt-32 sm:px-8 sm:pb-20">
            <a
              href="/#blog"
              className="glass-badge gap-1.5 px-4 py-1.5 text-xs font-semibold text-white transition-colors hover:bg-white/20"
            >
              <ArrowLeft className="h-3.5 w-3.5" />
              返回游记列表
            </a>

            <p className="mt-6 text-xs font-semibold uppercase tracking-[0.25em] text-sky-300">
              {post.category}
            </p>
            <h1 className="mt-3 font-display text-3xl font-semibold leading-tight tracking-tight text-white sm:text-4xl md:text-5xl">
              {post.title}
            </h1>

            <div className="mt-6 flex flex-wrap items-center gap-3 text-xs text-white/80 sm:text-sm">
              <span className="glass-badge gap-1.5 px-3 py-1.5">
                <MapPin className="h-3.5 w-3.5" />
                {post.location}
              </span>
              <span className="glass-badge gap-1.5 px-3 py-1.5">
                <Calendar className="h-3.5 w-3.5" />
                {post.date}
              </span>
              <span className="glass-badge gap-1.5 px-3 py-1.5">
                <Clock className="h-3.5 w-3.5" />
                {post.readTime}
              </span>
            </div>
          </div>
        </section>

        {/* Article body */}
        <article className="mx-auto max-w-3xl px-5 py-16 sm:px-8 sm:py-20">
          <p className="text-lg leading-relaxed text-slate-700">{post.intro}</p>

          {/* Transport info card */}
          <div className="mt-8 rounded-3xl border border-slate-900/5 bg-white p-6 shadow-sm sm:p-8">
            <h2 className="font-display text-lg font-semibold tracking-tight text-slate-900">交通攻略</h2>
            <ul className="mt-4 space-y-3">
              {post.transport.map((line, i) => (
                <li key={i} className="flex items-start gap-3 text-sm leading-relaxed text-slate-600">
                  <span className="mt-0.5 flex h-7 w-7 flex-none items-center justify-center rounded-full bg-ocean-50 text-ocean-600">
                    {i === 0 ? <Bus className="h-4 w-4" /> : <Ship className="h-4 w-4" />}
                  </span>
                  {line}
                </li>
              ))}
            </ul>
          </div>

          {/* Warning callout */}
          <div className="mt-6 flex items-start gap-3 rounded-2xl border border-amber-200 bg-amber-50 p-5">
            <AlertTriangle className="mt-0.5 h-5 w-5 flex-none text-amber-600" />
            <p className="text-sm leading-relaxed text-amber-800">{post.warning}</p>
          </div>

          {/* Gallery */}
          <h2 className="mt-16 font-display text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl">
            📸 以下是我打卡的地方
          </h2>

          <div className="mt-8 space-y-14">
            {post.gallery.map((block) => (
              <div key={block.title}>
                <h3 className="font-display text-xl font-semibold tracking-tight text-slate-900">
                  {block.title}
                </h3>
                <p className="mt-2 text-base leading-relaxed text-slate-600">{block.caption}</p>

                <div
                  className={`mt-5 grid gap-3 ${
                    block.images.length === 1
                      ? "grid-cols-1"
                      : block.images.length === 2
                        ? "grid-cols-2"
                        : "grid-cols-2 sm:grid-cols-3"
                  }`}
                >
                  {block.images.map((src) => (
                    <div
                      key={src}
                      className={`relative overflow-hidden rounded-3xl shadow-md ${
                        block.images.length === 1 ? "aspect-[4/3]" : "aspect-[3/4]"
                      }`}
                    >
                      <Image
                        src={src}
                        alt={`${block.title} — ${post.title}`}
                        fill
                        sizes="(min-width: 640px) 33vw, 50vw"
                        className="object-cover"
                      />
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Follow CTA */}
          <div className="mt-16 rounded-3xl bg-gradient-to-br from-slate-900 to-sky-950 p-8 text-center text-white sm:p-10">
            <h3 className="font-display text-xl font-semibold tracking-tight sm:text-2xl">
              喜欢这篇游记吗？
            </h3>
            <p className="mt-2 text-sm text-white/75 sm:text-base">
              追踪我的社群媒体，获取更多真实的户外与旅行故事。
            </p>
            <div className="mt-6 flex items-center justify-center gap-4">
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
        </article>
      </main>
      <Footer />
      <BackToTop />
      <WhatsAppFloat />
    </>
  );
}
