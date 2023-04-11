import { connect } from 'react-redux'
import {getCategoryNewsItems} from '../../store/actions/categoryNewsItems'

const mapStateToProps = (state) => {
  return {
    store: {
      categoryNewsItems: state.categoryNewsItems,
      user: state.user,
    },
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    actions: {
      getCategoryNewsItems: params => {
        dispatch(getCategoryNewsItems(params))
      },
    }
  }
};

const CategoryNewsItemsWrapper = connect(
  mapStateToProps,
  mapDispatchToProps
);

export default CategoryNewsItemsWrapper;
