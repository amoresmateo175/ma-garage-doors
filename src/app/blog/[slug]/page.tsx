import { posts } from "@/data/blog";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Phone } from "lucide-react";
import Image from "next/image";



export function generateStaticParams() {

  return posts.map((post) => ({
    slug: post.slug,
  }));

}



export async function generateMetadata({ params }: any) {

  const { slug } = await params;


  const post = posts.find(
    (post) => post.slug === slug
  );


  if (!post) {
    return {};
  }



  return {

    title: `${post.title} | MA Garage Doors Blog`,

    description: post.excerpt,


    alternates: {
      canonical:
        `https://magaragedoors.ca/blog/${post.slug}`,
    },


    openGraph: {

      title: post.title,

      description: post.excerpt,

      url:
        `https://magaragedoors.ca/blog/${post.slug}`,

      type: "article",

      siteName:
        "MA Garage Doors",

      images: [
        {
          url:
            "/images/logo.png",

          width: 1200,

          height: 630,

          alt:
            post.title,
        },
      ],

    },

  };

}





export default async function BlogPostPage({
  params,
}: any) {


  const { slug } = await params;



  const post = posts.find(
    (post) => post.slug === slug
  );



  if (!post) {

    return notFound();

  }



  return (

    <>


      <header className="border-b bg-white">


        <div className="container-custom h-20 flex items-center justify-between">


          {/* LOGO */}
          <Link href="/" className="flex items-center">
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





      <main className="container-custom py-20 max-w-4xl">


        <article>


          <h1 className="text-4xl font-bold text-[var(--primary)]">

            {post.title}

          </h1>



          <p className="mt-6 text-lg text-slate-600">

            {post.excerpt}

          </p>





          <div className="mt-10 prose prose-lg max-w-none">


            {post.content
              .split("\n")
              .map((line, index) => (

                <p key={index}>
                  {line}
                </p>

              ))}



          </div>



        </article>






        <div className="mt-12">


          <Link

            href="/blog"

            className="text-[var(--accent)] font-medium hover:underline"

          >

            ← Back to Blog

          </Link>


        </div>





        <div className="mt-16 p-8 bg-[var(--light)] border rounded-xl text-center">


          <h2 className="text-2xl font-bold text-[var(--primary)]">

            Need Garage Door Service?

          </h2>



          <p className="mt-2 text-slate-600">

            Contact MA Garage Doors for professional repair,
            installation and maintenance.

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