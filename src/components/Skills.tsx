const Skills = () => {
  return (
    <section id="skills" className="section skills">
      <div className="container">
        <h2>Skills</h2>
        <div className="skills-categories">
          <div className="skills-category">
            <h3>Programming</h3>
            <div className="badges">
              <span className="badge">C++</span>
              <span className="badge">Python</span>
              <span className="badge">JavaScript</span>
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
  );
};

export default Skills;
