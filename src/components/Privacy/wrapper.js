import { connect } from 'react-redux'
import {getPrivacyCommunication} from "../../store/actions/privacyCommunication";
import {getTermsAndConditionsCommunication} from "../../store/actions/termsAndConditionsCommunication";

const mapStateToProps = (state) => {
  return {
    store: {
      privacyCommunication: state.privacyCommunication,
      termsAndConditionsCommunication: state.termsAndConditionsCommunication,
    },
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    actions: {
      getPrivacyCommunication: () => {
        dispatch(getPrivacyCommunication());
      },
      getTermsAndConditionsCommunication: () => {
        dispatch(getTermsAndConditionsCommunication());
      },
    }
  }
};

const PrivacyWrapper = connect(
  mapStateToProps,
  mapDispatchToProps
);

export default PrivacyWrapper;
