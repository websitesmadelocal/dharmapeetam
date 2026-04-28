import Banner from "../sections/about/Banner";
import Objectives from "../sections/about/Objectives";
import CoreValues from "../sections/about/CoreValues";
import TeamPreview from "../sections/about/TeamPreview";
import AboutContent from "../sections/about/AboutContent";

const About = () => {
  return (
    <>
      <Banner />
      <AboutContent />
      <Objectives />
      <CoreValues />
      <TeamPreview />
    </>
  );
};

export default About;