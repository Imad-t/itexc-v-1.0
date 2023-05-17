import { Tab, TabList, TabPanels, Tabs } from "@chakra-ui/react";
import Navbar from "../../components/Navbar";
import styles from "../../styles/Account.module.scss";

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
              Deals Listings
            </Tab>
            <Tab className={styles.option} _selected={{ color: "#3A00FF" }}>
              My orders
            </Tab>
            <Tab className={styles.option} _selected={{ color: "#3A00FF" }}>
              Dashboard
            </Tab>
            <Tab className={styles.option} _selected={{ color: "#3A00FF" }}>
              Chat
            </Tab>
          </div>
        </TabList>

        <TabPanels className={styles.panels}></TabPanels>
      </Tabs>
    </div>
  );
};

export default exchangeSpace;
