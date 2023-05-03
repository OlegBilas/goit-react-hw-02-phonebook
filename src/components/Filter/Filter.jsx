import PropTypes from 'prop-types';

const Filter = ({ filter, onChange }) => {
  return (
    <label>
      Find contacts by name
      <input type="text" name="filter" value={filter} onChange={onChange} />
    </label>
  );
};

Filter.propTypes = {
  filter: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Filter;
