import React from "react";
import NewsItem from "../NewsItem";
import CategoryNewsItemsWrapper from "./wrapper";
import {initialCategoryNewsItemState} from "../../store/reducers/categoryNewsItems";
import NeverEndingScrolling from "../NeverEndingScrolling";
import AddNewsItemButton from "../NewsItem/AddNewsItemButton";

const NewsItems = ({id, actions, categoryId, horizontal=false, store, topic, style={}}) => {
  const newsItems =
    store.categoryNewsItems[categoryId]
    || initialCategoryNewsItemState;

  const getInitialRequest = () => {
    const params = {
      topic: topic.id,
      category: categoryId,
    };
    if (horizontal) {
      params.size = 5;
    }
    actions.getCategoryNewsItems(params);
  };

  const neverEndingScrollingStyle = horizontal
    ? {
        ...style,
        display: "flex",
        flexDirection: "row",
      }
    : style;

  return (
    <NeverEndingScrolling
      getInitialRequest={getInitialRequest}
      getNext={actions.getCategoryNewsItems}
      id={id}
      LastItemComponent={horizontal ? (
          <AddNewsItemButton
            topic={topic}
            user={store.user}
            categoryId={categoryId}
            style={{height: 120}}
          />
        ) : null
      }
      ItemComponent={NewsItem}
      store={newsItems}
      style={neverEndingScrollingStyle}
    />
  )
};

export default CategoryNewsItemsWrapper(NewsItems);
