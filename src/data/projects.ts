export type Project = {
  id: string;
  iconClass: string;
  title: string;
  description: string;
  techStack: string[];
};

export const projects: Project[] = [
  {
    id: "rl-footstep-planner",
    iconClass: "fas fa-robot",
    title: "RL-Based Footstep Planner",
    description:
      "Developed a reinforcement learning based footstep planner for humanoid locomotion in a custom simulation environment. The trained policy was deployed to a C++ runtime for real-time inference and integration with robotic control systems.",
    techStack: ["C++", "OpenVINO", "Python", "ROS2", "Stable-Baselines3"],
  },
  {
    id: "whistle-detection-robocup",
    iconClass: "fas fa-gamepad",
    title: "Whistle Detection for RoboCup",
    description:
      "Developed a real-time whistle detection system for a humanoid RoboCup robot to identify referee signals during matches. Implemented audio preprocessing and machine learning-based classification to ensure robust detection under noisy competition environments. Optimized the system for low-latency inference and seamless integration with the robot’s decision-making pipeline.",
    techStack: ["C++", "OpenVINO", "Python", "ROS2", "TensorFlow"],
  },
  {
    id: "placo-parameter-tuning",
    iconClass: "fas fa-cogs",
    title: "Parameter Tuning for Placo Framework",
    description:
      "Designed and implemented an optimization pipeline for tuning Placo control parameters using Genetic Algorithm (GA) and Particle Swarm Optimization (PSO). Automated the search for optimal parameter configurations to enhance system stability, motion performance, and convergence efficiency. Conducted comparative analysis between GA and PSO in terms of convergence speed and solution quality.",
    techStack: ["C++", "Python"],
  },
  {
    id: "slam-implementation",
    iconClass: "fas fa-map-marked-alt",
    title: "SLAM Implementation",
    description:
      "Built a Simultaneous Localization and Mapping system for autonomous robots.",
    techStack: ["C++", "ROS2", "Lidar"],
  },
  {
    id: "fallen-recovery-motion",
    iconClass: "fas fa-robot",
    title: "Adaptive Fallen Recovery Motion for Humanoid Robot",
    description:
      "Developed a reinforcement learning framework to enable dynamic getting-up motion in a humanoid robot. Engineered state space design, reward shaping, and training strategies to achieve stable recovery from supine and prone fall conditions. Optimized policy performance for balance, motion smoothness, and execution stability.",
    techStack: ["C++", "OpenVINO", "Python", "ROS2", "Stable-Baselines3"],
  },
];
