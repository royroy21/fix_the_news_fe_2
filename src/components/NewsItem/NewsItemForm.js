import Form from "../Form";
import React, {Fragment} from "react";
import Field from "../Form/Field";
import {TextField} from "@material-ui/core";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import PropTypes from "prop-types";

class NewsItemForm extends Form {

  state = {
    formData: {
      title: "",
      topic: "",
      url: "",
      category: "",
    },
  };

  componentDidMount() {
    this.props.actions.clearNewsItem();
    this.setFormDefaults();
  }

  DEFAULT_CATEGORY = "neutral";

  setFormDefaults() {
    const defaultCategoryId = this.props.categories
      .filter(category => category.type === this.DEFAULT_CATEGORY)[0].id;
    this.setState(state => ({
      formData: {
        ...state.formData,
        category: defaultCategoryId,
        topic: this.props.topicId,
      }}));
    this.formData.set("category", defaultCategoryId);
    this.formData.set("topic", this.props.topicId);
    if (this.props.categoryId) {
      this.formData.set("category", this.props.categoryId);
    }
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.actions.postNewsItem(this.formData, this.props.isMobile);
  };

  getFields() {
    return (
      <Fragment>
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
          id={"url"}
          label={"URL"}
          name={"url"}
          value={this.state.formData.url}
          onChange={this.handleChange}
          margin={"normal"}
        />
        {!this.props.categoryId ? (
          <FormControl style={{marginTop: 25, marginBottom: 50}}>
            <InputLabel id={"news-item-category-label"}>{"category"}</InputLabel>
              <Select
                labelId={"news-item-category-label"}
                id={"category"}
                name={"category"}
                value={this.state.formData.category}
                onChange={this.handleChange}
              >
                {this.props.categories.map(category => (
                  <MenuItem
                    key={`news-item-category-${category.id}`}
                    value={category.id}
                  >
                    {category.title || category.type}
                  </MenuItem>
                ))}
              </Select>
          </FormControl>
          ) : null}
      </Fragment>
    )
  }

}

export default NewsItemForm

NewsItemForm.PropTypes = {
  isMobile: PropTypes.bool.isRequired,
};
