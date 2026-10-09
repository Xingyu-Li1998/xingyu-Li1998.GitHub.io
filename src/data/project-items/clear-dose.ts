import type { Project } from "../projects";
import coverImage from "../../assets/images/cleardose/cover.png";

export const clearDose: Project = {
    workInProgress: true,
    selected: false,
    cover: coverImage,
    slug: "clear-dose",
    title: "ClearDose",
    year: "2026-2027",
    collaborators: "Yuanning Han, shuang cai, Xingyu Li, Sang-won Leigh",
    tags: ["Speculative Design, Interactive Installation"],
    defaultView: "research",
    views: {
      research: {
        people: "在这里填写参与者",
        activities: "在这里填写研究活动",
        description: "在这里填写研究视角的介绍。",
        outcomeNotes: [
          { label: "C&C' 26" , url: "https://dl.acm.org/doi/abs/10.1145/3803784.3809276" },
          // { label: "第二个名称", url: "https://第二个真实网址" },
        ],
      },
      "art-show": {
        date: "在这里填写展出日期",
        location: "在这里填写展出地点",
        description: "在这里填写艺术展览视角的介绍。",
                outcomeNotes: [
          { label: "CSCW' 26 DEMO" },
          { label: "TEI' 26" , url: "https://dl.acm.org/doi/10.1145/3731459.3779135" },
          // { label: "第二个名称", url: "https://第二个真实网址" },
        ],
      },
    },
};
