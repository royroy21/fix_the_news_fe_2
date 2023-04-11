import React from "react";
import MessageWrapper from "./wrapper";
import BaseMessageModal from "./BaseMessageModal";

const ContactUsModal = ({open, onClose, actions, store}) => {
  return (
    <BaseMessageModal
      open={open}
      onClose={onClose}
      actions={actions}
      store={store}
      type={'contact_us'}
      header={'Contact Us'}
      subHeader={'Send us a message here and we\'ll get back to you by email.'}
    />
  )
}

export default MessageWrapper(ContactUsModal);
