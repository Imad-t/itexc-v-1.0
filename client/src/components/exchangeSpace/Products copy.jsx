import ProductListings from "./ProductListings";
import { userData } from "../../data/user";
import styles from "../../styles/StoreManagement/products.module.scss";

const Products = () => {
  return (
    <div className={styles.products}>
      <div className={styles.overview}>
        <div className={styles.info}>
          <h3>Total products</h3>
          <p>22</p>
        </div>
        <div className={styles.info}>
          <h3>Total purchases</h3>
          <p>22</p>
        </div>
        <div className={styles.info}>
          <h3>Total reviews</h3>
          <p>22</p>
        </div>
      </div>

      <ProductListings userData={userData} showAddProduct={true} />
    </div>
  );
};

export default Products;
