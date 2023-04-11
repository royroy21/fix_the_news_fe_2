import React from "react";
import Modal from "@material-ui/core/Modal";
import CustomModalWrapper from "./wrapper";
import CloseButton from "../CustomButton/CloseButton";
import {makeStyles} from "@material-ui/core/styles";

export const useStyles = makeStyles(theme => ({
  footer: {
    marginTop: theme.spacing(3),
    textAlign: "center",
  },
  headerContainer: {
    width: "100%",
  },
  headerTitle: {
    color: theme.palette.primary.contrastText,
    fontWeight: 600,
    paddingTop: 10,
    textAlign: "center",
  },
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: theme.spacing(2),
    overflow: "auto",
  },
}));

const CustomModal = (props) => {

  const {
    ContentComponent,
    contentProps,
    footerComponent,
    header,
    subHeader,
    noWidth,
    open,
    onClose,
    store,
  } = props;

  const {
    height,
    isMobile,
  } = store.appDimensions;

  const contentStyle = {
    padding: "25px",
    backgroundColor: "white",
  };
  if (!isMobile) {
    contentStyle.maxHeight = height - 200;
  }
  if (!noWidth) {
    contentStyle.width = isMobile ? "90%" : 700;
  }

  const classes = useStyles();
  return (
    <Modal
      className={classes.modal}
      open={open}
      onClose={onClose}
    >
      <div style={contentStyle}>
        <div className={classes.headerContainer}>
          <CloseButton onClick={onClose} />
          <div className={classes.headerTitle}>
            {header}
          </div>
          {subHeader && <p style={{textAlign: "center"}}>{subHeader}</p>}
        </div>
        <ContentComponent
          {...contentProps}
          postSuccess={onClose}
        />
        {footerComponent ? (
          <div className={classes.footer}>
            {footerComponent}
          </div>
        ) : null}
      </div>
    </Modal>
  )

}

export default CustomModalWrapper(CustomModal);
