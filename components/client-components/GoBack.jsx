"use client";

import Image from "next/image";

import { useRouter } from "next/navigation";

import leftImg from "@/public/icons/left.png";

const GoBack = ({ width, height, customClass }) => {
  const router = useRouter();
  return (
    <Image
      src={leftImg}
      alt="back"
      width={width}
      height={height}
      className={customClass}
      onClick={() => router.back()}
    />
  );
};

export default GoBack;
