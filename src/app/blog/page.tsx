import Link from "next/link";
import Image from "next/image";
import { Phone } from "lucide-react";

import BlogList from "./BlogList";


export default function BlogPage() {


  return (

    <>


      <header className="border-b bg-white">

        <div className="container-custom h-20 flex items-center justify-between">


          <Link
            href="/"
            className="flex items-center"
          >

            <Image

              src="/images/logo.svg"

              alt="MA Garage Doors"

              width={180}

              height={50}

              priority

              className="h-10 w-auto object-contain hover:scale-105 transition"

            />

          </Link>



          <a

            href="tel:+14374480053"

            className="btn-primary flex items-center gap-2"

          >

            <Phone size={16}/>

            Call Now


          </a>


        </div>

      </header>





      <main className="container-custom py-20">


        <h1 className="text-4xl font-bold text-[var(--primary)]">

          MA Garage Doors Blog

        </h1>



        <p className="mt-4 text-slate-600 max-w-2xl">

          Helpful guides and information about garage door repair,
          installation, maintenance, and troubleshooting.
          Learn what to do before calling a technician.

        </p>




        {/* BLOG POSTS */}

        <BlogList />






        <div className="mt-16">

          <Link

            href="/"

            className="text-[var(--accent)] font-medium hover:underline"

          >

            ← Back to MA Garage Doors Home

          </Link>

        </div>







        <div className="mt-16 p-8 bg-[var(--light)] border rounded-xl text-center">


          <h2 className="text-2xl font-bold text-[var(--primary)]">

            Need Garage Door Service?

          </h2>



          <p className="mt-2 text-slate-600">

            Call MA Garage Doors for fast residential and commercial repair.

          </p>



          <a

            href="tel:+14374480053"

            className="btn-primary inline-flex items-center gap-2 mt-5"

          >

            <Phone size={18}/>

            Call Now


          </a>


        </div>


      </main>


    </>

  );

}