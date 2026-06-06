function ProjectFilter({ tags, selectedTags, onToggleTag, onClearFilters }) {
    const hasSelectedTags = selectedTags.length > 0;

    return (
        <section className="projectFilter" aria-label="Project filters">
            <div
                className={`portfolioMarquee ${hasSelectedTags ? 'isStatic' : ''}`}
                aria-label="Project keywords"
            >
                <div className="marqueeTrack">
                    {[...Array(hasSelectedTags ? 1 : 2)].map((_, groupIndex) => (
                        <div className="marqueeGroup" key={groupIndex}>
                            {tags.map((tag) => (
                                <button
                                    type="button"
                                    key={`${groupIndex}-${tag}`}
                                    className={`marqueeTag ${selectedTags.includes(tag) ? 'active' : ''
                                        }`}
                                    onClick={() => onToggleTag(tag)}
                                >
                                    #{tag}
                                </button>
                            ))}
                        </div>
                    ))}
                </div>
            </div>

            {hasSelectedTags && (
                <div className="filterStatus">
                    <p>
                        Showing projects tagged with{' '}
                        {selectedTags.map((tag) => `#${tag}`).join(', ')}
                    </p>

                    <button type="button" onClick={onClearFilters}>
                        Clear filters
                    </button>
                </div>
            )}
        </section>
    );
}

export default ProjectFilter;