"use client";

import Link from "next/link";
import Image from "next/image";
import React, { useState } from "react";

const Footer = () => {
  const [isExploreOpen, setIsExploreOpen] = useState(false);

  const toggleExplore = () => setIsExploreOpen((prev) => !prev);

  const exploreLinks = [
    {
      title: "Company",
      links: [
        { label: "About Us", href: "/about" },
        { label: "Investors", href: "/investors" },
        { label: "NRI Corner", href: "/nri-corner", expand: true },
        { label: "NRI Investors", href: "/nri-investors", expand: true },
      ],
    },
    {
      title: "Services",
      links: [
        { label: "Residential", href: "/residential" },
        { label: "Commercial", href: "/commercial" },
        { label: "EMI Calculator", href: "/emi-calculator", expand: true },
        { label: "CSR", href: "/csr" , expand : true},
        { label: "Gallery", href: "/gallery", expand : true },
        { label: "Testimonials", href: "/testimonials", expand: true },
      ],
    },
    {
      title: "Projects",
      links: [
        { label: "Blogs", href: "/blogs" }, 
        { label: "Contact Us", href: "/contact" }, 
        { label: "Career", href: "/career", expand: true }, 
        { label: "Property Investment", href: "/property-investment", expand: true } 
      ],
    },

    {
      title: "More",
      links: [
        { label: "Data Centers", href: "/data-centers" },
        { label: "Hospitality", href: "/hospitality" },
        { label: "Home Loans", href: "/home-loans", expand: true },
        { label: "Tax Benefits", href: "/tax-benefits", expand: true },
      ],
    },
  ];

  return (
    <footer>
      {/* Explore Section */}
      <div className="px-5 lg:px-24 pb-16">
        <div className="flex flex-wrap justify-between items-center border-b border-black">
          <div className="basis-[40%] lg:basis-[80%]"></div>
          <button
            aria-expanded={isExploreOpen}
            onClick={toggleExplore}
            className="uppercase cursor-pointer basis-[60%] lg:basis-[20%] justify-end tracking-[1px] text-sm lg:text-base flex items-center"
          >
            Explore More Links
            <Image
              src="/assets/down-arrow.png"
              width={18}
              height={18}
              className={`ml-2 transition-transform ${isExploreOpen ? "rotate-180" : ""
                }`}
              alt="Expand"
            />
          </button>
        </div>

<<<<<<< HEAD
        <div className="mt-10 ">
          <div className="text-[13px]  hidden lg:flex justify-between  lg:text-[16px]">
            <div>
              {" "}
              <div className="flex  flex-col space-y-2">
                <span>Copyright © 2025</span>
                <span>Anant Raj Limited</span>
              </div>
              {isExploreOpen && (
                <div className="flex mt-[20px] flex-col space-y-2">
                  <Link href="blogs">
                    <span className="mr-2">&gt;</span>
                    Blogs
                  </Link>
                  <Link href="contactus">
                    <span className="mr-2">&gt;</span>
                    Contact us
                  </Link>
                </div>
              )}
              {isExploreOpen && (
                <div className="flex  mt-[20px] flex-col space-y-2">
                  <Link href="careers">
                    <span className="mr-2">&gt;</span>
                    Careers
                  </Link>
                </div>
              )}
            </div>
            <div>
              <div className="flex  flex-col space-y-2">
                <Link href="">
                  <span className="mr-2">&gt;</span>
                  Residential
                </Link>
                <Link href="">
                  <span className="mr-2">&gt;</span>
                  Commercial
                </Link>
              </div>
              {isExploreOpen && (
                <div>
                  {" "}
                  {isExploreOpen && (
                    <div className="flex  mt-[20px] flex-col space-y-2">
                      <Link href="csr">
                        <span className="mr-2">&gt;</span>
                        CSR
                      </Link>
                    </div>
                  )}
                  {isExploreOpen && (
                    <div className="flex  mt-[20px] flex-col space-y-2">
                      <Link href="gallery">
                        <span className="mr-2">&gt;</span>
                        Gallery
                      </Link>
                    </div>
                  )}
                </div>
              )}
            </div>

            <div>
              {" "}
              <div className="flex  flex-col space-y-2">
                <Link href="">
                  <span className="mr-2">&gt;</span>
                  Data Centers
                </Link>
                <Link href="">
                  <span className="mr-2">&gt;</span>
                  Hospitality
                </Link>
              </div>
              {isExploreOpen && (
                <div className="flex mt-[20px] flex-col space-y-2">
                  {/* <Link href="">
                    <span className="mr-2">&gt;</span>
                    Tax Benefits
                  </Link> */}
                </div>
              )}
            </div>
            <div>
              <div className="flex  flex-col space-y-2">
                <Link href="about">
                  <span className="mr-2">&gt;</span>
                  About Us
                </Link>
                <Link href="investors">
                  <span className="mr-2">&gt;</span>
                  Investors
                </Link>
              </div>
              {/* {isExploreOpen && (
                <div className="flex mt-[20px] flex-col space-y-2">
                  <Link href="">
                    <span className="mr-2">&gt;</span>
                    NRI Corner
                  </Link>
                  <Link href="">
                    <span className="mr-2">&gt;</span>
                    NRI Investors
                  </Link>
                </div>
              )} */}
            </div>
          </div>
          {/* mobile links */}
          <div className="text-[12px]  lg:hidden flex justify-between  lg:text-[16px]">
            <div>
              <div className="flex  flex-col space-y-2">
                <Link href="">
                  <span className="mr-2">&gt;</span>
                  Blogs
                </Link>
                <Link href="">
                  <span className="mr-2">&gt;</span>
                  Contact us
                </Link>
              </div>

              {isExploreOpen && (
                <div className="flex  mt-[20px] flex-col space-y-2">
                  <Link href="">
                    <span className="mr-2">&gt;</span>
                    Career
                  </Link>
                  <Link href="">
                    <span className="mr-2">&gt;</span>
                    CSR
                  </Link>
                </div>
              )}
              {isExploreOpen && (
                <div className="flex  mt-[20px] flex-col space-y-2">
                  <Link href="">
                    <span className="mr-2">&gt;</span>
                    Gallery
                  </Link>
                  <Link href="">
                    <span className="mr-2">&gt;</span>
                    Testimonials
                  </Link>
                </div>
              )}
            </div>
            <div>
              <div className="flex  flex-col space-y-2">
                <Link href="projects">
                  <span className="mr-2">&gt;</span>
                  Residential
                </Link>
                <Link href="projects">
                  <span className="mr-2">&gt;</span>
                  Commercial
                </Link>
              </div>

              <div>
                {" "}
                {isExploreOpen && (
                  <div className="flex  mt-[20px] flex-col space-y-2">
                    <Link href="">
=======
        {/* Links */}
        <div className="mt-10 grid grid-cols-2 lg:grid-cols-4 gap-8 text-sm lg:text-base">
          {exploreLinks.map((section) => (
            <div key={section.title}>
              <div className="flex flex-col space-y-2">
                {section.links
                  .filter((l) => !l.expand || isExploreOpen)
                  .map((link) => (
                    <Link key={link.label} href={link.href}>
>>>>>>> f7b7a2c17f40252c6808bc20fa9a3710289877e4
                      <span className="mr-2">&gt;</span>
                      {link.label}
                    </Link>
<<<<<<< HEAD
                  </div>
                )}
                {isExploreOpen && (
                  <div className="flex  mt-[20px] flex-col space-y-2">
                    <Link href="">
                      <span className="mr-2">&gt;</span>
                      NRI Investors
                    </Link>
                    <Link href="">
                      <span className="mr-2">&gt;</span>
                      NRI Corner
                    </Link>
                  </div>
                )}
=======
                  ))}
>>>>>>> f7b7a2c17f40252c6808bc20fa9a3710289877e4
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Quote Section */}
      <div className="bg-[#FBF6F6] px-5 lg:px-24 py-6">
        <div className="flex flex-col lg:flex-row items-center justify-between space-y-8 lg:space-y-0">
          <Image
            src="/assets/footer-logo-1.png"
            width={200}
            height={100}
            className="h-[60px] lg:h-[100px] object-contain"
            alt="Anant Raj Logo"
          />

          <div className="lg:hidden">
            <Image
              src="/assets/img-1.png"
              width={200}
              height={157}
              alt="Portrait"
              className="h-[130px] object-contain grayscale"
            />
          </div>

          <blockquote className="flex-1 text-center lg:px-8">
            <p className="text-base font-normal tracking-wide leading-relaxed">
              " WE PLEDGE TO UPHOLD AND CONTINUE
            </p>
            <p className="text-base font-bold tracking-wide leading-relaxed mt-1">
              YOUR LEGACY IN THE SAME SPIRIT "
            </p>
          </blockquote>

          <div className="hidden lg:block">
            <Image
              src="/assets/img-1.png"
              width={200}
              height={157}
              alt="Portrait"
              className="h-[157px] object-contain grayscale"
            />
          </div>
        </div>

        <hr className="border-black my-5" />

        {/* Contact & Social */}
        <div className="flex flex-col lg:flex-row justify-between items-center space-y-4 lg:space-y-0">
          <div className="uppercase text-sm tracking-wide">
            <a href="tel:+911143034400" className="hover:underline">
              +91-11-43034400
            </a>
            <a href="tel:+918929800666" className="ml-5 hover:underline">
              +91 89298 00666
            </a>
          </div>

          <div className="flex space-x-6">
            {[
              { href: "https://www.facebook.com/AnantRajLimited2020", icon: "facebook" },
              { href: "https://www.instagram.com/anantrajlimited/?hl=en", icon: "instagram" },
              { href: "https://x.com/anantrajlimited", icon: "x" },
              { href: "https://www.linkedin.com/company/anantrajltd/?originalSubdomain=in", icon: "linkedin" },
              { href: "https://www.youtube.com/@ARLGurugram", icon: "youtube" },
            ].map(({ href, icon }) => (
              <Link key={icon} href={href} target="_blank" rel="noopener noreferrer">
                <Image
                  src={`/assets/${icon}.png`}
                  width={24}
                  height={24}
                  alt={icon}
                  className="object-contain"
                />
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-white flex flex-col lg:flex-row px-5 lg:px-24 text-xs py-3 uppercase justify-between items-center space-y-3 lg:space-y-0">
        <p className="lg:hidden text-base tracking-wide">
          Copyright © 2025 Anant Raj Ltd
        </p>
        <p className="tracking-wide">Crafted by GTF Technologies</p>
        <div>
          <span>Privacy Policy</span>
          <span className="mx-2">|</span>
          <span>Disclaimer</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
