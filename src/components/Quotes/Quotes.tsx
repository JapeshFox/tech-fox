import React from "react";
import Slider from "react-slick";
import clsx from "clsx";
import Styles from "./Quotes.module.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const quotesList = [
  {
    quote:
      "We run some of the biggest sports, entertainment and news streaming services in the business, and this provides the opportunity to work on some of the most fun and interesting engineering challenges.  Come and join the most forward leaning technology company in media.",
    name: "Paul Cheesbrough",
    title: "Chief Technology Officer and President of Digital",
    image: "/img/exec-photo.png",
  },
  {
    quote:
      "At Fox, we provide employees with the culture of a startup, offering each team member the opportunity to make a difference in defining what's next for Fox Tech.",
    name: "Varun Narang",
    title: "Chief Product Officer",
    image: "/img/exec-photo-2.png",
  },
];
const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  initialSlide: 0,
  autoplay: true,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        arrows: false,
      },
    },
  ],
};

export default function Quotes() {
  return (
    <div className={clsx("container", Styles.container)}>
      <Slider {...settings}>
        {quotesList.map(({ quote, image, name, title }) => {
          return (
            <div className="padding-horiz--lg">
              <h3 className={Styles.quoteMessage}>{quote}</h3>
              <div className="padding-top--md avatar">
                <img
                  className="avatar__photo avatar__photo--lg"
                  alt={`${title} exec photo`}
                  src={image}
                />
                <div className="avatar__intro">
                  <div className="avatar__name">{name}</div>
                  <small className="avatar__subtitle">{title}</small>
                </div>
              </div>
            </div>
          );
        })}
      </Slider>
    </div>
  );
}
