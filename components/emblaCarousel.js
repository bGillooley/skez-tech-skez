import React, { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";
import imageByIndex from "../utilities/imageByIndex";

export const EmblaCarousel = (props) => {
  const { slides } = props;
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: false,
    dragFree: true,
  });

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  return (
    <div className="embla overflow-hidden py-16">
      <div className="embla_viewport" ref={emblaRef}>
        <div className="embla__container flex">
          {slides.map((index) => (
            <div
              className="embla__slide grow-0 shrink-0 odd:basis-3/5 even:basis-2/5 pl-4 relative"
              key={index}>
              <Image
                className="embla__slide__img block w-full h-96 object-cover"
                src={imageByIndex(index)}
                alt="Picture of the author"
                width={500}
                height={380}
              />
            </div>
          ))}
        </div>
      </div>
      <button className="embla__prev" onClick={scrollPrev}>
        Prev
      </button>
      <button className="embla__next" onClick={scrollNext}>
        Next
      </button>
    </div>
  );
};
