import React, {useState} from "react";
import {CopyToClipboard} from 'react-copy-to-clipboard';
import FileCopyIcon from '@material-ui/icons/FileCopy';
import CustomButton from "./CustomButton";

const CopyToClipBoard = ({text, labelWhenCopy, labelWhenCopied}) => {
  const [copied, setCopied] = useState(false);

  const handleClick = () => {
    setCopied(true);
    setTimeout(() => setCopied(false), 2000)
  };

  return (
    <CopyToClipboard text={text}>
      <CustomButton
        icon={<FileCopyIcon />}
        label={copied ?  labelWhenCopied: labelWhenCopy}
        onClick={handleClick}
        style={{width: 200}}
      />
    </CopyToClipboard>
  )
};

export default CopyToClipBoard;
