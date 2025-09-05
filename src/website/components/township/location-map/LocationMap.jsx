"use client";
import { useLayoutEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import CommonHeading from "../../common/CommonHeading";

gsap.registerPlugin(ScrollTrigger);

const location_advantages = [
  { name: ["HOTEL GRAND HYATT"], distance: "2.4 Kms", time: "5 mins" },
  { name: ["MARENGO ASIA HOSPITAL", "SHALOM PRESIDENCY SCHOOL"], distance: "3.5 Kms", time: "7 mins" },
  { name: ["RAPID METRO SEC 55-56"], distance: "3.6 Kms", time: "8 mins" },
  { name: ["SOUTH POINT MALL"], distance: "6.4 Kms", time: "10 mins" },
  { name: ["TRANSPORT IGI AIRPORT"], distance: "23 Kms", time: "30 mins" },
];

const TownshipLocationmap = () => {
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const sections = gsap.utils.toArray(".flex-point");

      // optional: small intro animation as each section becomes active
      sections.forEach((sec) => {
        const texts = sec.querySelectorAll("p");
        const circle = sec.querySelector(".round");
        gsap.set([texts, circle], { willChange: "transform, opacity" });

        gsap.from(texts, {
          opacity: 0,
          y: 16,
          duration: 0.5,
          stagger: 0.06,
          ease: "power2.out",
          scrollTrigger: {
            trigger: sec,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        });

        gsap.from(circle, {
          scale: 0.9,
          opacity: 0,
          duration: 0.6,
          ease: "power2.out",
          scrollTrigger: {
            trigger: sec,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        });
      });

      // core pinning logic: stack each section; next one scrolls over previous
      sections.forEach((sec, i) => {
        ScrollTrigger.create({
          trigger: sec,
          start: "top top",          // when this section hits the top
          end: () => "+=" + sec.offsetHeight, // keep it pinned for its own height
          pin: true,                 // pin it
          pinSpacing: false,         // no extra space; allows the next to overlap
          anticipatePin: 1,          // smoother pin handoff
          invalidateOnRefresh: true, // recalc on resize
        });
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <div className="township_location_advantage_section relative bg-[#FBF6F6]">
      <img
        src="assets/township/location/map.webp"
        alt="Location map"
        className="img-fluid w-full"
      />

      <div className="container">
        <div className="advantages py-[100px]">
          <CommonHeading customClass="mx-auto lg:max-w-[700px] text-center">
            Strategic Location Advantages
          </CommonHeading>

          <div className="points pt-[100px]">
            {location_advantages.map((item, index) => {
              if (index % 2 === 0) {
                return (
                  <div
                    className={`flex-point flex gap-[80px] ${index !== 0 ? "mt-[100px]" : ""}`}
                    key={index}
                  >
                    <div className="col flex flex-1 justify-center flex-col">
                      {item.name?.map((nItem, nIndex) => (
                        <p
                          key={nIndex}
                          className="text-right w-full text-[20px] font-[500] tracking-[1px]"
                        >
                          {nItem}
                        </p>
                      ))}
                    </div>

                    <div className="col">
                      <div className="round border h-[300px] w-[300px] rounded-full flex items-center justify-center flex-col">
                        <h4 className="font-sangbleu text-[24px] uppercase">
                          {item.distance}
                        </h4>
                        <h4 className="font-sangbleu text-[24px] uppercase mt-2">
                          ({item.time})
                        </h4>
                      </div>
                    </div>

                    <div className="col flex-1" />
                  </div>
                );
              } else {
                return (
                  <div
                    className={`flex-point flex gap-[80px] ${index !== 0 ? "mt-[100px]" : ""}`}
                    key={index}
                  >
                    <div className="col flex-1" />

                    <div className="col">
                      <div className="round border h-[300px] w-[300px] rounded-full flex items-center justify-center flex-col">
                        <h4 className="font-sangbleu text-[24px] uppercase">
                          {item.distance}
                        </h4>
                        <h4 className="font-sangbleu text-[24px] uppercase mt-2">
                          ({item.time})
                        </h4>
                      </div>
                    </div>

                    <div className="col flex flex-1 justify-center flex-col">
                      {item.name?.map((nItem, nIndex) => (
                        <p
                          key={nIndex}
                          className={`text-left w-full text-[20px] font-[500] tracking-[1px] ${nIndex !== 0 ? "mt-4" : ""}`}
                        >
                          {nItem}
                        </p>
                      ))}
                    </div>
                  </div>
                );
              }
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TownshipLocationmap;
