import type { Project } from './types.js';

export const worksData: { projects: Project[] } = {
  projects: [
    {
      title: "Proyecto Comunidad",
      category: "Trabajo Social",
      description: "Un proyecto dedicado a mejorar las condiciones de vida de la comunidad local, enfocándose en educación y desarrollo sostenible.",
      image: {
        src: "/favicon.svg",
        alt: "Proyecto Comunidad"
      }
    },
    {
      title: "Arte y Cultura",
      category: "Expresión Artística", 
      description: "Una iniciativa cultural que promovía el arte local y la preservación de tradiciones culturales a través de talleres y exposiciones.",
      image: {
        src: "/favicon.svg",
        alt: "Proyecto Arte y Cultura"
      }
    },
    {
      title: "Educación para Todos",
      category: "Educación",
      description: "Programa educativo inclusivo que buscaba brindar oportunidades de aprendizaje a comunidades desfavorecidas.",
      image: {
        src: "/favicon.svg",
        alt: "Proyecto Educación para Todos"
      }
    },
    {
      title: "Medio Ambiente",
      category: "Sostenibilidad",
      description: "Iniciativa ambiental enfocada en la conservación y protección del medio ambiente local a través de acciones concretas.",
      image: {
        src: "/favicon.svg",
        alt: "Proyecto Medio Ambiente"
      }
    }
  ]
};
