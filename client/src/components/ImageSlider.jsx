import React, { useState, useEffect } from "react";
import styles from "../styles/ImageSlider.module.scss";
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from "react-icons/fa";
import { Link } from "react-router-dom";

const ImageSlider = ({ slides }) => {
  const [current, setCurrent] = useState(0);
  const length = slides?.length;
  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };
  const interval = 5000;
  useEffect(() => {
    const timer = setInterval(() => {
      console.log(current);
      setCurrent((prevCurrent) => (prevCurrent + 1) % length);
    }, interval);

    return () => clearInterval(timer);
  }, [length, interval]);

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }

  return (
    <section className={styles["slider"]}>
      {slides?.map((slide, index) => {
        return (
          <div className={index === current ? styles["slide-active"] : styles["slide"]} key={index}>
            {index === current && (
              <Link to={slide.url}>
                <img src={slide.image} alt="travel " className={styles["image"]} />
              </Link>
            )}
          </div>
        );
      })}
    </section>
  );
};

export default ImageSlider;
