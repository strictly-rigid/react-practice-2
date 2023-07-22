import TextField from '@mui/material/TextField';
import { FilterWrapper } from './Filter.styled';

const Filter = ({ onChange, filter }) => {
  return (
    <FilterWrapper>
      <TextField
        id="filter"
        label="filter"
        variant="outlined"
        onChange={onChange}
        value={filter}
        fullWidth
      />
    </FilterWrapper>
  );
};

export default Filter;
