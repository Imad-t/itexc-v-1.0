import { FormControl, FormErrorMessage } from "@chakra-ui/react";
import styles from "../styles/Step.module.scss";
import { useFormik } from "formik";
import * as Yup from "yup";

const Step2 = () => {

  const validation = useFormik({
    enableReinitialize: true,
    initialValues: {
      storeName: "",
      storeEmail: "",
      storeAddress: "",
      zipCode: "",
      commerceRegister: "",
      nif: "",
      },

    validationSchema: Yup.object({
      storeName: Yup.string().required('Store name is required'),
      storeEmail: Yup.string().email().required('Store email is required'),
      storeAddress: Yup.string().required('Store address is required'),
      zipCode: Yup.string().required('Zip code is required')
                                .matches(/^[0-9]{5}$/,'Invalid Zip code'),
      commerceRegister: Yup.number().required('Commerce register number is required'),
      nif: Yup.number().required('NIF number is required'),
    }),

    onSubmit: async (values) => {
      console.log(values);
    }
  });

  return (
    <div>
      <header className={styles.header}>Business info</header>
        <form className={styles.formStep}>
            <FormControl isInvalid={!!validation.errors.storeName} value={validation.values.storeName} onChange={validation.handleChange}>
            <input className={styles.signupInputBox} placeholder="Store name" name="storeName" type="text" />
            {!!validation.errors.storeName ? (
                <FormErrorMessage>{validation.errors.storeName}</FormErrorMessage>
            ) : null}
            </FormControl>

            <FormControl isInvalid={!!validation.errors.storeEmail} value={validation.values.storeEmail} onChange={validation.handleChange}>
            <input className={styles.signupInputBox} placeholder="Store email" name="storeEmail" type="email" />
            {!!validation.errors.storeEmail ? (
                <FormErrorMessage>{validation.errors.storeEmail}</FormErrorMessage>
            ) : null}
            </FormControl>

            <FormControl isInvalid={!!validation.errors.storeAddress} value={validation.values.storeAddress} onChange={validation.handleChange}>
            <input className={styles.signupInputBox} placeholder="Store address" name="storeAddress" type="text" />
            {!!validation.errors.storeAddress ? (
                <FormErrorMessage>{validation.errors.storeAddress}</FormErrorMessage>
            ) : null}
            </FormControl>

            <FormControl isInvalid={!!validation.errors.zipCode} value={validation.values.zipCode} onChange={validation.handleChange}>
                <input className={styles.signupInputBox} type="number" name="zipCode" placeholder="Zip code"/>
                {!!validation.errors.zipCode ? (
              <FormErrorMessage>{validation.errors.zipCode}</FormErrorMessage>
            ) : null} 
            </FormControl>

            <FormControl isInvalid={!!validation.errors.commerceRegister} value={validation.values.commerceRegister} onChange={validation.handleChange}>
            <input className={styles.signupInputBox} placeholder="Commerce register number" name="commerceRegister" type="number" />
            {!!validation.errors.commerceRegister ? (
                <FormErrorMessage>{validation.errors.commerceRegister}</FormErrorMessage>
            ) : null}
            </FormControl>

            <FormControl isInvalid={!!validation.errors.nif} value={validation.values.nif} onChange={validation.handleChange}>
            <input className={styles.signupInputBox} placeholder="NIF number" name="nif" type="number" />
            {!!validation.errors.nif ? (
                <FormErrorMessage>{validation.errors.nif}</FormErrorMessage>
            ) : null}
            </FormControl>
           


        </form> 
    </div>
    
  )
};

export default Step2;