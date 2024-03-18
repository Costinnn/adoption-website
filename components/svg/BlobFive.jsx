import React from "react";
import "./BlobStyle.scss";

const BlobFive = ({ imgLink }) => {
  return (
    <svg
      id="sw-js-blob-svg"
      viewBox="0 15 100 70"
      xmlns="http://www.w3.org/2000/svg"
      version="1.1"
    >
      <defs>
        <linearGradient id="sw-gradient" x1="0" x2="1" y1="1" y2="0">
          <stop id="stop1" stopColor="rgba(248, 117, 55, 1)" offset="0%"></stop>
          <stop
            id="stop2"
            stopColor="rgba(251, 168, 31, 1)"
            offset="100%"
          ></stop>
        </linearGradient>
      </defs>
      <path
        id="path5"
        fill="url(#sw-gradient)"
        d="M16.1,-22.6C21.6,-18.1,27.3,-14.4,32.1,-8.4C36.8,-2.3,40.6,6,37.9,11.7C35.2,17.4,26.1,20.3,18.7,22.9C11.3,25.4,5.6,27.5,-0.7,28.5C-7.1,29.5,-14.1,29.3,-19.6,26.1C-25,23,-28.9,16.8,-32.2,9.8C-35.4,2.7,-38.1,-5.3,-36.1,-11.8C-34,-18.3,-27.4,-23.4,-20.6,-27.4C-13.8,-31.5,-6.9,-34.4,-0.8,-33.3C5.3,-32.2,10.6,-27,16.1,-22.6Z"
        width="100%"
        height="100%"
        transform="translate(50 50)"
        strokeWidth="1"
        style={{ transition: "all 0.3s ease 0s" }}
        stroke="url(#sw-gradient)"
      ></path>
      <clipPath id="clippath5">
        <use href="#path5" />
      </clipPath>{" "}
      <image
        xlinkHref={imgLink}
        id="image"
        width="100"
        height="100"
        alt="x"
        clipPath="url(#clippath5)"
      />
    </svg>
  );
};

export default BlobFive;
