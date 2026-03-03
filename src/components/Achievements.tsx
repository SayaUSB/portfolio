import { achievements } from "../data/achievements";

const Achievements = () => {
  return (
    <section id="achievements" className="section achievements">
      <div className="container">
        <h2>Achievements</h2>
        <div className="achievements-list">
          {achievements.map((item) => (
            <div className="achievement-item" key={item.id}>
              <img
                src={`${process.env.PUBLIC_URL}/${item.imageSrc}`}
                alt={item.imageAlt}
                className="achievement-image"
              />
              <div className="achievement-text">
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
