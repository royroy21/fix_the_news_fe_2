import Form from "../Form";
import React, {Fragment} from "react";
import Field from "../Form/Field";
import {TextField} from "@material-ui/core";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Switch from "@material-ui/core/Switch";
import PropTypes from "prop-types";

class LoginForm extends Form {

  state = {
    formData: {
      email: '',
      password: '',
    },
    showPassword: false,
  };

  componentDidMount() {
    this.props.actions.clearToken();
    this.props.actions.clearUser();
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.actions.postToken(this.formData, this.props.isMobile);
  };

  toggleShowPassword = () => {
    this.setState(state => {
      return {showPassword: !state.showPassword}
    })
  };

  getFields() {
    return (
      <Fragment>
        <Field
          Field={TextField}
          error={this.props.storeObject.error}
          required
          id={"email"}
          label={"Email"}
          name={"email"}
          value={this.state.formData.email}
          onChange={this.handleChange}
          margin={"normal"}
        />
        <Field
          Field={TextField}
          type={
            this.state.showPassword
              ? "text"
              : "password"
          }
          error={this.props.storeObject.error}
          required
          id={"password"}
          label={"Password"}
          name={"password"}
          value={this.state.formData.password}
          onChange={this.handleChange}
          margin={"normal"}
        />
        <FormControlLabel
          control={
            <Switch
              checked={this.state.showPassword}
              onChange={this.toggleShowPassword}
            />
          }
          label={
            this.state.showPassword
              ? "Password visible"
              : "Password hidden"
          }
        />
      </Fragment>
    )
  }

}

export default LoginForm;

LoginForm.PropTypes = {
  isMobile: PropTypes.bool.isRequired,
};
