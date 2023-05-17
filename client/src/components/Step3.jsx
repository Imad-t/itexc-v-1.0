import { FormControl } from "@chakra-ui/react";
import styles from "../styles/Step.module.scss";
import { useFormik } from "formik";
import * as Yup from "yup";
import { MdAddPhotoAlternate } from 'react-icons/md';

const Step3 = () => {
    const validation = useFormik({
        enableReinitialize: true,
        initialValues: {
          onlineCheck: true,
          physicalCheck: false,
          storeCategory: "",
          storeLogo: null,
        },
    
        validationSchema: Yup.object({
          storeCategory: Yup.string().required('Please select the category of your products'),
        }),
    
        onSubmit: async (values) => {
          console.log(values);
        }
      });

    return (
        <div>
            <header className={styles.header}>Business info</header>
            <div className={styles.subheader}> One last step!</div>
            <form className={styles.formStep} onSubmit={validation.handleSubmit}>
                <FormControl>
                    <div className={styles.storeType}>
                        <span className={styles.types} >Store type :</span>
                        <label className={styles.label} htmlFor="onlineCheck">Online</label>
                        <input type="checkbox" className={styles.checkBox} id="onlineCheck" checked/>
                        <label className={styles.label} htmlFor="physicalCheck">Physical</label>
                        <input type="checkbox" className={styles.checkBox} id="physicalCheck"/>
                    </div>
                </FormControl>

                <FormControl>
                    <select className={styles.storeCategory}  >
                        <option disabled selected>Select the category of your products</option>
                        <option >clothing</option>
                        <option >cosmetics</option>
                        <option >sport equipements</option>
                        <option >other</option>
                    </select>
                </FormControl>

                <FormControl>
                  <div className={styles.addLogo}>   
                  <label htmlFor="storeLogo">Add store logo  <MdAddPhotoAlternate className={styles.imageIcon} />

                  </label>
                  <input id="storeLogo" name="storeLogo" type="file" accept="image/" />
                  </div>
                </FormControl>
            </form>

        </div>
    );
}
 
export 
default Step3;