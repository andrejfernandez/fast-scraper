export interface ScrapeResponse {
  title: string;
  relative_links: string[];
  html: string;
  screenshot: string;
}

export interface UrlSearchParam {
  url?: string;
}
