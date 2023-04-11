import React from "react";
import CustomModal from "../CustomModal";
import UserWrapper from "./wrapper";
import EditUserForm from "./EditUserForm";

const EditUserModal = ({actions, open, onClose, store}) => {
  return (
    <CustomModal
      open={open}
      onClose={onClose}
      ContentComponent={EditUserForm}
      contentProps={{
        actions: {
          clearUser: actions.clearUser,
          patchUser: actions.patchUser,
        },
        buttonLabel: "Update",
        storeObject: store.user,
        successMessage: "Update successful",
        isMobile: store.appDimensions.isMobile,
      }}
      header={"Your Account"}
    />
  )
};

export default UserWrapper(EditUserModal);
