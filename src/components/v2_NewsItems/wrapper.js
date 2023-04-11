import { connect } from 'react-redux'
import {getNewsItems, getNextNewsItems} from '../../store/actions/newsItems'

const mapStateToProps = (state) => {
  return {
    store: {
      newsItems: state.newsItems,
      user: state.user,
    },
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    actions: {
      getNewsItems: params => {
        dispatch(getNewsItems(params))
      },
    }
  }
};

const NewsItemsWrapper = connect(
  mapStateToProps,
  mapDispatchToProps
);

export default NewsItemsWrapper;
