import { notFound } from "next/navigation";
import { blogs } from "../../../lib/blog-data";
import BlogPostContent from "./BlogPostContent";

export default async function BlogPostDetail({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const blog = blogs.find(b => b.slug === slug);

  if (!blog) {
    notFound();
  }

  return <BlogPostContent blog={blog} blogs={blogs} />;
}
