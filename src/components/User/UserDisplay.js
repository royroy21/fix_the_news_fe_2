import React, {Fragment} from "react";
import {makeStyles} from "@material-ui/core/styles";
import UserImage from "./UserImage";

const useStyles = makeStyles((theme) => ({
  username: {
    color: theme.palette.primary.dark,
    marginRight: theme.spacing(1),
  },
}));

const UserDisplay = ({userObject, withName=false}) => {
  const {
    avatar,
    avatar_thumbnail_small,
    name,
  } = userObject;
  const visibleAvatar = avatar_thumbnail_small || avatar;
  const classes = useStyles();
  return (
    <Fragment>
      {withName ? (
        <p className={classes.username}>{name}</p>
      ) : null}
      <UserImage
        fullSizeSrc={avatar}
        thumbnailSrc={visibleAvatar ? visibleAvatar : null}
      />
    </Fragment>
  )

};

export default UserDisplay;
