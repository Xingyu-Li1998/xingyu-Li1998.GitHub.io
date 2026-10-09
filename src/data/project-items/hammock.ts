import type { Project } from "../projects";
import coverImage from "../../assets/images/Hammock/Cover.png";

export const hammock: Project = {
    workInProgress: true,
    selected: false,
    cover: coverImage,
    slug: "example-both",
    title: "HeartSway",
    year: "2025-2026",
    collaborators: "Zeyu Huang*, Zhifan Guo*, Xingyu Li, Xiaojuan Ma**, Noura Howell**",
    tags: ["Public Amenity", "Biodata Urban Trace"],
    defaultView: "research",
    views: {
      research: {
        outcomeNotes: [
          { label: "DIS' 26", url: "https://dl.acm.org/doi/full/10.1145/3800645.3813022" },
        ],  
        people: "在这里填写参与者",
        activities: "在这里填写研究活动",
        description: "在这里填写研究视角的介绍。",
      },
    },
};
