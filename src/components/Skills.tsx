import { skillCategories } from "../data/skills";

const Skills = () => {
  return (
    <section id="skills" className="section skills">
      <div className="container">
        <h2>Skills</h2>
        <div className="skills-categories">
          {skillCategories.map((category) => (
            <div className="skills-category" key={category.id}>
              <h3>{category.title}</h3>
              <div className="badges">
                {category.badges.map((badge) => (
                  <span className="badge" key={`${category.id}-${badge}`}>
                    {badge}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
