import React from "react";
import ModifiableProduct from "../ModifiableProduct";
import { Link } from "react-router-dom";
import { userData } from "../../data/user";
import styles from "../../styles/StoreManagement/ProductListings.module.scss";
import AddProduct from "./addPrduct";

function ProductListings(props) {
  const ProductsView = [];
  for (let i = 0; i < userData.products.length; i++) {
    ProductsView.unshift(
      <ModifiableProduct
        data={userData.products[i]}
        key={i}
      ></ModifiableProduct>
    );
  }
  if (props.showAddProduct) {
    ProductsView.unshift(<AddProduct />);
  }

  return (
    <div className={styles["Category-section"]}>
      <div className={styles["Product-section"]}>
        <div className={styles["Product-view"]}>{ProductsView}</div>
      </div>
    </div>
  );
}

export default ProductListings;
