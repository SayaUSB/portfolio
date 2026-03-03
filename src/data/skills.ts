export type SkillCategory = {
  id: string;
  title: string;
  badges: string[];
};

export const skillCategories: SkillCategory[] = [
  {
    id: "programming",
    title: "Programming",
    badges: ["C++", "Python", "JavaScript"],
  },
  {
    id: "ai-ml",
    title: "AI/ML",
    badges: ["Reinforcement Learning", "Deep Learning", "TensorFlow"],
  },
  {
    id: "robotics",
    title: "Robotics",
    badges: ["ROS2", "Simulation", "Computer Vision"],
  },
  {
    id: "tools",
    title: "Tools",
    badges: ["Git", "Linux", "VS Code"],
  },
];
