export interface NavLink {
  name: string;
  href: string;
}

export const navigationLinks: NavLink[] = [
  { name: "طرح های سرمایه گذاری", href: "/" },
  { name: "مجله", href: "/blogs" },
  { name: "درباره ما", href: "/about" },
  { name: "درخواست سرمایه", href: "/request" },
];
