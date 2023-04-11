import { connect } from 'react-redux'
import {clearSubscription, postSubscription} from "../../store/actions/subscriptions";

const mapStateToProps = (state) => {
  return {
    store: {
      subscription: state.subscription,
    },
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    actions: {
      clearSubscription: () => {
        dispatch(clearSubscription());
      },
      postSubscription: data => {
        dispatch(postSubscription(data));
      },
    }
  }
};

const SubscriptionWrapper = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default SubscriptionWrapper;
