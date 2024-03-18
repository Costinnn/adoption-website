import React from "react";
import "./BlobStyle.scss";

const BlobOne = ({ imgLink }) => {
  return (
    <svg
      id="sw-js-blob-svg"
      viewBox="0 15 100 70"
      xmlns="http://www.w3.org/2000/svg"
      version="1.1"
      width={300}
      height={300}
    >
      <defs>
        <linearGradient id="sw-gradient" x1="0" x2="1" y1="1" y2="0">
          <stop id="stop1" stopColor="#f87537" offset="0%"></stop>
          <stop
            id="stop2"
            stopColor="#fba81f"
            offset="100%"
          ></stop>
        </linearGradient>
      </defs>
      <path
        id="path"
        fill="url(#sw-gradient)"
        d="M28.5,-16.8C34.2,-6.7,34,6.4,28.2,15.7C22.5,25.1,11.3,30.7,-0.2,30.8C-11.7,31,-23.4,25.6,-28.5,16.7C-33.5,7.7,-31.9,-4.9,-26,-15C-20.1,-25.2,-10.1,-33,0.7,-33.4C11.5,-33.8,22.9,-26.8,28.5,-16.8Z"
        width="100%"
        height="100%"
        transform="translate(50 50)"
        strokeWidth="1"
        style={{ transition: "all 0.3s ease 0s" }}
        stroke="url(#sw-gradient)"
      ></path>
      <clipPath id="clippath">
        <use href="#path" />
      </clipPath>{" "}
      <image
        xlinkHref={imgLink}
        id="image"
        width="100"
        height="100"
        alt="x"
        clipPath="url(#clippath)"
      />
    </svg>
  );
};

export default BlobOne;
