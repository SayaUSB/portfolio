import { experiences } from "../data/experience";

const Experience = () => {
  return (
    <section id="experience" className="section experience">
      <div className="container">
        <h2>Experience & Research</h2>
        <div className="timeline">
          <div className="line"></div>
          {experiences.map((item) => (
            <div className="timeline-item" key={item.id}>
              <div className="indicator">
                <div className="dot"></div>
              </div>
              <div className="timeline-content">
                <h3>{item.title}</h3>
                <p>{item.subtitle}</p>
                <p>{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
