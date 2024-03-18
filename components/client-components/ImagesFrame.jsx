"use client";

import React from "react";

import BlobOne from "../svg/BlobOne";
import BlobTwo from "../svg/BlobTwo";
import BlobThree from "../svg/BlobThree";
import BlobFour from "../svg/BlobFour";
import BlobFive from "../svg/BlobFive";
import BottomWave from "../svg/BottomWave";
import TopWave from "../svg/TopWave";

import "./ImagesFrame.scss";

const ImagesFrame = ({ postImages }) => {
  return (
    <section className="gallery">
      <TopWave color="#f87537" />

      <div className="images-frame">
        <div className="content">
          {postImages[0] && <BlobOne imgLink={postImages[0]} />}
          {postImages[1] && <BlobTwo imgLink={postImages[1]} />}
          {postImages[2] && <BlobThree imgLink={postImages[2]} />}
          {postImages[3] && <BlobFour imgLink={postImages[3]} />}
          {postImages[4] && <BlobFive imgLink={postImages[4]} />}
        </div>
      </div>

      <BottomWave color="#fba81f" />
    </section>
  );
};

export default ImagesFrame;
