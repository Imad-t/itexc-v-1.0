import { List, ListItem } from "@chakra-ui/react";
import Styles from "../../styles/Cart.module.scss";
import { Link } from "react-router-dom";
import { CloseIcon } from "@chakra-ui/icons";
import { useEffect, useState } from "react";
import { productList } from "../../data/productList";

const Cart = () => {
  const [products, setProducts] = useState(productList);

  const [subTotal, setSubTotal] = useState(0);
  const [total, setTotal] = useState(0);

  //for testing/ to be fetched from somewhere
  const discount = 20;

  useEffect(() => {
    let subTotal = 0,
      total = 0;
    products.forEach((product) => {
      subTotal += product.price * product.quantity;
      total = subTotal * (1 - discount / 100);
    });
    setTotal(total.toFixed(2));
    setSubTotal(subTotal.toFixed(2));
  }, [products, discount]);

  function incrementQuantity(id) {
    setProducts((prevProducts) =>
      prevProducts.map((product) =>
        product.id === id
          ? { ...product, quantity: product.quantity + 1 }
          : product
      )
    );
  }
  function decrementQuantity(id) {
    setProducts((prevProducts) =>
      prevProducts.map((product) =>
        product.id === id
          ? { ...product, quantity: Math.max(product.quantity - 1, 1) }
          : product
      )
    );
  }
  function updateQuantity(id,newQuantity) {
    setProducts((prevProducts) =>
      prevProducts.map((product) =>
        product.id === id
          ? { ...product, quantity: newQuantity }
          : product
      )
    );
  }

  function limitText(text) {
    if (text.length <= 80) {
      return text;
    } else {
      return text.substring(0, 80) + "...";
    }
  }

  function deleteProduct(id) {
    setProducts(products.filter((product) => product.id !== id));
    //send delete request to database;
  }

  const productItems = products.map((element) => (
    <ListItem className={Styles.listItem}>
      <img src={element.image} alt="productImg" />

      <div className={Styles.productDetails}>
        <Link className={Styles.productName} to={element.productLink}>
          <h2>{element.productName}</h2>
        </Link>

        <p>{limitText(element.productDescription)}</p>

        <Link to={element.storeLink}>
          <h3>{element.storeName}</h3>
        </Link>
      </div>

      <div className={Styles.quantity}>
        <button
          className={Styles.changeQuantity}
          onClick={() => {
            decrementQuantity(element.id);
          }}
        >
          -
        </button>
        <input
          className={Styles.quantityValue}
          type="number"
          value={element.quantity}
          onChange={(event) => {
            const newQuantity = parseInt(event.target.value) || 0;
            updateQuantity(element.id, newQuantity);
          }}
        />
        <button
          className={Styles.changeQuantity}
          onClick={() => incrementQuantity(element.id)}
        >
          +
        </button>
      </div>

      <div className={Styles.price}>
        <button
          className={Styles.closeButton}
          onClick={() => deleteProduct(element.id)}
        >
          <CloseIcon
            p="4px"
            bg="red"
            color="white"
            borderRadius="50px"
            h="24px"
            w="24px"
          />{" "}
        </button>
        <div className={Styles.priceValue}>{element.price} DZD</div>
      </div>
    </ListItem>
  ));

  return (
    <>
      <div className={Styles.summaryContainer}>
        <h1>Order summary</h1>

        <div className={Styles.summary}>
          <div className={Styles.total}>
            <div>
              <span>Sub-total =</span>
              <span className={Styles.totalPrice}>{subTotal} DZD</span>
            </div>
            <div>
              <span>Discount =</span>
              <span className={Styles.totalPrice}> {discount}%</span>
            </div>
            <div>
              <span>Total =</span>
              <span className={Styles.totalPrice}>{total} DZD</span>
            </div>
          </div>

          <button>Checkout</button>
        </div>
      </div>

      <List className={Styles.list} spacing={3}>
        {productItems}
      </List>
    </>
  );
};

export default Cart;
