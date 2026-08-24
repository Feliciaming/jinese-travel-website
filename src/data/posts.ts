export type Post = {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: string;
  image: string;
  // True only for posts with a real /blog/[slug] detail page — others
  // stay as placeholder cards until their full content is written.
  hasDetailPage?: boolean;
};

// Mock data for the homepage's "Latest Posts" grid.
// Replace with real CMS / markdown data once content pipeline is ready.
export const POSTS: Post[] = [
  {
    slug: "maria-island-tasmania-hiking",
    title: "好梦幻🥹在这里徒步好像进入漫画世界‼️",
    excerpt:
      "如果你问我什么地方让我感觉像是进入了童话故事世界，我第一个会想到的是位于澳洲的玛丽亚岛 - Maria Island！",
    category: "徒步 · 户外",
    date: "2026-08-10",
    readTime: "6 分钟阅读",
    image: "/photos/blog/maria-island-cover.jpg",
    hasDetailPage: true,
  },
  {
    slug: "new-zealand-working-holiday-guide",
    title: "新西兰打工度假全攻略：签证、找工与预算规划",
    excerpt:
      "从签证申请到落地第一周该做的事，把我踩过的坑整理成这篇完整指南，让你少走弯路。",
    category: "打工度假",
    date: "2026-07-18",
    readTime: "8 分钟阅读",
    image:
      "https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=900&q=80",
  },
  {
    slug: "taiwan-solo-hiking-trail",
    title: "一个人的台湾徒步旅行：合欢山主峰路线全记录",
    excerpt:
      "海拔三千多米的云端漫步，分享路线规划、装备清单与独自登山的安全提醒。",
    category: "徒步 · 户外",
    date: "2026-06-30",
    readTime: "6 分钟阅读",
    image:
      "https://images.unsplash.com/photo-1483729558449-99ef09a8c325?auto=format&fit=crop&w=900&q=80",
  },
  {
    slug: "japan-solo-travel-first-time",
    title: "第一次一个人旅行就选日本？新手独旅完整心得",
    excerpt:
      "从订机票住宿到独自用餐的心理建设，写给正在犹豫要不要出发的你。",
    category: "女生独旅",
    date: "2026-06-12",
    readTime: "7 分钟阅读",
    image:
      "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=900&q=80",
  },
  {
    slug: "australia-farm-work-experience",
    title: "澳洲农场打工实录：二签怎么集满 88 天",
    excerpt:
      "农场工作的真实日常、薪资水平与体力负荷，帮你评估适不适合自己。",
    category: "打工度假",
    date: "2026-05-25",
    readTime: "9 分钟阅读",
    image:
      "https://images.unsplash.com/photo-1500534623283-312aade485b2?auto=format&fit=crop&w=900&q=80",
  },
  {
    slug: "sabah-mount-kinabalu-guide",
    title: "沙巴神山攻略：非专业登山者也能完成的两天一夜",
    excerpt:
      "从报名流程、体能准备到山顶看日出的感动瞬间，一篇讲清楚神山攻顶细节。",
    category: "徒步 · 户外",
    date: "2026-05-02",
    readTime: "10 分钟阅读",
    image:
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=900&q=80",
  },
  {
    slug: "korea-budget-travel-itinerary",
    title: "韩国穷游七天六夜行程表，交通住宿全部公开",
    excerpt:
      "人均预算控制在可负担范围内，附上实际花费明细与省钱住宿推荐。",
    category: "目的地攻略",
    date: "2026-04-15",
    readTime: "5 分钟阅读",
    image:
      "https://images.unsplash.com/photo-1517154421773-0529f29ea451?auto=format&fit=crop&w=900&q=80",
  },
];
