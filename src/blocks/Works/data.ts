import type { Project } from "./types.js";

export type WorksData = {
  author: string;
  projects: Project[];
};
export const worksData: WorksData = {
  author: "https://codepen.io/jagcruz",
  projects: [
    {
      title: "Cartas unicornio",
      images: [
        "/cards/card-backend.png",
        "/cards/card-hartyto.png",
        "/cards/card-gnomo.png",
      ],
      type: "cards",
    },
    {
      title: "CodePen Waves",
      type: "preview",
      url: "https://codepen.io/jagcruz/pen/emObbJd",
    },
    {
      title: "CodePen Trading Card",
      type: "preview",
      url: "https://codepen.io/jagcruz/pen/xxNdRWr",
    },
    {
      title: "Codepen Holographic Trading Card",
      type: "preview",
      url: "https://codepen.io/jagcruz/pen/JjqzGPG",
    },
  ],
};
