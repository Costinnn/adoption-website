import { getUserPosts } from "@/lib/getUserPosts";
import Post from "@/components/subcomponents/Post";

import "./InactivePosts.scss";

const ActivePosts = async () => {
  const allUserPosts = await getUserPosts();
  const inactivePosts = allUserPosts.filter((item) => item.isActive === false);

  return (
    <main className="section-narrow inactivePosts-page">
      <h2>Anunturi inactive</h2>
      <div className="container">
        {inactivePosts &&
          inactivePosts.map((post) => (
            <Post
              key={post.id}
              data={post}
              //   session={session}
              //   favoritesId={favoritesId}
            />
          ))}
      </div>
    </main>
  );
};

export default ActivePosts;
