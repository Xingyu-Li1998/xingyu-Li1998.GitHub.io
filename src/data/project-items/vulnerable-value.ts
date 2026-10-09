import type { Project } from "../projects";
import coverImage from "../../assets/images/vulnerable-value/Cover.png";
import type { ImageMetadata } from "astro";
import wide01 from "../../assets/images/vulnerable-value/all_balls.jpg";
import oilChange0 from "../../assets/images/vulnerable-value/oil-change-0.png";
import oilChange05 from "../../assets/images/vulnerable-value/oil-change-0.5.png";
import oilChange1 from "../../assets/images/vulnerable-value/oil-change-1.png";
import oilChange2 from "../../assets/images/vulnerable-value/oil-change-2.png";
import oilChange3 from "../../assets/images/vulnerable-value/oil-change-3.png";
import oilChange4 from "../../assets/images/vulnerable-value/oil-change-4.png";
import topView from "../../assets/images/vulnerable-value/mainImage.jpg";
import frontView from "../../assets/images/vulnerable-value/Machine_front.png";

export const vulnerableValue: Project = {
  slug: "vulnerable-value",
  title: "Vulnerable Value",
  selected: true,
  year: "2026-2027",
  collaborators: "Xingyu Li*, Marie Munk*, Adamya Sharma, Noura Howell",
  tags: ["Public Art, Interactive Installation"],
  cover: coverImage,
  defaultView: "art-show",
  views: {
    "art-show": {
      date: "June 7–13",
      // images: [mainImage],
      videoEmbedUrl: "https://drive.google.com/file/d/1Ac3g82Ko0w36fdswfjaYM34C1snCNrjm/preview",
      location: "LOOP",
      people: `Team: Marie Munk, Xingyu Li, Adamya Sharma, Noura Howell
    Film: Reuben Bloom
    Research: Alexandra Teixeira Riggs
    Special thanks to: Chuoqi Chen`,
      description:
        "The exhibition ran for one week. More than 400 people interacted with the machine, which released 500 small balls.",
      outcomeNotes: [
        { label: "LOOP", url: "https://loopatl.space/" },
      ],
    },
  },
};

type GalleryPhoto<Source = ImageMetadata> = {
  src: Source;
  alt: string;
  caption?: string;
};

type GallerySection =
  | {
      layout: "full";
      photo: GalleryPhoto;
    }
  | {
      layout: "pair";
      photos: [GalleryPhoto<ImageMetadata | string>, GalleryPhoto<ImageMetadata | string>];
    }
  | {
      layout: "six";
      photos: GalleryPhoto[];
    };

export const vulnerableValueGallery: GallerySection[] = [
  {
    layout: "pair",
    photos: [
      { src: topView, alt: "Vulnerable Value exhibition photo 1" },
      { src: frontView, alt: "Vulnerable Value exhibition photo 2" },
    ],
  },
  {
    layout: "full",
    photo: {
      src: wide01,
      alt: "Vulnerable Value exhibition image",
    },
  },

  {
  layout: "six",
  photos: [
    { src: oilChange0, alt: "Oil change sequence, image 0" },
    { src: oilChange05, alt: "Oil change sequence, image 0.5" },
    { src: oilChange1, alt: "Oil change sequence, image 1" },
    { src: oilChange2, alt: "Oil change sequence, image 2" },
    { src: oilChange3, alt: "Oil change sequence, image 3" },
    { src: oilChange4, alt: "Oil change sequence, image 4" },
  ],
},
];

