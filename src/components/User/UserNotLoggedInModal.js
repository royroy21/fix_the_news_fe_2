import React from "react";
import CustomModal from "../CustomModal";
import UserWrapper from "./wrapper";
import LoginForm from "./LoginForm";
import RegisterUserLink from "./RegisterUserLink";

const UserNotLoggedInModal = (props) => {
  return (
    <CustomModal
      open={props.open}
      onClose={props.onClose}
      ContentComponent={LoginForm}
      contentProps={{
        actions: {
          postToken: props.actions.postToken,
          clearToken: props.actions.clearToken,
          clearUser: props.actions.clearUser,
        },
        buttonLabel: "Login",
        storeObject: props.store.token,
        successMessage: "Login successful",
      }}
      header={"Sorry you need to be logged in to perform this action"}
      footerComponent={<RegisterUserLink />}
    />
  )
};

export default UserWrapper(UserNotLoggedInModal);
