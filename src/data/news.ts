export interface NewsItem {
  date: string;
  text: string;
  url?: string;
}

export const news: NewsItem[] = [
  {
    date: "10/26",
    text: "Travel to Salt Lake City. Present ClearDose Demo at CSCW 2026",
  },

    {
    date: "10/26",
    text: "Give Talk at Georgia Tech Digital Media",
  },
    {
    date: "07/25",
    text: " Georgia Tech Researchers Aim to Increase Awareness of Emotion AI - By Letting People Try It",
    url: "https://iac.gatech.edu/featured-news/2025/07/researchers-increase-awareness-emotion-ai",  
  },

];
