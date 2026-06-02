function ContactFooter() {
  return (
    <footer className="footer" id="contact">
      <div>
        <h2>Contact</h2>
        <p>
          I am open to software engineering internships, research opportunities,
          and graduate study discussions.
        </p>
      </div>

      <div className="footerLinks">
        <a href="mailto:your-email@example.com">Email</a>
        <a href="https://github.com/your-github" target="_blank" rel="noreferrer">
          GitHub
        </a>
        <a href="/resume.pdf" target="_blank" rel="noreferrer">
          Resume
        </a>
      </div>
    </footer>
  );
}

export default ContactFooter;