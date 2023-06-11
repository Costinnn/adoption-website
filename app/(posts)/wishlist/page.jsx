import { getDbPosts } from "@/lib/getDbPosts";
import Post from "@/components/subcomponents/Post";

import "./Wishlist.scss";

// WISHLIST PAGE
const Wishlist = async () => {
  const posts = await getDbPosts();
  console.log("wishlist");
  return (
    <main className="section-narrow wishlist-page">
      <h2>Anunturi favorite</h2>
      <div className="container">
        {posts && posts.map((post) => <Post key={post.id} data={post} />)}
      </div>
    </main>
  );
};

export default Wishlist;
