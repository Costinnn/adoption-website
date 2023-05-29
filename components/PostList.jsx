import prismadb from "@/lib/prismadb";

import Post from "./subcomponents/Post";

import "./PostList.scss";

export async function getDbPosts() {
  const posts = await prismadb.post.findMany();
  return posts;
}

const PostList = async () => {
  const posts = await getDbPosts();
  return (
    <div className="section-narrow posts">
      <h2>Anunturi</h2>
      <div className="container">
        {posts && posts.map((post) => <Post key={post.id} data={post} />)}
      </div>
    </div>
  );
};

export default PostList;
