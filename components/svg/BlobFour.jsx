import React from "react";
import "./BlobStyle.scss";

const BlobFour = ({ imgLink }) => {
  return (
    <svg
      id="sw-js-blob-svg"
      viewBox="0 10 100 70"
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
        id="path4"
        fill="url(#sw-gradient)"
        d="M23.2,-27.2C29.5,-22.4,33.5,-14.5,35.2,-6C36.8,2.4,36.2,11.5,31.2,16C26.2,20.5,16.8,20.5,9.2,21.8C1.5,23.1,-4.5,25.9,-8.4,24C-12.4,22.2,-14.4,15.8,-19.2,9.9C-24,4,-31.5,-1.4,-33.9,-9.1C-36.2,-16.7,-33.3,-26.5,-26.8,-31.2C-20.3,-36,-10.2,-35.7,-0.8,-34.7C8.5,-33.7,17,-32,23.2,-27.2Z"
        width="100%"
        height="100%"
        transform="translate(50 50)"
        strokeWidth="1"
        style={{ transition: "all 0.3s ease 0s" }}
        stroke="url(#sw-gradient)"
      ></path>
      <clipPath id="clippath4">
        <use href="#path4" />
      </clipPath>{" "}
      <image
        xlinkHref={imgLink}
        id="image"
        width="100"
        height="100"
        alt="x"
        clipPath="url(#clippath4)"
      />
    </svg>
  );
};

export default BlobFour;
