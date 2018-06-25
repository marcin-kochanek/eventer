import moment from 'moment';

// Filters Reducer
const filtersReducerDefaultState = {
  text: '', // title or location
  sortBy: 'date', //date or amount
  startDate: moment().startOf('month'),
  endDate: moment().endOf('month')
};

const filtersReducer = (state = filtersReducerDefaultState, action) => {
  switch (action.type) {
  case 'SET_TEXT_FILTER':
    return {
      ...state,
      text: action.text
    };
  case 'SORT_BY_DATE':
    return {
      ...state,
      sortBy: 'date'
    };
  case 'SORT_BY_FEE':
    return {
      ...state,
      sortBy: 'fee'
    };
  case 'SET_START_DATE':
    return {
      ...state,
      startDate: action.startDate
    };
  case 'SET_END_DATE':
    return {
      ...state,
      endDate: action.endDate
    };
  default: 
    return state;
  }
};

export default filtersReducer;