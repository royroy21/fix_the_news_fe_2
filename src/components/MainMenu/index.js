import React, {Fragment, useState} from "react";
import MainMenuWrapper from "./wrapper";
import {makeStyles} from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import CloseButton from "../CustomButton/CloseButton";
import MenuItems from "./MenuItems";
import MenuIcon from "@material-ui/icons/Menu";

const useStyles = makeStyles(theme => ({
  button: {
    cursor: "pointer",
    backgroundColor: theme.palette.primary.light,
    border: "none",
    outline: "none",
  },
  desktopContent: {
    backgroundColor: theme.palette.primary.light,
    float: "right",
    height: 220,
    marginTop: 10,
    padding: theme.spacing(1),
    width: "20%",
  },
  mobileContent: {
    backgroundColor: theme.palette.primary.light,
    height: 230,
    width: "100%",
  },
}));

const MainMenu = ({store}) => {
  const {isMobile, isSmallScreen} = store.appDimensions;
  const [open, setOpen] = useState(false);
  const classes = useStyles();
  return (
    <Fragment>
      <Modal
        style={{height: 220}}
        open={open}
        onClose={() => setOpen(false)}
      >
        <div
          className={isMobile? classes.mobileContent : classes.desktopContent}
          style={isSmallScreen ? {marginRight: 10} : {marginRight: "16%"}}
        >
          <CloseButton
            onClick={() => setOpen(false)}
            style={isMobile ? {marginTop: 10} : {}}
          />
          <MenuItems
            user={store.user.object}
            closeParentModel={() => setOpen(false)}
          />
        </div>
      </Modal>
      <button
        className={classes.button}
        onClick={() => setOpen(true)}
      >
        <MenuIcon
          className={classes.menu}
          fontSize={"large"}
        />
      </button>
    </Fragment>
  )
};

export default MainMenuWrapper(MainMenu);
