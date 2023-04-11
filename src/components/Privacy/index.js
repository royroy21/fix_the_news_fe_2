import React, {Fragment, useEffect} from "react";
import {makeStyles} from "@material-ui/core/styles";
import PrivacyWrapper from "./wrapper";
import {cleanHTML} from "../../helpers/htmlFunctions";

const useStyles = makeStyles((theme) => ({
  text: {
    margin: theme.spacing(1),
  },
  title: {
    margin: theme.spacing(1),
  },
}));

const Privacy = ({actions, store}) => {
  const classes = useStyles();
  const {
    id: privacyId,
    text: privacyText,
    title: privacyTitle,
  } = store.privacyCommunication.object || {};
  useEffect(
    () => actions.getPrivacyCommunication(),
    [actions, privacyId],
    )
  const {
    id: termsAndConditionsId,
    text: termsAndConditionsText,
    title: termsAndConditionsTitle,
  } = store.termsAndConditionsCommunication.object || {};
  useEffect(
    () => actions.getTermsAndConditionsCommunication(),
    [actions, termsAndConditionsId],
    )
  return (
    <Fragment>
      <br /><br />
      <h2 className={classes.title}>{privacyTitle}</h2>
      <p className={classes.text}>{cleanHTML(privacyText)}</p>
      <br /><br />
      <h2 className={classes.title}>{termsAndConditionsTitle}</h2>
      <p className={classes.text}>{cleanHTML(termsAndConditionsText)}</p>
    </Fragment>
  )
}

export default PrivacyWrapper(Privacy);
