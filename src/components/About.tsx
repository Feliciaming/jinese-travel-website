import Image from "next/image";
import { Backpack, Globe2, Tent } from "lucide-react";

const STATS = [
  { icon: Globe2, value: "15+", label: "国家足迹" },
  { icon: Tent, value: "50+", label: "徒步路线" },
  { icon: Backpack, value: "3", label: "打工度假国家" },
];

export default function About() {
  return (
    <section id="about" className="mx-auto max-w-8xl px-5 py-24 sm:px-8 sm:py-32">
      <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
        {/* Photo */}
        <div className="group relative order-1 aspect-[4/5] w-full overflow-hidden rounded-3xl shadow-xl shadow-slate-900/10 lg:order-none">
          <Image
            src="/photos/about-jinese.jpg"
            alt="Jinese Wong 在澳洲玛丽亚岛独自旅行的日常"
            fill
            sizes="(min-width: 1024px) 40vw, 90vw"
            className="object-cover transition-transform duration-700 group-hover:scale-105"
          />
        </div>

        {/* Text */}
        <div>
          <p className="eyebrow">About Jinese</p>
          <h2 className="section-title mt-3">关于我</h2>

          <p className="mt-6 text-base leading-relaxed text-slate-600 sm:text-lg">
            嗨，我是 Jinese Wong。几年前，我带着一个背包踏上了打工度假的旅程，
            从此爱上了独自上路的自由与不确定感。从新西兰的牧场到台湾的高山，
            从东南亚的老城巷弄到寒冬里的极光小镇，我用双脚走过山野，也用镜头记录下
            那些真实、笨拙又珍贵的瞬间。
          </p>
          <p className="mt-4 text-base leading-relaxed text-slate-600 sm:text-lg">
            这里记录着我的徒步路线、独旅心得与打工度假攻略 —— 希望能陪伴正在犹豫
            要不要出发的你，勇敢迈出第一步。
          </p>

          {/* Stat badges */}
          <div className="mt-10 grid grid-cols-3 gap-4 sm:gap-6">
            {STATS.map(({ icon: Icon, value, label }) => (
              <div
                key={label}
                className="rounded-3xl border border-slate-900/5 bg-white/70 p-4 text-center shadow-sm backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md sm:p-6"
              >
                <Icon className="mx-auto h-5 w-5 text-ocean-600 sm:h-6 sm:w-6" />
                <p className="mt-2 font-display text-xl font-semibold tracking-tight text-slate-900 sm:text-2xl">
                  {value}
                </p>
                <p className="mt-1 text-xs text-slate-500 sm:text-sm">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
