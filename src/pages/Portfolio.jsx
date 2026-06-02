import { projects } from '../data/projects';

function Portfolio() {
  return (
    <>
      <section className="pageHeader">
        <p className="eyebrow">Selected Work</p>
        <h1>Portfolio</h1>
        <p>
          Projects in research-oriented programming, bioinformatics, and
          software development.
        </p>
      </section>

      <section className="projectList">
        {projects.map((project) => (
          <article className="projectCard" key={project.title}>
            <div className="projectHeader">
              <div>
                <p className="tag">{project.category}</p>
                <h2>{project.title}</h2>
              </div>
            </div>

            <p className="projectDescription">
              {project.description}
            </p>

            <div className="techList">
              {project.technologies.map((tech) => (
                <span key={tech}>{tech}</span>
              ))}
            </div>

            <div className="highlights">
              <h3>Highlights</h3>
              <ul>
                {project.highlights.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </section>
    </>
  );
}

export default Portfolio;