import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Footer from "../components/Footer";
import HomeStore from "../components/HomeStore";
import ProductsView from "../components/ProductsView";
import ImageSlider from"../components/ImageSlider"; 
import {sliderData} from "../data/sliderData"
const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <HomeStore />
      <ProductsView />
      <ImageSlider slides={sliderData} ></ImageSlider>
      <ProductsView />
      <ProductsView />
      <ProductsView />

      <Footer />
    </>
  );
};
export default Home;
