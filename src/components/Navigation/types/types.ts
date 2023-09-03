export interface NavItem {
  title: string;
  href: string;
  sublist: SubNavItem[][] | null;
}

export interface SubNavItem {
  title: string;
  items: NavItem[];
}
