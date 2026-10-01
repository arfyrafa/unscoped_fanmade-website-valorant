
export const navLinks = [
  { href: "/", label: "Home", i18nKey: "nav.home" },
  { href: "/agents/", label: "Agent", i18nKey: "nav.agent" },
  { href: "/gameplay/", label: "Gameplay", i18nKey: "nav.gameplay" },
  { href: "/news/", label: "News", i18nKey: "nav.news" },
  { href: "/play/", label: "Play Now", i18nKey: "nav.play" },
  { href: "/about/", label: "About", i18nKey: "nav.about" },
];

export function isActive(href: string, path: string) {
  if (href === "/") return path === "/";
  return path.startsWith(href.replace(/\/$/, ""));
}
