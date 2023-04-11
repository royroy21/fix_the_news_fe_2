import React from "react";
import MessageForm from "./MessageForm";
import CustomModal from "../CustomModal";

const BaseMessageModal = (props) => {
  const {
    open,
    onClose,
    actions,
    store,
    header,
    subHeader,
    type,
  } = props;
  return (
    <CustomModal
      open={open}
      onClose={onClose}
      ContentComponent={MessageForm}
      contentProps={{
        actions: actions,
        buttonLabel: 'Send Message',
        storeObject: store.message,
        successMessage: 'Message Sent',
        type: type,
        user: store.user,
      }}
      header={header}
      subHeader={subHeader}
    />
  )
}

export default BaseMessageModal;
