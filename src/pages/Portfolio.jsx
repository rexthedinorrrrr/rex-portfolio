import { useState } from 'react';
import projects from '../data/projects.json';

import PortfolioHeader from '../components/Portfolio/PortfolioHeader';
import ProjectFilter from '../components/Portfolio/ProjectFilter';
import ProjectCard from '../components/Portfolio/ProjectCard';

const projectTags = [
  ...new Set(projects.flatMap((project) => project.tags)),
].sort((a, b) => a.localeCompare(b));

function Portfolio() {
  const [selectedTags, setSelectedTags] = useState([]);

  const hasSelectedTags = selectedTags.length > 0;

  const filteredProjects = hasSelectedTags
    ? projects.filter((project) =>
        selectedTags.every((tag) => project.tags.includes(tag))
      )
    : projects;

  const toggleTag = (tag) => {
    setSelectedTags((currentTags) =>
      currentTags.includes(tag)
        ? currentTags.filter((currentTag) => currentTag !== tag)
        : [...currentTags, tag]
    );
  };

  const clearFilters = () => {
    setSelectedTags([]);
  };

  return (
    <>
      <PortfolioHeader />

      <ProjectFilter
        tags={projectTags}
        selectedTags={selectedTags}
        onToggleTag={toggleTag}
        onClearFilters={clearFilters}
      />

      <section className="projectList">
        {filteredProjects.map((project) => (
          <ProjectCard
            key={project.id}
            project={project}
            selectedTags={selectedTags}
            onToggleTag={toggleTag}
          />
        ))}
      </section>
    </>
  );
}

export default Portfolio;