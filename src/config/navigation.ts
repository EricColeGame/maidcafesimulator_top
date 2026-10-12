import type { LucideIcon } from "lucide-react";
import { BookOpen, Cog, Gamepad2, Package, Puzzle, TrendingUp, Users } from "lucide-react";

export type NavItem = {
  key: string;
  path: `/${string}`;
  icon: LucideIcon;
  isContentType: boolean;
};

// 分类 slug 必须与 content/<locale>/ 的子目录名、关键词.json 的 categories 一一对应
export const NAVIGATION_CONFIG = [
  { key: "guide", path: "/guide", icon: BookOpen, isContentType: true },
  { key: "mechanics", path: "/mechanics", icon: Cog, isContentType: true },
  { key: "characters", path: "/characters", icon: Users, isContentType: true },
  { key: "items", path: "/items", icon: Package, isContentType: true },
  { key: "progression", path: "/progression", icon: TrendingUp, isContentType: true },
  { key: "controls", path: "/controls", icon: Gamepad2, isContentType: true },
  { key: "mods", path: "/mods", icon: Puzzle, isContentType: true },
] satisfies readonly NavItem[];

export const CONTENT_TYPES: string[] = NAVIGATION_CONFIG.filter(
  (item) => item.isContentType,
).map((item) => item.path.replace(/^\//, ""));
