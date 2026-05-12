import { blogs } from "../../lib/blog-data";
import BlogListingContent from "./BlogListingContent";

export default function BlogListingPage() {
  return <BlogListingContent blogs={blogs} />;
}
