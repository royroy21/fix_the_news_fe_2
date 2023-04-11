import React from "react";
import MessageWrapper from "./wrapper";
import BaseMessageModal from "./BaseMessageModal";

const HelpModal = ({open, onClose, actions, store}) => {
  return (
    <BaseMessageModal
      open={open}
      onClose={onClose}
      actions={actions}
      store={store}
      type={'help'}
      header={'Help'}
      subHeader={'Something not working? Let us know here and we\'ll fix it.'}
    />
  )
}

export default MessageWrapper(HelpModal);
