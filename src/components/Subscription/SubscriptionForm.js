import Form from "../Form";
import React from "react";
import Field from "../Form/Field";
import {TextField} from "@material-ui/core";

class SubscriptionForm extends Form {

  state = {
    formData: {
      email: "",
    },
  };

  componentDidMount() {
    this.props.actions.clearSubscription();
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.actions.postSubscription(this.formData);
  };

  getFields() {
    return (
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
    )
  }

}

export default SubscriptionForm
