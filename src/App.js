import './App.css';

function App() {
  return (
    <div className="app">
      <nav className="navbar">
        <div className="nav-container">
          <a href="#hero" className="nav-logo">Ustu Bina Syahdiba</a>
          <ul className="nav-menu">
            <li><a href="#about">About</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#experience">Experience</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>
      </nav>

      <section id="hero" className="hero">
        <div className="hero-content">
          <div className="hero-text">
            <h1>Ustu Bina Syahdiba</h1>
            <p>Robotics & AI Engineer | Reinforcement Learning Enthusiast</p>
            <div className="hero-buttons">
              <a href="#projects" className="btn primary">View Projects</a>
              <a href="/resume.pdf" className="btn secondary" download>Download CV</a>
            </div>
          </div>
          <img src={`${process.env.PUBLIC_URL}/images.jpeg`} alt="Ustu Bina Syahdiba" className="hero-photo" />
        </div>
      </section>

      <section id="about" className="section about">
        <div className="container">
          <h2>About Me</h2>
          <p>
            Passionate Robotics and AI Engineer student specializing in reinforcement learning and humanoid robotics.
            Experienced in developing intelligent systems using ROS2, Python, and C++. Focused on bridging the gap
            between theoretical AI research and practical robotics applications for real-world impact.
          </p>
        </div>
      </section>

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

      <section id="skills" className="section skills">
        <div className="container">
          <h2>Skills</h2>
          <div className="skills-categories">
            <div className="skills-category">
              <h3>Programming</h3>
              <div className="badges">
                <span className="badge">C++</span>
                <span className="badge">Python</span>
              </div>
            </div>
            <div className="skills-category">
              <h3>AI/ML</h3>
              <div className="badges">
                <span className="badge">Reinforcement Learning</span>
                <span className="badge">Deep Learning</span>
                <span className="badge">TensorFlow</span>
              </div>
            </div>
            <div className="skills-category">
              <h3>Robotics</h3>
              <div className="badges">
                <span className="badge">ROS2</span>
                <span className="badge">Simulation</span>
                <span className="badge">Computer Vision</span>
              </div>
            </div>
            <div className="skills-category">
              <h3>Tools</h3>
              <div className="badges">
                <span className="badge">Git</span>
                <span className="badge">Linux</span>
                <span className="badge">VS Code</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="experience" className="section experience">
        <div className="container">
          <h2>Experience & Research</h2>
          <div className="timeline">
            <div className="timeline-item">
              <div className="timeline-content">
                <h3>AI Bachelor Degree</h3>
                <p>Institute Technology Sepuluh Nopember, 2024 - Present</p>
                <p>Studying Artificial Intelligence with focus on robotics, reinforcement learning, and autonomous systems. Engaged in research projects on humanoid robot control and machine learning applications.</p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-content">
                <h3>Programmer Ichiro ITS</h3>
                <p>Ichiro ITS, 2024 - Present</p>
                <p>As a programmer for Ichiro ITS, a humanoid robotic research team, contributing to the development of autonomous systems, reinforcement learning algorithms, and robotic control software.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="section contact">
        <div className="container">
          <h2>Contact</h2>
          <div className="contact-icons">
            <a href="mailto:binasyahdiba@gmail.com" aria-label="Email"><i className="fas fa-envelope"></i></a>
            <a href="https://www.linkedin.com/in/us2b/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><i className="fab fa-linkedin"></i></a>
            <a href="https://github.com/SayaUSB" target="_blank" rel="noopener noreferrer" aria-label="GitHub"><i className="fab fa-github"></i></a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
