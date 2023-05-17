import { Box, Button } from "@chakra-ui/react";
import styles from "../../styles/ModifiableProducts.module.scss";
import { AddIcon } from "@chakra-ui/icons";
const AddProduct = () => {
  return (
    <Box
      className={styles["Product-container"]}
      display="flex"
      justifyContent="center"
      alignItems="center"
      bg="white"
    >
      <button >
        <AddIcon
          w="100px"
          h="100px"
          p="20px"
          bg="gray.200"
          color={"#1218e2"}
          opacity="0.6"
          borderRadius={"50%"}
          _hover={{ transform: "scale(1.1)" , opacity: 0.8, transition:" 0.4s ease-in;", boxShadow:"0px 2px 10px rgba(0, 0, 0, 0.203)"}}
        />
      </button>
    </Box>
  );
};

export default AddProduct;
