import React, {Fragment, useState} from "react";
import {makeStyles} from "@material-ui/core/styles";
import CommentWrapper from "./wrapper";
import CommentCommentForm from "./CommentCommentForm";
import reply from '../../images/reply.svg';
import NestedComments from "../Comments/NestedComments";
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import { getHowLongAgo } from "../../helpers/dateFunctions";
import UserImage from "../User/UserImage";

const useStyles = makeStyles((theme) => ({
  avatar: {
    margin: `${theme.spacing(2)}px auto auto auto`,
  },
  hide: {
    color: theme.palette.primary.dark,
    fontSize: '0.8em',
    fontWeight: 'bold',
    cursor: 'pointer',
    '&:hover': {
      color: theme.palette.secondary.light,
    }
  },
  textContainer: {
    color: theme.palette.primary.contrastText,
    backgroundColor: theme.palette.primary.commentsGrey,
    borderRadius: '4px 25px 25px 25px',
    padding: theme.spacing(1),
    margin: `5px 0 5px ${theme.spacing(1)}px`,
    fontSize: 14,
  },
  name: {
    color: theme.palette.primary.dark,
    fontSize: 14,
    padding: 5,
  },
  replyContainer: {
    color: theme.palette.primary.dark,
    fontSize: '0.8em',
    fontWeight: 'bold',
    width: 100,
    cursor: 'pointer',
    marginTop: 3,
    marginBottom: 10,
    '&:hover': {
      color: theme.palette.secondary.light,
    }
  },
  repliesContainer: {
    color: theme.palette.secondary.main,
  },
  sectionText: {
    paddingLeft: theme.spacing(1),
  },
  text: {
    padding: 5,
  },
}));

const Comment = ({actions, item, store}) => {
  const [showComments, setShowComments] = useState(false);
  const [showAddComment, setShowAddComment] = useState(false);

  const classes = useStyles();
  const {
    avatar,
    avatar_thumbnail_small,
    name,
  } = item.serialized_user;
  const visibleAvatar = avatar_thumbnail_small || avatar;

  const userAvatar = (store.user.object || {}).avatar;
  const userAvatarThumbnailSmall =
    (store.user.object || {}).avatar_thumbnail_small;
  const visibleUserAvatar = userAvatarThumbnailSmall || userAvatar;

  const commentStyle = {
    display: 'inline-grid',
    width: '100%',
    marginLeft: 'auto',
    marginRight: 'auto',
  };
  const { isMobile } = store.appDimensions;
  const largeColumnWidth = isMobile ? 95 : 95;
  const smallColumnWidth = isMobile ? 5 : 5;
  if (isMobile) {
    commentStyle.gridTemplateColumns = `${largeColumnWidth}%`;
  } else {
    commentStyle.gridTemplateColumns = `${smallColumnWidth}% ${largeColumnWidth}%`;
  }
  const marginLeft = isMobile ? `${smallColumnWidth}%`: "7%";
  return (
    <Fragment>
      <div style={commentStyle}>
        {!isMobile ? (
          <div className={classes.avatar}>
            <UserImage
              fullSizeSrc={avatar}
              thumbnailSrc={visibleAvatar}
            />
          </div>
        ) : null}
        <div style={isMobile ? {width: "98%"} : undefined} className={classes.textContainer}>
          <span className={classes.name}>{`${name} - ${getHowLongAgo(item.date_created)}`}</span>
          <div className={classes.text}>{item.text}</div>
        </div>
      </div>
      {showAddComment ? (
        <Fragment>
          <span
            className={classes.hide}
            onClick={() => setShowAddComment(false)}
            style={{
              marginLeft,
            }}
          >
            <ExpandLessIcon />
          </span>
          <div style={{
            ...commentStyle,
            width: `${largeColumnWidth}%`,
            marginLeft,
          }}>
            {!isMobile ? (
              <div className={classes.avatar}>
                <UserImage
                  fullSizeSrc={userAvatar}
                  thumbnailSrc={visibleUserAvatar ? visibleUserAvatar : null}
                />
              </div>
            ) : null}
            <div style={{marginLeft: 8, width: '98%'}}>
              <CommentCommentForm
                actions={actions}
                commentId={item.id}
                onSuccess={() => setShowComments(true)}
                storeObject={store.comment}
                successMessage={"Comment successfully added"}
                user={store.user}
                withButton={false}
                withLoadingModal={false}
              />
            </div>
          </div>
        </Fragment>
      ) : (
        <div
          className={classes.replyContainer}
          onClick={() => setShowAddComment(true)}
          style={{marginLeft}}
        >
          <img src={reply} alt="??" />
          <span className={classes.sectionText}>{'reply'}</span>
        </div>
      )}
      {showComments ? (
        <Fragment>
          <span
            className={classes.hide}
            onClick={() => setShowComments(false)}
            style={{
              marginLeft,
            }}
          >
            <ExpandLessIcon />
          </span>
          <div style={{marginLeft}}>
            <NestedComments
              actions={actions}
              item={item}
              store={store}
            />
          </div>
        </Fragment>
      ) : (
        <div
          className={classes.replyContainer}
          onClick={() => setShowComments(true)}
          style={{marginLeft}}
        >
          {item.comments_count ? (
          <div className={classes.repliesContainer}>
            <img style={{transform: 'scale(-1,-1)'}} src={reply} alt="??" />
            <span className={classes.sectionText}>
              {'replies'}
            </span>
          </div>
        ) : null}
        </div>
      )}
    </Fragment>
  )
};

export default CommentWrapper(Comment);
