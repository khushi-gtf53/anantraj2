"use client";
import { useState, useRef, useEffect } from "react";
import { SlArrowDown, SlArrowUp } from "react-icons/sl";
import gsap from "gsap";

const Accordion = ({ label, children, isOpen, onClick }) => {
  const contentRef = useRef(null);

  useEffect(() => {
    if (!contentRef.current) return;

    if (isOpen) {
      gsap.fromTo(
        contentRef.current,
        { height: 0, autoAlpha: 0 },
        {
          height: "auto",
          padding: 10,
          autoAlpha: 1,
          duration: 0.6,
          ease: "power2.out",
          clearProps: "height",
        }
      );
    } else {
      gsap.to(contentRef.current, {
        height: 0,
        padding: 0,
        autoAlpha: 0,
        duration: 0.4,
        ease: "power2.in",
      });
    }
  }, [isOpen]);

  return (
    <div className="lg:mb-10 mb-[30px]">
      {/* Accordion Header */}
      <div
        className="top_nav cursor-pointer py-[00px] lg:py-5 flex lg:gap-[0] gap-[15px] font-sangbleu uppercase"
        onClick={onClick}
      >
        <div className="lg:w-[25%]">
          <h3 className="lg:text-lg text-[14px] tracking-wider">{label}</h3>
        </div>
        <div className="w-[65%] h-[1px] bg-black mt-[10px]" />
        <div className="w-[10%] flex justify-center lg:mb-0 mb-[20px]">
          {isOpen ? (
            <SlArrowUp className="lg:text-[30px] text-[20px]" />
          ) : (
            <SlArrowDown className="lg:text-[30px] text-[20px]" />
          )}
        </div>
      </div>

      {/* Accordion Content */}
      <div
        ref={contentRef}
        style={{ overflow: "hidden", height: 0, opacity: 0 }}
        className="highlights_section w-full lg:pt-10 relative"
      >
        {children}
      </div>
    </div>
  );
};

export default Accordion;
