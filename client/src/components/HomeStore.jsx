import React from 'react';
import { stores } from "../data/storeData.js";
import { Heading } from '@chakra-ui/react';
import styles from "../styles/StoreView.module.scss"
import { Link } from 'react-router-dom';
function Store() {
  function getRandomStore() {
    return stores[Math.floor(Math.random() * stores.length)];
  }
  
  const storeView = [];
  
  for (let i = 0; i < 4; i++) {
    const store = getRandomStore();
    storeView.push(
      <Link to="#"><div className={styles["store-container"]} style={{backgroundImage: `url(${store.logo})`}}>
        <div>
          <img src={store.logo} alt="Store banner"></img>
        </div>  
        <h3>{store.name}</h3>
      </div></Link>
    );
  }

  return (
    <div className={styles["StoresBanner"]}>
      {storeView}
    </div>
  );
}

export default Store;
