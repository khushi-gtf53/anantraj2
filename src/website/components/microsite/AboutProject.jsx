"use client";

import CountUp from "react-countup";
import CommonHeading from "../../components/common/CommonHeading";
import { useInView } from "react-intersection-observer";

const AboutProject = ({
  heading,
  description,
  counters = [],
  brochureLink = "#",
}) => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <section
      data-gsap="fade-up"
      data-gsap-duration="1"
      data-gsap-delay="0.5"
      className="about_project w-full bg-white px-5 sm:px-10 lg:px-20 py-12 lg:py-20"
    >
      {/* Top Section */}
      <div className="grid grid-cols-12 border-b border-black pb-10 lg:pb-14 gap-6">
        {/* Heading */}
        <div className="col-span-12 lg:col-span-5">
          <CommonHeading>{heading}</CommonHeading>
        </div>

        {/* Description */}
        <div className="col-span-12 lg:col-span-7">
          <p className="tracking-[1.5px] leading-relaxed text-justify text-sm sm:text-base lg:text-lg">
            {description}
          </p>
        </div>
      </div>

      {/* Counters + Brochure */}
      <div className="grid grid-cols-12 pt-12 lg:pt-20 gap-10 lg:gap-0 items-start" ref={ref}>
        {/* Counters */}
        <div className="col-span-12 lg:col-span-9">
          <div className="counter flex flex-wrap gap-8 sm:gap-12 font-sangbleu uppercase">
            {counters.map(({ label, value, suffix = "" }, index) => (
              <div key={index} className="min-w-[90px] sm:min-w-[120px]">
                <h3 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-1">
                  {inView ? (
                    <CountUp end={value} duration={1} suffix={suffix} />
                  ) : (
                    "0"
                  )}
                </h3>
                <h4 className="text-xs sm:text-sm lg:text-base">{label}</h4>
              </div>
            ))}
          </div>
        </div>

        {/* Download Button */}
        <div className="col-span-10 lg:col-span-3">
          <div className="download py-4 sm:py-5 border-y text-center uppercase text-primaryblue font-bold tracking-wide">
            <a href={brochureLink} download className="block">
              Download Brochure
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutProject;
