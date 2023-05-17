import {
  Button,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
} from "@chakra-ui/react";
import Navbar from "../../components/Navbar";
import styles from "../../styles/Account.module.scss";
import { useEffect, useState } from "react";
import { useLocation } from "react-router";
import Orders from "../../components/storeManagement/Orders";
import Products from "../../components/storeManagement/Products.jsx";
import Inventory from "../../components/storeManagement/Inventory";

const StoreManagemnet = () => {
  let username = "Username";
  let email = "user@domain.com";

  const location = useLocation();

  const [selectedTab, setSelectedTab] = useState(0);

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
              Inventory
            </Tab>
            <Tab
              className={styles.option}
              _selected={{ color: "#3A00FF" }}
              value="/client/account/profile"
            >
              Products
            </Tab>

            <Tab
              className={styles.option}
              _selected={{ color: "#3A00FF" }}
              value="/client/account/wishlist"
            >
              Orders
            </Tab>
            <Tab
              className={styles.option}
              _selected={{ color: "#3A00FF" }}
              value="/client/account/cart"
            >
              Dashoboard
            </Tab>
          </div>
          <div className={styles.menuFooter}>
            <Button className={styles.signOut}>Sign Out</Button>
          </div>
        </TabList>

        <TabPanels className={styles.panels}>
          <TabPanel>
            <Inventory />
          </TabPanel>
          <TabPanel>
            <Products />
          </TabPanel>
          <TabPanel>
            <Orders />
          </TabPanel>
          <TabPanel></TabPanel>
        </TabPanels>
      </Tabs>
    </div>
  );
};

export default StoreManagemnet;
