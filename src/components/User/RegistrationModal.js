import React from "react";
import CustomModal from "../CustomModal";
import RegistrationForm from "./RegistrationForm";
import UserWrapper from "./wrapper";

const RegistrationModal = (props) => {
  return (
    <CustomModal
      open={props.open}
      onClose={props.onClose}
      ContentComponent={RegistrationForm}
      contentProps={{
        actions:{
          clearRegister: props.actions.clearRegister,
          postRegister: props.actions.postRegister,
        },
        buttonLabel: "Sign Up",
        storeObject: props.store.register,
        successMessage: "Sign up successful",
        isMobile: props.store.appDimensions.isMobile,
      }}
      header={"Sign Up"}
    />
  )
};

export default UserWrapper(RegistrationModal);
