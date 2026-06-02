import { useState } from 'react';

const email = 'rex0221.wang@gmail.com';

function ContactFooter() {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);

      setTimeout(() => {
        setCopied(false);
      }, 1600);
    } catch (error) {
      console.error('Failed to copy email:', error);
    }
  };

  return (
    <footer className="contactFooter" id="contact">
      <div className="contactInner">
        <div className="contactText">
          <p className="contactLabel">Contact</p>
          <p className="contactSubtext">Taipei, Taiwan</p>
        </div>

        <div className="contactGrid">
          <button
            type="button"
            className={`contactItem contactEmail ${copied ? 'copied' : ''}`}
            onClick={handleCopyEmail}
            title="Click to copy email"
          >
            <span>Email</span>
            <strong>{copied ? 'Copied!' : email}</strong>
          </button>

          <a
            className="contactItem"
            href="https://github.com/rexthedinorrrrr"
            target="_blank"
            rel="noreferrer"
          >
            <span>GitHub</span>
          </a>

          <a
            className="contactItem"
            href="https://www.linkedin.com/in/yu-jui-rex-wang"
            target="_blank"
            rel="noreferrer"
          >
            <span>LinkedIn</span>
          </a>

          <a
            className="contactItem"
            href="https://drive.google.com/file/d/1jXfPoaORkxqVkTBKxb8zhOUqctVpKAFm/view?usp=sharing"
            target="_blank"
            rel="noreferrer"
          >
            <span>Resume</span>
          </a>

          <a
            className="contactItem"
            href="https://drive.google.com/file/d/1cxNXuGARZvfBLIyp-mJAVJxBWcEj7fsT/view?usp=sharing"
            target="_blank"
            rel="noreferrer"
          >
            <span>Transcript</span>
          </a>
        </div>
      </div>
    </footer>
  );
}

export default ContactFooter;