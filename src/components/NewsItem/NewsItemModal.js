import React from "react";
import CustomModal from "../CustomModal";
import NewsItemForm from "./NewsItemForm";
import NewsItemWrapper from "./wrapper";

const NewsItemModal = ({actions, open, onClose, store}) => {
  return (
    <CustomModal
      open={open}
      onClose={onClose}
      ContentComponent={NewsItemForm}
      contentProps={{
        actions: {
          postNewsItem: actions.postNewsItem,
          clearNewsItem: actions.clearNewsItem,
        },
        buttonLabel: "Add Viewpoint",
        storeObject: store.newsItem,
        successMessage: "Viewpoint successfully added",
        isMobile: store.appDimensions.isMobile,
      }}
      header={"Add Viewpoint"}
      subHeader={"Share an article, podcast, blog post, video or anything else that shows a different perspective."}
    />
  )
};

export default NewsItemWrapper(NewsItemModal);
