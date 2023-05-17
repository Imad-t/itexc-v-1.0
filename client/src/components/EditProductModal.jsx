import React from "react";
import styles from "../styles/EditProductModal.module.scss";
import { Field, Formik } from "formik";
import { useState, useRef } from "react";
import * as yup from "yup";
import { Spinner } from "@chakra-ui/react";
import Navbar from "../components/Navbar";
import { ChevronLeftIcon, ChevronRightIcon } from '@chakra-ui/icons'
import { categories } from "../data/categories";

const productSchema = yup.object().shape({
  name: yup.string().required("You must set a Product Name").min(10, "min of 10 characters").max(30, "max of 30 characters"),
  category: yup.string().required("You must set a Category for your Product"),
  type: yup.string().required(),
  price: yup.number().required("You must set a Price for your product"),
  description: yup.string().required().min(30, "min of 30 characters").max(600, "max of 600 characters"),
  images: yup.mixed().required('Please select an image file'),
});


const initialValues = {
  name: "",
  category: "",
  type: "",
  price: "",
  description: "",
  images: [],
};

function EditProductModal({productData}) {
    const fields = [
        {
          label: productData.name,
          name: "name",
          type: "text",
        },
        {
          label: productData.categorie,
          name: "category",
          type: "text",
        },
        {
          label: productData.type,
          name: "type",
          type: "text",
        },
        {
          label: productData.price +" DZ",
          name: "price",
          type: "number",
        },
        {
          label: productData.description,
          name: "description",
          type: "text",
        },
        {
          label: "Images",
          name: "images",
          type: "file",
          accept: "image/*",
          multiple: true,
        },
      ];
  const onSubmit = async (values, actions) => {
    console.log(values);
    console.log(JSON.stringify(values))
    await new Promise((resolve) => setTimeout(resolve, 1000));
    //actions.resetForm();
    setSelectedImages([]);
  };
  const imageInput = useRef(null);
  let [selectedImages, setSelectedImages] = useState([]);
  function onSelectFile(event) {
    console.log(event.target.value);
    const selectedFiles = event.target.files;
    const selectedFilesArray = Array.from(selectedFiles);
    const imagesArray = selectedFilesArray.map((file) => {
      return URL.createObjectURL(file);
    }
    );
    setSelectedImages([...selectedImages, ...imagesArray]);
  }
  console.log(selectedImages)
  
  function handleImageButton() {
    imageInput.current.click();
  }
  const [check, setCheck] = useState(false);
  const isChecked = () => {
    setCheck(!check);
    console.log(check);
  };
  const [category, setCategory] = useState("");
  const handleCategory = (event) => {
    const selectedCategory = event.target.value;
    setCategory(selectedCategory);
  };
  const subcategories =
    categories?.find((cat) => cat.name === category)?.subcategories || [];
    
    const [slide,setSlide]=useState(0,[])
console.log(slide)
const length = selectedImages.length;
console.log(length)

  const goToNextImage = () => {
    setSlide(slide === length - 1 ? 0 : slide + 1);
  };

  const goToPrevImage = () => {
    setSlide(slide === 0 ? length - 1 : slide - 1);
  };
  return (
    <>
      <div className={styles.addProductBackground}>
        <div className={styles.addProductContainer}>
          <Formik
            initialValues={initialValues}
            onSubmit={onSubmit}
            validationSchema={productSchema}
          >
            {({
              values,
              errors,
              touched,
              isSubmitting,
              handleBlur,
              handleChange,
              handleSubmit,
            }) => (
              <form
                className={styles.productFormContainer}
                onSubmit={handleSubmit}
                autoComplete="off"
              >
                <div className={styles.leftContainer}>
                  <div className={styles.images}>
                    <div className={styles.imageContainer}>
                  { selectedImages.length <= 1 ? '' : <button onClick={goToPrevImage} className={styles.prev} type="button">
                        <ChevronLeftIcon/>
                      </button >
                      }
                    { selectedImages.length <= 1 ? '' :  <button onClick={goToNextImage} className={styles.next} type="button">
                        <ChevronRightIcon />
                      </button >}
                      {selectedImages.length > 0 && selectedImages.map((image,index)=>{
                      return (
                      <div key={index} className={slide === index ? styles.image : styles.none } height='100%'>
                      <img src={image} key={index} alt={values?.name} />
                      </div>
                       );
                      })}
                      <input
                        className={styles.imageUpload}
                        type="file"
                        name="images"
                        value={values.images}
                        onBlur={handleBlur}
                        onChange={onSelectFile}
                        multiple
                        accept="image/*"
                        ref={imageInput}
                      ></input>
                      <button
                        className={styles.uplaodPictures}
                        onClick={handleImageButton}
                        type="button"
                      >
                        Upload Pictures
                      </button>
                      
                      {errors.images && touched.images && (
                          <p className="error">{errors.images}</p>
                        )}
                    </div>
                  </div>
                </div>
                <div className={styles.inputContainer}>
                  <div className={styles.category}>
                    <Field
                      as="select"
                      type="text"
                      name="category"
                      placeholder="Category"
                      value={values.category}
                      onBlur={handleBlur}
                      onChange={(e) => {
                        handleChange(e);
                        handleCategory(e);
                      }}
                    >
                      <option value="" defaultValue  selected>
                        Categorie
                      </option>
                      {categories?.map((categorie,index) => (
                        <option  key={index} value={categorie.name}>{categorie.name}</option>
                      ))}
                    </Field>
                  </div>
                  <div className={styles.type}>
                    <Field
                      as="select"
                      type="text"
                      name="type"
                      placeholder="Product Type"
                      value={values.type}
                      onBlur={handleBlur}
                      onChange={handleChange}
                    >
                      <option value="" disabled selected>
                        Product Type
                      </option>
                      {subcategories.map((subcategory) => (
                        <option key={subcategory.name} value={subcategory.name}>
                          {subcategory.name}
                        </option>
                      ))}
                    </Field>
                  </div>
                  {fields.map((field) =>
                    field.name === "images" ||
                    field.name === "category" ||
                    field.name === "type" ? (
                      ""
                    ) : (
                      <div key={field.name} className={styles[field.name]}>
                        <Field
                          as={field?.name === "description" ? "textarea" : ""}
                          type={field.type}
                          name={field.name}
                          placeholder={field.label}
                          value={values[field.name]}
                          onBlur={handleBlur}
                          onChange={handleChange}
                        ></Field>
                        {errors[field.name] && touched[field.name] && (
                          <p className="error">{errors[field.name]}</p>
                        )}
                      </div>
                    )
                  )}    
                  <button
                    className={styles.submit}
                    type="submit"
                    disabled={!check || isSubmitting}
                  >
                    {isSubmitting === true ? (
                      <Spinner color="#3338E5" />
                    ) : (
                      <p>Edit Product</p>
                    )}
                  </button>
                </div>
              </form>
            )}
          </Formik>
        </div>
      </div>
    </>
  );
}

export default EditProductModal;
