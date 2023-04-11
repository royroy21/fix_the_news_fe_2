import { combineReducers } from 'redux'

import aboutCommunicationReducer from './aboutCommunication'
import appDimensionsReducer from './appDimensions'
import categoryNewsItemsReducer from './categoryNewsItems'
import commentReducer from './comment'
import commentCommentsReducer from './commentComments'
import dailyCommunicationReducer from './dailyCommunication'
import likeReducer from './like'
import newsItemReducer from './newsItem'
import messageReducer from './message'
import privacyCommunicationReducer from './privacyCommunication'
import registerReducer from './register'
import registrationCommunicationReducer from './registrationCommunication'
import termsAndConditionsCommunicationReducer from './termsAndConditionsCommunications'
import subscriptionReducer from './subscriptions';
import topicCommentsReducer from './topicComments'
import tokenReducer from './token'
import topicReducer from './topic'
import topicsReducer from './topics'
import userReducer from './user';
import welcomeCommunicationReducer from './welcomeCommunication';

export default combineReducers({
  aboutCommunication: aboutCommunicationReducer,
  appDimensions: appDimensionsReducer,
  categoryNewsItems: categoryNewsItemsReducer,
  comment: commentReducer,
  commentComments: commentCommentsReducer,
  dailyCommunication: dailyCommunicationReducer,
  like: likeReducer,
  newsItem: newsItemReducer,
  message: messageReducer,
  privacyCommunication: privacyCommunicationReducer,
  register: registerReducer,
  registrationCommunication: registrationCommunicationReducer,
  subscription: subscriptionReducer,
  termsAndConditionsCommunication: termsAndConditionsCommunicationReducer,
  topicComments: topicCommentsReducer,
  token: tokenReducer,
  topic: topicReducer,
  topics: topicsReducer,
  user: userReducer,
  welcomeCommunication: welcomeCommunicationReducer,
})
