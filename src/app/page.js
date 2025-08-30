import Aboutus from "../components/home/Aboutus";
import Achievements from "../components/home/Achievements";
import Blogs from "../components/home/Blogs";
import DevelopmentExperience from "../components/home/DevelopmentExperience";
import Hero from "../components/home/Hero";
import LuxuryProperties from "../components/home/LuxuryProperties";
import Media from "../components/home/Media";
import Journey from "../components/home/OurJourney";
import OurTeam from "../components/home/OurTeam";

export default function Home() {
  return (
   <>
    <Hero/>
    <Aboutus/>
    <LuxuryProperties/>
    <OurTeam/>
    <DevelopmentExperience/>
    <Journey/>
    <Achievements/>
    <Media/>
    <Blogs/>
   </>
  );
}
