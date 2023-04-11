import React, {Fragment} from "react";
import {makeStyles} from "@material-ui/core/styles";
import AddNewsItemButton from "../NewsItem/AddNewsItemButton";

const useStyles = makeStyles((theme) => ({
  container: {
    width: "93%",
    bottom: 4,
    display: "grid",
    gridTemplateColumns: "10% 15%",
    position: "absolute",
    gridGap: "75%",
  },
  moreNewsItems: {
    color: theme.palette.primary.dark,
    fontSize: 14,
    fontWeight: "bold",
    cursor: "pointer",
    paddingTop: 8,
    marginLeft: "auto",
    marginRight: 5,
    "&:hover": {
      color: theme.palette.secondary.main,
    },
  },
}));

const ShowMoreNewsItems = ({topic, category, showTopNewsItems, setShowTopNewsItems, user}) => {
  const classes = useStyles();
  const numberOfShowingNewsItems = 3;
  return (
    <Fragment>
      {!showTopNewsItems[category.type] ? (
        <div className={classes.container}>
          <AddNewsItemButton
            categoryId={category.id}
            topic={topic}
            user={user}
            smallButton={true}
          />
          {topic.news_items_count[category.type] > numberOfShowingNewsItems ? (
            <span
              className={classes.moreNewsItems}
              onClick={() => setShowTopNewsItems({
                ...showTopNewsItems,
                [category.type]: true,
              })}
            >
              {"More"}
            </span>
          ) : null}
        </div>
      ) : (
        <div className={classes.container}>
          <AddNewsItemButton
            categoryId={category.id}
            topic={topic}
            user={user}
            smallButton={true}
          />
          <span
            className={classes.moreNewsItems}
            onClick={() => setShowTopNewsItems({
              ...showTopNewsItems,
              [category.type]: false,
            })}
          >
            {`Less`}
          </span>
        </div>
      )}
    </Fragment>
  )
};

export default ShowMoreNewsItems;
