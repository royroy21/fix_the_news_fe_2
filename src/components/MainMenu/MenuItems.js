import React from "react";
import {makeStyles} from "@material-ui/core/styles";
import UserDisplay from "../User/UserDisplay";
import {Link} from "react-router-dom";
import LogoutButton from "../CustomButton/LogoutButton";
import MenuItemLink from "./MenuItemLink";
import AccountBoxIcon from '@material-ui/icons/AccountBox';
import MapIcon from '@material-ui/icons/Map';
import AddBoxIcon from '@material-ui/icons/AddBox';
import LoginRegistration from "../CustomButton/LoginRegistration";
import EditUserModal from "../User/EditUserModal";
import MenuItemModal from "./MenuItemModal";
import {aboutCommunicationRoute, privacyRoute} from "../../settings";
import ButtonForModal from "../CustomButton/ButtonForModal";
import ContactUsModal from "../Messages/ContactUsModal";
import theme from "../../theme";
import HelpModal from "../Messages/HelpModal";

export const useStyles = makeStyles(theme => ({
  container: {
    paddingLeft: theme.spacing(1),
    position: "relative",
    width: "80%",
  },
  link: {
    color: theme.palette.primary.dark,
    textDecoration: "none",
  },
  loggedInButtons: {
    display: "flex",
    flexDirection: "row",
    marginLeft: theme.spacing(1),
    height: 40,
    width: "90%",
  },
  menuItems: {
    display: "flex",
    flexDirection: "column",
    paddingLeft: theme.spacing(1),
    paddingTop: theme.spacing(3),
    minHeight: 24,
  },
  subLinks: {
    bottom: 0,
    display: "flex",
    flexDirection: "column",
    marginTop: theme.spacing(2),
    padding: theme.spacing(1),
    width: "100%",
  },
}));

const MenuItems = ({user, closeParentModel}) => {
  const classes = useStyles();
  const subLinkButtonForModalStyle = {
    fontSize: 16,
    color: theme.palette.primary.dark,
    fontFamily: '"Inter", "Helvetica", "Arial", sans-serif',
    padding: 0,
    textAlign: 'left',
  }
  return (
    <div className={classes.container}>
    {!!!user ? (
      <LoginRegistration />
    ) : (
      <div className={classes.loggedInButtons}>
        <UserDisplay userObject={user} />
        <LogoutButton />
      </div>
    )}
      <div className={classes.menuItems}>
        {user && <MenuItemModal
          icon={<AccountBoxIcon color={"secondary"} />}
          label={"Account"}
          Modal={EditUserModal}
        />}
        {user && <MenuItemLink
          icon={<AddBoxIcon color={"secondary"} />}
          label={"Add Topic"} to={""}
        />}
        <MenuItemLink
          icon={<MapIcon color={"secondary"} />}
          label={"Road map"} to={""}
        />
      </div>
      <div className={classes.subLinks}>
        <ButtonForModal
          buttonAsLink={true}
          label={"Contact Us"}
          Modal={ContactUsModal}
          style={subLinkButtonForModalStyle}
        />
        <Link
          className={classes.link}
          to={aboutCommunicationRoute}
          onClick={closeParentModel}
        >
          {"About"}
        </Link>
        <Link
          className={classes.link}
          to={privacyRoute}
          onClick={closeParentModel}
        >
          {"Privacy"}
        </Link>
        <ButtonForModal
          buttonAsLink={true}
          label={"Help"}
          Modal={HelpModal}
          style={subLinkButtonForModalStyle}
        />
      </div>
    </div>
  )
};

export default MenuItems;
