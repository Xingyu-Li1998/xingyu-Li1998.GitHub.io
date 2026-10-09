import type { ImageMetadata } from "astro";
import { informalEmbodiedAuditing } from "./project-items/informal-embodied-auditing";
import { vulnerableValue } from "./project-items/vulnerable-value";
import { hammock } from "./project-items/hammock";
import { clearDose } from "./project-items/clear-dose";
import { oriba } from "./project-items/ORIBA";

export type ProjectView = "research" | "art-show";

export interface ProjectContent {
  description: string;
  outcomeNotes?: { label: string; url?: string }[];
  images?: ImageMetadata[];
  people?: string;
  activities?: string;
  videoEmbedUrl?: string;
  date?: string;
  location?: string;
  links?: { label: string; url: string }[];
}

export interface Project {
  slug: string;
  title: string;
  year: string;
  collaborators: string;
  tags: string[];
  cover?: ImageMetadata;
  selected?: boolean;
  workInProgress?: boolean;
  defaultView: ProjectView;
  views: {
    research?: ProjectContent;
    "art-show"?: ProjectContent;
  };
}


export const projects: Project[] = [
    vulnerableValue,
    clearDose,
    informalEmbodiedAuditing,
    hammock,
    oriba,

];
