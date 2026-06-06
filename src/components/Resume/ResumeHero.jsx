import profilePhoto from '../../assets/my_photo.jpg';

function ResumeHero() {
  return (
    <section className="hero heroWithPhoto">
      <div className="heroContent">

        <h1>Yu-Jui Wang</h1>

        <p className="heroDegree">B.S. in Biomechatronics Engineering</p>
        <p className="heroFocus">Software Engineering · AI Engineering · Bioinformatics</p>

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