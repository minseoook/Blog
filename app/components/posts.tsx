import Link from "next/link";
import { formatDate, getBlogPosts } from "app/blog/utils";

export function BlogPosts() {
  let allBlogs = getBlogPosts();

  return (
    <div>
      {allBlogs
        .sort((a, b) => {
          if (
            new Date(a.metadata.publishedAt) > new Date(b.metadata.publishedAt)
          ) {
            return -1;
          }
          return 1;
        })
        .map((post) => (
          <Link
            key={post.slug}
            className="flex flex-col space-y-1 mb-10"
            href={`/blog/${post.slug}`}
          >
            <div className="flex flex-col space-y-2">
              <div className="text-sm">
                {formatDate(post.metadata.publishedAt, false)}
              </div>

              <h2 className="text-2xl font-semibold">{post.metadata.title}</h2>

              <p className="leading-relaxed">{post.metadata.summary}</p>
            </div>
          </Link>
        ))}
    </div>
  );
}
