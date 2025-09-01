import Aboutus from "@/src/components/website/home/Aboutus";
import Achievements from "@/src/components/website/home/Achievements";
import Blogs from "@/src/components/website/home/Blogs";
import DevelopmentExperience from "@/src/components/website/home/DevelopmentExperience";
import Hero from "@/src/components/website/home/Hero";
import LuxuryProperties from "@/src/components/website/home/LuxuryProperties";
import Media from "@/src/components/website/home/Media";
import Journey from "@/src/components/website/home/OurJourney";
import OurTeam from "@/src/components/website/home/OurTeam";

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
