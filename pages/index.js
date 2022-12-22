import { EmblaCarousel } from "../components/emblaCarousel";
import Image from "next/image";

const SLIDE_COUNT = 4;
const SLIDES = Array.from(Array(SLIDE_COUNT).keys());

export default function Home() {
  return (
    <>
      <div className="relative w-full h-screen">
        <Image
          src="/static/windmill-skerries-dublin.jpg"
          width={1460}
          height={822}
          alt="Skez"
          className="w-full h-full object-cover object-left"
        />
      </div>
      <EmblaCarousel slides={SLIDES} />
    </>
  );
}
