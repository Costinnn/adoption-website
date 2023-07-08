import { getUserPosts } from "@/lib/getUserPosts";
import Post from "@/components/subcomponents/Post";

import "./ActivePosts.scss";
import GoBack from "@/utils/GoBack";

const ActivePosts = async () => {
  const allUserPosts = await getUserPosts();
  const activePosts = allUserPosts.filter((item) => item.isActive === true);

  return (
    <main className="section-narrow activePosts-page">
      <div className="header">
        <GoBack width="25" height="25" customClass="go-back" />
        <h2>Anunturi active</h2>
      </div>
      <div className="container">
        {activePosts &&
          activePosts.map((post) => (
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
