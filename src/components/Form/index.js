import React from 'react';
import LoadingModal from "../Loading/LoadingModal";
import FormGroup from "@material-ui/core/FormGroup";
import PropTypes from "prop-types";
import Error from "./Error";
import Button from "../CustomButton";

class Form extends React.Component {

  state = {
    formData: {
    },
  };

  formData = new FormData();

  handleSubmit = (event) => {
    throw Error("handleSubmit method not implemented");
  };

  handleChange = (event) => {
    const formData = {
      ...this.state.formData,
      [event.target.name]: event.target.value,
    };
    this.setState({formData});
    this.formData.set(event.target.name, event.target.value);
  };

  handleCheckBoxChange = (event) => {
    const formData = {
      ...this.state.formData,
      [event.target.name]: event.target.checked,
    };
    this.setState({formData});
    this.formData.set(event.target.name, event.target.checked);
  };

  handleChangeFile = (event, fieldName) => {
    const formData = {
      ...this.state.formData,
      [fieldName]: event.target.files[0],
    };
    this.setState({formData});
    this.formData.set(fieldName, event.target.files[0]);
  };

  getFields() {
    throw Error("getFields method not implemented");
  }

  render(){
    const {
      error,
      loading,
    } = this.props.storeObject;
    return (
      <form onSubmit={this.handleSubmit} autoComplete={"off"}>
        <FormGroup>
          {this.getFields()}
          <Error
            name={"non_field_errors"}
            error={error}
          />
          {this.props.withButton ? (
            <Button
              label={this.props.buttonLabel}
              onClick={this.handleSubmit}
              style={{margin: "auto", display: "inline-block", marginTop: 35}}
            />
          ) : null}
          {this.props.withLoadingModal ? (
            <LoadingModal
              loading={loading}
              error={!!error}
              successMessage={this.props.successMessage}
              withSuccess
              postSuccess={this.props.postSuccess}
            />
          ) : null}
        </FormGroup>
      </form>
    )
  }
}

export default Form;

Form.defaultProps = {
  withButton: true,
  withLoadingModal: true,
};

Form.propTypes = {
  storeObject: PropTypes.object,
  successMessage: PropTypes.string.isRequired,
  buttonLabel: PropTypes.string,
  postSuccess: PropTypes.func,
  withButton: PropTypes.bool.isRequired,
  withLoadingModal: PropTypes.bool.isRequired,
};
