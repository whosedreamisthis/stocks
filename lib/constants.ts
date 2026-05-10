export interface NavItem {
  href: string;
  label: string;
}

export const NAV_ITEMS: NavItem[] = [
  { label: "Dashboard", href: "/" },
  { label: "Search", href: "/search" },
  { label: "Watchlist", href: "/watchlist" },
];
