import Header from "../../components/Header";
import { Heading } from "@chakra-ui/react";
import { useFormik } from "formik";
import "../../styles/Register.css";
import { customerSchema } from "../../schemas/customerScheme";
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useRegisterMutation } from "../../store/api/authApi";
import { toast } from "react-toastify";

function Register() {
  const navigate = useNavigate();

  const [onRegister, { isLoading: isRegisterLoading }] = useRegisterMutation();

  const {
    values,
    errors,
    touched,
    isSubmitting,
    handleBlur,
    handleChange,
    handleSubmit,
  } = useFormik({
    initialValues: {
      fullName: "",
      username: "",
      email: "",
      age: "",
      password: "",
      confirmPassword: "",
      address: "",
      zip: "",
      phone: "",
      role: "customer",
      hasPicture: false,
      isBusiness: false,
    },
     validationSchema: customerSchema,
    onSubmit: async (values, actions) => {
      const response = await onRegister(values);

      if (response?.data) {
        toast.success("Your registeration has been completed successfully");
        actions.resetForm();
        navigate("/");
      } else {
        const errorMessage = response?.error?.data?.message;

        toast.error(
          Array.isArray(errorMessage) ? errorMessage?.[0] : errorMessage
        );
      }
    },
  });
  return (
    <>
    
      <Header></Header>
    <div className="SignUp-background">
      <form className="form-container" onSubmit={handleSubmit}>
        <div className="Form-container-card">
          
            <Heading as="h2" fontSize={"30px"} textAlign={"left"} className="heading">
            SignUp
          </Heading>
          <div className="form-input-container">
            <div className="Signup-inputbox-containers">
              <Heading
                as="h2"
                fontSize={"20px"}
                textAlign={"left"}
                color={"black"}
              >
                Account
              </Heading>

              <div className="Signup-inputbox">
                <ion-icon name="person-outline" />
                <input
                  type="text"
                  name="username"
                  placeholder="Username"
                  value={values.username}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
              </div>
              {errors.username && touched.username && (
                <p className="error">{errors.username}</p>
              )}


              <div className="Signup-inputbox">
                <ion-icon name="person-outline" />
                <input
                  type="text"
                  name="fullName"
                  placeholder="Full Name"
                  value={values.fullName}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
              </div>
              {errors.fullName && touched.fullName && (
                <p className="error">{errors.fullName}</p>
              )}


              <div className="Signup-inputbox">
                <ion-icon name="mail-outline" />
                <input
                  type="text"
                  name="email"
                  placeholder="Email"
                  value={values.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                ></input>
                {errors.email && touched.email && (
                  <p className="error">{errors.email}</p>
                )}
              </div>

              <div className="Signup-inputbox">
                <ion-icon name="lock-open-outline" />
                <input
                  type="password"
                  name="password"
                  placeholder="Password"
                  value={values.password}
                  onChange={handleChange}
                  onBlur={handleBlur}
                ></input>
              </div>
              {errors.password && touched.password && (
                <p className="error">{errors.password}</p>
              )}

              <div className="Signup-inputbox">
                <ion-icon name="lock-closed-outline" />
                <input
                  type="password"
                  name="confirmPassword"
                  placeholder="Confirm Password"
                  value={values.confirmPassword}
                  onChange={handleChange}
                  onBlur={handleBlur}
                ></input>
              </div>
              {errors.confirmPassword && touched.confirmPassword && (
                <p className="error">{errors.confirmPassword}</p>
              )}
            </div>
            <div className="Signup-inputbox-containers">
              <Heading
                as="h2"
                fontSize={"20px"}
                textAlign={"left"}
                color={"black"}
              >
                Personal Info
              </Heading>

              <div className="Signup-inputbox">
                <ion-icon name="location-outline" />
                <input
                  type="text"
                  name="address"
                  placeholder="Address"
                  value={values.address}
                  onChange={handleChange}
                  onBlur={handleBlur}
                ></input>
              </div>
              {errors.address && touched.address && (
                <p className="error">{errors.address}</p>
              )}
              <div className="Signup-inputbox">
                <ion-icon name="qr-code-outline" />
                <input
                  type="number"
                  name="zip"
                  placeholder="Zip"
                  value={values.zip}
                  onChange={handleChange}
                  onBlur={handleBlur}
                ></input>
              </div>
              {errors.zip && touched.zip && (
                <p className="error">{errors.zip}</p>
              )}

              <div className="Signup-inputbox">
                <ion-icon name="call-outline" />
                <input
                  type="number"
                  name="phone"
                  placeholder="Phone Number"
                  value={values.phone}
                  onChange={handleChange}
                  onBlur={handleBlur}
                ></input>
                {errors.phone && touched.phone && (
                  <p className="error">{errors.phone}</p>
                )}
              </div>
            </div>
          </div>
          <div className="form-btns">
            <div className="social-btn">
              <button className="facebook-btn">
                <ion-icon name="logo-facebook" />
              </button>
              <button className="google-btn">
                <ion-icon name="logo-google" />
              </button>
            </div>
            <div className="register">
              <button className="Register-btn" type="submit">
                SignUp
              </button>
              <p>
                Already have an account? <Link to="/Login"> Login in</Link>
              </p>
            </div>
          </div>
        </div>
      </form>
    </div>
    </>
  );
}

export default Register;
