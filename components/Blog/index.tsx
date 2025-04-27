import React from "react";
import SectionHeader from "../Common/SectionHeader";
import BlogItem from "./BlogItem";
import BlogData from "./blogData";
import SearchComponent from "../Common/SearchComponent";
import Link from "next/link";

const Blog = async () => {
  return (
    <section className="py-20 lg:py-25 xl:py-30">
      <div className="mx-auto max-w-c-1315 px-4 md:px-8 xl:px-0">
        <div className="animate_top mx-auto text-center">
          <SectionHeader
            headerInfo={{
              title: `Home`,
              subtitle: `Home/pr-templates/logo-stings`,
              description: ``,
            }}
          />
        </div>          
        <div className="animate_top mx-auto text-center my-2 w-full flex gap-2 justify-center">
          <strong> #Tranding: &nbsp; &nbsp; </strong>
          <Link className="terms-tranding" href="/tag/arrow/">arrow</Link>  
          <Link className="terms-tranding" href="https://aedownload.com/tag/auto-resized/">auto-resized</Link>  
          <Link className="terms-tranding" href="https://aedownload.com/tag/background/">background</Link>  
          <Link className="terms-tranding" href="https://aedownload.com/tag/box/">box</Link>  
          <Link className="terms-tranding" href="https://aedownload.com/tag/bubbles/">bubbles</Link>  
          <Link className="terms-tranding" href="https://aedownload.com/tag/call-outs/">call outs</Link> 
        </div>
        <SearchComponent />

        {/* <!-- Section Title End --> */}
      </div>

      <div className="mx-auto mt-15 max-w-c-1280 px-4 md:px-8 xl:mt-20 xl:px-0">
        <div className="grid grid-cols-1 gap-7.5 md:grid-cols-2 lg:grid-cols-3 xl:gap-10">
          {BlogData.map((blog, key) => (
            <BlogItem blog={blog} key={key} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
