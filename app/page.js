import CategoriesNav from "@/components/CategoriesNav";
import PostList from "@/components/PostList";
import { getDbPosts } from "@/lib/getDbPosts";

import "./page.scss";

// HOMEPAGE
export default async function Home() {
  const posts = await getDbPosts();

  return (
    <main>
      <CategoriesNav />
      <PostList title={"Anunturi"} posts={posts} />
    </main>
  );
}
