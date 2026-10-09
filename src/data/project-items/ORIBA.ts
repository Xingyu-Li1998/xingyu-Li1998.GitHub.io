import type { Project } from "../projects";
import coverImage from "../../assets/images/oriba/oriba-cover.png";

export const oriba: Project = {
    workInProgress: true,
    selected: false,
    cover: coverImage,
    slug: "ORIBA",
    title: "ORIBA",
    year: "2023-2024",
    collaborators: "Xingyu Li*, Yuqian Sun*,Jun Peng, Ze Gao",
    tags: ["Creative support tool", "AI Literacy"],
    defaultView: "research",
    views: {
      research: {
        outcomeNotes: [
          { label: "Ubicomp' 23", url: "https://dl.acm.org/doi/abs/10.1145/3594739.3610695" },
          // { label: "第二个名称", url: "https://第二个真实网址" },
        ],
        people: "在这里填写参与者",
        activities: "在这里填写研究活动",
        description: "在这里填写研究视角的介绍。",
      },
    },
};
