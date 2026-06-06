import { posts } from "@/data/blog";
import { notFound } from "next/navigation";

export default function BlogPost({
  params,
}: {
  params: { slug: string };
}) {
  const post = posts.find((p) => p.slug === params.slug);

  if (!post) return notFound();

  return (
    <main className="container-custom py-20 max-w-3xl">
      <h1 className="text-4xl font-bold text-[var(--primary)]">
        {post.title}
      </h1>

      <p className="mt-6 text-slate-700 leading-relaxed whitespace-pre-line">
        {post.content}
      </p>

      <div className="mt-10 p-6 bg-[var(--light)] rounded-xl">
        <p className="font-semibold text-[var(--primary)]">
          Need fast garage door service?
        </p>

        <a
          href="tel:+14165551234"
          className="btn-primary inline-block mt-4"
        >
          Call MA Garage Doors
        </a>
      </div>
    </main>
  );
}