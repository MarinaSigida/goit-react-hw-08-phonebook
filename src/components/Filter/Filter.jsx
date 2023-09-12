import PropTypes from 'prop-types';
import style from './Filter.module.css';


export const Filter = ({ onChangeFilter }) => {
  return (
    <>
      <label className={style.search}>
        Search
        <input
        onChange={e => onChangeFilter(e)}
        type="text"
        name="filter"
        placeholder=" "
        className={style.inputName}
        title="Enter search name"/>
      </label>
    </>
  );
};

Filter.propTypes = {
  onChangeFilter: PropTypes.func.isRequired,
};


