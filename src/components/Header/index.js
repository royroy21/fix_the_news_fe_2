import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import HeaderWrapper from "./wrapper";
import {aboutCommunicationRoute, privacyRoute} from "../../settings";
import Logo from "../Logo";
import LoginRegistration from "../CustomButton/LoginRegistration";
import {Link} from "react-router-dom";
import MainMenu from "../MainMenu";
import ButtonForModal from "../CustomButton/ButtonForModal";
import ContactUsModal from "../Messages/ContactUsModal";
import theme from "../../theme";
import HelpModal from "../Messages/HelpModal";

const useStyles = makeStyles(theme => ({
  appBar: {
    backgroundColor: theme.palette.primary.light,
    borderBottom: `1px solid ${theme.palette.primary.main}`,
    paddingLeft: theme.spacing(1),
    // paddingRight: theme.spacing(2),
  },
  buttonDivider: {
    color: theme.palette.primary.main,
    marginLeft: 10,
    marginRight: 10,
  },
  contactUsAboutHelp: {
    fontSize: 14,
    marginLeft: 35,
    marginTop: 5,
    color: theme.palette.primary.dark,
    fontWeight: 400,
  },
  link: {
    color: theme.palette.primary.dark,
    textDecoration: 'none',
  },
  logoutButton: {
    marginLeft: theme.spacing(2),
  },
  root: {
    flexGrow: 1,
  },
}));

const Header = (props) => {
  const classes = useStyles();
  const { object:user } = props.store.user;

  const toolbarStyle = {
    margin: "auto",
    padding: 0,
    width: props.isSmallScreen ? "100%" : "70%",
  };

  return (
    <div className={classes.root}>
      <AppBar
        elevation={0}
        position={"static"}
        className={classes.appBar}
      >
        <Toolbar style={toolbarStyle}>
          <Logo />
          <ButtonForModal
            buttonAsLink={true}
            label={"Contact Us"}
            Modal={ContactUsModal}
            style={{
              fontSize: 14,
              marginLeft: 35,
              marginTop: 5,
              color: theme.palette.primary.dark,
              fontFamily: '"Inter", "Helvetica", "Arial", sans-serif',
            }}
          />
          <Typography
            className={classes.contactUsAboutHelp}
            variant={"h6"}
          >
            <Link
              className={classes.link}
              to={{pathname: aboutCommunicationRoute}}
            >
              {"About"}
            </Link>
          </Typography>
          <Typography
            className={classes.contactUsAboutHelp}
            variant={"h6"}
          >
            <Link
              className={classes.link}
              to={{pathname: privacyRoute}}
            >
              {"Privacy"}
            </Link>
          </Typography>
          <ButtonForModal
            buttonAsLink={true}
            label={"Help"}
            Modal={HelpModal}
            style={{
              fontSize: 14,
              marginLeft: 35,
              marginTop: 5,
              color: theme.palette.primary.dark,
              fontFamily: '"Inter", "Helvetica", "Arial", sans-serif',
            }}
          />
          <div style={{flexGrow: 1}}>{''}</div>
          {!!!user ? (
            <LoginRegistration />
          ) : (
            <MainMenu />
          )}
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default HeaderWrapper(Header);
