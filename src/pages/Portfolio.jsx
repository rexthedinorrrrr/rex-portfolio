import { useRef, useState } from 'react';
import projects from '../data/projects.json';

const marqueeTags = [
  ...new Set(projects.flatMap((project) => project.tags)),
].sort((a, b) => a.localeCompare(b));

function Portfolio() {
  const [selectedTags, setSelectedTags] = useState([]);
  const marqueeRef = useRef(null);
  const trackRef = useRef(null);

  const hasSelectedTags = selectedTags.length > 0;

  const filteredProjects = hasSelectedTags
    ? projects.filter((project) =>
      selectedTags.every((tag) => project.tags.includes(tag))
    )
    : projects;

  const getCurrentMarqueeOffset = () => {
    if (!marqueeRef.current || !trackRef.current) return 0;

    const marqueeLeft = marqueeRef.current.getBoundingClientRect().left;
    const trackLeft = trackRef.current.getBoundingClientRect().left;

    return marqueeLeft - trackLeft;
  };

  const toggleTag = (tag) => {
    const isSelectingFirstTag =
      selectedTags.length === 0 && !selectedTags.includes(tag);

    const currentOffset = getCurrentMarqueeOffset();

    setSelectedTags((currentTags) =>
      currentTags.includes(tag)
        ? currentTags.filter((currentTag) => currentTag !== tag)
        : [...currentTags, tag]
    );

    if (isSelectingFirstTag) {
      requestAnimationFrame(() => {
        if (marqueeRef.current) {
          marqueeRef.current.scrollLeft = currentOffset;
        }
      });
    }
  };

  const clearFilters = () => {
    setSelectedTags([]);

    requestAnimationFrame(() => {
      if (marqueeRef.current) {
        marqueeRef.current.scrollLeft = 0;
      }
    });
  };

  return (
    <>
      <section className="pageHeader">
        <p className="eyebrow">Selected Work</p>
        <h1>Portfolio</h1>
        <p>
          A collection of projects across software engineering, artificial
          intelligence, data analysis, and bioinformatics.
        </p>
      </section>

      <section
        ref={marqueeRef}
        className={`portfolioMarquee ${hasSelectedTags ? 'isPaused' : ''}`}
        aria-label="Project keywords"
      >
        <div className="marqueeTrack" ref={trackRef}>
          {[...Array(2)].map((_, groupIndex) => (
            <div className="marqueeGroup" key={groupIndex}>
              {marqueeTags.map((tag) => (
                <button
                  type="button"
                  key={`${groupIndex}-${tag}`}
                  className={`marqueeTag ${
                    selectedTags.includes(tag) ? 'active' : ''
                  }`}
                  onClick={() => toggleTag(tag)}
                >
                  #{tag}
                </button>
              ))}
            </div>
          ))}
        </div>
      </section>

      {hasSelectedTags && (
        <div className="filterStatus">
          <p>
            Showing projects tagged with{' '}
            {selectedTags.map((tag) => `#${tag}`).join(', ')}
          </p>

          <button type="button" onClick={clearFilters}>
            Clear filters
          </button>
        </div>
      )}

      <section className="projectList">
        {filteredProjects.map((project) => (
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
                <button
                  type="button"
                  key={tag}
                  className={`projectTag ${selectedTags.includes(tag) ? 'active' : ''
                    }`}
                  onClick={() => toggleTag(tag)}
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
        ))}
      </section>
    </>
  );
}

export default Portfolio;