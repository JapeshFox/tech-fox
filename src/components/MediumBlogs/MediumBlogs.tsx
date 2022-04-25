import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Styles from "./MediumBlogs.module.css";
import clsx from "clsx";

const blogUrl = `./medium.json`;
const settings = {
  dots: false,
  infinite: false,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 1,
  initialSlide: 0,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
      },
    },
  ],
};

export default function MediumBlogs() {
  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    fetch(blogUrl)
      .then((response) => response.json())
      .then((res) => {
        setBlogs(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <section className={"blog-section"}>
      <div className="container">
        <div className="row ">
          <div className={"col col--7"}>
            <h1 className=" text--left padding-horiz--md">Engineering blog</h1>
            <p className="text--left padding-horiz--md">
              Get the inside scoop on how we’re changing the consumer experience
              and industry, one platform at a time.
            </p>
          </div>
        </div>
        {blogs.length > 0 && (
          <div className="padding-horiz--lg">
            <Slider {...settings}>
              {blogs.map(({ thumbnail, title, categories, link }) => (
                <a
                  target="_blank"
                  className={clsx("padding--sm", Styles.MediumBlog)}
                  href={link}
                >
                  <div className="card__image">
                    <img
                      src={thumbnail}
                      alt={`${title} image`}
                      className={Styles.MediumBlogImage}
                    />
                  </div>
                  <div className="padding-top--sm">
                    <h4 className={Styles.MediumBlogTitle}>{title}</h4>
                    {categories.map((category) => (
                      <span className="margin-right--md badge badge--secondary">
                        {category}
                      </span>
                    ))}
                  </div>
                </a>
              ))}
            </Slider>
            <a
              href="https://medium.com/fox-tech"
              rel="noopener"
              className="margin-top--md button button--lg button--outline button--secondary"
            >
              See the Blog
            </a>
          </div>
        )}
      </div>
    </section>
  );
}
