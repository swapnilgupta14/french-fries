// ÷LandingPage÷
import Services from "@/components/LandingPage/Services";
import Hero from "../components/LandingPage/Hero";
import Projects from "@/components/LandingPage/Projects";
import Grid from "@/components/LandingPage/Grid";
import Navbar from "@/components/common/Navbar";

export default function Home() {
  return (
    <>
      <Navbar />
      <>
        <Hero />
        <Services />
        <Projects />
        <Grid />
      </>
    </>
  );
}
