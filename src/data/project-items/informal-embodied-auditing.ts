import type { Project } from "../projects";
import coverImage from "../../assets/images/informal-embodied-auditing/cover2.png";

export const informalEmbodiedAuditing: Project = {
  workInProgress: true,
  selected: true,
  slug: "informal-embodied-auditing",
  title: "Informal Embodied Auditing",
  year: "2024-2026",
  collaborators: "Xingyu Li, Alexandra Teixeira Riggs, Zhiming Dai, Crystal Byrd Farmer, Kalia G Morrison, Noura Howell",
  tags: ["Community Participation ; Critical Computing ; Critical AI Literacy "],
  cover: coverImage,
  defaultView: "research",
  views: {
    research: {
      description: "项目介绍待补充。",
        outcomeNotes: [
          { label: "CHI' 26", url: "https://dl.acm.org/doi/full/10.1145/3772318.3790863" },
          // { label: "DIS' 26", url: "https://dl.acm.org/doi/full/10.1145/3800645.3813022" },
        ],      
    },
  },
};
