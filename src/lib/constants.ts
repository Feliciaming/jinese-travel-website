// Central place for contact details and social links — update once, used everywhere.

export const SITE_NAME = "Jinese Wong";

export const CONTACT = {
  whatsappNumber: "+60 16-9192348",
  // wa.me requires digits only, no symbols or leading zero after country code.
  whatsappLink: "https://wa.me/60169192348",
};

export const SOCIAL_LINKS = {
  xiaohongshu: "https://xhslink.cn/m/170sX0O6Enr",
  instagram: "https://www.instagram.com/jinesewong",
  whatsapp: CONTACT.whatsappLink,
};

// Official app-icon logos, cropped from Jinese's own brand assets — used
// instead of hand-drawn icons wherever a social link is rendered.
export const SOCIAL_ICONS = {
  xiaohongshu: "/icons/xiaohongshu.png",
  instagram: "/icons/instagram.png",
  whatsapp: "/icons/whatsapp.png",
};

export const NAV_LINKS = [
  { label: "首页", href: "#home" },
  { label: "关于我", href: "#about" },
  { label: "旅行分类", href: "#destinations" },
  { label: "最新游记", href: "#blog" },
  { label: "合作洽谈", href: "#contact" },
];
