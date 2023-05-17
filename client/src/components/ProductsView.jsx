import React from 'react'
import Product from './Product'
import {products} from "../data/productData"
import styles from "../styles/ProductView.module.scss"
import { Link } from 'react-router-dom';
function ProductsView() {

    
function getRandomProduct() {
    return products[Math.floor(Math.random() * products.length)];
  }
  console.log(Math.floor(Math.random() * products.length))
    const ProductsView=[]
    for(let i=0;i<5;i++){
        ProductsView.push(<Product data={getRandomProduct()} key={i}></Product>)
    }
  return (
    <div className={styles["Category-section"]}>
    <div className={styles["Product-section"]}>
        <div className={styles["title"]}><Link to={"/category"}>Category Name</Link></div>
    <div className={styles["Product-view"]}>
        {ProductsView}
    </div>
    </div></div>
    )
}

export default ProductsView