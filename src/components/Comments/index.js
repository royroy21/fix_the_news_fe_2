import React from "react";
import {makeStyles} from "@material-ui/core/styles";
import TopicCommentForm from "../Comment/TopicCommentForm";
import Comment from '../Comment';
import {initialTopicCommentsState} from "../../store/reducers/topicComments";
import ListPaginationWithMoreButton from "../ListPaginationWithMoreButton";
import UserImage from "../User/UserImage";

const useStyles = makeStyles((theme) => ({
  avatar: {
    margin: 'auto',
  },
}));

const Comments = ({actions, store, topicId, user}) => {
  const classes = useStyles();

  const userAvatar = (user.object || {}).avatar;
  const userAvatarThumbnailSmall =
    (store.user.object || {}).avatar_thumbnail_small;
  const visibleUserAvatar = userAvatarThumbnailSmall || userAvatar;

  const addBaseCommentStyle = {
    display: 'inline-grid',
    width: '100%',
    marginLeft: 'auto',
    marginRight: 'auto',
  };
  const { isMobile } = store.appDimensions;
  addBaseCommentStyle.gridTemplateColumns = isMobile
    ? '100%'
    : '5% 95%';
  const containerStyle = isMobile
    ? {padding: "10px 8px 10px 0"}
    : {padding: "10px 15px 10px 15px"};
  return (
    <div style={containerStyle}>
      <div style={addBaseCommentStyle}>
        {!isMobile ? (
          <div className={classes.avatar}>
            <UserImage
              fullSizeSrc={userAvatar}
              thumbnailSrc={visibleUserAvatar ? visibleUserAvatar : null}
            />
          </div>
        ) : null}
        <div style={{marginLeft: 8}}>
          <TopicCommentForm
            actions={actions}
            topicId={topicId}
            storeObject={store.comment}
            successMessage={"Comment successfully added"}
            user={user}
            withButton={false}
            withLoadingModal={false}
          />
        </div>
      </div>
      <ListPaginationWithMoreButton
        ItemComponent={Comment}
        request={actions.getTopicComments}
        requestParamName={'topic'}
        requestParamValue={topicId}
        store={store.topicComments[topicId] || initialTopicCommentsState}
      />
    </div>
  )
};

export default Comments;
