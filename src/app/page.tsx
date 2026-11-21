import About from "./about/page";
import ThreeDCard from "./certificates/Projects";
import Contact from "./components/ContactUs";
import Experience from "./components/Experience";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import SkillsSection from "./components/SkillsSection";

// @next-codemod-ignore Cache Components adoption: this segment temporarily allows blocking.
// Remove this opt-out after verifying the segment passes validation without it.
// See: https://nextjs.org/docs/app/guides/migrating-to-cache-components
export const instant = false;

export default function Home() {
  return (
    <>
      <Hero />
      <About />

      <Projects />
      <Experience />
      <SkillsSection />
      {/* Blogs */}
      {/* <Newsletter /> */}
      <ThreeDCard />
      <Contact />
      <Footer />
    </>
  );
}
