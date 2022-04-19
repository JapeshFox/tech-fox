import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Styles from "./HomePageSlider.module.css";

const imagesAray = [
  "/img/showcase/9-business-4.jpg",
  "/img/showcase/8-news-3.jpg",
  "/img/showcase/7-sports-1.jpg",
  "/img/showcase/6-entertainment-1.jpg",
  "/img/showcase/5-tvStations-2.jpg",
  "/img/showcase/4-business-8.jpg",
  "/img/showcase/3-news-4.jpg",
  "/img/showcase/1-entertainment-3.jpg",
];

function CustomImage({ imagePath, style, ...props }) {
  return (
    <div
      {...props}
      style={{ ...style,  }}
      className={Styles.showcaseContainer}
    >
      <div style={{ backgroundImage: `url(${imagePath})` }} className={Styles.showcaseImage} />
    </div>
  );
}

export default function HomePageSlider() {
  const settings = {
    dots: false,
    fade: true,
    infinite: true,
    speed: 1000,
    autoplaySpeed: 6000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    arrows: false
  };
  return (
    <div className={Styles.showcaseInfo}>
      <Slider {...settings}>
        {imagesAray.map((imagePath, index) => {
          return <CustomImage key={index} imagePath={imagePath} />;
        })}
      </Slider>
      <img
        className={Styles.decorativeGraphic}
        src="/img/showcase/decorative-graphic.svg"
        alt="decorative graphic"
      ></img>
    </div>
  );
}
