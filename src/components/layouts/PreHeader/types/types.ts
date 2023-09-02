export interface ListItem {
  title: string;
  href: string;
  subList: null | ListItem[];
}
