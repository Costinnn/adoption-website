import Post from "./subcomponents/Post";
import "./PostList.scss";

const PostList = async ({ posts, title }) => {
  return (
    <div className="section-narrow posts">
      <h2>{title}</h2>
      <div className="container">
        {posts && posts.map((post) => <Post key={post.id} data={post} />)}
      </div>
    </div>
  );
};

export default PostList;
