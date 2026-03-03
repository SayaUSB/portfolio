import { projects } from "../data/projects";

const Projects = () => {
  return (
    <section id="projects" className="section projects">
      <div className="container">
        <h2>Projects</h2>
        <div className="projects-grid">
          {projects.map((project) => (
            <div className="project-card" key={project.id}>
              <div className="card-header">
                <i className={`${project.iconClass} icon`}></i>
                <h3>{project.title}</h3>
              </div>
              <p>{project.description}</p>
              <div className="tech-stack">
                {project.techStack.map((tech) => (
                  <span key={`${project.id}-${tech}`}>{tech}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
