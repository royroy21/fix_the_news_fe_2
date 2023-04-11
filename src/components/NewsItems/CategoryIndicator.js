import React from "react";
import {categoryColourMap} from "../../theme";
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  container: {
    margin: `${theme.spacing(1)}px 0 ${theme.spacing(1)}px ${theme.spacing(1)}px`,
  },
  text: {
    color: theme.palette.primary.dark,
    fontSize: "0.8em",
    marginLeft: theme.spacing(1),
  },
}));

const CategoryIndicator = ({category}) => {
  const style = {
    backgroundColor: categoryColourMap[category.type],
    height: 10,
    width: 10,
    borderRadius: "50%",
    display: "inline-block",
  };
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <span style={style}>{""}</span>
      <span className={classes.text}>
        {(category.title || category.type).toUpperCase()}
      </span>
    </div>
  )
};

export default CategoryIndicator;
