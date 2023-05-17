import styles from "../../styles/Profile.module.scss";
import { Avatar, AvatarBadge, Button, Icon } from "@chakra-ui/react";
import { AddIcon } from "@chakra-ui/icons";
import ChangePasswordModal from "./ChangePassword";
import SaveChangesModal from "./SaveChanges";
import DeleteAccountModal from "./DeleteAccount";
import { useRef, useState } from "react";

const Profile = () => {
  const [values, setValues] = useState({
    firstName: "imad",
    lastName: "terraf",
    address: "alger",
    zipCode: "10000",
    email: "imad@gmail.com",
    phoneNumber: "0505050050",
    password: "123456",
    avatar: null,
  });
  const inputRef = useRef(null);

  const handleButtonClick = () => {
    inputRef.current.click();
  };

  const handleFileSelect = (e) => {
    const file = e.target.files[0];
    const imageUrl = URL.createObjectURL(file);
    setValues({ ...values, avatar: imageUrl });
  };

  const [changePasswordModalIsOpen, setChangePasswordModalIsOpen] =
    useState(false);
  const [deleteAccountModalIsOpen, setDeleteAccountModalIsOpen] =
    useState(false);
  const [saveChangesModalIsOpen, setsaveChangesModalIsOpen] = useState(false);

  const handleOpenChangePasswordModal = () => {
    setChangePasswordModalIsOpen(true);
  };

  const handleCloseChangePasswordModal = () => {
    setChangePasswordModalIsOpen(false);
  };

  const handleOpenDeleteAccountModal = () => {
    setDeleteAccountModalIsOpen(true);
  };

  const handleCloseDeleteAccountModal = () => {
    setDeleteAccountModalIsOpen(false);
  };

  const handleOpenSaveChangesModal = () => {
    setsaveChangesModalIsOpen(true);
  };

  const handleCloseSaveChangesModal = () => {
    setsaveChangesModalIsOpen(false);
  };

  return (
    <form className={styles.profile}>
      <div className={styles.infoContainer}>
        <h1>General info</h1>
        <div className={styles.info}>
          <div>
            <div className={styles.field}>
              <label htmlFor="firstName">First name</label>
              <br />
              <input
                type="text"
                value={values.firstName}
                id="firstName"
                onChange={(e) =>
                  setValues({ ...values, firstName: e.target.value })
                }
              />
            </div>
            <div className={styles.field}>
              <label htmlFor="Address">Address</label>
              <br />
              <input
                type="text"
                value={values.address}
                id="address"
                onChange={(e) =>
                  setValues({ ...values, address: e.target.value })
                }
              />
            </div>
          </div>

          <div>
            <div className={styles.field}>
              <label htmlFor="lastName">Last name</label>
              <br />
              <input
                type="text"
                value={values.lastName}
                id="lastName"
                onChange={(e) =>
                  setValues({ ...values, lastName: e.target.value })
                }
              />
            </div>
            <div className={styles.field}>
              <label htmlFor="zipCode">Zipcode</label>
              <br />
              <input
                type="number"
                value={values.zipCode}
                id="zipCode"
                onChange={(e) =>
                  setValues({ ...values, zipCode: e.target.value })
                }
              />
            </div>
          </div>

          <div className={styles.avatarContainer}>
            <Avatar size={"2xl"} className={styles.avatar} src={values.avatar} >
              <AvatarBadge>
                <Button
                  borderRadius="40px"
                  margin="-5px"
                  bg="#3A00FF"
                  color="white"
                  _hover={{ bg: "#8966FF" }}
                  onClick={handleButtonClick}
                >
                  <input
                    ref={inputRef}
                    type="file"
                    accept="image/*"
                    style={{ display: "none" }}
                    onChange={handleFileSelect}
                  />
                  <Icon>
                    <AddIcon />
                  </Icon>
                </Button>
              </AvatarBadge>
            </Avatar>
          </div>
        </div>
      </div>

      <div className={styles.infoContainer}>
        <h1>Security</h1>
        <div className={styles.info}>
          <div className={styles.field}>
            <label htmlFor="email">Email</label>
            <br />
            <input
              type="text"
              value={values.email}
              id="email"
              onChange={(e) => setValues({ ...values, email: e.target.value })}
            />
          </div>
          <div className={styles.field}>
            <label htmlFor="phoneNumber">Phone number</label>
            <br />
            <input
              type="number"
              value={values.phoneNumber}
              id="phoneNumber"
              onChange={(e) =>
                setValues({ ...values, phoneNumber: e.target.value })
              }
            />
          </div>
          <div className={styles.field}>
            <label htmlFor="password">Password</label>
            <br />
            <input type="password" value={values.password} id="password" />
          </div>

          <Button
            _hover={{ opacity: "60%" }}
            onClick={handleOpenChangePasswordModal}
          >
            CHANGE PASSWORD
          </Button>
          <Button
            _hover={{ opacity: "60%" }}
            onClick={handleOpenSaveChangesModal}
          >
            SAVE CHANGES
          </Button>
          <Button
            bg="red"
            color="white"
            _hover={{ opacity: "60%" }}
            onClick={handleOpenDeleteAccountModal}
          >
            DELETE ACCOUNT
          </Button>

          <ChangePasswordModal
            isOpen={changePasswordModalIsOpen}
            onClose={handleCloseChangePasswordModal}
          />
          <DeleteAccountModal
            isOpen={deleteAccountModalIsOpen}
            onClose={handleCloseDeleteAccountModal}
          />
          <SaveChangesModal
            isOpen={saveChangesModalIsOpen}
            onClose={handleCloseSaveChangesModal}
            values={values}
          />
        </div>
      </div>
    </form>
  );
};

export default Profile;
