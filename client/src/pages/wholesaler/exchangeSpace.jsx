import { Tab, TabList, TabPanel, TabPanels, Tabs } from "@chakra-ui/react";
import Navbar from "../../components/Navbar";
import styles from "../../styles/Account.module.scss";
import OrdersListing from "../../components/exchangeSpace/OrdersListing";
import ClientsList from "../../components/exchangeSpace/ClientsList";
import Products from "../../components/exchangeSpace/Products";

let username = "Username";
let email = "user@domain.com";

const exchangeSpace = () => {
  return (
    <div className={styles.account}>
      <Navbar />
      <Tabs className={styles.content}>
        <TabList className={styles.menu}>
          <p className={styles.menuHeading}>
            <h2 className={styles.greeting}>Hi! {username}</h2>
            <h4 className={styles.email}>{email}</h4>
          </p>
          <div className={styles.options}>
            <Tab className={styles.option} _selected={{ color: "#3A00FF" }}>
              Orders Listing
            </Tab>
            <Tab className={styles.option} _selected={{ color: "#3A00FF" }}>
              Clients List
            </Tab>
            <Tab className={styles.option} _selected={{ color: "#3A00FF" }}>
              Products
            </Tab>
            <Tab className={styles.option} _selected={{ color: "#3A00FF" }}>
              Deals
            </Tab>
            <Tab className={styles.option} _selected={{ color: "#3A00FF" }}>
              Dashboard
            </Tab>
            <Tab className={styles.option} _selected={{ color: "#3A00FF" }}>
              Chat
            </Tab>
          </div>
        </TabList>

        <TabPanels className={styles.panels}>
          <TabPanel>
            <OrdersListing/>
          </TabPanel>
          <TabPanel>
            <ClientsList/>
          </TabPanel>
          <TabPanel>
            <Products/>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </div>
  );
};

export default exchangeSpace;
