import MediaCenterAbout from "@/src/components/mediacenter/MediaCenterAbout";
import OnlineNews from "@/src/components/mediacenter/OnlineNews";
import PressKit from "@/src/components/mediacenter/PressKit";
import Image from "next/image";

export default function Page() {
  return (
    <div className="bg-[#FBF6F6] relative w-full">
      <MediaCenterAbout />
      <OnlineNews />
      <PressKit />

      <Image
        src="/assets/pattern-bg.png"
        alt="pattern background"
        width={1920}
        height={70}
        className="h-[70px] w-full object-cover"
        priority={false}
      />
    </div>
  );
}
