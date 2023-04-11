import React from "react";
import NewsItem from "../NewsItem";
import NewsItemsWrapper from "./wrapper";
import {initialState} from "../../store/reducers/newsItems";
import NeverEndingScrolling from "../NeverEndingScrolling";
import AddNewsItemButton from "../NewsItem/AddNewsItemButton";

const NewsItems = ({id, actions, horizontal=false, store, style={}}) => {
  const newsItems =
    store.newsItems
    || initialState;

  const getInitialRequest = () => {
    const params = {};
    if (horizontal) {
      params.size = 5;
    }
    actions.getNewsItems(params);
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
      getNext={actions.getNewsItems}
      id={id}
      // LastItemComponent={
      //   <AddNewsItemButton
      //     user={store.user}
      //     style={{height: 120}}
      //   />
      // }
      ItemComponent={NewsItem}
      store={newsItems}
      style={{marginTop: 10, ...neverEndingScrollingStyle}}
    />
  )
};

export default NewsItemsWrapper(NewsItems);
