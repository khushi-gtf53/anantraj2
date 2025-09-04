"use client";

import { useState } from "react";
import { SlArrowDown } from "react-icons/sl";
import CommonHeading from "../common/CommonHeading";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import Image from "next/image";

const basepath = "/assets/csr/gallery";

const CsrGallery = () => {
  const [showAll, setShowAll] = useState(false);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [openIndex, setOpenIndex] = useState(0);

  const galleryData = [
    { img: "1.webp", alt: "Gallery 1" },
    { img: "2.webp", alt: "Gallery 2" },
    { img: "3.webp", alt: "Gallery 3" },
    { img: "4.webp", alt: "Gallery 4" },
    { img: "5.webp", alt: "Gallery 5" },
    { img: "6.webp", alt: "Gallery 6" },
    { img: "7.webp", alt: "Gallery 7" },
    { img: "8.webp", alt: "Gallery 8" },
    { img: "9.webp", alt: "Gallery 9" },
    { img: "10.webp", alt: "Gallery 10" },
    { img: "11.webp", alt: "Gallery 11" },
    { img: "12.webp", alt: "Gallery 12" },
    { img: "13.webp", alt: "Gallery 13" },
    { img: "14.webp", alt: "Gallery 14" },
    { img: "15.webp", alt: "Gallery 15" },
    { img: "16.webp", alt: "Gallery 16" },
    { img: "17.webp", alt: "Gallery 17" },
    { img: "18.webp", alt: "Gallery 18" },
    { img: "19.webp", alt: "Gallery 19" },
    { img: "20.webp", alt: "Gallery 20" },
    { img: "21.webp", alt: "Gallery 21" },
    { img: "22.webp", alt: "Gallery 22" },
    { img: "23.webp", alt: "Gallery 23" },
    { img: "24.webp", alt: "Gallery 24" },
    { img: "25.webp", alt: "Gallery 25" },
    { img: "26.webp", alt: "Gallery 26" },
    { img: "27.webp", alt: "Gallery 27" },
  ];

  // Lightbox needs full slides array
  const slides = galleryData.map((g) => ({
    src: `${basepath}/${g.img}`,
    alt: g.alt,
  }));

  const imagesToShow = showAll ? galleryData : galleryData.slice(0, 6);

  return (
    <>
      <section className="csr_gallery relative bg-[#FBF6F6] w-full lg:pt-18">
        <CommonHeading>a glimpse of our initiatives</CommonHeading>

        <div className="gallery lg:pt-20 pt-5">
          <div className="grid lg:grid-cols-3 grid-cols-2 gap-5">
            {imagesToShow.map((gallery, i) => (
              <div key={i} className="galleryImg">
                <Image
                  src={`${basepath}/${gallery.img}`}
                  alt={gallery.alt || `Gallery image ${i + 1}`}
                  layout="responsive"
                  width={600}
                  height={400}
                  className="object-cover"
                />
              </div>
            ))}
          </div>

          {!showAll && (
            <div
              className="explore w-full flex flex-col items-center space-y-2 lg:pt-12 pt-7 justify-center cursor-pointer"
              onClick={() => setShowAll(true)}
            >
              <SlArrowDown className="lg:text-[20px] text-[18px]" />
              <div className="text-primaryblue uppercase font-bold">
                explore more images
              </div>
            </div>
          )}
        </div>
      </section>

      <Lightbox
        open={lightboxOpen}
        close={() => setLightboxOpen(false)}
        slides={slides}
        index={openIndex}
      />
    </>
  );
};

export default CsrGallery;
