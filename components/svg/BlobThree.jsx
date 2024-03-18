import React from "react";
import "./BlobStyle.scss";

const BlobThree = ({ imgLink }) => {
  return (
    <svg
      id="sw-js-blob-svg"
      viewBox="10 15 100 70"
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
        id="path3"
        fill="url(#sw-gradient)"
        d="M24.9,-26.2C33,-22.8,40.9,-15.7,43.9,-6.6C46.9,2.5,44.9,13.7,37.8,18C30.7,22.3,18.5,19.8,9.2,21.4C0,23.1,-6.3,28.9,-11.5,28.4C-16.6,27.9,-20.6,21,-23.6,14.3C-26.6,7.7,-28.7,1.1,-28.3,-5.7C-27.9,-12.4,-25,-19.4,-19.9,-23.4C-14.8,-27.4,-7.4,-28.3,0.5,-28.9C8.4,-29.5,16.7,-29.7,24.9,-26.2Z"
        width="100%"
        height="100%"
        transform="translate(50 50)"
        strokeWidth="1"
        style={{ transition: "all 0.3s ease 0s" }}
        stroke="url(#sw-gradient)"
      ></path>
      <clipPath id="clippath3">
        <use href="#path3" />
      </clipPath>{" "}
      <image
        xlinkHref={imgLink}
        id="image"
        width="100"
        height="100"
        alt="x"
        clipPath="url(#clippath3)"
      />
    </svg>
  );
};

export default BlobThree;
