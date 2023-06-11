"use client";

import Image from "next/image";
import heartActive from "@/public/icons/heart-active.png";
import heartNoActive from "@/public/icons/heart-noactive.png";
import axios from "axios";
import { useEffect, useState } from "react";

const WishHeart = ({ id, session, favoritesId }) => {
  const [isFavorite, setIsFavorite] = useState(false);

  const toggleWishlist = async (postId, userEmail) => {
    try {
      if (!isFavorite) {
        const res = await axios.post(
          `http://localhost:3000/api/addToWishlist`,
          {
            postId,
            userEmail,
          }
        );
        if (res.status === 200) {
          console.log("Post added to favorites!");
          setIsFavorite(true);
        }
      } else {
        const res = await axios.post(
          `http://localhost:3000/api/deleteFromWishlist`,
          {
            postId,
            userEmail,
          }
        );
        if (res.status === 200) {
          console.log("Post deleted from favorites!");
          setIsFavorite(false);
        }
      }
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    favoritesId.forEach((item) => (item === id ? setIsFavorite(true) : ""));
  }, []);

  return (
    <Image
      onClick={() => toggleWishlist(id, session.user.email)}
      src={isFavorite ? heartActive : heartNoActive}
      width={20}
      alt="wishlist"
      className="wishlist"
    />
  );
};

export default WishHeart;
