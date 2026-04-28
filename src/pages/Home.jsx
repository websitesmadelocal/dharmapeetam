import Hero from "../sections/home/Hero";
import QuickCards from "../sections/home/QuickCards";
import Courses from "../sections/home/Courses";
import AboutPreview from "../sections/home/AboutPreview";
import Programs from "../sections/home/Programs";
import Founder from "../sections/home/Founder";
import CTA from "../sections/home/CTA";

const Home = () => {
  return (
    <>
      <Hero />
      <QuickCards />
      <Courses />
      <AboutPreview />
      <Programs />
      <Founder />
      <CTA />
    </>
  );
};

export default Home;