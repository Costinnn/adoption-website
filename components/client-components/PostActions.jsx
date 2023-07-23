"use client";

import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";

const PostActions = ({ isActive, postId }) => {
  const router = useRouter();
  const [isActiveStatus, setIsActiveStatus] = useState(isActive);

  const toggleActivePost = async () => {
    try {
      const res = await axios.patch(
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

  const deletePost = async () => {
    try {
      const res = await axios.delete(
        `${process.env.NEXT_PUBLIC_URL}/api/deletePost/${postId}`
      );

      if (res.data.id) {
        router.push(`/account`);
        console.log("Post deleted!");
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

      <Link href={`/modifyPost/${postId}`} className="button3">
        Modifica
      </Link>

      <button className="button5" onClick={deletePost}>
        Sterge
      </button>
    </div>
  );
};

export default PostActions;
