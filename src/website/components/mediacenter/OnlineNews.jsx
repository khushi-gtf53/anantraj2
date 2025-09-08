"use client";

import CommonHeading from "../common/CommonHeading";
import Link from "next/link";
import Image from "next/image";

const newsData = [
  {
    logo: "/assets/mediacenter/onlineNews/logo/1.webp",
    img: "/assets/mediacenter/onlineNews/img/1.webp",
    title:
      "Anant raj shares are up to 180% so far in 2024; motilal oswal sees further upside",
    date: "20 dec 2024",
    link: "#",
  },
  {
    logo: "/assets/mediacenter/onlineNews/logo/2.webp",
    img: "/assets/mediacenter/onlineNews/img/2.webp",
    title:
      "Anant raj cloud ropes in orange business for cloud and data center expansion in india",
    date: "19 dec 2024",
    link: "#",
  },
  {
    logo: "/assets/mediacenter/onlineNews/logo/3.webp",
    img: "/assets/mediacenter/onlineNews/img/3.webp",
    title:
      "Anant raj climbs 5%; hits new high on allotment of warrants to promoters",
    date: "17 dec 2024",
    link: "#",
  },
];

const OnlineNews = () => {
  return (
    <section id="news" className="online_news relative w-full mx-auto">
      <CommonHeading>online news</CommonHeading>
      <div className="news_sec lg:mt-14">
        {newsData.map((news, i) => (
          <Link key={i} href={news.link} className="block border-b border-black/30 last:border-b-0" aria-label="link">
            <div className="news grid grid-cols-12 lg:py-8 py-3">
              {/* Left Side */}
              <div className="col-span-12 md:col-span-6">
                <div className="sm:flex justify-between items-center">
                  <div className="logo">
                    <Image
                      src={news.logo}
                      alt={`${news.title} logo`}
                      width={150}
                      height={100}
                      className="object-contain lg:h-auto h-[70px]"
                    />
                  </div>
                  <div className="news_img mt-4 sm:mt-0 lg:w-[50%] w-full">
                    <Image
                      src={news.img}
                      alt={news.title}
                      width={300}
                      height={200}
                      className="object-contain w-full"
                    />
                  </div>
                </div>
              </div>

              {/* Right Side */}
              <div className="col-span-12 md:col-span-6">
                <div className="news sm:px-20 lg:py-10 py-5 flex flex-col justify-between w-full h-full">
                  <h2 className="title lg:text-xl text-[16px] lg:leading-[35px] leading-[28px] capitalize tracking-wider font-sangbleu">
                    {news.title}
                  </h2>
                  <div className="date mt-5 md:mt-0 flex items-center gap-2">
                    <div className="w-10 h-[1px] bg-black" />
                    <span className="tracking-wider uppercase">
                      {news.date}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default OnlineNews;
