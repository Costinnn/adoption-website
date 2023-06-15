"use client";

import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";

const PostActions = ({ isActive, postId }) => {
  const router = useRouter();
  const [isActiveStatus, setIsActiveStatus] = useState(isActive);
  console.log("Active: ", isActiveStatus);

  const toggleActivePost = async () => {
    try {
      const res = await axios.post(
        `${process.env.NEXT_PUBLIC_URL}/api/toggleActivePost`,
        {
          isActive: !isActiveStatus,
          postId,
        }
      );
      if (res.data.id) {
        setIsActiveStatus((prev) => !prev);
        router.refresh(`/post/${postId}`);
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="post-actions">
      {isActiveStatus === true ? (
        <button className="button4" onClick={toggleActivePost}>
          Dezactiveaza
        </button>
      ) : (
        <button className="button1" onClick={toggleActivePost}>
          Activeaza
        </button>
      )}

      <Link href="/" className="button3">
        Modifica
      </Link>
    </div>
  );
};

export default PostActions;
