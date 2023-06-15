import Image from "next/image";
import Link from "next/link";

import WishHeart from "../client-components/WishHeart";

import male from "@/public/icons/male.png";
import female from "@/public/icons/female.png";
import pin from "@/public/icons/pin.png";
import breed from "@/public/icons/breed.png";
import category from "@/public/icons/category.png";

import "./Post.scss";

const Post = ({ data, session, favoritesId, params }) => {
  return (
    <div className="post-item">
      <Link href={`/post/${data.id}`}>
        <Image
          src={data.images[0]}
          alt={data.title}
          width={100}
          height={100}
          className="main-img"
        />
      </Link>
      <div className="info">
        <div className="row1">
          <span>{data.title}</span>
          <Image
            src={data.gender === "M" ? male : female}
            width={15}
            alt="gender"
          />
          {session && (
            <WishHeart
              id={data.id}
              session={session}
              favoritesId={favoritesId}
            />
          )}
        </div>
        <Link href={`/post/${data.id}`}>
          <div className="row2">
            <div>
              <Image src={category} width={20} alt="category" />
              <span>{data.category}</span>
            </div>
            <div>
              <Image src={breed} width={20} alt="breed" />
              <span>{data.breed}</span>
            </div>
          </div>
          <p className="row3">{data.desc.slice(0, 50)}...</p>

          <div className="row4">
            <Image src={pin} width={15} alt="city" />
            <span>{data.city}</span>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Post;
