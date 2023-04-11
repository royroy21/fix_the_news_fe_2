import React, {Component} from 'react';
import Modal from '@material-ui/core/Modal';
import PropTypes from 'prop-types';
import LoadingSpinner from "./LoadingSpinner";
import SuccessNotification from "./SuccessNotification";

class LoadingModal extends Component {

  LONG_TIMEOUT = 2495;
  SHORT_TIMEOUT = 300;

  state = {
    open: false,
    success: false,
  };

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (this.props.withSuccess
        && prevProps.loading
        && !this.props.loading
        && !this.props.error) {
      this.setState({success: true})
    }
    if (!prevProps.loading && this.props.loading) {
     this.setState({open: true})
    } else if (prevProps.loading && !this.props.loading) {
      if (this.props.successMessage && !this.props.error) {
        this.closeModalWithTimeout({open: false}, this.LONG_TIMEOUT)
      } else {
        this.closeModalWithTimeout({open: false}, this.SHORT_TIMEOUT)
      }
    }
  }

  closeModalWithTimeout(newState, timeout) {
    const closeModal = () => {
      this.setState(newState);
      if (this.state.success && this.props.postSuccess) {
        this.props.postSuccess()
      }
    };
    // closeModal();
    // TODO - setting timeout here creates a memory leak :/
    // find a better way ...
    setTimeout(closeModal, timeout)
  }

  render() {
    return (
      <Modal disableAutoFocus open={this.state.open}>
        {this.state.success ? (
          <SuccessNotification successMessage={this.props.successMessage}/>
        ) : (
          <LoadingSpinner />
        )}
      </Modal>
    )
  }

}

export default LoadingModal;

LoadingModal.propTypes = {
  loading: PropTypes.bool.isRequired,
  error: PropTypes.bool.isRequired,
  withSuccess: PropTypes.bool.isRequired,
  successMessage: PropTypes.string,
  postSuccess: PropTypes.func,
};

LoadingModal.defaultProps = {
  withSuccess: false,
  successMessage: null,
};
