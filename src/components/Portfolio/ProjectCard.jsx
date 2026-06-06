function ProjectCard({ project, selectedTags, onToggleTag }) {
  return (
    <article className="projectCard">
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
          <button
            type="button"
            key={tag}
            className={`projectTag ${
              selectedTags.includes(tag) ? 'active' : ''
            }`}
            onClick={() => onToggleTag(tag)}
          >
            #{tag}
          </button>
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
  );
}

export default ProjectCard;