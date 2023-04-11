import React, { useEffect } from "react";
import TopicPageWrapper from "./wrapper";
import Topics from "../Topics";

const TopicPage = ({actions, match, store}) => {
  const { slug } = match.params;
  useEffect(() => actions.getTopic(slug), [actions, slug]);

  const topic = store.topic.object;
  useEffect(() => actions.prependTopic(topic), [actions, topic]);

  return <Topics />
};

export default TopicPageWrapper(TopicPage);
