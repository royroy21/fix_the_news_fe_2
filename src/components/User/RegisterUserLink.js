import React from "react";
import ButtonForModal from "../CustomButton/ButtonForModal";
import RegistrationModal from "./RegistrationModal";
import {themeObject} from "../../theme";



const RegisterUserLink = () => {
  const messageStyle ={
    fontSize: "1.3em",
  }
  const signUpStyle = {
    color: themeObject.palette.secondary.main,
    fontSize: "1.3em",
  }
  return (
    <ButtonForModal
      buttonAsLink={true}
      label={
        <div>
          <span style={messageStyle}>{"Don't have an account?  "}
          </span><span style={signUpStyle}>{"Sign up"}</span>
        </div>
      }
      inverted={true}
      Modal={RegistrationModal}
    />
  )
};

export default RegisterUserLink;
