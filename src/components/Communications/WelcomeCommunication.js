import React, {useEffect} from "react";
import Communication from "./Communication";

const WelcomeCommunication = ({actions, store, closeAction}) => {
  const {
    id: welcomeCommunicationId,
    text: welcomeCommunicationText,
    title: welcomeCommunicationTitle,
  } = store.welcomeCommunication.object || {};
  useEffect(
    () => actions.getWelcomeCommunication(),
    [actions, welcomeCommunicationId],
    )
  return (
    <Communication
      title={welcomeCommunicationTitle}
      text={welcomeCommunicationText}
      closeAction={closeAction}
    />
  )
}

export default WelcomeCommunication;
