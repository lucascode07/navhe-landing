export interface InternalPage {
  slug: string;
  sidebarNavigationData: InternalNavigationItem[];
  subpages: InternalSubPage[];
}

export interface InternalNavigationItem {
  copy: string;
  icon: string;
  slug: string;
}

export interface InternalSubPage {
  slug: string;
  sections: Array<InternalSectionContent[]>;
}

export interface InternalSectionContent {
  title: string;
  text: string[];
  gridData: InternalGridData[];
  statsInfo: InternalStatsInfo[];
}

export interface InternalGridData {
  image: string;
  name: string;
  info: string[];
}

export interface InternalStatsInfo {
  image: string;
  title: string;
  number: number;
}
