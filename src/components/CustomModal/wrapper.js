import { connect } from 'react-redux'

const mapStateToProps = (state) => {
  return {
    store: {
      appDimensions: state.appDimensions,
    },
  }
};


const CustomModalWrapper = connect(
  mapStateToProps,
);

export default CustomModalWrapper;
