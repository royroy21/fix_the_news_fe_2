import fixTheNewsLogo07 from '../../images/fixTheNewsLogo07.svg';
import React from "react";
import {makeStyles} from "@material-ui/core/styles";
import {withRouter} from "react-router-dom";
import LogoWrapper from "./wrapper";

const useStyles = makeStyles(theme => ({
  container: {
    paddingTop: 1,
    display: "flex",
    flexDirection: "row",
    cursor: "pointer",
  },
  image: {
    height: 32,
    width: 32,
  },
  textContainer: {
    fontSize: 24,
    fontWeight: "bold",
    marginLeft: 5,
    marginTop: 2,
    userSelect: "none",
  },
  text: {
    color: theme.palette.secondary.light,
  },
}));

const Logo = ({actions, style={}, history}) => {
  const classes = useStyles();
  const goToHomePage = () => {
    actions.clearTopics();
    actions.getTopics();
    history.push("/")
  };
  return (
    <div
      className={classes.container}
      onClick={goToHomePage}
      style={style}
    >
      <img className={classes.image} src={fixTheNewsLogo07} alt="??" />
      <div className={classes.textContainer}>
        <span className={classes.text}>{"fix"}</span>
        <span>{"thenews"}</span>
      </div>
    </div>
  )
};

export default withRouter(LogoWrapper(Logo));
