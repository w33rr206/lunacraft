import { GameMode } from "./types";

export const SERVER_IP = "play.lunacraft.ir";

export const NAV_LINKS = [
  { name: "خانه", href: "#home" },
  { name: "گیم مودها", href: "#gamemodes" },
  { name: "فروشگاه", href: "#shop" },
  { name: "قوانین", href: "#rules" },
  { name: "درباره ما", href: "#about" },
];

export const GAME_MODES: GameMode[] = [
  {
    id: "survival",
    title: "سوروایوال",
    description: "بقای خالص زیر نور ماه! منابع جمع کنید، بسازید و در دنیایی جادویی زنده بمانید.",
    image: "https://picsum.photos/400/300?grayscale&blur=2",
    playerCount: 124
  },
  {
    id: "bedwars",
    title: "بدوارز",
    description: "از تخت خود محافظت کنید و در جزایر شناور فضایی با دشمنان بجنگید.",
    image: "https://picsum.photos/401/300?grayscale&blur=2",
    playerCount: 86
  },
  {
    id: "skyblock",
    title: "اسکای بلاک",
    description: "جزیره خود را در کهکشان بسازید و امپراتوری خود را گسترش دهید.",
    image: "https://picsum.photos/402/300?grayscale&blur=2",
    playerCount: 210
  }
];