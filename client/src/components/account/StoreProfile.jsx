import styles from "../../styles/Profile.module.scss";
import { Avatar, AvatarBadge, Button, Icon } from "@chakra-ui/react";
import { AddIcon } from "@chakra-ui/icons";
import ChangePasswordModal from "./ChangePassword";
import SaveChangesModal from "./SaveChanges";
import DeleteAccountModal from "./DeleteAccount";
import { useRef, useState } from "react";

const StoreProfile = () => {
  const [values, setValues] = useState({
    firstName: "imad",
    lastName: "terraf",
    address: "alger",
    zipCode: "10000",
    avatar: null,
    storeName: "itexcShop",
    storeEmail: "itexc@gmail.com",
    storeAddress: "alger",
    storeZipCode: "10000",
    commerceRegister: "202020",
    nif: "100100",
    onlineCheck: true,
    physicalCheck: false,
    storeCategory: "clothing",
    storeLogo: null,
    email: "imad@gmail.com",
    phoneNumber: "0550505050",
    password: "123456",
  });

  const avatarInputRef = useRef(null);
  const logoInputRef = useRef(null);

  const handleAvatarButtonClick = () => {
    avatarInputRef.current.click();
  };

  const handleLogoButtonClick = () => {
    logoInputRef.current.click();
  };

 
  const handleAvatarSelect = (e) => {
    const file = e.target.files[0];
    const imageUrl = URL.createObjectURL(file);
    setValues({ ...values, avatar: imageUrl });
  };
  

  const handleLogoSelect = (e) => {
    const file = e.target.files[0];
    const imageUrl = URL.createObjectURL(file);
    setValues({ ...values, storeLogo: imageUrl });
  };
  
  

  const [changePasswordModalIsOpen, setChangePasswordModalIsOpen] =
    useState(false);
  const [deleteAccountModalIsOpen, setDeleteAccountModalIsOpen] =
    useState(false);
  const [saveChangesModalIsOpen, setSaveChangesModalIsOpen] = useState(false);

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

  const handleOpensaveChangesModal = () => {
    setSaveChangesModalIsOpen(true);
  };

  const handleCloseSaveChangesModal = () => {
    setSaveChangesModalIsOpen(false);
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
            <Avatar size={"2xl"} className={styles.avatar} src={values.avatar}>
              <AvatarBadge>
                <Button
                  borderRadius="40px"
                  margin="-5px"
                  bg="#3A00FF"
                  color="white"
                  _hover={{ bg: "#8966FF" }}
                  onClick={handleAvatarButtonClick}
                >
                  <input
                    ref={avatarInputRef}
                    type="file"
                    accept="image/*"
                    style={{ display: "none" }}
                    onChange={handleAvatarSelect}
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
        <h1>Store info</h1>
        <div className={styles.info}>
          <div>
            <div className={styles.field}>
              <label htmlFor="storeName">Store name</label>
              <br />
              <input
                type="text"
                value={values.storeName}
                id="storeName"
                onChange={(e) =>
                  setValues({ ...values, storeName: e.target.value })
                }
              />
            </div>
            <div className={styles.field}>
              <label htmlFor="storeAddress">Store address</label>
              <br />
              <input
                type="text"
                value={values.storeAddress}
                id="storeAddress"
                onChange={(e) =>
                  setValues({ ...values, storeAddress: e.target.value })
                }
              />
            </div>
            <div className={styles.field}>
              <label htmlFor="commerceReg">Commerce register number</label>
              <br />
              <input
                type="number"
                value={values.commerceRegister}
                id="commerceReg"
                onChange={(e) =>
                  setValues({ ...values, commerceRegister: e.target.value })
                }
              />
            </div>
            <div className={styles.storeType}>
              <label htmlFor="storeType">Store type</label>
              <br />
              <div id="storeType" className={styles.types}>
                <label htmlFor="onlineCheck">Online</label>
                <input
                  type="checkbox"
                  id="onlineCheck"
                  checked={values.onlineCheck}
                  onChange={(e) =>
                    setValues({ ...values, onlineCheck: e.target.checked })
                  }
                />
                <label htmlFor="physicalCheck">Physical</label>
                <input
                  type="checkbox"
                  id="physicalCheck"
                  checked={values.physicalCheck}
                  onChange={(e) =>
                    setValues({ ...values, physicalCheck: e.target.checked })
                  }
                />
              </div>
            </div>
          </div>
          <div>
            <div className={styles.field}>
              <label htmlFor="storeEmail">Store email</label>
              <br />
              <input
                type="email"
                value={values.storeEmail}
                id="storeEmail"
                onChange={(e) =>
                  setValues({ ...values, storeEmail: e.target.value })
                }
              />
            </div>
            <div className={styles.field}>
              <label htmlFor="storeZip">Store ZIP code</label>
              <br />
              <input
                type="number"
                value={values.storeZipCode}
                id="storeZip"
                onChange={(e) =>
                  setValues({ ...values, storeZipCode: e.target.value })
                }
              />
            </div>
            <div className={styles.field}>
              <label htmlFor="nif">NIF number</label>
              <br />
              <input
                type="number"
                value={values.nif}
                id="nif"
                onChange={(e) => setValues({ ...values, nif: e.target.value })}
              />
            </div>
            <div className={styles.field}>
              <label htmlFor="storeCategory">Store categoty</label>
              <br />
              <input
                type="text"
                value={values.storeCategory}
                id="storeCategory"
                onChange={(e) =>
                  setValues({ ...values, storeCategory: e.target.value })
                }
              />
            </div>
          </div>
          <div className={styles.avatarContainer}>
            <Avatar size={"2xl"} className={styles.avatar} src={values.storeLogo}>
              <AvatarBadge>
                <Button
                  borderRadius="40px"
                  margin="-5px"
                  bg="#3A00FF"
                  color="white"
                  _hover={{ bg: "#8966FF" }}
                  onClick={handleLogoButtonClick}
                >
                  <input
                    ref={logoInputRef}
                    type="file"
                    accept="image/*"
                    style={{ display: "none" }}
                    onChange={handleLogoSelect}
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
            onClick={handleOpensaveChangesModal}
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

export default StoreProfile;
