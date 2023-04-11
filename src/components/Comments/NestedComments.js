import React from "react";
import {initialCommentCommentsState} from "../../store/reducers/commentComments";
import Comment from '../Comment';
import ListPaginationWithMoreButton from "../ListPaginationWithMoreButton";

const NestedComments = ({actions, item, store}) => {
  return (
    <ListPaginationWithMoreButton
      ItemComponent={Comment}
      request={actions.getCommentComments}
      requestParamName={'comment'}
      requestParamValue={item.id}
      store={store.commentComments[item.id] || initialCommentCommentsState}
    />
  )
};

export default NestedComments;
