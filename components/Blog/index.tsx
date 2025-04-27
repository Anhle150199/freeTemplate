import React from "react";
import SectionHeader from "../Common/SectionHeader";
import BlogItem from "./BlogItem";
import BlogData from "./blogData";
import SearchComponent from "../Common/SearchComponent";
import Link from "next/link";
import { Blog as BlogType } from "@/types/blog";
type BlogProps = {
  headerInfo?: {
    title: string;
    subtitle: string;
    description: string;
  },
  blogData?: BlogType[]
}
const Blog = async ({ headerInfo, blogData }: BlogProps) => {
  return (
    <section className="py-20 lg:py-25 xl:py-30">
      <div className="mx-auto max-w-c-1315 px-4 md:px-8 xl:px-0">
        {headerInfo ?
          <div className="animate_top mx-auto text-center">
            <SectionHeader
              headerInfo={headerInfo}
            />
          </div> :
          <div className=" text-center my-4  w-full flex wra gap-2 justify-center items-center flex-wrap">
            <strong> #Tranding: &nbsp; &nbsp; </strong>
            <Link className="terms-tranding" href="/tag/arrow/">#arrow</Link>
            <Link className="terms-tranding" href="/tag/auto-resized/">#auto-resized</Link>
            <Link className="terms-tranding" href="/tag/background/">#background</Link>
            <Link className="terms-tranding" href="/tag/box/">#box</Link>
            <Link className="terms-tranding" href="/tag/bubbles/">#bubbles</Link>
            <Link className="terms-tranding" href="/tag/call-outs/">#call outs</Link>
          </div>
        }
        <SearchComponent />
      </div>

      <div className="mx-auto mt-15 max-w-c-1280 px-4 md:px-8 xl:mt-20 xl:px-0">
        <div className="grid grid-cols-1 gap-7.5 md:grid-cols-2 lg:grid-cols-3 xl:gap-10">
          {blogData?.map((blog, key) => (
            <BlogItem blog={blog} key={key} />
          ))}
        </div>
        {(!blogData || blogData?.length === 0 )&& (
          <div className="flex justify-center items-center h-96">
            <strong className="text-2xl font-bold text-gray-500">
              Data not found
            </strong> 
          </div>
        )}
      </div>
    </section>
  );
};

export default Blog;
