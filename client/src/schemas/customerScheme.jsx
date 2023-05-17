import * as yup from 'yup';
export const customerSchema =yup.object().shape({
    firstName:yup.string().required("First Name is Required"),
    lastName:yup.string().required("Last Name is Required"),
    email: yup.string().email().required(),
    password: yup.string().min(4).max(15).required(),
    confirmPassword: yup.string().oneOf([yup.ref("password"), null],'Passwords must match').required(),
    address: yup.string().required(),
    zip:yup.number().required(),
    phone:yup.number().required(),
  });