import React from "react";
import styles from "../styles/Navbar.module.scss";

import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuGroup,
  MenuDivider,
  Button,
} from "@chakra-ui/react";
import {
  Avatar,
  AvatarBadge,
  AvatarGroup,
  Wrap,
  WrapItem,
} from "@chakra-ui/react";

import { AiOutlineShoppingCart } from "react-icons/ai";
import { BsPersonCircle } from "react-icons/bs";
import { logoItexBlue } from "../assets/images";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

import { SearchBar } from "./SearchBar";
const navLinks = [
  {
    name: "Products",
    url: "#",
  },
  {
    name: "Contact",
    url: "#",
  },
  {
    name: "About",
    url: "#",
  },
];
function isLocalStorageAvailable(){
  const accessToken = localStorage.getItem('access_token');
  if (accessToken) {
    console.log('Access token found:', accessToken);
    return true
  } else {
    console.log('No access token found');
    return false
  }
}
const Navbar = () => {
  const navigate = useNavigate();
  function handleLogout() {
    toast.success("You have been Logged out Successfull");
    localStorage.removeItem("accessToken");
    navigate("/");
  }
  return (
    <div className={styles["nav_bar_color"]}>
      <div className={styles["header"]}>
        <div className={styles["wrapper"]}>
        <Link to='/'> <div className={styles["logo"]}>
           <img src={logoItexBlue} />
          </div></Link>
          <div className={styles["header-text-flag"]}><Link to='/'>ITEXC AGENCY</Link></div>
        </div>
      </div>
      <SearchBar />
      <div className={styles["navigation"]}>
        {navLinks?.map((navLink) => (
          <Link key={navLink.name} to={navLink?.url}>
            {navLink.name}
          </Link>
        ))}
        
        <Link to="/client/account/cart">
          <button>
            <AiOutlineShoppingCart fontSize={32} color="blue" />
          </button>
        </Link>

        <Menu>
          <MenuButton>
            <BsPersonCircle fontSize={32} color="blue" />
          </MenuButton>
          <MenuList
            border="2px solid #1218E2"
            borderRadius="10px"
            padding="10px"
          >
            <div className={styles["profile"]}>
              <Avatar
                border="2px solid #1218E2"
                name="Dan Abrahmov"
                src="https://bit.ly/dan-abramov"
              />
              <p> UserName</p>
            </div>
            <MenuGroup>
              <Link to="/client/account/profile">
                {" "}
                <MenuItem> Profile </MenuItem>{" "}
              </Link>
              <Link to="/client/account/orders">
                {" "}
                <MenuItem>Order History </MenuItem>
              </Link>
              <Link to="/client/account/wishlist">
                {" "}
                <MenuItem> Whislist </MenuItem>{" "}
              </Link>
              { isLocalStorageAvailable() ? <Link to="/login">
                {" "}<MenuItem>Login </MenuItem>{" "}
              </Link> :''}
              <MenuItem onClick={handleLogout}>Log Out</MenuItem>
            </MenuGroup>
            <MenuDivider />

            <MenuGroup title="Help">
              <MenuItem>Docs</MenuItem>
              <MenuItem>FAQ</MenuItem>
            </MenuGroup>
          </MenuList>
        </Menu>
      </div>
    </div>
  );
};
export default Navbar;
