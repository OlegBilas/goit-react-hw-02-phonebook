import PropTypes from 'prop-types';
import { Label, Input } from 'components/ContactForm/ContactForm.styled';

const Filter = ({ filter, onChange }) => {
  return (
    <>
      <Label htmlFor="1">Find contacts by name</Label>
      <Input
        id="1"
        type="text"
        name="filter"
        title="Use this field to filter contacts by contact's name"
        value={filter}
        onChange={onChange}
      />
    </>
  );
};

Filter.propTypes = {
  filter: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Filter;
