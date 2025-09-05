import React from "react";
import TownshipExperience from "@/src/components/township/experience/Experience";
import TownshipHero from "@/src/components/township/hero/Hero";
import TownshipOverview from "@/src/components/township/overview/Overview";
import TownshipProjects from "@/src/components/township/projects/Projects";
import TownshipAmenities from "@/src/components/township/amenities/Amenities";
import TownshipLocationmap from "@/src/components/township/location-map/LocationMap";

const Township = ()=>{
  return(
    <>
      <TownshipHero />
      <TownshipOverview />
      <TownshipExperience />
      {/* <TownshipProjects /> */}
      <TownshipAmenities />
      <TownshipLocationmap />
    </>
  )
}

export default Township;