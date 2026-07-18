"use client";

import Link from "next/link";
import { posts } from "@/data/blog";
import { useState } from "react";


const POSTS_PER_PAGE = 6;


export default function BlogList() {


  const [visiblePosts, setVisiblePosts] = useState(
    POSTS_PER_PAGE
  );



  const loadMore = () => {

    setVisiblePosts((prev) =>
      prev + POSTS_PER_PAGE
    );

  };



  const displayedPosts =
    posts.slice(0, visiblePosts);



  return (

    <>


      {/* POSTS GRID */}

      <div className="grid md:grid-cols-2 gap-6 mt-10">


        {displayedPosts.map((post) => (


          <Link
            key={post.slug}
            href={`/blog/${post.slug}`}
            className="card block hover:shadow-lg transition"
          >


            <h2 className="text-xl font-bold text-[var(--primary)]">
              {post.title}
            </h2>



            <p className="mt-3 text-slate-600">
              {post.excerpt}
            </p>



            <span className="mt-4 inline-block text-[var(--accent)] font-medium">
              Read more →
            </span>


          </Link>


        ))}


      </div>



      {/* LOAD MORE BUTTON */}


      {visiblePosts < posts.length && (


        <div className="mt-12 text-center">


          <button

            onClick={loadMore}

            className="btn-primary"

          >

            Load More

          </button>


        </div>


      )}


    </>

  );

}