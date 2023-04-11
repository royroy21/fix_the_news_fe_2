import Form from "../Form";
import React, {Fragment} from "react";
import Field from "../Form/Field";
import {TextField} from "@material-ui/core";

class MessageForm extends Form {

  state = {
    formData: {
      email: '',
      text: '',
      title: '',
      user: '',
    },
  };

  componentDidMount() {
    this.props.actions.clearMessage();
    if (this.props.user.object) {
      this.setFormDefaults()
    }
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (!this.state.formData.email && this.props.user.object) {
      this.setFormDefaults()
    }
  }

  setFormDefaults() {
    this.setState({
      formData: {
        ...this.state.formData,
        email: this.props.user.object.email,
        user: this.props.user.object.id,
      }
    })
    this.formData.set('email', this.props.user.object.email);
    this.formData.set('user', this.props.user.object.id);
  }

  handleSubmit = event => {
    event.preventDefault();
    this.formData.set('type', this.props.type);
    this.props.actions.postMessage(this.formData);
  };

  getFields() {
    return (
      <Fragment>
        <Field
          Field={TextField}
          error={this.props.storeObject.error}
          required
          id={"email"}
          label={"Your email"}
          name={"email"}
          value={this.state.formData.email}
          onChange={this.handleChange}
          margin={"normal"}
        />
        <Field
          Field={TextField}
          error={this.props.storeObject.error}
          required
          id={"title"}
          label={"Title"}
          name={"title"}
          value={this.state.formData.title}
          onChange={this.handleChange}
          margin={"normal"}
        />
        <Field
          Field={TextField}
          error={this.props.storeObject.error}
          required
          id={"text"}
          label={"Message"}
          name={"text"}
          value={this.state.formData.text}
          onChange={this.handleChange}
          margin={"normal"}
        />
      </Fragment>
    )
  }
}

export default MessageForm;
