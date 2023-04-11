import { connect } from 'react-redux'
import {CLEAR_NEWS_ITEM, postNewsItem} from "../../store/actions/newsItem";

const mapStateToProps = (state) => {
  return {
    store: {
      appDimensions: state.appDimensions,
      newsItem: state.newsItem,
    },
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    actions: {
      postNewsItem: (data, isMobile) => {
        dispatch(postNewsItem(data, isMobile))
      },
      clearNewsItem: () => {
        dispatch({type: CLEAR_NEWS_ITEM});
      },
    }
  }
};

const NewsItemWrapper = connect(
  mapStateToProps,
  mapDispatchToProps
);

export default NewsItemWrapper;
