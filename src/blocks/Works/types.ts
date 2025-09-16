export interface Project {
  title: string;
  images?: string[];
  url?: string;
  type: "cards" | "preview";
  zoom?: number;
}
