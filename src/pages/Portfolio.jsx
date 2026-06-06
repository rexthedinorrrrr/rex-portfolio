import projects from '../data/projects.json';

const marqueeTags = [
  ...new Set(projects.flatMap((project) => project.tags)),
].sort((a, b) => a.localeCompare(b));

function Portfolio() {
  return (
    <>
      <section className="pageHeader">
        <p className="eyebrow">Selected Work</p>
        <h1>Portfolio</h1>
        {/* <p>
          A collection of projects across software engineering, artificial
          intelligence, data analysis, and bioinformatics.
        </p> */}
      </section>

      <section className="portfolioMarquee" aria-label="Project keywords">
        <div className="marqueeTrack">
          {[...Array(2)].map((_, groupIndex) => (
            <div className="marqueeGroup" key={groupIndex}>
              {marqueeTags.map((tag) => (
                <span key={`${groupIndex}-${tag}`}>#{tag}</span>
              ))}
            </div>
          ))}
        </div>
      </section>

      <section className="projectList">
        {projects.map((project) => (
          <article className="projectCard" key={project.id}>
            <div className="projectTop">
              <span className="projectType">{project.type}</span>
              <span className="projectPeriod">{project.period}</span>
            </div>

            <div className="projectHeader">
              <h2>{project.title}</h2>
              <p>{project.subtitle}</p>
            </div>

            <p className="projectDescription">{project.description}</p>

            <div className="techList">
              {project.tags.map((tag) => (
                <span key={tag}>#{tag}</span>
              ))}
            </div>

            <div className="highlights">
              <h3>Highlights</h3>
              <ul>
                {project.highlights.map((highlight) => (
                  <li key={highlight}>{highlight}</li>
                ))}
              </ul>
            </div>

            <div className="projectLinks">
              {project.links.map((link) => (
                <a
                  key={link.label}
                  href={link.url}
                  target={link.url === '#' ? undefined : '_blank'}
                  rel={link.url === '#' ? undefined : 'noreferrer'}
                >
                  {link.label}
                </a>
              ))}
            </div>
          </article>
        ))}
      </section>
    </>
  );
}

export default Portfolio;