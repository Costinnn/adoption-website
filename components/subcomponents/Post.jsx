import Image from "next/image";
import Link from "next/link";

import WishHeart from "../client-components/WishHeart";

import pin from "@/public/icons/pin.png";

import "./Post.scss";

const Post = ({ data, session, favoritesId, params }) => {
  return (
    <div className="post-item">
      <Link href={`/post/${data.id}`} className="img-link">
        <Image
          src={data.images[0]}
          alt={data.title}
          fill
          sizes="100vw"
          className="main-img"
        />
      </Link>
      <div className="info">
        <div className="row1">
          <span>{data.title}</span>
          {session && (
            <WishHeart
              id={data.id}
              session={session}
              favoritesId={favoritesId}
            />
          )}
        </div>
        <Link href={`/post/${data.id}`}>
          <p className="row2">{data.desc.slice(0, 120)}...</p>

          <div className="row3">
            <Image src={pin} width={15} alt="city" />
            <span>{data.city}</span>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Post;
