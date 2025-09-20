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
      url: "https://github.com/UXCorpRangel/ana-cards-web",
    },

    {
      title: "Animación de ondas",
      type: "preview",
      url: "https://codepen.io/jagcruz/pen/emObbJd",
      zoom: 0.5,
    },
    {
      title: "Borde animado en carta",
      type: "preview",
      url: "https://codepen.io/jagcruz/pen/MWNKLoQ",
      zoom: 1,
    },
    {
      title: "Batería animada",
      type: "preview",
      url: "https://codepen.io/jagcruz/pen/RwOevEX",
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
