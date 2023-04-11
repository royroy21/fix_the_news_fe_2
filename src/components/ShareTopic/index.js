import React, {Fragment} from "react";
import {
  EmailShareButton,
  FacebookShareButton,
  TwitterShareButton,
  WhatsappShareButton,
} from "react-share";
import {
  EmailIcon,
  FacebookIcon,
  TwitterIcon,
  WhatsappIcon,
} from "react-share";
import CopyToClipBoard from "../CopyToClipBoard";
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  shareButtons: {
    marginBottom: 20,
  },
  copyToClipBoard: {
    textAlign: "center",
  },
}));

const ShareTopic = ({slug}) => {
  const classes = useStyles();
  const url = `${window.location.origin.toString()}/topic/${slug}`;

  const iconProps = {
    round: true,
    size: 40,
    style: {margin: 5},
  };

  return (
    <Fragment>
      <div className={classes.shareButtons}>
        <EmailShareButton
          children={<EmailIcon {...iconProps} />}
          url={url}
        />
        <FacebookShareButton
          children={<FacebookIcon {...iconProps} />}
          url={url}
        />
        <TwitterShareButton
          children={<TwitterIcon {...iconProps} />}
          url={url}
        />
        <WhatsappShareButton
          children={<WhatsappIcon {...iconProps} />}
          url={url}
        />
      </div>
      <div className={classes.copyToClipBoard}>
        <CopyToClipBoard
          text={url}
          labelWhenCopy={"Copy Link"}
          labelWhenCopied={"Link Copied"}
        />
      </div>
    </Fragment>
  )
};

export default ShareTopic;
