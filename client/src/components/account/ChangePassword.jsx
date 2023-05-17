import React from "react";
import { Button, Modal, ModalOverlay, ModalContent, ModalHeader, ModalFooter, ModalBody, FormControl, Input, Box, FormErrorMessage } from "@chakra-ui/react";
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';

const ChangePasswordSchema = Yup.object().shape({
  oldPassword: Yup.string().required('Old password is required'),
  newPassword: Yup.string()
    .required('New password is required')
    .min(8, 'Password must be at least 8 characters long')
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/,
      'Password must contain at least one uppercase, one lowercase and one number'
    ),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref('newPassword'), null], 'Passwords must match')
    .required('Confirm password is required'),
});

const ChangePasswordModal = ({ isOpen, onClose }) => {
  const initialValues = {
    oldPassword: '',
    newPassword: '',
    confirmPassword: '',
  };

  const onSubmit = (values, { setSubmitting }) => {
    console.log(values);
    setSubmitting(false);
    onClose();
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} isCentered>
      <ModalOverlay />
      <ModalContent padding="10px">
        <ModalHeader color="#3A00FF" fontSize="20px" fontWeight="700" textAlign="center">Change Password</ModalHeader>
        <Formik
          initialValues={initialValues}
          validationSchema={ChangePasswordSchema}
          onSubmit={onSubmit}
        >
          {({ values, errors, touched, handleChange, handleBlur, handleSubmit, isSubmitting }) => (
            <Form>
              <ModalBody>
                <FormControl display="flex" flexDirection="column" gap="20px">
                  <Field name="oldPassword">
                    {({ field, form }) => (
                      <FormControl isInvalid={form.errors.oldPassword && form.touched.oldPassword}>
                        <Input {...field} type="password" placeholder="Old password" />
                        <FormErrorMessage>{form.errors.oldPassword}</FormErrorMessage>
                      </FormControl>
                    )}
                  </Field>
                  <Field name="newPassword">
                    {({ field, form }) => (
                      <FormControl isInvalid={form.errors.newPassword && form.touched.newPassword}>
                        <Input {...field} type="password" placeholder="New password" />
                        <FormErrorMessage>{form.errors.newPassword}</FormErrorMessage>
                      </FormControl>
                    )}
                  </Field>
                  <Field name="confirmPassword">
                    {({ field, form }) => (
                      <FormControl isInvalid={form.errors.confirmPassword && form.touched.confirmPassword}>
                        <Input {...field} type="password" placeholder="Confirm new password" />
                        <FormErrorMessage>{form.errors.confirmPassword}</FormErrorMessage>
                      </FormControl>
                    )}
                  </Field>
                </FormControl>
              </ModalBody>
              <ModalFooter display="flex" justifyContent="space-between">
                <Button variant="ghost" onClick={onClose}>
                  Cancel
                </Button>
                <Button type="submit" bg="#3A00FF" _hover={{ backgroundColor: "#8966FF" }} color="white" isLoading={isSubmitting}>
                  Confirm
                </Button>
              </ModalFooter>
            </Form>
          )}
        </Formik>
      </ModalContent>
    </Modal>
  );
};

export default ChangePasswordModal;
