import React from "react";
import styles from "../styles/ProductPage.module.scss";
import { Link, useParams } from "react-router-dom";
import { product } from "../data/Product";
import StarIcon from "@mui/icons-material/Star";
import Navbar from "../components/Navbar";
import { createTheme } from "@mui/material/styles";
import { ThemeProvider } from "@emotion/react";
import { Palette } from "@mui/icons-material";
import { red } from "@mui/material/colors";
import { useState } from "react";
import { Select, Input } from "@chakra-ui/react";
import { Button, Text } from "@chakra-ui/react";
import { FaHeart } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";
import {
  Tabs,
  TabList,
  Tab,
  TabPanels,
  TabPanel,
  TabIndicator,
} from "@chakra-ui/react";

const Product = ({ productData }) => {
  const { id } = useParams();

  const [qte, setQte] = useState(1);
  const options = [1, 2, 3, 4, 5];
  const handleOptionChange = (event) => {
    setQte(event.target.value);
  };
  const [inCart, setInCart] = useState(false);
  function handleCart() {
    setInCart(!inCart);
    console.log(inCart);
  }
  const [inWish, setInWish] = useState(false);
  function handleWishlist() {
    setInWish(!inWish);
  }
  return (
    <>
      <Navbar></Navbar>
      <div className={styles.productPage}>
        <div className={styles.productShowCase}>
          <div className={styles.product}>
            <div className={styles.left}>
              <div className={styles.route}>
                <Link>
                  Home > {product.category} > {product.type} >{" "}
                </Link>
              </div>
              <div className={styles.imageContainer}>
                <img src={product?.image} />
              </div>
            </div>
            <div className={styles.middle}>
              <div className={styles.content}>
                <Link>
                  <p className={styles.store}>{product?.storeName}</p>
                </Link>
                <h1>{product?.name}</h1>
                <div>{product?.originalprice}</div>
                <div className={styles.priceDetails}>
                  <h2>Price :</h2>
                  <h2 className={styles.price}>{product?.price * qte}</h2>
                  <h2 className={styles.price}>DZ</h2>
                </div>
                <div className={styles.details}>
                  <div className={styles.rating}>
                    {product?.rating}{" "}
                    <p className={styles.star}>
                      <StarIcon fontSize="inherit" />
                    </p>
                  </div>
                  <div className={styles.discount}>{product?.discount} 10%</div>
                </div>
                <div className={styles.orderControl}>
                  <div>
                    <h3 styles={"color:#1218e2"}>Quantity</h3>
                    <Select value={qte} onChange={handleOptionChange}>
                      {options.map((option) => (
                        <option key={option} value={option}>
                          {option}
                        </option>
                      ))}
                    </Select>
                  </div>
                  <div>
                    <div className={styles.cart}>
                      <button
                        className={`${styles.cartbtn} ${
                          inCart ? styles.active : ""
                        }`}
                        onClick={handleCart}
                      >
                        Add To Cart
                      </button>
                    </div>
                  </div>
                  <div>
                    <div className={styles.action}>
                      <button
                        className={`${styles.wishlist} ${
                          inWish ? styles.active : ""
                        }`}
                        onClick={handleWishlist}
                      >
                        {inWish ? <FaHeart /> : <FaRegHeart />}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.right}>
              <div className={styles.content}>
                <h2>Description</h2>
                <Text>{product?.description}</Text>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Product;
