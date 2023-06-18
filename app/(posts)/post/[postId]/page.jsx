import Image from "next/image";

import { headers } from "next/headers";
import { getSession } from "@/lib/getSession";
import { getPost } from "@/lib/getPost";
import { getFavoriteIds } from "@/lib/getFavoriteIds";
import WishHeart from "@/components/client-components/WishHeart";
import PostActions from "@/components/client-components/PostActions";

import male from "@/public/icons/male.png";
import female from "@/public/icons/female.png";
import map from "@/public/images/map.jpg";
import userImg from "@/public/images/user.png";

import "./PostPage.scss";

// POST PAGE
const PostPage = async ({ params }) => {
  const session = await getSession(headers().get("cookie") ?? "");
  const currentPost = await getPost(params.postId);

  const { favoritesId } = session
    ? await getFavoriteIds()
    : { favoritesId: [] };

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
        {session ? (
          <WishHeart
            id={currentPost.id}
            session={session}
            favoritesId={favoritesId}
          />
        ) : (
          <Image
            src={currentPost.gender === "M" ? male : female}
            width={15}
            alt="gender"
          />
        )}
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
        <Image src={userImg} alt="user" width={50} height={50} />
        <span>{currentPost.userName}</span>
      </div>

      <div className="row3">
        <Image src={map} alt="location" width={100} height={100} />
        <br />
        <span>
          {currentPost.city}, {currentPost.county}
        </span>
      </div>
      {session && session.user.email === currentPost.userEmail && (
        <PostActions isActive={currentPost.isActive} postId={currentPost.id} />
      )}
    </main>
  );
};

export default PostPage;
