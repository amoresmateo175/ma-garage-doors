"use client";

import { useEffect, useMemo, useState } from "react";
import Image from "next/image";

import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";


const images = [
  "/images/work1.webp",
  "/images/work2.webp",
  "/images/work3.webp",
  "/images/work4.webp",
  "/images/work5.webp",
  "/images/work6.webp",
  "/images/work7.webp",
  "/images/work8.webp",
];


export default function Gallery() {

  const [mounted, setMounted] = useState(false);


  const autoplay = useMemo(
    () =>
      Autoplay({
        delay: 4000,
        stopOnInteraction: false,
        stopOnMouseEnter: true,
      }),
    []
  );



  const [emblaRef] = useEmblaCarousel(
    {
      loop: true,
      align: "start",
      skipSnaps: false,
    },
    mounted ? [autoplay] : []
  );



  useEffect(() => {
    setMounted(true);
  }, []);



  return (

    <section
      id="gallery"
      className="section-padding bg-[var(--light)]"
    >

      <div className="container-custom text-center">


        <h2 className="section-title">
          Recent Projects
        </h2>


        <p className="section-subtitle mx-auto">
          Residential, commercial, and industrial overhead door installations and repairs completed by MA Garage Doors.
        </p>



        <div
          ref={emblaRef}
          className="overflow-hidden mt-14"
        >


          <div className="flex">


            {images.map((src, index) => (

              <div
                key={src}
                className="flex-[0_0_90%] sm:flex-[0_0_70%] md:flex-[0_0_45%] lg:flex-[0_0_33.333%] px-3"
              >


                <div
                  className="overflow-hidden rounded-2xl aspect-square"
                >


                  <Image
                    src={src}
                    alt={`Garage door project completed by MA Garage Doors ${index + 1}`}
                    width={600}
                    height={600}

                    priority={index === 0}

                    loading={
                      index === 0
                        ? "eager"
                        : "lazy"
                    }

                    sizes="(max-width: 640px) 90vw, (max-width: 768px) 70vw, (max-width: 1024px) 45vw, 33vw"

                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />


                </div>


              </div>

            ))}


          </div>


        </div>


      </div>


    </section>

  );
}