// ÷LandingPage÷
import Services from "@/components/LandingPage/Services";
import Hero from "../components/LandingPage/Hero";
import Projects from "@/components/LandingPage/Projects";
import Grid from "@/components/LandingPage/Grid";
import Navbar from "@/components/common/Navbar";
import Work from "@/components/LandingPage/Work";
import PartnershipsSection from "@/components/LandingPage/PartnershipsSection";
import Contact from "@/components/LandingPage/Contact";

export default function Home() {
  return (
    <>
      <Navbar />
      <>
        <Hero />
        <Services />
        <Projects />
        <Grid />
        <Work/>
        <PartnershipsSection/>
        <Contact/>
      </>
    </>
  );
}
