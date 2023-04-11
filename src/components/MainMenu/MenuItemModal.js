import React, {useState} from "react";
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  button: {
    cursor: "pointer",
    backgroundColor: theme.palette.primary.light,
    border: "none",
    outline: "none",
    "&:hover": {
      color: theme.palette.secondary.main,
    },
    fontSize: 16,
    padding: 0,
  },
  container: {
    display: "flex",
    flexDirection: "row",
  },
  link: {
    color: "black",
    marginTop: 4,
    textDecoration: "none",
    "&:hover": {
      color: theme.palette.secondary.main,
    },
  },
}));

const MenuItemModal = ({icon, label, Modal, modelProps}) => {
  const [open, setOpen] = useState(false);
  const classes = useStyles();

  if (!Modal) {
    return null;
  }

  return (
    <div className={classes.container}>
      {icon}
      <button
        className={classes.button}
        onClick={() => setOpen(true)}
      >
        {label}
      </button>
      <Modal
        open={open}
        onClose={() => setOpen(false)}
        modelProps={modelProps}
      />
    </div>
  )
};

export default MenuItemModal;
