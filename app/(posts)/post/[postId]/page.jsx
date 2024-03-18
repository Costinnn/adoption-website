import Image from "next/image";
import Link from "next/link";

import { headers } from "next/headers";
import { getSession } from "@/lib/(user)/getSession";
import { getPost } from "@/lib/(post)/getPost";
import { getFavoriteIds } from "@/lib/(post)/getFavoriteIds";
import { getUserIdByEmail } from "@/lib/(user)/getUserIdByEmail";
import { getCurrentUserId } from "@/lib/(user)/getCurrentUserId";
import WishHeart from "@/components/client-components/WishHeart";
import PostActions from "@/components/client-components/PostActions";
import GoBack from "@/components/client-components/GoBack";
import SendMessageRedirect from "@/components/client-components/SendMessageRedirect";
import ImagesFrame from "@/components/client-components/ImagesFrame";

import userImg from "@/public/images/user.png";
import phoneImg from "@/public/icons/phone.png";
import mapImg from "@/public/icons/map.png";

import "./PostPage.scss";

// POST PAGE
const PostPage = async ({ params }) => {
  const session = await getSession(headers().get("cookie") ?? "");
  const currentPost = await getPost(params.postId);
  const otherUserId = session
    ? await getUserIdByEmail(currentPost.userEmail)
    : null;
  const currentUserId = session ? await getCurrentUserId() : null;

  const { favoritesId } = session
    ? await getFavoriteIds()
    : { favoritesId: [] };

  return (
    <main className="section-wide post-page">
      <GoBack width="60" height="60" customClass="go-back" />
      <ImagesFrame postImages={currentPost.images} />
      <span className="date">{String(currentPost.createdAt).slice(4, 21)}</span>
      <div className="title-row">
        <h2>{currentPost.title}</h2>
        {session && (
          <WishHeart
            id={currentPost.id}
            session={session}
            favoritesId={favoritesId}
          />
        )}
      </div>
      <div className="categories">
        <span className="item">{currentPost.category}</span>
        <span className="item">
          {currentPost.gender === "F" ? "Femela" : "Mascul"}
        </span>
        <span className="item">{currentPost.age} ani</span>
        <span className="item">{currentPost.breed}</span>
      </div>
      <p className="description">{currentPost.desc}</p>
      <div className="account">
        <div className="box">
          <div>
            <Image src={userImg} alt="user" width={35} height={35} />
            <span>{currentPost.userName}</span>
          </div>
          <div>
            <Image src={mapImg} alt="user" width={30} height={30} />
            <span>
              {currentPost.city}, {currentPost.county}
            </span>
          </div>
        </div>

        {session && session.user.email !== currentPost.userEmail && (
          <div className="contact">
            <SendMessageRedirect
              otherUserId={otherUserId}
              currentUserId={currentUserId}
              postId={params.postId}
            />
            <a href={`tel:${currentPost.phone}`}>
              <Image src={phoneImg} alt="call" width={15} height={15} /> Suna
            </a>
          </div>
        )}
        {!session && (
          <Link href="/login" className="login-redirect">
            Intra in contul tau pentru a contacta aceasta persoana.
          </Link>
        )}
      </div>
      {session && session.user.email === currentPost.userEmail && (
        <PostActions isActive={currentPost.isActive} postId={currentPost.id} />
      )}{" "}
    </main>
  );
};

export default PostPage;
