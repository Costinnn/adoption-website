import { getDbPosts } from "@/lib/getDbPosts";
import Image from "next/image";

import heartActive from "@/public/icons/heart-active.png";
import heartNoActive from "@/public/icons/heart-noactive.png";
import map from "@/public/images/map.jpg";
import user from "@/public/images/user.png";

import "./PostPage.scss";

// POST PAGE
const PostPage = async ({ params }) => {
  const posts = await getDbPosts();
  const currentPost = posts.filter((post) => post.id === params.postId)[0];

  return (
    <main className="section-narrow post-page">
      <div className="frame">
        <div className="images-container">
          {currentPost.images.map((item) => (
            <Image
              src={item}
              alt={currentPost.title}
              key={item}
              width={100}
              height={100}
            />
          ))}
        </div>
      </div>
      <span className="date">{String(currentPost.createdAt).slice(4, 21)}</span>

      <div className="row1">
        <h2>{currentPost.title}</h2>
        <Image src={heartNoActive} alt="wishlist" width={30} height={30} />
      </div>

      <div className="row2">
        <span className="item">{currentPost.category}</span>
        <span className="item">
          {currentPost.gender === "F" ? "Femela" : "Mascul"}
        </span>
        <span className="item">{currentPost.age} ani</span>
        <span className="item">{currentPost.breed}</span>
      </div>

      <p className="description">{currentPost.desc}</p>

      <div className="account">
        <Image src={user} alt="user" width={50} height={50} />
        <span>Mateo</span>
      </div>

      <div className="row3">
        <Image src={map} alt="location" width={100} height={100} />
        <br />
        <span>
          {currentPost.city}, {currentPost.county}
        </span>
      </div>
    </main>
  );
};

export default PostPage;
