import Form from "../Form";
import React from "react";
import Field from "../Form/Field";
import {TextField} from "@material-ui/core";

class TopicForm extends Form {

  state = {
    formData: {
      title: "",
    },
  };

  componentDidMount() {
    this.props.actions.clearTopic();
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.actions.postTopic(this.formData);
  };

  getFields() {
    return (
      <Field
        Field={TextField}
        error={this.props.storeObject.error}
        required
        id={"title"}
        label={"Question"}
        name={"title"}
        value={this.state.formData.title}
        onChange={this.handleChange}
        margin={"normal"}
      />
    )
  }

}

export default TopicForm
