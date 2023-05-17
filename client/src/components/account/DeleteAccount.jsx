import React from "react";
import { Button, Modal, ModalOverlay, ModalContent, ModalHeader, ModalFooter, ModalBody, Box, FormControl, Input } from "@chakra-ui/react";

const DeleteAccountModal = ({ isOpen, onClose }) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose} isCentered>
      <ModalOverlay />
      <ModalContent  padding="10px">
        <ModalHeader color="#3A00FF" fontSize="20px" fontWeight="700" textAlign="center">Delete Account</ModalHeader>
        <ModalBody>
            <Box mb="20px" fontSize="16px" textAlign="center">
                <p>Are you sure you want to delete your account?</p>                
            </Box>

          <form action="">
            <FormControl display="flex" flexDirection="column" gap="20px">
                <Input 
                type="password"
                name="password"
                placeholder="Enter your password" />
            </FormControl>
          </form>
        </ModalBody>
        <ModalFooter>
          <Button variant="ghost" mr={3} onClick={onClose}>
            Cancel
          </Button>
          <Button bg="red" _hover={{backgroundColor:"#FF6666"}} color="white">Delete Account</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default DeleteAccountModal;
