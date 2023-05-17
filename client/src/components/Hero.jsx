import React, { useState, useEffect } from "react";
import styles from "../styles/Hero.module.scss";
import { Link } from "react-router-dom";
import {images} from "../data/heroData"
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";


const autoChangeInterval = 5000; // Change image after 5 seconds

const HeroSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, autoChangeInterval);
    return () => clearInterval(intervalId);
  }, [autoChangeInterval]);

  return (
    <div className={styles["hero-section"]}>
      <div className={styles["hero-container"]}>
        {images.map((img, index) => (
          <Link to={img?.url}>
            <img
              key={img.id}
              className={styles[index === currentIndex ? "active" : ""]}
              src={img.src}
            />
          </Link>
        ))}
      </div>
      <div className={styles["prev-button"]} onClick={handlePrev}>
        <FaArrowLeft />
      </div>
      <div className={styles["next-button"]} onClick={handleNext}>
        <FaArrowRight />
      </div>
    </div>
  );
};

export default HeroSection;
