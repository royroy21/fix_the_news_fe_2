import React, {Fragment, useEffect} from "react";
import Communication from "./Communication";


const UserLoggedInCommunications = ({actions, store, user}) => {
  const {
    has_viewed_registration_communication: hasViewedRegistrationCommunication,
    has_viewed_daily_communication: hasViewedDailyCommunication,
  } = user;
  const {
    text: dailyCommunicationText,
    title: dailyCommunicationTitle,
  } = store.dailyCommunication.object || {};
  useEffect(
    () => actions.getDailyCommunication(),
    [actions, dailyCommunicationText],
    )
  const {
    text: registrationCommunicationText,
    title: registrationCommunicationTitle,
  } = store.registrationCommunication.object || {}
  useEffect(
    () => actions.getRegistrationCommunication(),
    [actions, registrationCommunicationText],
    )
  return (
    <Fragment>
    {registrationCommunicationText && !hasViewedRegistrationCommunication ? (
      <Communication
        closeAction={() => actions.patchUser({
          has_viewed_registration_communication: true,
        })}
        text={registrationCommunicationText}
        title={registrationCommunicationTitle}
      />
    ) : null}
    {dailyCommunicationText && !hasViewedDailyCommunication && hasViewedRegistrationCommunication ? (
      <Communication
        closeAction={() => actions.patchUser({
          has_viewed_daily_communication: true,
        })}
        text={dailyCommunicationText}
        title={dailyCommunicationTitle}
      />
    ) : null}
    </Fragment>
  )
}

export default UserLoggedInCommunications;
