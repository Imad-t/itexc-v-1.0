import React,{ useRef } from 'react';
import styles from '../styles/Users.module.scss';
import { Avatar } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { userData } from '../data/user';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";
import ProductListings from '../components/ProductListings';
import Orders from '../components/Orders';
function Users() {
    const inputRef = useRef(null);

    const handleFileSelect = event => {
      const selectedFile = event.target.files[0];
      // Your code to handle the selected file
      console.log(selectedFile);
    };
  const socialLinks = {
    facebook: 'https://www.facebook.com/',
    twitter: 'https://www.twitter.com/',
    instagram: 'https://www.instagram.com/',
  };

  const socialMediaIcons = [];

  if (socialLinks.facebook) {
    socialMediaIcons.push(
      <div key="facebook">
        <Link to={socialLinks.facebook}>
          <FacebookIcon fontSize="20px" />
        </Link>
      </div>
    );
  }

  if (socialLinks.twitter) {
    socialMediaIcons.push(
      <div key="twitter">
        <Link to={socialLinks.twitter}>
          <TwitterIcon fontSize="20px" />
        </Link>
      </div>
    );
  }

  if (socialLinks.instagram) {
    socialMediaIcons.push(
      <div key="instagram">
        <Link to={socialLinks.instagram}>
          <InstagramIcon fontSize="20px" />
        </Link>
      </div>
    );
  }

  return (
    <div className={styles['user-page']}>
      <div className={styles['user-info']}>
        <div className={styles['avatar']}>
            <button>
            <Avatar name={userData.name} src={userData.avatar} size='2xl'  />
            <h2 className="upload-title" onClick={() => inputRef.current.click()}>
                Upload
                <input
                type="file"
                accept="image/*"
                className={styles["upload-input"]}
                ref={inputRef}
                onChange={handleFileSelect}
                />
            </h2>
            
            </button>
        </div>
        <div>
            <h1 style={{fontSize:'50px' , margin:'0px' ,padding:'0px'}}>
                {userData.name}
            </h1>
        </div>
        <div className={styles['email']}>
          <p>{userData.email}</p>
        </div>
        <div className={styles['address']}>
        {userData?.address.city +" "+ userData?.address.state +userData?.address.street}
        </div>
        {socialMediaIcons.length > 0 && (
          <div className={styles['socials']}>{socialMediaIcons}</div>
        )}
      </div>
      <div className={styles['user-content']}>
      <div className={styles['profile-overview']}>
            <div>
            <p className={styles['details']}>
                Total Products
            </p>
            <p className={styles['more-details']}>
                {userData.products.length}
            </p>
            </div>
            <div>
            <p className={styles['details']}>
                Total Orders
            </p>
            <p className={styles['more-details']}>
                {userData.orders.length}
            </p>
            </div>
            <div>
            <p className={styles['details']}>
                Total Reviews
            </p>
            <p className={styles['more-details']}>
                {userData.products.length}
            </p>
            </div>
            </div>
            <div>
            <Tabs className={styles['user-tabs']}>
            <TabList>
                <Tab>Products</Tab>
                <Tab>Orders</Tab>
                <Tab>Reviews</Tab>
            </TabList>
                <TabPanels>
                    <TabPanel>
                    <ProductListings userData={userData}/>
                    </TabPanel>
                    <TabPanel>
                    <Orders userData={userData}/>
                    </TabPanel>
                    <TabPanel>
                    <ProductListings userData={userData}/>
                    </TabPanel>
                    </TabPanels>
                    </Tabs>
            </div>
      </div>
    </div>
  );
}

export default Users;
