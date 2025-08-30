"use client";

import CommonHeading from "../common/CommonHeading"

const CsrGallery = () => {
  return (
    <section className="csr_gallery relative bg-[#FBF6F6] w-full">
        <div className="wrapper">
            <CommonHeading>a glimpse of our initiatives</CommonHeading>

            <div className="gallery">
                <div className="grid grid-cols-4 gap-5">
                    <div className="galleryImg">
                        {/* <img src="" alt="" /> */}
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default CsrGallery