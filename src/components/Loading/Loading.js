import CircularProgress from "@material-ui/core/CircularProgress";
import React from "react";
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  container: {
    textAlign: "center",
    marginTop: theme.spacing(2),
  },
}));

const Loading = () => {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <CircularProgress color={"secondary"}/>
    </div>
  )
};

export default Loading;
