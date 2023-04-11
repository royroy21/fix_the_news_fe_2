import React from "react";
import CustomModal from "../CustomModal";
import ShareTopic from "./index";

const ShareTopicModal = ({open, onClose, modelProps}) => {
  return (
    <CustomModal
      open={open}
      onClose={onClose}
      ContentComponent={ShareTopic}
      contentProps={{
        slug: modelProps.slug,
      }}
      header={""}
      noWidth={true}
    />
  )
};

export default ShareTopicModal;
