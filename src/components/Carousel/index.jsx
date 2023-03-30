import React, { useState } from "react";
import { CarouselContainer } from "./styles";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

export const Carousel = () => {
  const [currentImg, setCurrentImg] = useState(0);

  const data = [
    "https://images.pexels.com/photos/1549200/pexels-photo-1549200.jpeg?auto=compress&cs=tinysrgb&w=1600",
    "https://images.pexels.com/photos/949670/pexels-photo-949670.jpeg?auto=compress&cs=tinysrgb&w=1600",
    "https://images.pexels.com/photos/837140/pexels-photo-837140.jpeg?auto=compress&cs=tinysrgb&w=1600",
  ];

  const prevImg = () => {
    setCurrentImg(currentImg === 0 ? 2 : currentImg - 1);
  };
  const nextImg = () => {
    setCurrentImg(currentImg === 2 ? 0 : currentImg + 1);
  };

  return (
    <CarouselContainer>
      <div
        className="wrapper"
        style={{ transform: `translateX(-${currentImg * 100}vw)` }}
      >
        <img src={data[0]} alt="" />
        <img src={data[1]} alt="" />
        <img src={data[2]} alt="" />
      </div>

      <div className="icons">
        <div className="icon" onClick={prevImg}>
          <ArrowBackIosNewIcon fontSize="medium" />
        </div>
        <div className="icon" onClick={nextImg}>
          <ArrowForwardIosIcon fontSize="medium" />
        </div>
      </div>
    </CarouselContainer>
  );
};
