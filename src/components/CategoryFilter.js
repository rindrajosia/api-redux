import React from 'react';
import { connect } from 'react-redux';
import { FILTER, CATEGORY_FILTERS } from '../constant';

const CategoryFilter = ({ filter, handleFilterChange }) => (
  <>
    <label htmlFor="category">
      <span className="add-book">Filter Meals by category:</span>
      <select className="select" value={filter} onChange={e => { handleFilterChange(e.target.value); }} id="category" name="category" required>
        {FILTER.map(category => (
          <option key={Math.floor(Math.random() * 10000)} value={category}>
            {category}
          </option>
        ))}
      </select>
    </label>
  </>
);

const mapStateToProps = state => ({ filter: state.filter });

export default connect(
  mapStateToProps,
)(CategoryFilter);
