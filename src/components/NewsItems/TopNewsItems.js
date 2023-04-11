import NewsItem from "../NewsItem";
import React from "react";

const TopNewsItems = ({topic, category}) => {
  return (
    topic.top_news_items[category.type].map(item => (
      <NewsItem
        key={`news-item-${item.id}`}
        item={item}
        fromTopicTopNewsItems={true}
      />
      ))
  )
};

export default TopNewsItems;
