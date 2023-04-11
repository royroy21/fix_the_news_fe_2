import React, {Fragment, useEffect} from "react";
import AboutWrapper from "./wrapper";
import {makeStyles} from "@material-ui/core/styles";
import {cleanHTML} from "../../helpers/htmlFunctions";

const useStyles = makeStyles((theme) => ({
  text: {
    margin: theme.spacing(1),
  },
  title: {
    margin: theme.spacing(1),
  },
}));

const About = ({actions, store}) => {
  const classes = useStyles();
  const {
    id,
    text,
    title,
  } = store.aboutCommunication.object || {};
  useEffect(
    () => actions.getAboutCommunication(),
    [actions, id],
    )
  return (
    <Fragment>
      <br /><br />
      <h2 className={classes.title}>{title}</h2>
      <p className={classes.text}>{cleanHTML(text)}</p>
    </Fragment>
  )
}

export default AboutWrapper(About);
