import React from "react";
import Typography from "@material-ui/core/Typography";
import NewsItems from "../NewsItems";
import CategoryIndicator from "./CategoryIndicator";

const MobileNewsItemsContainer = ({topic}) => {
  return (
    <div style={{marginLeft: 5}}>
      {topic.serialized_categories.map(category => (
        <div key={`news-item-${category.id}`}>
          <Typography variant={"subtitle1"}>
            <CategoryIndicator category={category}/>
          </Typography>
            <NewsItems
              id={`news-items-for-topic-${topic.id}-category-${[category.type]}`}
              categoryId={category.id}
              horizontal={true}
              topic={topic}
            />
          </div>
        ))
      }
    </div>
  )
};

export default MobileNewsItemsContainer;
