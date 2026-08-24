import type { LucideIcon } from "lucide-react";
import { Briefcase, Mountain, Compass, Waves } from "lucide-react";

export type Category = {
  slug: string;
  title: string;
  englishTitle: string;
  description: string;
  image: string;
  icon: LucideIcon;
};

export const CATEGORIES: Category[] = [
  {
    slug: "australia-working-holiday",
    title: "澳洲打工度假",
    englishTitle: "Australia Working Holiday",
    description: "签证申请、农场找工与徒步日记，记录边打工边探索的澳洲日常。",
    image: "/photos/australia-cover.jpg",
    icon: Briefcase,
  },
  {
    slug: "new-zealand-working-holiday",
    title: "纽西兰打工度假",
    englishTitle: "New Zealand Working Holiday",
    description: "从雪山徒步到城市打工，分享在纽西兰生活与旅行的第一手心得。",
    image: "/photos/category-new-zealand.jpg",
    icon: Mountain,
  },
  {
    slug: "indonesia",
    title: "印尼",
    englishTitle: "Indonesia",
    description: "火山日出、离岛潜水与在地文化，探索印尼群岛的多元面貌。",
    image: "/photos/category-indonesia.jpg",
    icon: Compass,
  },
  {
    slug: "malaysia",
    title: "马来西亚",
    englishTitle: "Malaysia",
    description: "从热带雨林到离岛跳岛，重新认识我的家乡马来西亚。",
    image: "/photos/category-malaysia.jpg",
    icon: Waves,
  },
];
