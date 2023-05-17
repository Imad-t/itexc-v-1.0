import { useEffect, useState } from "react";
import {Button, Tab, TabList, TabPanel, TabPanels, Tabs } from "@chakra-ui/react";
import Navbar from "../../components/Navbar";
import styles from "../../styles/Account.module.scss";
import Profile from "../../components/account/StoreProfile";
import MyOrders from "../../components/account/OrderHistory";
import WishList from "../../components//account/WishList";
import Cart from "../../components/account/Cart";
import { useLocation } from "react-router";

const WholesalerAccount = () => {
  let username = "Username";
  let email = "user@domain.com";

  const location = useLocation();

  const [selectedTab,setSelectedTab] = useState(0);

  useEffect(() => {
    const path = location.pathname;
    if (path.endsWith("profile")) {
      setSelectedTab(0);
    } else if (path.endsWith("orders")) {
      setSelectedTab(1);
    } else if (path.endsWith("wishlist")) {
      setSelectedTab(2);
    } else if (path.endsWith("cart")) {
      setSelectedTab(3);
    }
  }, [location.pathname]);

  return (
    <div className={styles.account}>
      <Navbar />

      <Tabs
        className={styles.content}
        index={selectedTab}
        onChange={(index) => setSelectedTab(index)}
      >
        <TabList className={styles.menu}>
          <p className={styles.menuHeading}>
            <h2 className={styles.greeting}>Hi! {username}</h2>
            <h4 className={styles.email}>{email}</h4>
          </p>
          <div className={styles.options}>
            <Tab
              className={styles.option}
              _selected={{ color: "#3A00FF" }}
              value="/client/account/profile"
            >
              Profile
            </Tab>
            <Tab
              className={styles.option}
              _selected={{ color: "#3A00FF" }}
              value="/client/account/orders"
            >
              My orders
            </Tab>
            <Tab
              className={styles.option}
              _selected={{ color: "#3A00FF" }}
              value="/client/account/wishlist"
            >
              whishlist
            </Tab>
            <Tab
              className={styles.option}
              _selected={{ color: "#3A00FF" }}
              value="/client/account/cart"
            >
              Cart
            </Tab>
          </div>
          <div className={styles.menuFooter}>
            <Button className={styles.signOut}>Sign Out</Button>
          </div>
        </TabList>

        <TabPanels className={styles.panels}>
          <TabPanel>
            <Profile />
          </TabPanel>
          <TabPanel>
            <MyOrders />
          </TabPanel>
          <TabPanel>
            <WishList />
          </TabPanel>
          <TabPanel>
            <Cart />
          </TabPanel>
        </TabPanels>
      </Tabs>
    </div>
  );
};

export default WholesalerAccount;
