import ResumeHero from '../components/Resume/ResumeHero';
import AboutSection from '../components/Resume/AboutSection';
import EducationSection from '../components/Resume/EducationSection';
import ExperienceSection from '../components/Resume/ExperienceSection';
import SkillsSection from '../components/Resume/SkillsSection';

function Resume() {
  return (
    <>
      <ResumeHero />
      <AboutSection />
      <EducationSection />
      <ExperienceSection />
      <SkillsSection />
    </>
  );
}

export default Resume;