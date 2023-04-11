import { connect } from 'react-redux'

import { patchUser } from "../../store/actions/user";
import {getDailyCommunication} from "../../store/actions/dailyCommunication";
import {getWelcomeCommunication} from "../../store/actions/welcomeCommunication";
import {getRegistrationCommunication} from "../../store/actions/registrationCommunication";

const mapStateToProps = (state) => {
  return {
    store: {
      dailyCommunication: state.dailyCommunication,
      user: state.user,
      welcomeCommunication: state.welcomeCommunication,
      registrationCommunication: state.registrationCommunication,
    },
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    actions: {
      getDailyCommunication: () => {
        dispatch(getDailyCommunication());
      },
      getWelcomeCommunication: () => {
        dispatch(getWelcomeCommunication());
      },
      getRegistrationCommunication: () => {
        dispatch(getRegistrationCommunication());
      },
      patchUser: data => {
        dispatch(patchUser(data));
      },
    }
  }
};

const CommunicationsWrapper = connect(
  mapStateToProps,
  mapDispatchToProps
);

export default CommunicationsWrapper;
