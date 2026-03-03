const Projects = () => {
  return (
    <section id="projects" className="section projects">
      <div className="container">
        <h2>Projects</h2>
        <div className="projects-grid">
          <div className="project-card">
            <div className="card-header">
              <i className="fas fa-robot icon"></i>
              <h3>RL-Based Footstep Planner</h3>
            </div>
            <p>Developed a reinforcement learning based footstep planner for humanoid locomotion in a custom simulation environment. The trained policy was deployed to a C++ runtime for real-time inference and integration with robotic control systems.</p>
            <div className="tech-stack">
              <span>C++</span>
              <span>OpenVINO</span>
              <span>Python</span>
              <span>ROS2</span>
              <span>Stable-Baselines3</span>
            </div>
          </div>
          <div className="project-card">
            <div className="card-header">
              <i className="fas fa-gamepad icon"></i>
              <h3>Whistle Detection for RoboCup</h3>
            </div>
            <p>Developed a real-time whistle detection system for a humanoid RoboCup robot to identify referee signals during matches. Implemented audio preprocessing and machine learning-based classification to ensure robust detection under noisy competition environments. Optimized the system for low-latency inference and seamless integration with the robot’s decision-making pipeline.</p>
            <div className="tech-stack">
              <span>C++</span>
              <span>OpenVINO</span>
              <span>Python</span>
              <span>ROS2</span>
              <span>TensorFlow</span>
            </div>
          </div>
          <div className="project-card">
            <div className="card-header">
              <i className="fas fa-cogs icon"></i>
              <h3>Parameter Tuning for Placo Framework</h3>
            </div>
            <p>Designed and implemented an optimization pipeline for tuning Placo control parameters using Genetic Algorithm (GA) and Particle Swarm Optimization (PSO). Automated the search for optimal parameter configurations to enhance system stability, motion performance, and convergence efficiency. Conducted comparative analysis between GA and PSO in terms of convergence speed and solution quality.</p>
            <div className="tech-stack">
              <span>C++</span>
              <span>Python</span>
            </div>
          </div>
          <div className="project-card">
            <div className="card-header">
              <i className="fas fa-map-marked-alt icon"></i>
              <h3>SLAM Implementation</h3>
            </div>
            <p>Built a Simultaneous Localization and Mapping system for autonomous robots.</p>
            <div className="tech-stack">
              <span>C++</span>
              <span>ROS2</span>
              <span>Lidar</span>
            </div>
          </div>
          <div className="project-card">
            <div className="card-header">
              <i className="fas fa-robot icon"></i>
              <h3>Adaptive Fallen Recovery Motion for Humanoid Robot</h3>
            </div>
            <p>Developed a reinforcement learning framework to enable dynamic getting-up motion in a humanoid robot. Engineered state space design, reward shaping, and training strategies to achieve stable recovery from supine and prone fall conditions. Optimized policy performance for balance, motion smoothness, and execution stability.</p>
            <div className="tech-stack">
              <span>C++</span>
              <span>OpenVINO</span>
              <span>Python</span>
              <span>ROS2</span>
              <span>Stable-Baselines3</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
