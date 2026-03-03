export type AchievementItem = {
  id: string;
  imageSrc: string;
  imageAlt: string;
  title: string;
  description: string;
};

export const achievements: AchievementItem[] = [
  {
    id: "fira-roboworld-cup-2025",
    imageSrc: "FIRA2025.png",
    imageAlt: "FIRA 2025 Medals",
    title: "13 Medals in FIRA RoboWorld Cup",
    description:
      "Participated in the FIRA RoboWorld Cup as a member of the Ichiro ITS team, contributing to the development, optimization, and performance of humanoid robotic systems. Successfully secured 13 medals across multiple competition categories, demonstrating excellence in robotics engineering, algorithm design, motion control, and team coordination. This achievement reflects strong technical capability in real-time decision-making, system integration, and competitive robotics at the international level.",
  },
];
