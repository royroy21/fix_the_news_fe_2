import React, {Fragment, useState} from "react";
import Avatar from "@material-ui/core/Avatar";
import {makeStyles} from "@material-ui/core/styles";
import Dialog from "@material-ui/core/Dialog";

const useStyles = makeStyles((theme) => ({
  avatar: {
    height: 36,
    width: 36,
    cursor: "pointer",
  },
  fullImage: {
    width: "99%",
    height: "99%",
    backgroundColor: "black",
    margin: "auto",
  },
}));

// TODO - noop error when you click main menu after uploading new user image
const UserImage = ({fullSizeSrc, thumbnailSrc}) => {
  const [open, setOpen] = useState(false);
  const classes = useStyles();
  const handleClickOpen = () => {setOpen(true)}
  const handleClose = () => {setOpen(false)}
  return (
    <Fragment>
      {open ? (
        <Fragment>
          <Dialog
            fullWidth
            open={open}
            onClose={handleClose}
          >
            <img
              alt="??"
              className={classes.fullImage}
              src={fullSizeSrc}
              onClick={handleClose}
            />
          </Dialog>
          <Avatar
            className={classes.avatar}
            src={thumbnailSrc ? thumbnailSrc : null}
          />
        </Fragment>
      ) : (
        <Avatar
          onClick={thumbnailSrc ? handleClickOpen : undefined}
          className={classes.avatar}
          src={thumbnailSrc ? thumbnailSrc : null}
        />
      )}
    </Fragment>
  )

};

export default UserImage;
