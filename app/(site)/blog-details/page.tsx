import RelatedPost from "@/components/Blog/RelatedPost";
import SharePost from "@/components/Blog/SharePost";
import SearchComponent from "@/components/Common/SearchComponent";
import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Blog Details Page - Solid SaaS Boilerplate",

  // other metadata
  description: "This is Blog details page for Solid Pro"
};

const SingleBlogPage = async () => {
  return (
    <>
      <section className="pb-20 pt-35 lg:pb-25 lg:pt-45 xl:pb-30 xl:pt-50">
        <div className="mx-auto max-w-c-1390 px-4 md:px-8 2xl:px-0">
          <div className="flex flex-col-reverse gap-7.5 lg:flex-row xl:gap-12.5">
            <div className="md:w-1/2 lg:w-[32%]">
              <SearchComponent />
              <RelatedPost />
            </div>

            <div className="lg:w-2/3">
              <div className="animate_top rounded-md border border-stroke bg-white p-7.5 shadow-solid-13 dark:border-strokedark dark:bg-blacksection md:p-10">
                <div className="mb-10 w-full overflow-hidden ">
                  <div className=" aspect-97/60 w-full sm:aspect-97/44">
                    <video
                      src="https://previews.customer.envatousercontent.com/h264-video-previews/f30afcce-685b-49f6-950d-36e0a2dde021/56101194.mp4"
                      className="rounded-md"
                      width="100%"
                      height="100%"
                      controls
                    ></video>
                  </div>
                </div>

                <h2 className="mb-5 mt-11 !text-3xl font-semibold text-black dark:text-white 2xl:text-sectiontitle2">
                  Kobe Steel plant that supplied
                </h2>

                <ul className="mb-9 flex flex-wrap gap-5 2xl:gap-7.5">

                  <li>
                    <span className="text-black dark:text-white">
                      Published On: July 30, 2023
                    </span>{" "}
                  </li>
                  <li>
                    <span className="text-black dark:text-white">
                      Category:
                    </span>
                    Events
                  </li>
                </ul>

                <div className="blog-details">
                  {/* Detail */}
                </div>

                <SharePost />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SingleBlogPage;
