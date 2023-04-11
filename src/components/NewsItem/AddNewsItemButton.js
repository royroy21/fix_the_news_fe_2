import React from "react";
import ButtonForModal from "../CustomButton/ButtonForModal";
import AddIcon from "@material-ui/icons/Add";
import NewsItemModal from "./NewsItemModal";


const AddNewsItemButton = ({categoryId, topic, user, smallButton=false, style={}}) => {
  return (
    <ButtonForModal
      icon={<AddIcon style={style} fontSize={smallButton ? 'small' : 'large'} />}
      Modal={NewsItemModal}
      modelProps={{
        categories: topic.serialized_categories,
        topicId: topic.id,
        categoryId: categoryId,
      }}
    />
  )
}

export default AddNewsItemButton
