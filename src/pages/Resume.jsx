import profilePhoto from '../assets/my_photo.jpg';
import ContactFooter from '../components/ContactFooter';

function Resume() {
  return (
    <>
      <section className="hero">
        <div className="heroContent">
            <p className="eyebrow">Portfolio</p>

            <h1>Yu-Jui Wang</h1>

            <h2>Software Engineering · Bioinformatics · Research</h2>

            <p className="heroText">
            I am an undergraduate student in Biomechatronics Engineering at
            National Taiwan University, interested in software engineering,
            data analysis, and computational biology.
            </p>

            {/* <div className="heroButtons">
            <a href="/portfolio">View Portfolio</a>
            <a href="/resume.pdf" className="secondary" target="_blank" rel="noreferrer">
                Download Resume
            </a>
            </div> */}
        </div>

        <div className="heroPhotoWrap">
            <img src={profilePhoto} alt="Yu-Jui Wang" className="heroPhoto" />
        </div>
        </section>

      <section className="section">
        <h2>About Me</h2>
        <p>
          I enjoy building practical tools that connect programming, research,
          and problem solving. My recent work focuses on evaluating HLA typing
          tools using single-cell RNA sequencing data. I am also developing my
          software engineering skills through web development, Linux workflows,
          and side projects.
        </p>
      </section>

      <section className="section">
        <h2>Education</h2>

        <div className="timelineItem">
          <h3>National Taiwan University</h3>
          <p>
            Department of Biomechatronics Engineering
          </p>
        </div>
      </section>

      <section className="section">
        <h2>Experience</h2>

        <div className="timelineItem">
          <h3>Undergraduate Research Project</h3>
          <p>
            Compared HLA typing tools and built benchmarking scripts for accuracy,
            coverage, and runtime analysis.
          </p>
        </div>

        <div className="timelineItem">
          <h3>Teaching Assistant, Programming and Data Structure</h3>
          <p>
            Assisted students, graded assignments, and supported the backend
            workflow of the homework grading system.
          </p>
        </div>
      </section>

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
      <ContactFooter />
    </>
  );
}

export default Resume;