import { List, ListItem } from "@chakra-ui/react";
import Styles from "../../styles/Cart.module.scss";
import { Link } from "react-router-dom";
import { CloseIcon } from "@chakra-ui/icons";
import { useState } from "react";
import { productList } from "../../data/productList";

const WishList = () => {
  const [wishlist, setWishlist] = useState(productList);

  function limitText(text) {
    if (text.length <= 80) {
      return text;
    } else {
      return text.substring(0, 80) + "...";
    }
  }

  function deleteProduct(id) {
    setWishlist(wishlist.filter((order) => order.id !== id));
    //send delete request to database;
  }

  const orderItems = wishlist.map((element) => (
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
      <>
      <button className={Styles.addToCart}> Add to Cart </button>
      </>
      
      <div className={Styles.price}>
        <button className={Styles.closeButton} onClick={()=>deleteProduct(element.id)}> <CloseIcon p="4px" bg="red" color="white" borderRadius="50px" h="24px" w="24px"/> </button>
        <div className={Styles.priceValue}>{element.price} DZD</div>
      </div>

    </ListItem>
  ));

  return (
    <>
      <h1 className={Styles.heading}>My Wishlist</h1>
      <List className={Styles.list} spacing={3}>
        {orderItems}
      </List>
    </>
  );
};

export default WishList;
