export type GalleryBlock = {
  images: string[];
  title: string;
  caption: string;
};

export type BlogPost = {
  slug: string;
  title: string;
  category: string;
  location: string;
  date: string;
  readTime: string;
  coverImage: string;
  intro: string;
  transport: string[];
  warning: string;
  gallery: GalleryBlock[];
};

// Full content extracted from NOTES/【澳洲】好梦幻🥹在这里徒步好像进入漫画世界.docx
// and its accompanying photo set — Jinese's Xiaohongshu post on Maria Island, Tasmania.
export const BLOG_POST: BlogPost = {
  slug: "maria-island-tasmania-hiking",
  title: "好梦幻🥹在这里徒步好像进入漫画世界‼️",
  category: "徒步 · 户外",
  location: "Maria Island, Tasmania 澳洲玛丽亚岛",
  date: "2026-08-10",
  readTime: "6 分钟阅读",
  coverImage: "/photos/blog/maria-island-cover.jpg",
  intro:
    "如果你问我什么地方让我感觉像是进入了童话故事世界，我第一个会想到的是位于澳洲的玛丽亚岛 - Maria Island！",
  transport: [
    "🚌 Hobart → Triabunna：当日来回巴士 $65",
    "⛴️ Triabunna → Maria Island：当日来回邮轮 $56.50",
  ],
  warning: "这里没有任何商店，记得自备足够的食物和水哦！",
  gallery: [
    {
      images: ["/photos/blog/maria-island-02.jpg"],
      title: "Commissariat Store",
      caption:
        "这是 Maria Island 的标志性建筑，建于 1825 年，曾是囚犯殖民地的军需仓库，负责储存粮食、工具和各种生活物资。如今已变成了游客中心。",
    },
    {
      images: ["/photos/blog/maria-island-03.jpg"],
      title: "Darlington Bay",
      caption: "这里真的是美得像一幅画，有时这里还有袋熊出现哦！",
    },
    {
      images: ["/photos/blog/maria-island-04.jpg", "/photos/blog/maria-island-05.jpg"],
      title: "Ruby Hunts Cottage",
      caption: "这里附近的两棵树，就感觉好特别哈哈哈。",
    },
    {
      images: ["/photos/blog/maria-island-06.jpg"],
      title: "Twelve Apostles",
      caption: "在其中一个历史古迹拍下的照片🥹。",
    },
    {
      images: ["/photos/blog/maria-island-07.jpg", "/photos/blog/maria-island-08.jpg"],
      title: "Painted Cliffs",
      caption:
        "一定要在退潮时间过来，才看到这完整的悬崖。这是由富有矿物质的水经过几百万年渗透岩石而形成的，近看好像一层一层的纸皮，好神奇。",
    },
    {
      images: ["/photos/blog/maria-island-09.jpg"],
      title: "Oast House",
      caption: "澳洲现存最古老的啤酒花烘干房之一，之后被改造成葡萄压榨厂和屠宰场，已有 180 多年的历史！",
    },
    {
      images: ["/photos/blog/maria-island-10.jpg"],
      title: "Fossil Cliffs",
      caption: "谁能想到，眼前这座悬崖竟然曾经是一片海洋，保存着大约 3 亿年前的海洋生物化石！",
    },
    {
      images: [
        "/photos/blog/maria-island-11.jpg",
        "/photos/blog/maria-island-12.jpg",
        "/photos/blog/maria-island-13.jpg",
      ],
      title: "Fossil Cliffs 沿途",
      caption: "过后的美景，真的太好看啦😭。",
    },
  ],
};
