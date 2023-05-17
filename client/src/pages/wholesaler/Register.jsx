import FormStepper from "../../components/FormStepper";
import Header from "../../components/Header";
import styles from "../../styles/VendorRegister.module.scss";
import { Formik, useFormik } from "formik";
import * as Yup from "yup";
import React from "react";
import { FormControl, FormErrorMessage } from "@chakra-ui/form-control";
import stepStyles from "../../styles/Step.module.scss";
import { MdAddPhotoAlternate } from "react-icons/md";
import { useRegisterMutation } from "../../store/api/authApi";
import { toast } from "react-toastify";
import { useNavigate } from "react-router";


const steps = (validation) => [
  <div>
    <header className={stepStyles.header}>Account info</header>
    <div className={stepStyles.formStep}>
      <div className={stepStyles.doubleSignupInputbox}>
        <FormControl isInvalid={!!validation.errors.fullName}>
          <input
            className={stepStyles.signupInputBox}
            placeholder="Full name"
            name="fullName"
            type="text"
            value={validation.values.fullName}
            onChange={validation.handleChange}
          />
          {!!validation.errors.fullName ? (
            <FormErrorMessage>{validation.errors.fullName}</FormErrorMessage>
          ) : null}
        </FormControl>

        <FormControl isInvalid={!!validation.errors.username}>
          <input
            className={stepStyles.signupInputBox}
            placeholder="Username"
            name="username"
            type="text"
            value={validation.values.username}
            onChange={validation.handleChange}
          />
          {!!validation.errors.username ? (
            <FormErrorMessage>{validation.errors.username}</FormErrorMessage>
          ) : null}
        </FormControl>
      </div>

      <FormControl>
        <input
          className={stepStyles.signupInputBox}
          placeholder="Address"
          name="address"
          type="text"
          value={validation.values.address}
          onChange={validation.handleChange}
        />
      </FormControl>

      <FormControl isInvalid={!!validation.errors.zipCode}>
        <input
          className={stepStyles.signupInputBox}
          type="number"
          name="zipCode"
          placeholder="Zip code"
          value={validation.values.zipCode}
          onChange={validation.handleChange}
        />
        {!!validation.errors.zipCode ? (
          <FormErrorMessage>{validation.errors.zipCode}</FormErrorMessage>
        ) : null}
      </FormControl>

      <FormControl isInvalid={!!validation.errors.phoneNumber}>
        <input
          className={stepStyles.signupInputBox}
          placeholder="Phone number"
          name="phoneNumber"
          type="text"
          value={validation.values.phoneNumber}
          onChange={validation.handleChange}
        />
        {!!validation.errors.phoneNumber ? (
          <FormErrorMessage>{validation.errors.phoneNumber}</FormErrorMessage>
        ) : null}
      </FormControl>

      <FormControl isInvalid={!!validation.errors.email}>
        <input
          className={stepStyles.signupInputBox}
          placeholder="Email"
          name="email"
          type="email"
          value={validation.values.email}
          onChange={validation.handleChange}
        />
        {!!validation.errors.email ? (
          <FormErrorMessage>{validation.errors.email}</FormErrorMessage>
        ) : null}
      </FormControl>

      <FormControl isInvalid={!!validation.errors.password}>
        <input
          className={stepStyles.signupInputBox}
          placeholder="Enter a password"
          name="password"
          type="password"
          value={validation.values.password}
          onChange={validation.handleChange}
        />
        {!!validation.errors.password ? (
          <FormErrorMessage>{validation.errors.password}</FormErrorMessage>
        ) : null}
      </FormControl>

      <FormControl isInvalid={!!validation.errors.passwordConfirm}>
        <input
          className={stepStyles.signupInputBox}
          placeholder="Confirm password"
          name="passwordConfirm"
          type="password"
          value={validation.values.passwordConfirm}
          onChange={validation.handleChange}
        />
        {!!validation.errors.passwordConfirm ? (
          <FormErrorMessage>
            {validation.errors.passwordConfirm}
          </FormErrorMessage>
        ) : null}
      </FormControl>
    </div>
  </div>,
  <div>
    <header className={stepStyles.header}>Business info</header>
    <div className={stepStyles.formStep}>
      <FormControl isInvalid={!!validation.errors.storeName}>
        <input
          className={stepStyles.signupInputBox}
          placeholder="Store name"
          name="storeName"
          type="text"
          value={validation.values.storeName}
          onChange={validation.handleChange}
        />
        {!!validation.errors.storeName ? (
          <FormErrorMessage>{validation.errors.storeName}</FormErrorMessage>
        ) : null}
      </FormControl>

      <FormControl isInvalid={!!validation.errors.storeEmail}>
        <input
          className={stepStyles.signupInputBox}
          placeholder="Store email"
          name="storeEmail"
          type="email"
          value={validation.values.storeEmail}
          onChange={validation.handleChange}
        />
        {!!validation.errors.storeEmail ? (
          <FormErrorMessage>{validation.errors.storeEmail}</FormErrorMessage>
        ) : null}
      </FormControl>

      <FormControl isInvalid={!!validation.errors.storeAddress}>
        <input
          className={stepStyles.signupInputBox}
          placeholder="Store address"
          name="storeAddress"
          type="text"
          value={validation.values.storeAddress}
          onChange={validation.handleChange}
        />
        {!!validation.errors.storeAddress ? (
          <FormErrorMessage>{validation.errors.storeAddress}</FormErrorMessage>
        ) : null}
      </FormControl>

      <FormControl isInvalid={!!validation.errors.storeZipCode}>
        <input
          className={stepStyles.signupInputBox}
          type="number"
          name="storeZipCode"
          placeholder="Store Zipcode"
          value={validation.values.storeZipCode}
          onChange={validation.handleChange}
        />
        {!!validation.errors.storeZipCode ? (
          <FormErrorMessage>{validation.errors.storeZipCode}</FormErrorMessage>
        ) : null}
      </FormControl>

      <FormControl isInvalid={!!validation.errors.commerceRegister}>
        <input
          className={stepStyles.signupInputBox}
          placeholder="Commerce register number"
          name="commerceRegister"
          type="number"
          value={validation.values.commerceRegister}
          onChange={validation.handleChange}
        />
        {!!validation.errors.commerceRegister ? (
          <FormErrorMessage>
            {validation.errors.commerceRegister}
          </FormErrorMessage>
        ) : null}
      </FormControl>

      <FormControl isInvalid={!!validation.errors.nif}>
        <input
          className={stepStyles.signupInputBox}
          placeholder="NIF number"
          name="nif"
          type="number"
          value={validation.values.nif}
          onChange={validation.handleChange}
        />
        {!!validation.errors.nif ? (
          <FormErrorMessage>{validation.errors.nif}</FormErrorMessage>
        ) : null}
      </FormControl>
    </div>
  </div>,
  <div>
    <header className={stepStyles.header}>Business info</header>
    <div className={stepStyles.subheader}> One last step!</div>
    <div className={stepStyles.formStep}>
      <FormControl>
        <div className={stepStyles.storeType}>
          <span className={stepStyles.types}>Store type :</span>
          <label className={stepStyles.label} htmlFor="onlineCheck">
            Online
          </label>
          <input
            type="checkbox"
            className={stepStyles.checkBox}
            id="onlineCheck"
            value={validation.values.onlineCheck}
            onChange={validation.handleChange}
            checked
          />
          <label className={stepStyles.label} htmlFor="physicalCheck">
            Physical
          </label>
          <input
            type="checkbox"
            className={stepStyles.checkBox}
            id="physicalCheck"
            value={validation.values.physicalCheck}
            onChange={validation.handleChange}
          />
        </div>
      </FormControl>

      <FormControl>
        <select className={stepStyles.storeCategory}
        value={validation.values.storeCategory}
        onChange={(e) => {
          validation.setFieldValue("storeCategory", e.target.value);
        }}>
          <option disabled selected>
            Select the category of your products
          </option>
          <option>clothing</option>
          <option>cosmetics</option>
          <option>sport equipements</option>
          <option>other</option>
        </select>
      </FormControl>

      <FormControl>
        <div className={stepStyles.addLogo}>
          <label htmlFor="storeLogo">
            Add store logo
            <MdAddPhotoAlternate className={stepStyles.imageIcon} />
          </label>
          <input id="storeLogo" name="storeLogo" type="file" accept="image/" 
              onChange={(e) => {
                  const file = e.target.files[0];
                  const imageUrl = URL.createObjectURL(file);
                  validation.setFieldValue("storeLogo", imageUrl);
              }}/>
        </div>
      </FormControl>
    </div>
  </div>,
];

const WholeSalerRegister = () => {

  const navigate = useNavigate();

  const [onRegister, { isLoading: isRegisterLoading }] = useRegisterMutation();

  const validation = useFormik({
    enableReinitialize: true,
    initialValues: {
      fullName: "",
      username: "",
      phoneNumber: "",
      address: "",
      zipCode: "",
      email: "",
      password: "",
      passwordConfirm: "",
      storeName: "",
      storeEmail: "",
      storeAddress: "",
      storeZipCode: "",
      commerceRegister: "",
      nif: "",
      onlineCheck: true,
      physicalCheck: false,
      storeType:"",
      storeCategory: "",
      storeLogo: null,
      role: "store",
      hasPicture: false,
      hasStoreLogo: false,
      isBusiness: true,
    },

    validationSchema: Yup.object({
      fullName: Yup.string().required("Your full name is required"),
      username: Yup.string().required("Your username is required"),
      zipCode: Yup.string()
        .required("Your Zipcode is required")
        .matches(/^[0-9]{5}$/, "Invalid Zip code"),
      phoneNumber: Yup.string().matches(/^[0-9]{9}$/, "Invalid phone number"),
      email: Yup.string().email().required("Your email is required"),
      password: Yup.string()
        .required()
        .matches(
          /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})/,
          "Must contain at least 8 haracters, an uppercase, a lowercase and a number"
        ),
      passwordConfirm: Yup.string()
        .oneOf([Yup.ref("password"), null], "Passwords must match")
        .required("You  must confirm your password"),
      storeName: Yup.string().required("Store name is required"),
      storeEmail: Yup.string().email(),
      storeAddress: Yup.string(),
      storeZipCode: Yup.string()
        .required("Zip code is required")
        .matches(/^[0-9]{5}$/, "Invalid Zip code"),
      commerceRegister: Yup.number().required(
        "Commerce register number is required"
      ),
      nif: Yup.number().required("NIF number is required"),
      storeCategory: Yup.string().required(
        "Please select the category of your products"
      ),
    }),
    
  
  });

  const handleSubmit = async (values, actions) => {
    const response = await onRegister(values);
  
    if (response?.data) {
      toast.success("Your registration has been completed successfully");
      navigate("/");
    } else {
      const errorMessage = response?.error?.data?.message;
  
      toast.error(
        Array.isArray(errorMessage) ? errorMessage?.[0] : errorMessage
      );
    }
  };
  
  return (
    <div className={styles.multistepReg}>
      <Header />
      <FormStepper steps={steps(validation)} onSubmit={(event) => {
        event.preventDefault();
        handleSubmit(validation.values, event);
      }} />
    </div>
  );
};

export default WholeSalerRegister;
