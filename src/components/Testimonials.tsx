"use client";

import { useEffect, useMemo, useState } from "react";

import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

import { testimonials } from "@/data/testimonials";


export default function Testimonials() {


  const [mounted, setMounted] = useState(false);



  const autoplay = useMemo(
    () =>
      Autoplay({
        delay: 4500,
        stopOnInteraction: false,
        stopOnMouseEnter: true,
      }),
    []
  );



  const [emblaRef] = useEmblaCarousel(
    {
      loop: true,
      align: "start",
    },

    mounted
      ? [autoplay]
      : []
  );



  useEffect(() => {
    setMounted(true);
  }, []);




  return (

    <section className="section-padding">


      <div className="container-custom text-center">


        <h2 className="section-title">
          What Clients Say
        </h2>



        <p className="section-subtitle mx-auto">
          Real feedback from residential and commercial customers across the Greater Toronto Area.
        </p>




        {/* CAROUSEL */}

        <div
          ref={emblaRef}
          className="overflow-hidden mt-14"
        >


          <div className="flex">


            {testimonials.map((testimonial) => (


              <div
                key={testimonial.name}
                className="flex-[0_0_90%] sm:flex-[0_0_70%] md:flex-[0_0_50%] lg:flex-[0_0_33.333%] px-3"
              >


                <div
                  className="card text-left h-full"
                >


                  {/* STARS */}

                  <div className="mb-4 text-yellow-500">
                    ★★★★★
                  </div>




                  {/* REVIEW */}

                  <p className="text-slate-600 leading-relaxed">
                    "{testimonial.text}"
                  </p>




                  {/* NAME */}

                  <h4 className="mt-5 font-bold text-[var(--primary)]">
                    {testimonial.name}
                  </h4>



                  <p className="text-sm text-slate-500 mt-1">
                    MA Garage Doors Customer
                  </p>



                </div>


              </div>


            ))}


          </div>


        </div>


      </div>


    </section>

  );

}