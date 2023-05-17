import React from "react";
import Product from "./Product";
import styles from "../styles/Product.module.scss";

const productsList = [
  {
    id: 1,
    name: "PlayStation 5 Console (Disc Version) With Controller",
    store: "Sony Store",
    rating: "4.3",
    img: "https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg?cs=srgb&dl=pexels-math-90946.jpg&fm=jpg",
    price: "498.25",
  },
  {
    id: 2,
    name: "Xbox",
    store: "Sony Store",
    rating: "4.3",
    img: "https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg?cs=srgb&dl=pexels-math-90946.jpg&fm=jpg",
    price: "498.25",
  },
  {
    id: 1,
    name: "PlayStation 5 Console (Disc Version) With Controller",
    store: "Sony Store",
    rating: "4.3",
    img: "https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg?cs=srgb&dl=pexels-math-90946.jpg&fm=jpg",
    price: "498.25",
  },
  {
    id: 2,
    name: "Xbox",
    store: "Sony Store",
    rating: "4.3",
    img: "https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg?cs=srgb&dl=pexels-math-90946.jpg&fm=jpg",
    price: "498.25",
  },
  {
    id: 1,
    name: "PlayStation 5 Console (Disc Version) With Controller",
    store: "Sony Store",
    rating: "4.3",
    img: "https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg?cs=srgb&dl=pexels-math-90946.jpg&fm=jpg",
    price: "498.25",
  },
  {
    id: 2,
    name: "Xbox",
    store: "Sony Store",
    rating: "4.3",
    img: "https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg?cs=srgb&dl=pexels-math-90946.jpg&fm=jpg",
    price: "498.25",
  },
  {
    id: 1,
    name: "PlayStation 5 Console (Disc Version) With Controller",
    store: "Sony Store",
    rating: "4.3",
    img: "https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg?cs=srgb&dl=pexels-math-90946.jpg&fm=jpg",
    price: "498.25",
  },
  {
    id: 2,
    name: "Xbox",
    store: "Sony Store",
    rating: "4.3",
    img: "https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg?cs=srgb&dl=pexels-math-90946.jpg&fm=jpg",
    price: "498.25",
  },
  {
    id: 1,
    name: "PlayStation 5 Console (Disc Version) With Controller",
    store: "Sony Store",
    rating: "4.3",
    img: "https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg?cs=srgb&dl=pexels-math-90946.jpg&fm=jpg",
    price: "498.25",
  },
  {
    id: 2,
    name: "Xbox",
    store: "Sony Store",
    rating: "4.3",
    img: "https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg?cs=srgb&dl=pexels-math-90946.jpg&fm=jpg",
    price: "498.25",
  },
];

function Products() {
  return (
    <div className={styles["Products-container"]}>
      {productsList?.map((product) => (
        <Product key={product.id} data={product} />
      ))}
    </div>
  );
}

export default Products;
