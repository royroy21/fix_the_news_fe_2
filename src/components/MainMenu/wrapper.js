import { connect } from 'react-redux'

const mapStateToProps = (state) => {
  return {
    store: {
      appDimensions: state.appDimensions,
      user: state.user,
    },
  }
};


const MainMenuWrapper = connect(
  mapStateToProps,
);

export default MainMenuWrapper;
