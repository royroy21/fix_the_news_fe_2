import React from "react";
import LoginButton from "./LoginButton";
import {makeStyles} from "@material-ui/core/styles";
import ButtonForModal from "./ButtonForModal";
import RegistrationModal from "../User/RegistrationModal";

export const useStyles = makeStyles(theme => ({
  buttonDivider: {
    color: theme.palette.primary.main,
    marginLeft: 10,
    marginRight: 10,
  },
  container: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
  },
}));

const LoginRegistration = () => {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <LoginButton />
      <span className={classes.buttonDivider}>{"/"}</span>
      <ButtonForModal
        label={"Sign Up"}
        inverted={true}
        style={{width: 100}}
        Modal={RegistrationModal}
      />
    </div>
  )
};

export default LoginRegistration;
