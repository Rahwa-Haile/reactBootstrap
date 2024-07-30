import React from "react";
import img from "../Image/africanTherapistcrop.png"

const ExampleCarouselImage = ({ text, imgSrc }) => {
  return (
    <div
      style={{
        height: "82vh",
        width: "100%",
        backgroundColor: "black"
      }}
    >
      <div
        style={{
          height: "100%",
          width: "60%",
          backgroundImage: "url(" + img + ")",
          backgroundSize: "cover",
          backgroundPosition: "center",
          margin: "auto",
        }}
      ></div>
    </div>
  );
};

export default ExampleCarouselImage;
