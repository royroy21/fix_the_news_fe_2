import React from "react";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";

const CustomButton = (props) => {
  const {
    icon=undefined,
    inverted=false,
    label='',
    onClick=undefined,
    size='small',
    style={},
  } = props;
  const iconButtonStyle = size === 'small' ? {padding: 6} : {padding: 0};
  return (
    icon && !label ? (
      <IconButton
        color={'secondary'}
        onClick={onClick}
        style={{
          ...style,
          ...iconButtonStyle,
        }}
      >
        {icon}
      </IconButton>
    ) : (
      <Button
        color={'secondary'}
        children={label || ""}
        disableElevation
        onClick={onClick}
        startIcon={icon}
        style={{
          ...style,
          borderRadius: 25,
          height: 36,
          maxWidth: 250,
          textTransform: "none",
        }}
        variant={inverted ? 'outlined' : 'contained'}
      />
    )
  )
};

export default CustomButton;
