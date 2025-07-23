import dynamic from "next/dynamic";

import AppData from "@data/app.json";
import PopularsPostsData from "@data/sliders/popular-posts.json";

import Pagination from '@components/Pagination';
import PageBanner from "@components/PageBanner";
import PopularPosts from "@components/sliders/PopularPosts";

import { getPaginatedPostsData, getFeaturedPostsData } from "@library/posts";

const BlogPaginated = dynamic( () => import("@components/blog/BlogPaginated"), { ssr: false } );

export const metadata = {
  title: {
		default: "Blog 2",
	},
  description: AppData.settings.siteDescription,
}

async function Blog() {
  const populars = await getAllPupulars();
  const postsData = await getAllPosts();

  return (
    <>
      <PageBanner pageTitle={"Book of recipes and <br>cooking tips"} description={"Consectetur numquam poro nemo veniam<br>eligendi rem adipisci quo modi."} breadTitle={"Blog"} type={2} />

      {/* blog list */}
      <section className="sb-blog-list sb-p-90-90">
        <div className="sb-bg-1">
          <div></div>
        </div>
        <div className="container">
          <div className="text-center sb-mb-60">
            <h2 className="sb-mb-30">Latest <span>publications</span></h2>
            <p className="sb-text">Consectetur numquam poro nemo veniam<br/>eligendi rem adipisci quo modi.</p>
          </div>

          <BlogPaginated
            items={postsData.posts}
            columns={2}
          />

          <div>
            <Pagination
              currentPage={postsData.currentPage}
              totalItems={postsData.totalPosts}
              perPage={AppData.settings.perPage}
              renderPageLink={(page) => `/blog/page/${page}`}
            />
          </div>
        </div>
      </section>
      {/* blog list end */}

      <PopularPosts posts={populars} />
    </>
  );
};
export default Blog;

async function getAllPupulars() {
  const popularsData = await getFeaturedPostsData( PopularsPostsData.featured )

  return popularsData
}

async function getAllPosts() {
  const { posts, total } = getPaginatedPostsData( AppData.settings.perPage, 1 );

  return {
    posts: posts,
    totalPosts: total,
    currentPage: 1
  }
}