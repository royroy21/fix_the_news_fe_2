import TopicView from "../Topic/TopicView";
import React from "react";
import NeverEndingScrolling from "../NeverEndingScrolling";
import {TOPIC_PAGE_SIZE_FOR_MOBILE} from "../../settings";

const TopicsView = ({id='topics', actions, store}) => {
  if (store.appDimensions.isMobile === null) {
    return null;
  }

  const getInitialRequest = () => {
    const params = store.appDimensions.isMobile
      ? {size: TOPIC_PAGE_SIZE_FOR_MOBILE}
      : {};
    actions.getTopics(params);
  };
  return (
    <NeverEndingScrolling
      getInitialRequest={getInitialRequest}
      getNext={actions.getTopics}
      id={id}
      store={store.topics}
      ItemComponent={TopicView}
      style={!store.appDimensions.isMobile ? {marginTop: 10} : undefined}
    />
  )
};

export default TopicsView;
