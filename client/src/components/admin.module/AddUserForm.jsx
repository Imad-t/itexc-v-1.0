import { useState } from 'react';
import styles from '../../styles/AdminDashboard.module.scss';
import { closeOutline } from 'ionicons/icons';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const validationSchema = Yup.object().shape({
  firstName: Yup.string().required('First name is required'),
  lastName: Yup.string().required('Last name is required'),
  email: Yup.string().email('Invalid email').required('Email is required'),
  password: Yup.string()
    .min(6, 'Password must be at least 6 characters')
    .required('Password is required'),
  accountType: Yup.string()
    .oneOf(['customer', 'wholesaler', 'admin'], 'Invalid account type')
    .required('Account type is required'),
});

function AddUserForm(props) {
  const initialValues = {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    accountType: '',
  };

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState(null);

  async function handleSubmit(values) {
    try {
      setIsSubmitting(true);
      const response = await fetch('/api/add-user', {
        method: 'POST',
        body: JSON.stringify(values),
        headers: { 'Content-Type': 'application/json' },
      });
      if (response.ok) {
        setIsSubmitting(false);
        props.popup(false);
      } else {
        throw new Error('Failed to add user');
      }
    } catch (error) {
      setIsSubmitting(false);
      setSubmitError(error.message);
    }
  }

  const show = props.show;

  function handleExit() {
    props.popup(!show);
  }

  return (
    <div className={styles[show ? 'popup' : 'popup-disabled']}>
      <button onClick={handleExit} className={styles['exit']}>
        <ion-icon s icon={closeOutline} size="large" />
      </button>
      <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={handleSubmit}>
        {({ errors, touched }) => (
          <Form className={styles['popup-container']}>
            <div>
              <label htmlFor="firstName">First Name</label>
              <Field type="text" id="firstName" name="firstName" placeholder="First Name" />
              <ErrorMessage name="firstName" className={styles['error']} />
            </div>

            <div>
              <label htmlFor="lastName">Last Name</label>
              <Field type="text" id="lastName" name="lastName" placeholder="Last Name" />
              <ErrorMessage name="lastName" className={styles['error']} />
            </div>

            <div>
              <label htmlFor="email">Email</label>
              <Field type="email" id="email" name="email" placeholder="Email Address" />
              <ErrorMessage name="email" className={styles["error"]} />
            </div>

            <div>
              <label htmlFor="password">Password</label>
              <Field type="password" id="password" name="password" placeholder="Password" />
              <ErrorMessage name="password" className="error" />
            </div>

            <div>
              <label htmlFor="accountType">Account Type</label>
              <Field as="select" id="accountType" name="accountType">
                <option value="" disabled>
                  Select an option
                </option>
                <option value="customer">Customer</option>
                <option value="store">Store</option>
                <option value="wholesaler">Wholesaler</option>
                <option value="admin">Admin</option>
              </Field>
              <ErrorMessage name="accountType" className={styles['error']} />
            </div>
            {submitError && <div className={styles['error']}>{submitError}</div>}

            <button type="submit" className={styles['add-btn']} disabled={isSubmitting}>
              {isSubmitting ? 'Submitting...' : 'Submit'}
            </button>
            </Form>
            )}
            </Formik>
            </div>
            );
            }

export default AddUserForm;