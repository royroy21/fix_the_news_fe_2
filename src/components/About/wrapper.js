import { connect } from 'react-redux'
import {getAboutCommunication} from "../../store/actions/aboutCommunication";

const mapStateToProps = (state) => {
  return {
    store: {
      aboutCommunication: state.aboutCommunication,
    },
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    actions: {
      getAboutCommunication: () => {
        dispatch(getAboutCommunication());
      },
    }
  }
};

const AboutWrapper = connect(
  mapStateToProps,
  mapDispatchToProps
);

export default AboutWrapper;
