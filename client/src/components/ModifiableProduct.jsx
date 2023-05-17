import React from "react";
import { Link } from "react-router-dom";
import { AiOutlineHeart, AiOutlineStar,AiOutlineClose } from "react-icons/ai";
import EditProductModal from "./EditProductModal";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
} from '@chakra-ui/react'
import { FormControl,FormLabel,Input } from '@chakra-ui/react'
import { useDisclosure } from "@chakra-ui/react"
import styles from "../styles/ModifiableProducts.module.scss";
import { useState } from "react";
function ModifiableProduct({ data }) {
  const initialRef = React.useRef(null)
  const finalRef = React.useRef(null)
  const { isOpen, onOpen, onClose } = useDisclosure()

  function handleMouseOver(event) {
    event.stopPropagation();
  }
  const [open ,setOpen]=useState(false)
  const toggalModal=()=>{
    setOpen(!open)
  }
  return (
    <div className={styles["Product-container"]}>
      <div className={styles["cover"]}>
        <img src={data?.image} />
        <AiOutlineClose className={styles["btn-delete"]} fontSize={14} color="red" />
      </div>

      <div className={styles["details"]}>
        <div className={styles["title-section"]}>
          <Link to="#">
            {data?.name?.length > 30 ? data?.name.substring(0, 30) + "..." : data?.name}
          </Link>
          <Link to="#" className={styles["store"]}>
            {data?.store}
          </Link>
        </div>
        <div className={styles["more-details"]}>
          <div className={styles["rating"]}>
            {data?.rating} <AiOutlineStar color="gold" />
          </div>
          <p>{data?.price} DZD</p>
        </div>
          <button onClick={onOpen}>Edit</button>
          <div>
      <Modal
        initialFocusRef={initialRef}
        finalFocusRef={finalRef}
        isOpen={isOpen}
        onClose={onClose}
      >
        <ModalOverlay 
              bg='none'
              backdropFilter='auto'
              backdropInvert='80%'
              backdropBlur='2px'/>
        <ModalContent>
          <ModalHeader>Edit Product {data.name}</ModalHeader>
          <ModalCloseButton />
          <EditProductModal productData={data}></EditProductModal>
        </ModalContent>
      </Modal>
      </div>
      </div>
    </div>
  );
}

export default ModifiableProduct;
