const Achievements = () => {
  return (
    <section id="achievements" className="section achievements">
      <div className="container">
        <h2>Achievements</h2>
        <div className="achievements-list">
          <div className="achievement-item">
            <img src={`${process.env.PUBLIC_URL}/FIRA2025.png`} alt="FIRA 2025 Medals" className="achievement-image" />
            <div className="achievement-text">
              <h3>13 Medals in FIRA RoboWorld Cup</h3>
              <p>Participated in the FIRA RoboWorld Cup as a member of the Ichiro ITS team, contributing to the development, optimization, and performance of humanoid robotic systems. Successfully secured 13 medals across multiple competition categories, demonstrating excellence in robotics engineering, algorithm design, motion control, and team coordination. This achievement reflects strong technical capability in real-time decision-making, system integration, and competitive robotics at the international level.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Achievements;
