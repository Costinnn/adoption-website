import Post from "./subcomponents/Post";
import { getSession } from "@/lib/getSession";
import { getFavoriteIds } from "@/lib/getFavoriteIds";
import { headers } from "next/headers";

import "./PostList.scss";

const PostList = async ({ posts, title }) => {
  const session = await getSession(headers().get("cookie") ?? "");

  if (!session) {
    return (
      <div className="section-narrow posts">
        <h2>{title}</h2>
        <div className="container">
          {posts && posts.map((post) => <Post key={post.id} data={post} />)}
        </div>
      </div>
    );
  } else if (session) {
    const {favoritesId} = await getFavoriteIds(session.user.email);

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
