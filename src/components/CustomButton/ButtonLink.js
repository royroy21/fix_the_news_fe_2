import React from "react";
import {Link} from "react-router-dom";
import CustomButton from "./index";
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  link: {
    position: "relative",
    textDecoration: "none",
  },
}));

const ButtonLink = (props) => {
  const {
    icon=null,
    inverted=false,
    label=null,
    size='small',
    style={},
    state={},
    to,
  } = props;
  const classes = useStyles();
  return (
    <Link
      className={classes.link}
      to={{
        pathname: to,
        state: state,
      }}
    >
      <CustomButton
        icon={icon}
        inverted={inverted}
        label={label}
        size={size}
        style={style}
      />
    </Link>
  )
};

export default ButtonLink;
