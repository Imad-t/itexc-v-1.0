import {
  FormControl,
  FormErrorMessage,
  FormHelperText,
  Input,
  Spinner,
} from "@chakra-ui/react";
import { useFormik } from "formik";
import * as Yup from "yup";
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import Header from "../components/Header";

import styles from "../styles/Login.module.scss";
import { useLoginMutation } from "../store/api/authApi";
import { toast } from "react-toastify";

const Login = () => {
  const navigate = useNavigate();

  const [onLogin, { isLoading: isLoginLoading }] = useLoginMutation();

  const validation = useFormik({
    enableReinitialize: true,
    initialValues: {
      password: "",
      email: "",
    },

    validationSchema: Yup.object({
      email: Yup.string().required(),
      password: Yup.string().required(),
      // .matches(
      //   /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})/,
      //   "Must contain at least 8 haracters, an uppercase, a lowercase and a number"
      // ),
    }),

    onSubmit: async (values) => {
      const response = await onLogin(values);

      if (response?.data) {
        toast.success("Login Successfull");
        navigate("/");
      } else {
        toast.error(response?.error?.data?.message);
      }
    },
  });

  return (
    <>
    
      <Header />
    <div className={styles.login}>

      <main>
        <div className={styles.loginCard}>
          <h2>Login</h2>

          <form
            onSubmit={(e) => {
              e.preventDefault();
              validation.handleSubmit();
            }}
          >
            <FormControl isInvalid={!!validation.errors.email}>
              <input
                className={styles.inputBox}
                type="text"
                name="email"
                placeholder="Email"
                value={validation.values.email}
                onChange={validation.handleChange}
              />
              {!!validation.errors.email ? (
                <FormErrorMessage>
                  {validation.errors.email}
                </FormErrorMessage>
              ) : null}
            </FormControl>

            <FormControl isInvalid={!!validation.errors.password}>
              <input
                className={styles.inputBox}
                type="password"
                name="password"
                placeholder="Password"
                value={validation.values.password}
                onChange={validation.handleChange}
              />
              {!!validation.errors.password ? (
                <FormErrorMessage>
                  {validation.errors.password}
                </FormErrorMessage>
              ) : null}
            </FormControl>

            <div className={styles.row}>
              <label>
                <input type="checkbox" name="checkbox" value="value" />
                Remember me
              </label>
              <a href="#">Forgot Password</a>
            </div>

            <button type="submit" disabled={isLoginLoading}>
              Login {isLoginLoading ? <Spinner size="sm" /> : false}
            </button>
          </form>

          <p>
            Don't have an account? <Link to="/store/register"> Register </Link>
          </p>
        </div>
      </main>
    </div>
    </>
  );
};

export default Login;
