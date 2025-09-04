"use client";
import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import CommonHeading from "../../common/CommonHeading";
import "./experience.css";

const images = [
  "assets/township/experience/image1.jpg",
  "assets/township/experience/image2.jpg",
  "assets/township/experience/image3.jpg",
  "assets/township/experience/image4.jpg",
  "assets/township/experience/image5.jpg",
];

const TownshipExperience = () => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // Select all project sections
    const projectSections = document.querySelectorAll('.project_sec');
    const imageSection = document.querySelector(".images");

    const imageHeight = 10; // Initial height of the image in percentage (50vh)
    const targetHeight = 100; // Target height we want to reach in percentage (100vh)

    // gsap.to(".images", {
    //   scrollTrigger:{
    //     trigger:".images",
    //     start:"top top",
    //     end:'bottom top',
    //     pin:true,

    //   }
    // })

    const heightDifference = targetHeight - imageHeight; // Height needs to increase from 50vh to 100vh
    const endValue = heightDifference * 50; // 20 is a multiplier to control scroll speed (adjust this as necessary)

    // Animate the width of the center image on scroll
    gsap.to(".image_col:nth-child(3)", {
      scrollTrigger: {
        trigger: imageSection,
        start: "top top", // When the section top reaches the center of the viewport
        end: `+=${endValue + window.innerHeight}`, // When the section bottom reaches the top
        pin: true,
        scrub: 1,
        markers: false,
      },
      width: "100vw",
      height: "100vh",
      filter: "brightness(0.5)",
      ease: "none",
    });

    projectSections.forEach((section, index) => {
      gsap.to(section, {
        scrollTrigger: {
          trigger: section,
          start: 'top top', // When the top of the section hits the top of the viewport
          end: 'bottom top', // When the bottom of the section reaches the top of the viewport
          scrub: 1, // Smooth scroll effect
          pin: true, // Pin the section during the scroll
          pinSpacing: false, // Prevent extra space after pinning
        },
      });
    });
  }, []);

  return (
    <>
      <div className="main_sec">
        <div className="experience_section pt-[100px] bg-[#FBF6F6]">
        <div className="container">
          <div className="content text-center mx-auto leading-[26px] relative">
            <CommonHeading customClass="mx-auto lg:max-w-[700px]">
              Experience Excellence In Our Premier Properties
            </CommonHeading>
            <div className="images flex justify-center gap-[20px] py-[80px]">
              {images.map((item, index) => (
                <div
                  className="image_col relative overflow-hidden w-full flex-shrink-0"
                  key={index}
                  style={{ backgroundImage: `url(${item})` }}
                ></div>
              ))}
            </div>
            <div className="image_content absolute bottom-[80px] text-center mx-auto leading-[26px] mx-auto left-[50%] translate-x-[-50%]">
              <h5 className="text-white text-[30px] uppercase text-center tracking-[1px] font-sangbleu">
                The Estate Residences
              </h5>
              <p className="text-white text-[16px] mt-[15px] uppercase text-center tracking-[2px] font-sangbleu color-[#ffffffe6]">
                Sector 63A, Gurugram, Haryana
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="township_projects_section relative">
        <div className="project_sec relative">
          <img
            src="assets/township/projects/project.webp"
            alt="experience image 1"
            className="img-fluid w-full bg_img"
          />
          <div className="container">
            <div className="content absolute bottom-[80px] text-center mx-auto leading-[26px] mx-auto left-[50%] translate-x-[-50%]">
              <h5 className="text-white text-[30px] uppercase text-center tracking-[1px] font-sangbleu">
                The Estate Residences
              </h5>
              <p className="text-white text-[16px] mt-[15px] uppercase text-center tracking-[2px] font-sangbleu color-[#ffffffe6]">
                Sector 63A, Gurugram, Haryana
              </p>
            </div>
          </div>
        </div>

        <div className="project_sec relative">
          <img
            src="assets/township/projects/project2.jpg"
            alt="experience image 1"
            className="img-fluid w-full bg_img"
          />
          <div className="container">
            <div className="content absolute bottom-[80px] text-center mx-auto leading-[26px] mx-auto left-[50%] translate-x-[-50%]">
              <h5 className="text-white text-[30px] uppercase text-center tracking-[1px] font-sangbleu">
                The Estate Residences
              </h5>
              <p className="text-white text-[16px] mt-[15px] uppercase text-center tracking-[2px] font-sangbleu color-[#ffffffe6]">
                Sector 63A, Gurugram, Haryana
              </p>
            </div>
          </div>
        </div>

        <ul className="dots">
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </div>
      </div>
    </>
  );
};

export default TownshipExperience;
