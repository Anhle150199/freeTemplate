import { Metadata } from "next";
import BlogData from "@/components/Blog/blogData";
import BlogItem from "@/components/Blog/BlogItem";
import Blog from "@/components/Blog";

export const metadata: Metadata = {
  title: "Next.js Starter Template for SaaS Startups - Solid SaaS Boilerplate",

  // other metadata
  description: "This is Home for Solid Pro"
};

export default function Home() {
  return (
    <main>
      <Blog
        blogData={BlogData}
       />
    </main>
  );
}
