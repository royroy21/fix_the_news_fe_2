import { connect } from 'react-redux'

const mapStateToProps = (state) => {
  return {
    store: {
      user: state.user,
    },
  }
};

const HeaderWrapper = connect(
  mapStateToProps,
);

export default HeaderWrapper;
