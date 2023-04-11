import React from "react";
import ButtonForModal from "../CustomButton/ButtonForModal";
import AddIcon from "@material-ui/icons/Add";
import NewsItemModal from "./NewsItemModal";


const AddNewsItemButton = ({user, smallButton=false, style={}}) => {
  return (
    <ButtonForModal
      icon={<AddIcon style={style} fontSize={smallButton ? 'small' : 'large'} />}
      Modal={NewsItemModal}
    />
  )
}

export default AddNewsItemButton
