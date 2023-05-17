import React from "react";
import { Link } from "react-router-dom";
import { AiOutlineHeart, AiOutlineStar } from "react-icons/ai";

import styles from "../styles/Product.module.scss";

function Product({ data }) {
  function handleMouseOver(event) {
    event.stopPropagation();
  }
  return (
    <div className={styles["Product-container"]}>
      
      
      <div className={styles["cover"]}>
        <img src={data?.image} />
        <AiOutlineHeart className={styles["btn-add-to-favorite"]} fontSize={14} color="red" />
      </div>

      <div className={styles["details"]}>
        <div className={styles["title-section"]}>
          <Link to="#">
            {data?.name?.length > 30 ? data?.name.substring(0, 30) + "..." : data?.name}
          </Link>
          <Link to="#" className={styles["store"]}>
            {data?.storeName}
          </Link>
        </div>
        <div className={styles["more-details"]}>
          <div className={styles["rating"]}>
            {data?.rating} <AiOutlineStar color="gold" />
          </div>

          <p>{data?.price} DZD</p>
        </div>
        <button onMouseOver={handleMouseOver}>Add To Cart</button>
      </div>
      
    </div>
  );
}

export default Product;
