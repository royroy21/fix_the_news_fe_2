import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Logo from "../Logo";
import MainMenu from "../MainMenu";

const useStyles = makeStyles(theme => ({
  appBar: {
    backgroundColor: theme.palette.primary.light,
    borderBottom: `1px solid ${theme.palette.primary.main}`,
    paddingLeft: theme.spacing(1),
  },
  root: {
    flexGrow: 1,
  },
  toolbar: {
    margin: "auto",
    padding: 0,
    width: "100%",
  },
}));

const HeaderMobile = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <AppBar
        elevation={0}
        position={"static"}
        className={classes.appBar}
      >
        <Toolbar className={classes.toolbar}>
          <Logo style={{flexGrow: 1}}/>
          <MainMenu />
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default HeaderMobile;
