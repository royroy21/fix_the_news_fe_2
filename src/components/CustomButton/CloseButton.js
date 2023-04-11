import React from "react";
import CloseIcon from "@material-ui/icons/Close";
import IconButton from "@material-ui/core/IconButton";

const CloseButton = ({onClick, style={}, overwriteStyle=false}) => {
  const iconButtonStyle = !overwriteStyle
    ? {padding: 0, marginLeft: "92%", ...style}
    : style
  return (
    <IconButton
      color={"secondary"}
      onClick={onClick}
      style={iconButtonStyle}
    >
      <CloseIcon
        style={{
          padding: 0,
        }}
      />
    </IconButton>
  )
};

export default CloseButton;
