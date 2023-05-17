import Home from "../pages/Home"
import Login from "../pages/Login"
import Register from "../pages/client/Register"
import WholesalerRegister from "../pages/wholesaler/Register"
import Product from "../pages/Product"
import Account from "../pages/client/Account"
import StoreRegister from "../pages/store/Register"
import StoreAccount from "../pages/store/Account"
import Admin from "../pages/Admin"
import Users from "../pages/Users"
import WholeSalerAccount from "../pages/wholesaler/Account"
import StoreManagement from "../pages/store/StoreManagement"
import StoreSpace from "../pages/store/exchangeSpace"
import WholeSalerSpace from "../pages/wholesaler/exchangeSpace"

export const userRoutes = [
  { path: "/home", component: <Home /> },
  { path: "/*", component: <Home /> },
  { path: "/product/:id", component: <Product /> },
  { path: "/client/account/*", component: <Account /> },
  { path: "/store/account/*", component: <StoreAccount /> },
  { path: "/wholesaler/account/*", component: <WholeSalerAccount /> },
  { path: "/store/management/*", component: <StoreManagement /> },
  { path: "/store/exchange-space", component: <StoreSpace/> },
  { path: "/wholesaler/exchange-space", component: <WholeSalerSpace/> },
  { path: "/admin/users/", component: <Users /> },
  { path: "/admin" ,component: <Admin/> }
];

export const authRoutes = [
  { path: "/register", component: <Register />},
  { path: "/login", component: <Login /> },
  { path: "/client/register", component: <Register /> },
  { path: "/store/register", component: <StoreRegister /> },
  { path: "/wholesaler/register", component: <WholesalerRegister /> },
];
