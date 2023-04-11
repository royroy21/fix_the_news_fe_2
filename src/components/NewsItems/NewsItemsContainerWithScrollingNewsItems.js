import React from "react";
import {makeStyles} from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import NewsItems from "../NewsItems";
import CategoryIndicator from "./CategoryIndicator";
import {categoryColourMap} from "../../theme";
import AddNewsItemButton from "../NewsItem/AddNewsItemButton";

const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    marginTop: theme.spacing(1),
  },
  newsItems: {
    paddingBottom: theme.spacing(1),
  },
  newsItemsContainer: {
    backgroundColor: theme.palette.primary.light,
    border: `1px solid ${theme.palette.primary.main}`,
    borderRadius: 4,
    flex: 1,
    position: "relative",
  },
  newsItemsContent: {
    height: "99%",
    padding: "0 10px 0 12px",
    position: "relative",
  },
  addViewpointText: {
    color: theme.palette.secondary.main,
    fontSize: "0.8em",
    paddingTop: 5,
  }
}));

const NewsItemsContainerWithScrollingNewsItems = ({topic, user}) => {
  const getCategoryIndicatorStyle = (category) => {
    return {
      backgroundColor: categoryColourMap[category.type],
      float: "left",
      height: "100%",
      width: "1%",
    }
  };

  const classes = useStyles();
  return (
    <div className={classes.container}>
      {topic.serialized_categories.map(category => (
        <div
          className={classes.newsItemsContainer}
          key={`news-item-${category.id}`}
          style={['for', 'neutral'].includes(category.type) ? {marginRight: 10} : undefined}
        >
          <div style={getCategoryIndicatorStyle(category)}
          >{""}</div>
          <div className={classes.newsItemsContent}>
            <Typography
              variant={"subtitle1"}
            >
              <CategoryIndicator category={category}/>
            </Typography>
            <div className={classes.newsItems}>
              <NewsItems
                id={`news-items-for-topic-${topic.id}-category-${[category.type]}`}
                categoryId={category.id}
                style={{maxHeight: 420, overflowX: "hidden"}}
                topic={topic}
              />
            </div>
            <AddNewsItemButton
              categoryId={category.id}
              topic={topic}
              user={user}
              smallButton={true}
            />
            <span className={classes.addViewpointText}>{"Add Viewpoint"}</span>
          </div>
        </div>
        ))
      }
    </div>
  )
};

export default NewsItemsContainerWithScrollingNewsItems;
