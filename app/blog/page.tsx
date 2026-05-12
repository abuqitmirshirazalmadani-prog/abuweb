import { blogs } from "../../lib/blog-data";
import BlogListingContent from "./BlogListingContent";

export default function BlogListingPage() {
  // In a real app, you might fetch data here:
  // const blogs = await db.blogs.findMany();
  
  return <BlogListingContent blogs={blogs} />;
}
