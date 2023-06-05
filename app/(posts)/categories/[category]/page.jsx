import { getDbPosts } from "@/lib/getDbPosts";
import PostList from "@/components/PostList";
import CategoriesNav from "@/components/CategoriesNav";

// CATEGORIES PAGE
const Categories = async ({ params }) => {
  const posts = await getDbPosts();
  const currentPosts = posts.filter(
    (item) => item.category === params.category
  );
  return (
    <main className="section-narrow">
      <CategoriesNav />
      <PostList title={params.category} posts={currentPosts} />
    </main>
  );
};

export default Categories;
