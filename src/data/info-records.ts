export interface InfoSegment {
  text: string;
  url?: string;
  italic?: boolean;
}

export interface InfoRecord {
  segments: InfoSegment[];
  details?: InfoSegment[][];
  status?: "published" | "in-progress" | "finished" | "ongoing" | "coming";
}

export interface InfoGroup {
  year: string;
  records: InfoRecord[];
}

export interface Education {
  degree: string;
  institution: string; 
  period?: string;
  advisor?: string;
  thesis?: string;
  award?: string;
  minor?: string;
}

export const scholarProfileUrl = "https://scholar.google.com/citations?user=pAE6JMkAAAAJ&hl=zh-CN"; 

export const publications: InfoGroup[] = [
  {
    year: "2026",
    records: [
      { status: "published",
        segments: [
          { text: "Informal Embodied Auditing: Exploring Facial Emotion AI (FEAI) through Community Workshops. ", url: "https://dl.acm.org/doi/abs/10.1145/3772318.3790863" },
          { text: " Xingyu Li, Alexandra Teixeira Riggs, Zhiming Dai, Crystal Byrd Farmer, Kalia G Morrison, Noura Howell. In Proceedings of the 2026 CHI Conference on Human Factors in Computing Systems (CHI '26)." },
        ],
      },
      { status: "published",
        segments: [
          { text: "HeartSway: Exploring Biodata as Poetic Traces in Public Space. " , url: "https://dl.acm.org/doi/full/10.1145/3800645.3813022" },
          { text: "Zeyu Huang*, Zhifan Guo*, Xingyu Li, Xiaojuan Ma**, and Noura Howell**. In Proceedings of the 2026 Designing Interactive Systems Conference (DIS '26)." },
        ],
      },
      { status: "published",
        segments: [
          { text: "Designing for Defamiliarization with Thermal Painting: Exploring Experiences of Dynamic Warmth in Painters' Creative Processes.", url: "https://dl.acm.org/doi/full/10.1145/3731459.3779344" },
          { text: "Supratim Pait, Sosuke Ichihashi, Xingyu Li, Haiqing Xu, and Noura Howell. In Proceedings of the Twentieth International Conference on Tangible, Embedded, and Embodied Interaction (TEI '26)." },
        ],
      },
    ],
  },

  {
    year: "2025",
    records: [
      { status: "published",
        segments: [
          { text: "From regulation to support: Centering humans in technology-mediated emotion intervention in care contexts. ", url: "https://dl.acm.org/doi/abs/10.1145/3757605" },
          { text: "Jiaying \"Lizzy\" Liu, Shuer Zhuo, Xingyu Li, Andrew Dillon, Noura Howell, Angela D. R. Smith, and Yan Zhang. Proc. ACM Hum.-Comput. Interact. 9, 7, Article CSCW424 (November 2025)." },
        ],
      },
      { status: "published",
        segments: [
          { text: "Lost in translation: Researchers’ reflections on writing in English for CHI. ", url: "https://dl.acm.org/doi/full/10.1145/3706599.3716231" },
          { text: "Sumita Sharma, Behnaz Norouzi, Edward Peter Greenwood White, Eva Durall Gazulla, Mohsin YK Yousufi, Netta Iivari, Noura Howell, Pauli Klemettilä, Suleman Shahid, Sayan Sarcar, Xingyu Li, Wricha Mishra. In Proceedings of the Extended Abstracts of the CHI Conference on Human Factors in Computing Systems (CHI EA '25)." },
        ],
      },
      { status: "in-progress",
        segments: [
          { text: "ORIBA: Exploring LLM-Driven Role-Play Chatbot as a Creativity Support Tool for Original Character Artists. ", url: "https://arxiv.org/abs/2512.12630" },
          { text: "Yuqian Sun*, Xingyu Li*, Shunyu Yao, Noura Howell, Tristan Braud, Chang Hee Lee, Ali Asadipour. " },
        ],
      },
    ],
  },
  {
    year: "2023",
    records: [
      { status: "published",
        segments: [
          { text: "Inspire creativity with ORIBA: Transform Artists' Original Characters into Chatbots through Large Language Model. ", url: "https://dl.acm.org/doi/abs/10.1145/3594739.3610695" },
          { text: "Yuqian Sun*, Xingyu Li*, Jun Peng, and Ze Gao. In Adjunct Proceedings of the 2023 ACM International Joint Conference on Pervasive and Ubiquitous Computing & the 2023 ACM International Symposium on Wearable Computing (UbiComp/ISWC '23 Adjunct)." },
        ],
      },
    ],
  },
  {
    year: "2022",
    records: [
      { status: "published",
        segments: [
          { text: "Party Mascot: Experimental Prop Design for Streaming Actual Plays. ", url: "https://dl.acm.org/doi/abs/10.1145/3505284.3532986" },
          { text: "Colin Stricklin, Xingyu Li, and Michael Nitsche. In Proceedings of the 2022 ACM International Conference on Interactive Media Experiences (IMX '22)." },
        ],
      },
    ],
  },
  {
    year: "2021",
    records: [
      { status: "published",
        segments: [
          { text: "Wearable sensors for canine nosework sniffing interaction. ", url: "https://dl.acm.org/doi/abs/10.1145/3493842.3493892" },
          { text: "Xingyu Li, Wendell Hom, Jiaying Wu, Michael Verges, and Melody Jackson. In Proceedings of the Eight International Conference on Animal-Computer Interaction (ACI '21)." },
        ],
      },
    ],
  },
];

export const teaching: InfoGroup[] = [
  {
    year: "2026",
    records: [
      {status: "ongoing",
        segments: [
          { text: "LMC 2720 Prin of Visual Design in GT", url: "https://oscar.gatech.edu/bprod/bwckctlg.p_disp_course_detail?cat_term_in=202108&subj_code_in=LMC&crse_numb_in=2720" },
          { text: " — Teaching the class " },
        ],
      },
      {status: "ongoing",
        segments: [
          { text: "LMC 6310 The Computer as an Expressive Medium in GT", url: "https://dm.lmc.gatech.edu/program/courses-2/" },
          { text: " — Teaching p5.js and Arduino in the lab sessions " },
        ],
      },
    ],
  },
  {
    year: "2024",
    records: [
      {status: "finished",
        segments: [
          { text: "LMC 2700 Intr-Computational Media in GT ", url: "https://oscar.gatech.edu/bprod/bwckctlg.p_disp_course_detail?cat_term_in=202202&subj_code_in=LMC&crse_numb_in=2700" },
          { text: " — Grading and answering students' questions " },
        ],
      },
    ],
  },
];

export const press: InfoGroup[] = [
  {
    year: "2026",
    records: [
      { status: "finished",
        segments: [
          { text: "DM Talk - Talk about Vulnerable Value and research through art", url: "" },
          { text: " — Georgia Tech" },
        ],
      },
      { status: "finished",
        segments: [
          { text: "Georgia Tech Researchers Aim to Increase Awareness of Emotion AI — By Letting People Try It", url: "https://iac.gatech.edu/featured-news/2025/07/researchers-increase-awareness-emotion-ai" },
          { text: " — Georgia Tech" },
        ],
      },
    ],
  },
];


export const education: InfoGroup[] = [
  {
    year: "[ 2023 – Present ]",
    records: [
      {
        segments: [{ text: "PhD in Digital Media" }],
        details: [
          [{ text: "Georgia Institute of Technology" }],
          [{ text: "Minor: ", italic: true }, { text: "Computer Science" }],
          [{ text: "Committee: ", italic: true },{ text: "Richmond Wong, Noura Howell, Heidi Biggs" }],
        ],
      },
    ],
  },
  {
    year: "[ 2020 – 2022 ]",
    records: [
      {
        segments: [{ text: "MID in Industrial Design" }],
        details: [
          [{ text: "Georgia Institute of Technology" }],
          [{ text: "Advisor: ", italic: true }, { text: "Noura Howell" }],
          [{ text: "Thesis: ", italic: true },{
            text: "Understanding the user experience of suggestions with Emotion Artificial Intelligence",
          }],
        ],
      },
    ],
  },
  {
    year: "[ 2016 – 2020 ]",
    records: [
      {
        segments: [{
          text: "BEng (Hons) in Mechanical, Materials and Manufacturing",
        }],
        details: [
          [{ text: "University of Nottingham Ningbo China (UNNC)" }],
          [{ text: "Track: ", italic: true },{ text: "Product Design" }],
          [{ text: "Advisor: ", italic: true },{ text: "Xu Sun" }],
          [{ text: "Thesis: ", italic: true },{
            text: "Design and manufacture an intelligent face mask integrated with a tangible alarming system to remind users to change filter",
          }],
          [{ text: "Award: ", italic: true },{ text: "Honorary Graduation Project, First class degree" }],
        ],
      },
    ],
  },
];