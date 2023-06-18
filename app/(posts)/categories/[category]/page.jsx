import { getCategory } from "@/lib/getCategory";
import PostList from "@/components/PostList";
import CategoriesNav from "@/components/CategoriesNav";

// CATEGORIES PAGE
const Categories = async ({ params }) => {
  const currentPosts = await getCategory(params.category);

  return (
    <main className="section-narrow">
      <CategoriesNav />
      <PostList title={params.category} posts={currentPosts} />
    </main>
  );
};

export default Categories;
