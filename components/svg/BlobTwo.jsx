import React from "react";
import "./BlobStyle.scss";

const BlobTwo = ({ imgLink }) => {
  return (
    <svg
      id="sw-js-blob-svg"
      viewBox="5 20 100 60"
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
        id="path2"
        fill="url(#sw-gradient)"
        d="M24.5,-16.1C31.7,-10.4,37.7,-0.2,34.9,6.3C32.1,12.9,20.6,15.8,11.4,18.1C2.3,20.3,-4.5,21.9,-12.4,20.2C-20.3,18.5,-29.2,13.6,-32.8,5.3C-36.5,-3,-34.7,-14.6,-28.4,-20.2C-22,-25.7,-11,-25.1,-1.2,-24.1C8.6,-23.1,17.2,-21.8,24.5,-16.1Z"
        width="100%"
        height="100%"
        transform="translate(50 50)"
        strokeWidth="1"
        style={{ transition: "all 0.3s ease 0s" }}
        stroke="url(#sw-gradient)"
      ></path>
      <clipPath id="clippath2">
        <use href="#path2" />
      </clipPath>{" "}
      <image
        xlinkHref={imgLink}
        id="image"
        width="100"
        height="100"
        alt="x"
        clipPath="url(#clippath2)"
      />
    </svg>
  );
};

export default BlobTwo;
