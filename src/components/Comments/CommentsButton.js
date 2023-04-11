import React, {useState} from "react";
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import {makeStyles} from "@material-ui/core/styles";
import Comments from "./index";
import CommentsWrapper from "./wrapper";

const useStyles = makeStyles((theme) => ({
  container: {
    backgroundColor: theme.palette.primary.light,
    border: `1px solid ${theme.palette.primary.main}`,
    borderRadius: 4,
    marginTop: 10,
    marginBottom: 30,
    padding: 10,
  },
  content: {
    color: theme.palette.secondary.main,
    display: 'flex',
    flexDirection: 'row',
    cursor: 'pointer',
    margin: '5px auto 5px auto',
    width: 100,
    '&:hover': {
      color: theme.palette.secondary.main,
    },
  },
  messageIcon: {
    marginTop: 5,
    marginRight: 5,
  },
  ExpandIcon: {
  },
  text: {
    fontWeight: 'bold',
    fontSize: 14,
    marginTop: 5,
  },
}));

const CommentsButton = ({actions, commentsCount, store, topicId}) => {
  const [isExpanded, setExpanded] = useState(false);
  const classes = useStyles();

  const openComments = () => {
    setExpanded(true)
  };

  const closeComments = () => {
    setExpanded(false);
    actions.clearTopicComments({topic: topicId});
  };

  return (
    <div
      className={classes.container}
      style={store.appDimensions.isMobile ? {marginLeft: 5, marginRight: 5} : undefined}
    >
      <div
        className={classes.content}
        onClick={isExpanded ? closeComments : openComments}
      >
        <span className={classes.text}>
          {'Comments'}
        </span>
        {isExpanded ? (
          <ExpandLessIcon className={classes.ExpandIcon} />
        ) : (
          <ExpandMoreIcon className={classes.ExpandIcon} />
        )}
      </div>
      {isExpanded ? (
        <Comments
          actions={actions}
          store={store}
          topicId={topicId}
          user={store.user}
        />
      ) : null}
    </div>
  )
};

export default CommentsWrapper(CommentsButton);
