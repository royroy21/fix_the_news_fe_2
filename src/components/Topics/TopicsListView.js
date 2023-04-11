import TopicListView from "../Topic/TopicListView";
import React, {Fragment} from "react";
import NeverEndingScrolling from "../NeverEndingScrolling";
import {
  SHOW_ADD_TOPIC_BUTTON,
  TOPIC_PAGE_SIZE_FOR_DESKTOP
} from "../../settings";
import ButtonForModal from "../CustomButton/ButtonForModal";
import AddIcon from "@material-ui/icons/Add";
import TopicModal from "../Topic/TopicModal";
import SubscriptionModal from "../Subscription/SubscriptionModal";

const TopicsListView = ({id='topics', actions, store, isMobile}) => {
  const addTopicStyle = isMobile ? {
      width: "100%",
      margin: "auto",
    }
  : {
      width: 180,
      margin: 2,
    }

  const getAddQuestionOrSubscriptionButton = () => {
    if (store.user.object) {
      return (
        <Fragment>
          <div style={{"paddingTop": 10}}>{""}</div>
          <ButtonForModal
            icon={<AddIcon fontSize={'large'} />}
            label={"Add Question"}
            Modal={TopicModal}
            style={{
              ...addTopicStyle,
              minHeight: 35,
            }}
          />
        </Fragment>
      )
    } else {
      return (
        <Fragment>
          <div style={{"paddingTop": 10}}>{""}</div>
          <ButtonForModal
            icon={<AddIcon fontSize={'large'} />}
            label={"Subscribe Now"}
            Modal={SubscriptionModal}
            style={{
              ...addTopicStyle,
              minHeight: 35,
            }}
          />
        </Fragment>
      )
    }
  }

  return (
    <Fragment>
      <NeverEndingScrolling
        getInitialRequest={() => actions.getTopics({size: TOPIC_PAGE_SIZE_FOR_DESKTOP})}
        getNext={actions.getTopics}
        id={id}
        store={store.topics}
        ItemComponent={TopicListView}
      />
      {SHOW_ADD_TOPIC_BUTTON && Boolean(store.topics.items.length) && (
        getAddQuestionOrSubscriptionButton()
      )}
    </Fragment>
  )
};

export default TopicsListView;
