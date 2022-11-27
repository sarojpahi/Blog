import type { NextPage } from "next";
import Head from "next/head";
import { Categories } from "../components/Categories";
import { PostCard } from "../components/PostCard";
import { PostWidget } from "../components/PostWidget";
import { getPosts } from "../services";

const Home: NextPage = ({ posts }: any) => {
  return (
    <div className="container mx-auto px-10 mb-8 bg-gray-300">
      <Head>
        <title>CMS Blog</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        <div className="lg:col-span-8 col-span-1">
          {posts?.map((post: any, i: number) => (
            <PostCard post={post.node} key={i} />
          ))}
        </div>
        <div className="lg:col-span-4 col-span-1">
          <div className="lg:sticky relative top-8">
            <PostWidget /> <Categories />
          </div>
        </div>
      </div>
    </div>
  );
};
export async function getStaticProps() {
  try {
    const posts = (await getPosts()) || [];
    return {
      props: { posts },
    };
  } catch (error) {
    console.log(error);
  }
}
export default Home;
