import React from 'react';
import { connect } from 'react-redux';
import { setTextFilter, sortByDate, sortByFee } from '../actions/filters';

const EventListFilters = (props) => (
  <div>
    <input 
      type="text"
      value={props.filters.text}
      onChange={(e) => {
        props.dispatch(setTextFilter(e.target.value));
      }}
    />
    <select
      value={props.filters.sortBy}
      onChange={(e) => {
        if (e.target.value === 'fee') {
          props.dispatch(sortByFee());
        } else if (e.target.value === 'date') {
          props.dispatch(sortByDate());
        }
      }}
    >
      <option value="date">Date</option>
      <option value="fee">Fee</option>
    </select>
  </div>
);

const mapStateToProps = (state) => {
  return {
    filters: state.filters
  };
};
export default connect(mapStateToProps)(EventListFilters);