import React, {Fragment, useState} from "react";
import CustomButton from "./index";
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  buttonAsLink: {
    backgroundColor: theme.palette.primary.light,
    border: 'none',
    color: 'grey',
    cursor: 'pointer',
    outline: 'none',
    textDecoration: 'none',
    '&:hover': {
      color: theme.palette.secondary.main,
    }
  },
}));

const ButtonForModal = (props) => {
  const [open, setOpen] = useState(false);
  const {
    buttonAsLink=false,
    Modal,
    icon=null,
    inverted=false,
    label=null,
    modelProps={},
    size='small',
    style={},
  } = props;
  const classes = useStyles();
  return (
    <Fragment>
      {buttonAsLink ? (
        <button
          className={classes.buttonAsLink}
          onClick={() => setOpen(true)}
          style={style}
        >
          {label}
        </button>
      ) : (
        <CustomButton
          icon={icon}
          inverted={inverted}
          label={label}
          onClick={() => setOpen(true)}
          size={size}
          style={style}
        />
      )}
      <Modal
        open={open}
        onClose={() => setOpen(false)}
        modelProps={modelProps}
      />
    </Fragment>
  )
};

export default ButtonForModal;
