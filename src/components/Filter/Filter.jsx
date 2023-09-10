import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectFilter } from '../../redux/filter/filter-selectors';
import { filterContactAction } from '../../redux/filter/filter-slice';
import style from './Filter.module.css';


const Filter = () => {
  const filterValue = useSelector(selectFilter);
  const dispatch = useDispatch();

  return (
  <div className={style.searchContainer}>
    <label className={style.search}>
      <input
        type="text"
        name="filter"
        placeholder=" "
        className={style.inputName}
        title="Enter search name"
        onChange={(e)=> dispatch(filterContactAction(e.target.value))}
        value={filterValue}
      />
    </label>
  </div>)
};


export default Filter;