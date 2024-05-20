import { Libre_Franklin, Newsreader } from "next/font/google";

export const newsreader = Newsreader({
  weight: ["400", "700"],
  subsets: ["latin"],
  style: ["italic", "normal"],
});

export const libreFranklin = Libre_Franklin({
  weight: ["400", "700", "500"],
  subsets: ["latin"],
  style: ["italic", "normal"],
});
