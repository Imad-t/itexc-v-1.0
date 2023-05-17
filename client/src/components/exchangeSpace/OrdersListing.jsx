import { List, ListItem, Table, Thead, Tbody, Tfoot, Tr, Th, Td, TableCaption, TableContainer,} from "@chakra-ui/react";
import Styles from "../../styles/OrderHistory.module.scss";
import { Link } from "react-router-dom";
import { ChevronDownIcon } from "@chakra-ui/icons";
import { useState} from "react";
import { orderList } from "../../data/orderList";

const OrderItem = ({ order }) => {
  const [showProducts, setShowProducts] = useState(false);

  const handleClicked = () => {
    setShowProducts(!showProducts);
  };
  function limitText(text) {
    if (text.length <= 40) {
      return text;
    } else {
      return text.substring(0, 40) + "...";
    }
  }


  return (
    <>
    <ListItem className={Styles.listItem}>
      <button className={Styles.showProducts} onClick={handleClicked}>
        <div className={Styles.products}>
          products ({order.products.length})
        </div>
        <ChevronDownIcon boxSize="24px" />
      </button>

      <div className={Styles.customertInfo}>
        <h2>{order.recepiant}</h2>
        <p>{order.address}</p>
      </div>

      <div className={Styles.orderInfo}>
        <div>
          <span>shipped : </span> {order.date}
        </div>
        <div>
          <span>status :</span> {order.status}
        </div>
        <div>
          <span>arrives on :</span>
        </div>
      </div>

      <div className={Styles.pricing}>
        <div>
          <span>subtotal : </span> {order.subtotal} dzd
        </div>
        <div>
          <span>discount : </span> {order.discount}%
        </div>
        <div>
          <span>total : </span> {order.total} dzd
        </div>
      </div>
    </ListItem>

    {showProducts && (
      <TableContainer>
        <Table className={Styles.productList} >
          <Tbody className={Styles.Body}>
            {order.products.map((product) => (
              <Tr key={product.id} className={Styles.productListItem} >
                <img src={product.image} alt="productImg" />

                <div className={Styles.productDetails}>
                  <Link
                    className={Styles.productName}
                    to={product.productLink}
                  >
                    <h2>{product.productName}</h2>
                  </Link>

                  <p>{limitText(product.productDescription)}</p>

                  <Link to={product.storeLink}>
                    <h3>{product.storeName}</h3>
                  </Link>
                </div>

                <div className={Styles.quantity}>
                  Qte{" "}
                  <span className={Styles.quantityValue}>
                    {" "}
                    x{product.quantity}{" "}
                  </span>
                </div>

                <div className={Styles.price}>{product.price} DZD</div>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </TableContainer>
    )}
  </>
  );
};

const OrdersListing = () => {
  const [orders, setOrders] = useState(orderList);
  const [search,setSearch] = useState("");

  const filteredOrders = search.length === 0 
  ? orders 
  : orders.filter(order => 
    order.recepiant.toLowerCase().includes(search.toLowerCase()) ||
    order.address.toLowerCase().includes(search.toLowerCase()) ||
    order.products.some(product => product.productName.toLowerCase().includes(search.toLowerCase()))
  )

  return (
    <>
    <input
    className={Styles.input}
        type="text"
        placeholder="Search"
        value={search}
        onChange={(event) => setSearch(event.target.value)}
      />
      {filteredOrders.length === 0 ? (
        <p>No orders found.</p>
      ) : (
        <List className={Styles.list} spacing={3}>
          {filteredOrders.map((order) => (
            <OrderItem key={order.id} order={order} />
          ))}
        </List>
      )}
    </>
  );
};
export default OrdersListing;
