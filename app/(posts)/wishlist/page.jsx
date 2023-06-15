import { getFavoritesPosts } from "@/lib/getFavoritesPosts";
import { headers } from "next/headers";
import { getSession } from "@/lib/getSession";
import { getFavoriteIds } from "@/lib/getFavoriteIds";
import Post from "@/components/subcomponents/Post";

import "./Wishlist.scss";

// WISHLIST PAGE
const Wishlist = async () => {
  const session = await getSession(headers().get("cookie") ?? "");

  if (!session.user.name) {
    return (
      <div className="section-narrow wishlist-page">
        <h2>Loading...</h2>
      </div>
    );
  } else {
    const {favoritesId} = await getFavoriteIds(session.user.email);
    const posts = await getFavoritesPosts(favoritesId);

    return (
      <main className="section-narrow wishlist-page">
        <h2>Anunturi favorite</h2>
        <div className="container">
          {posts &&
            posts.map((post) => (
              <Post
                key={post.id}
                data={post}
                session={session}
                favoritesId={favoritesId}
              />
            ))}
        </div>
      </main>
    );
  }
};

export default Wishlist;
