import React, { useEffect, useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/swiper.min.css";
import "swiper/components/scrollbar/scrollbar.min.css";

import "../index.css";

// import Swiper core and required modules
import SwiperCore, { Scrollbar } from "swiper/core";
import { Image } from "../elements";
import styled from "styled-components";
import { useSelector } from "react-redux";

// install Swiper modules
SwiperCore.use([Scrollbar]);

function Slider() {
  const room_list = useSelector((state) => state.room.list);

  return (
    <>
      <Swiper
        style={{
          padding: "10px 0 10px",
          width: "100%",
          backgroundColor: "rgba(0, 0, 0, 0.2)",
          borderRadius: "20px",
        }}
        scrollbar={{
          hide: true,
        }}
        className="mySwiper"
      >
        {room_list?.map((each) => {
          return (
            <SwiperSlide>
              <ImageDiv>
                <Image
                  src={each.image}
                  width="600px"
                  height="350px"
                  border_radius="20px"
                />
              </ImageDiv>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
}

const ImageDiv = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default Slider;
