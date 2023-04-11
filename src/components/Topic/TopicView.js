import React from 'react';
import {makeStyles} from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import NewsItemsContainer from "../NewsItems/NewsItemsContainer";
import TopicWrapper from "./wrapper";
import MobileNewsItemsContainer from "../NewsItems/MobileNewsItemsContainer";
import CommentsButton from "../Comments/CommentsButton";
import AddIcon from '@material-ui/icons/Add';
import ShareIcon from '@material-ui/icons/Share';
import ButtonForModal from "../CustomButton/ButtonForModal";
import ShareTopicModal from "../ShareTopic/ShareTopicModal";
import NewsItemModal from "../NewsItem/NewsItemModal";
import {FORCE_SCROLLING_NEWS_ITEMS_FOR_DESKTOP} from "../../settings";
import NewsItemsContainerWithScrollingNewsItems
  from "../NewsItems/NewsItemsContainerWithScrollingNewsItems";

const useStyles = makeStyles((theme) => ({
  buttonLinkContainer: {
    display: "flex",
    flexDirection: "row",
    position: "absolute",
    right: 0,
  },
  headerContainer: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    position: "relative",
    width: "100%",
    top: "-5px",
  },
  root: {
    marginTop: theme.spacing(2),
  },
  title: {
    fontSize: 20,
    fontWeight: 600,
    paddingLeft: theme.spacing(1),
    width: "65%",
  }
}));

const TopicView = ({item, store}) => {
  const classes = useStyles();
  const isMobile = store.appDimensions.isMobile;
  if (isMobile === null) {
    return null;
  }
  const DesktopNewsItemsContainer = FORCE_SCROLLING_NEWS_ITEMS_FOR_DESKTOP
    ? NewsItemsContainerWithScrollingNewsItems
    : NewsItemsContainer;
  return (
    <div className={classes.root}>
      <div
        className={classes.headerContainer}
        style={!isMobile ? {paddingBottom: 5} : undefined}
      >
        <Typography
          className={classes.title}
          variant={"h2"}
        >
          {item.title}
        </Typography>
        <div
          className={classes.buttonLinkContainer}
          style={store.appDimensions.isMobile ? {marginRight: 10} : undefined}
        >
          <ButtonForModal
            icon={<ShareIcon />}
            inverted={true}
            Modal={ShareTopicModal}
            modelProps={{slug: item.slug}}
          />
          <ButtonForModal
            icon={<AddIcon fontSize={'large'} />}
            label={!isMobile ? "Add Viewpoint" : null}
            Modal={NewsItemModal}
            modelProps={{
              categories: item.serialized_categories,
              topicId: item.id,
            }}
          />
        </div>
      </div>
      {isMobile ? (
        <MobileNewsItemsContainer topic={item} />
        ) : (
        <DesktopNewsItemsContainer topic={item} user={store.user}/>
      )}
      <CommentsButton
        commentsCount={item.comments_count}
        topicId={item.id}
      />
    </div>
  )
};

export default TopicWrapper(TopicView);
