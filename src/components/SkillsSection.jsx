function SkillsSection() {
  return (
    <section className="section">
      <h2>Skills</h2>

      <div className="skillGroups">
        <div className="skillGroup">
          <h3>Programming</h3>
          <p>Python · C / C++ · JavaScript · Bash</p>
        </div>

        <div className="skillGroup">
          <h3>Web Development</h3>
          <p>React · Vite · HTML · CSS · Git · GitHub</p>
        </div>

        <div className="skillGroup">
          <h3>Research / Data</h3>
          <p>RNA-seq Analysis · HLA Typing · Linux · Benchmarking</p>
        </div>
      </div>
    </section>
  );
}

export default SkillsSection;