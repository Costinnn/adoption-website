import Post from "./subcomponents/Post";
import "./PostList.scss";

import { getSession } from "@/lib/getSession";
import { getUserFavorites } from "@/lib/getUserFavorites";
import { headers } from "next/headers";

const PostList = async ({ posts, title }) => {
  const session = await getSession(headers().get("cookie") ?? "");

  if (session && session.status === "loading") {
    console.log(session);
    return (
      <div className="section-narrow posts">
        <h2>Loading...</h2>
      </div>
    );
  } else {
    const user = await getUserFavorites("cxcoss@yahoo.com");
    const favoritesId = user.favoritesId;

    return (
      <div className="section-narrow posts">
        <h2>{title}</h2>
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
      </div>
    );
  }
};

export default PostList;
