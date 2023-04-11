import React, {Fragment} from "react";
import ButtonForModal from "./ButtonForModal";
import LoginModal from "../User/LoginModal";

const LoginButton = () => {
  return (
    <Fragment>
      <ButtonForModal
        label={'Log In'}
        inverted={true}
        style={{border: 'none'}}
        Modal={LoginModal}
      />
    </Fragment>
    )
};

export default LoginButton;
