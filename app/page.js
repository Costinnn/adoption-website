import CategoriesNav from "@/components/CategoriesNav";
import PostList from "@/components/PostList";
import { getDbPosts } from "@/lib/getDbPosts";

import "./page.scss";

// HOMEPAGE
export default async function Home() {
  const posts = await getDbPosts();
  const activePosts = posts
    .filter((item) => item.isActive === true)
    .sort(() => 0.5 - Math.random());

  return (
    <main>
      <CategoriesNav />
      <PostList title={"Anunturi"} posts={activePosts} />
    </main>
  );
}
