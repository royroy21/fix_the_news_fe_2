import React, {useState} from "react";
import {makeStyles} from "@material-ui/core/styles";
import {getHowLongAgo} from "../../helpers/dateFunctions";
import TopicView from "./TopicView";

const useStyles = makeStyles((theme) => ({
  container: {
    margin: theme.spacing(1),
  },
  data: {
    color: theme.palette.secondary.dark,
    fontSize: 14,
  },
  header: {
    fontSize: 16,
    marginBottom: 0,
  },
  hide: {
    color: theme.palette.secondary.main,
  },
  link: {
    color: theme.palette.primary.contrastText,
    textDecoration: "none",
    "&:hover": {
      color: theme.palette.secondary.main,
      cursor: "pointer",
    },
  }
}))


const TopicListView = ({item, store}) => {
  const classes = useStyles();
  const [showNewsItems, setShowNewsItems] = useState(item.is_shared);
  return (
    <div className={classes.container}>
      <a className={classes.link} href={'#'} onClick={() => setShowNewsItems(!showNewsItems)}>
        <h2 className={classes.header}>{showNewsItems ? <span className={classes.hide}>{'^ hide'}</span> : item.title}</h2>
      </a>
      {showNewsItems && (
        <TopicView item={item} store={store} />
      )}
      {!showNewsItems && (<span className={classes.data}>
        {item.score} points | {item.total_news_items_count} viewpoints | last updated {getHowLongAgo(item.last_updated)} | added by {item.serialized_user.name}
      </span>)}
    </div>
  )
}

export default TopicListView;
