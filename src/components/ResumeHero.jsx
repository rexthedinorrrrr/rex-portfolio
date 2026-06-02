import profilePhoto from '../assets/my_photo.jpg';

function ResumeHero() {
  return (
    <section className="hero heroWithPhoto">
      <div className="heroContent">
        {/* <p className="eyebrow">Hello, I&apos;m</p> */}

        <h1>Yu-Jui Wang</h1>
        <p className="heroAlias">Rex Wang</p>

        <h2>Software Engineering · Bioinformatics · Research</h2>

        <p className="heroText">
          I am an undergraduate student in Biomechatronics Engineering at
          National Taiwan University, interested in software engineering,
          data analysis, and computational biology.
        </p>
      </div>

      <div className="heroPhotoWrap">
        <img
          src={profilePhoto}
          alt="Yu-Jui Wang"
          className="heroPhoto"
        />
      </div>
    </section>
  );
}

export default ResumeHero;