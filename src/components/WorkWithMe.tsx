"use client";

import { useState } from "react";
import Image from "next/image";
import { Send, CheckCircle2 } from "lucide-react";
import { CONTACT, SOCIAL_LINKS, SOCIAL_ICONS } from "@/lib/constants";

const COLLAB_TYPES = ["社群推广", "旅游赞助", "品牌合作", "活动邀约", "其他"];

export default function WorkWithMe() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    // Front-end only for now — wire up to an email/CRM endpoint later.
    setIsSubmitted(true);
  }

  return (
    <section id="contact" className="bg-ocean-50 py-24 sm:py-32">
      <div className="mx-auto max-w-8xl px-5 sm:px-8">
        <p className="eyebrow">Work With Me</p>
        <h2 className="section-title mt-3">合作洽谈</h2>
        <p className="mt-4 max-w-xl text-base text-slate-600 sm:text-lg">
          欢迎品牌、旅游局与相关单位洽谈合作。填写以下表单，或直接透过 WhatsApp 联系我。
        </p>

        <div className="mt-14 grid grid-cols-1 gap-8 lg:grid-cols-5 lg:gap-10">
          {/* Contact form */}
          <form
            onSubmit={handleSubmit}
            className="rounded-3xl border border-slate-900/5 bg-white p-6 shadow-md transition-shadow duration-500 hover:shadow-xl sm:p-8 lg:col-span-3"
          >
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-slate-900">
                  姓名
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  className="mt-2 w-full rounded-xl border border-slate-900/10 bg-stone-50 px-4 py-2.5 text-sm text-slate-900 outline-none transition-all focus:border-ocean-500 focus:ring-2 focus:ring-ocean-500/20"
                  placeholder="您的姓名"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-slate-900">
                  电子邮箱
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  className="mt-2 w-full rounded-xl border border-slate-900/10 bg-stone-50 px-4 py-2.5 text-sm text-slate-900 outline-none transition-all focus:border-ocean-500 focus:ring-2 focus:ring-ocean-500/20"
                  placeholder="you@example.com"
                />
              </div>
              <div>
                <label htmlFor="brand" className="block text-sm font-medium text-slate-900">
                  品牌 / 公司名称
                </label>
                <input
                  id="brand"
                  name="brand"
                  type="text"
                  className="mt-2 w-full rounded-xl border border-slate-900/10 bg-stone-50 px-4 py-2.5 text-sm text-slate-900 outline-none transition-all focus:border-ocean-500 focus:ring-2 focus:ring-ocean-500/20"
                  placeholder="公司 / 品牌名称"
                />
              </div>
              <div>
                <label htmlFor="collabType" className="block text-sm font-medium text-slate-900">
                  合作类型
                </label>
                <select
                  id="collabType"
                  name="collabType"
                  className="mt-2 w-full rounded-xl border border-slate-900/10 bg-stone-50 px-4 py-2.5 text-sm text-slate-900 outline-none transition-all focus:border-ocean-500 focus:ring-2 focus:ring-ocean-500/20"
                  defaultValue=""
                >
                  <option value="" disabled>
                    请选择合作类型
                  </option>
                  {COLLAB_TYPES.map((type) => (
                    <option key={type} value={type}>
                      {type}
                    </option>
                  ))}
                </select>
              </div>
              <div className="sm:col-span-2">
                <label htmlFor="message" className="block text-sm font-medium text-slate-900">
                  合作内容
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  required
                  className="mt-2 w-full rounded-xl border border-slate-900/10 bg-stone-50 px-4 py-2.5 text-sm text-slate-900 outline-none transition-all focus:border-ocean-500 focus:ring-2 focus:ring-ocean-500/20"
                  placeholder="请简单描述合作需求与预算范围"
                />
              </div>
            </div>

            <button type="submit" className="btn-primary mt-6 w-full sm:w-auto">
              {isSubmitted ? (
                <>
                  已送出，谢谢！
                  <CheckCircle2 className="h-4 w-4" />
                </>
              ) : (
                <>
                  送出合作邀约
                  <Send className="h-4 w-4" />
                </>
              )}
            </button>
          </form>

          {/* WhatsApp CTA + social links */}
          <div className="flex flex-col gap-6 lg:col-span-2">
            <div className="rounded-3xl bg-gradient-to-br from-slate-900 to-sky-950 p-6 text-white shadow-xl sm:p-8">
              <Image src={SOCIAL_ICONS.whatsapp} alt="WhatsApp" width={32} height={32} className="rounded-lg" />
              <h3 className="mt-4 font-display text-xl font-semibold tracking-tight">最快的联络方式</h3>
              <p className="mt-2 text-sm leading-relaxed text-white/80">
                商务合作或紧急联络，欢迎直接透过 WhatsApp 与我联系。
              </p>
              <a
                href={SOCIAL_LINKS.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-medium text-slate-900 transition-all duration-300 hover:-translate-y-0.5 hover:bg-stone-50"
              >
                <Image src={SOCIAL_ICONS.whatsapp} alt="" width={16} height={16} className="rounded" />
                {CONTACT.whatsappNumber}
              </a>
            </div>

            <div className="rounded-3xl border border-slate-900/5 bg-white p-6 shadow-sm transition-shadow duration-500 hover:shadow-md sm:p-8">
              <h3 className="font-display text-lg font-semibold tracking-tight text-slate-900">社群媒体</h3>
              <div className="mt-4 flex flex-col gap-3">
                <a
                  href={SOCIAL_LINKS.xiaohongshu}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 rounded-xl border border-slate-900/5 px-4 py-3 text-sm font-medium text-slate-700 transition-colors hover:bg-ocean-50"
                >
                  <Image src={SOCIAL_ICONS.xiaohongshu} alt="" width={20} height={20} className="rounded-md" />
                  小红书 Xiaohongshu
                </a>
                <a
                  href={SOCIAL_LINKS.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 rounded-xl border border-slate-900/5 px-4 py-3 text-sm font-medium text-slate-700 transition-colors hover:bg-ocean-50"
                >
                  <Image src={SOCIAL_ICONS.instagram} alt="" width={20} height={20} className="rounded-md" />
                  Instagram
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
