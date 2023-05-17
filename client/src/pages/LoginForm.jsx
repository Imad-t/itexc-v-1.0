import React from "react";
import "../styles/Login.css";
import Header from "../components/Header";
import { Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const LoginForm = () => {
  return (
    <div>
      <Header></Header>
      <section className={"login-pos"}>
        <div className="form-box">
          <div className="form-value">
            <form action="">
              <Text fontWeight="bold " fontSize="30px" textAlign="center" textColor="#1218E2">
                Login
              </Text>
              <div className="inputbox">
                <ion-icon name="mail-outline" />
                <input type="email" placeholder="Email" required></input>
              </div>

              <div className="inputbox">
                <ion-icon name="lock-closed-outline" />
                <input type="Password" placeholder="Password" required></input>
              </div>
              <div className="forget">
                <input type="checkbox"></input>
                <label htmlFor="">Remember Me</label>
                <a href="#"> Forget Password</a>
              </div>
              <div className="form-btns">
                <button className="logIn-btn">Log in</button>
                <div className="register">
                  <p>Don't have an account? </p>
                  <Link to="/Register">Register</Link>
                </div>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};
export default LoginForm;
