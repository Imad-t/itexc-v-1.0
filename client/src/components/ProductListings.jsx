import React from 'react'
import ModifiableProduct from './ModifiableProduct'
import { Link } from 'react-router-dom'
import { userData } from '../data/user'
import styles from '../styles/ProductListings.module.scss'
function ProductListings() {
    const ProductsView=[]
    for(let i=0;i<userData.products.length;i++){
        ProductsView.push(<ModifiableProduct data={userData.products[i]} key={i}></ModifiableProduct>)
    }

  return (
    <div className={styles["Category-section"]}>
    <div className={styles["Product-section"]}>
    <div className={styles["Product-view"]}>
        {ProductsView}
    </div>
    </div>
    </div>

  )
}

export default ProductListings