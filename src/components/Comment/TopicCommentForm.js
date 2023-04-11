import Form from "../Form";
import React from "react";
import Field from "../Form/Field";
import {TextField} from "@material-ui/core";
import {withRouter} from "react-router-dom";
import PropTypes from "prop-types";
import LoadingSpinner from "../Loading/LoadingSpinner";
// import UserNotLoggedInModal from "../User/UserNotLoggedInModal";

class TopicCommentForm extends Form {

  state = {
    formData: {
      text: "",
      topic: "",
    },
    openUserNotLoggedIn: false,
  };

  componentDidMount() {
    this.setFormDefaults();
    this.props.actions.clearComment();
  }

  setFormDefaults() {
    const topicId = this.props.topicId;
    this.setState(state => ({
      formData: {
        ...state.formData,
        topic: topicId,
      }}));
    this.formData.set("topic", topicId);
  }

  handleSubmit = (event) => {
    event.preventDefault();
    if (!this.state.formData.text) return;
    this.props.actions.postTopicComment(this.formData);
    this.resetTextField();
  };

  resetTextField = () => {
    this.setState(state => ({formData: {...state.formData, text: ''}}));
  };

  getFields() {
    return (
      this.props.storeObject.loading ? (
        <LoadingSpinner />
      ) : (
        <Field
          Field={TextField}
          error={this.props.storeObject.error}
          id={"text"}
          label={"Add comment"}
          name={"text"}
          value={this.state.formData.text}
          onChange={this.handleChange}
          margin={"normal"}
          variant={"outlined"}
        />
      )
    )
  }

}

export default withRouter(TopicCommentForm);

TopicCommentForm.propTypes = {
  topicId: PropTypes.number.isRequired,
  user: PropTypes.object.isRequired,
};
