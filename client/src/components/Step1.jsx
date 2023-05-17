import { FormControl, FormErrorMessage } from "@chakra-ui/react";
import styles from "../styles/Step.module.scss";
import { useFormik } from "formik";
import * as Yup from "yup";


const Step1 = () => {

  const validation = useFormik({
    enableReinitialize: true,
    initialValues: {
      fullName: "",
      phoneNumber: "",
      email: "",
      password: "",
      passwordConfirm: "",
    },

  validationSchema: Yup.object({
    fullName: Yup.string().required('Your full name is required'),
    phoneNumber: Yup.string().matches(/^[0-9]{10}$/,'Invalid phone number'),
    email: Yup.string().email().required('Your email is required'),
    password: Yup.string()
      .required()
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})/,
        "Must contain at least 8 haracters, an uppercase, a lowercase and a number"
      ),
    passwordConfirm: Yup.string()
    .oneOf([Yup.ref('password'),null],'Passwords must match')
    .required('You  must confirm your password')
  }),

    onSubmit: async (values) => {
      console.log(values);
    }
  });

    return (
      <div>
        <header className={styles.header}>Account info</header>
        <form className={styles.formStep}>
        
        <FormControl isInvalid={!!validation.errors.fullName} value={validation.values.fullName} onChange={validation.handleChange} >
         <input className={styles.signupInputBox} placeholder="Full name" name="fullName" type="text"/>
         {!!validation.errors.fullName ? (
                <FormErrorMessage>{validation.errors.fullName}</FormErrorMessage>
              ) : null}
        </FormControl>

        <FormControl isInvalid={!!validation.errors.phoneNumber} value={validation.values.phoneNumber} onChange={validation.handleChange}>
          <input className={styles.signupInputBox} placeholder="Phone number" name="phoneNumber" type="tel"/>
          {!!validation.errors.phoneNumber ? (
              <FormErrorMessage>{validation.errors.phoneNumber}</FormErrorMessage>
            ) : null} 
        </FormControl>

        <FormControl isInvalid={!!validation.errors.email} value={validation.values.email} onChange={validation.handleChange} >
          <input className={styles.signupInputBox} placeholder="Email" name="email" type="email"/>
          {!!validation.errors.email ? (
                <FormErrorMessage>{validation.errors.email}</FormErrorMessage>
              ) : null}
        </FormControl>

        <FormControl isInvalid={!!validation.errors.password}>
        <input className={styles.signupInputBox} placeholder="Enter a password" name="password" type="password"
         value={validation.values.password} onChange={validation.handleChange} />
         {!!validation.errors.password ? (
                <FormErrorMessage>{validation.errors.password}</FormErrorMessage>
              ) : null}
        </FormControl>
        
        <FormControl isInvalid={!!validation.errors.passwordConfirm}>
          <input
            className={styles.signupInputBox}
            placeholder="Confirm password"
            name="passwordConfirm"
            type="password"
            value={validation.values.passwordConfirm}
            onChange={validation.handleChange}
          />
          {!!validation.errors.passwordConfirm ? (
              <FormErrorMessage>{validation.errors.passwordConfirm}</FormErrorMessage>
            ) : null} 
        </FormControl>
      
        </form>

      </div>
    )
  };
  
  export default Step1;