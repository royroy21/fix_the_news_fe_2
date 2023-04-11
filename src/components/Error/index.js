import React from "react";
import {makeStyles} from "@material-ui/core/styles";
import ErrorTwoToneIcon from '@material-ui/icons/ErrorTwoTone';

const useStyles = makeStyles((theme) => ({
  container: {
    height: "100%",
    textAlign: "center",
  },
  message: {
    marginTop: "40%",
    color: theme.palette.secondary.light,
  }
}));

const Error = () => {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <div className={classes.message}>
        <ErrorTwoToneIcon color={"secondary"} fontSize={"large"} />
        <p>{"An error happened. Sorry :("}</p>
      </div>
    </div>
  )
};

export default Error;
