import React from "react";
import MeetingRoomIcon from '@material-ui/icons/MeetingRoom';
import LogoutWrapper from "./wrapper";
import {TOPIC_PAGE_SIZE_FOR_MOBILE} from "../../../settings";
import CustomButton from "../index";
import { withRouter } from "react-router-dom";

const LogoutButton = ({actions, history, store}) => {

  const logout = () => {
    actions.clearUser();
    actions.clearToken();
    localStorage.clear();
    const params = store.appDimensions.isMobile
      ? {size: TOPIC_PAGE_SIZE_FOR_MOBILE}
      : {};
    actions.getTopics(params);
    history.push("/");
  };

  return (
    <CustomButton
      onClick={logout}
      label={"Logout"}
      icon={<MeetingRoomIcon fontSize={"large"}/>}
      style={{marginLeft: 5, width: 100}}
    />
  )
};

export default withRouter(LogoutWrapper(LogoutButton));
