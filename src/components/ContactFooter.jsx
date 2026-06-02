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
          <p className="contactSubtext">Taipei / Kaohsiung, Taiwan</p>

          <div className="emailLine">
            <span>{email}</span>
            <button type="button" onClick={handleCopyEmail}>
              {copied ? 'Copied!' : 'Copy'}
            </button>
          </div>
        </div>

        <div className="contactGrid">
          <a
            className="contactItem"
            href="https://github.com/rexthedinorrrrr"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>

          <a
            className="contactItem"
            href="https://www.linkedin.com/in/yu-jui-rex-wang"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>

          <a
            className="contactItem"
            href="https://drive.google.com/file/d/1jXfPoaORkxqVkTBKxb8zhOUqctVpKAFm/view?usp=sharing"
            target="_blank"
            rel="noreferrer"
          >
            Resume
          </a>

          <a
            className="contactItem"
            href="https://drive.google.com/file/d/1cxNXuGARZvfBLIyp-mJAVJxBWcEj7fsT/view?usp=drive_link"
            target="_blank"
            rel="noreferrer"
          >
            Transcript
          </a>
        </div>
      </div>
    </footer>
  );
}

export default ContactFooter;