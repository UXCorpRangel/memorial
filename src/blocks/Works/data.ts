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
      title: "Trading Card",
      type: "preview",
      url: "https://codepen.io/jagcruz/pen/xxNdRWr",
      zoom: 0.5,
    },
    {
      title: "Card Web",
      type: "preview",
      url: "https://codepen.io/jagcruz/pen/bGPXevR",
      zoom: 1,
    },
    {
      title: "Holographic  Card",
      type: "preview",
      url: "https://codepen.io/jagcruz/pen/JjqzGPG",
      zoom: 1,
    },

    {
      title: "3D Sphere Intersection",
      type: "preview",
      url: "https://codepen.io/jagcruz/pen/oggJYzP",
      zoom: 1,
    },
  ],
};
