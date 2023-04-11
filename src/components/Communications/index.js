import React from "react";
import CommunicationsWrapper from "./wrapper";
import UserLoggedInCommunications from "./UserLoggedInCommunications";
import useCookies from "react-cookie/cjs/useCookies";
import {hasViewedWelcomeCommunicationCookieKey} from "../../settings";
import WelcomeCommunication from "./WelcomeCommunication";

const Communications = ({actions, store}) => {
  const [cookies, setCookie] =
    useCookies([hasViewedWelcomeCommunicationCookieKey]);

  if (hasViewedWelcomeCommunicationCookieKey in cookies) {
    const {object: user} = store.user;
    if (!user) {
      return null;
    }
    return (
      <UserLoggedInCommunications
        actions={actions}
        store={store}
        user={user}
      />
    )
  } else {
    return (
      <WelcomeCommunication
        actions={actions}
        store={store}
        closeAction={() => setCookie(hasViewedWelcomeCommunicationCookieKey, true)}
      />
    )
  }
}

export default CommunicationsWrapper(Communications)
