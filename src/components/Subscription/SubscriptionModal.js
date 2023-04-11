import React from "react";
import CustomModal from "../CustomModal";
import SubscriptionWrapper from "./wrapper";
import SubscriptionForm from "./SubscriptionForm";

const SubscriptionModal = ({actions, open, onClose, store}) => {
  return (
    <CustomModal
      open={open}
      onClose={onClose}
      ContentComponent={SubscriptionForm}
      contentProps={{
        actions: {
          postSubscription: actions.postSubscription,
          clearSubscription: actions.clearSubscription,
        },
        buttonLabel: "Subscribe Now",
        storeObject: store.subscription,
        successMessage: "Subscription successful.",
      }}
      header={"Subscribe now to our weekly summary."}
      subHeader={"Get the freshest news stories and viewpoints in your inbox."}
    />
  )
};

export default SubscriptionWrapper(SubscriptionModal);
