import React from "react";
import {
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  Input,
  FormControl,
} from "@chakra-ui/react";

const SaveChangesModal = ({ isOpen, onClose, values }) => {
  const handleSubmit = async (event) => {
    event.preventDefault();
    //verify password
    console.log(values); 
    
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} isCentered>
      <ModalOverlay />
      <ModalContent padding="10px">
        <ModalHeader
          color="#3A00FF"
          fontSize="20px"
          fontWeight="700"
          textAlign="center"
        >
          Are you sure you want save these changes?
        </ModalHeader>
        <ModalBody>
          <form>
            <FormControl display="flex" flexDirection="column" gap="20px">
              <Input
                type="password"
                name="password"
                placeholder="Enter your password"
              />
              <input
                type="hidden"
                name="values"
                value={JSON.stringify(values)}
              />
            </FormControl>
            <ModalFooter>
              <Button variant="ghost" mr={3} onClick={onClose}>
                Cancel
              </Button>
              <Button
                bg="#3A00FF"
                _hover={{ backgroundColor: "#8966FF" }}
                color="white"
                onClick={handleSubmit}
              >
                Save
              </Button>
            </ModalFooter>
          </form>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default SaveChangesModal;
