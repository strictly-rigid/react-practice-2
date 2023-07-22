import { Component } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { nanoid } from 'nanoid';

import { FormWrapper } from './Form.styled';

class Form extends Component {
  state = {
    ukr: '',
    eng: '',
  };

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleFormSubmit = e => {
    e.preventDefault();

    if (this.state.eng.trim() === '' || this.state.ukr.trim() === '') {
      alert('Please, fill all fields!');
      return;
    }

    const newWord = { ...this.state, id: nanoid(5) };

    this.props.addWord(newWord);

    this.setState({
      ukr: '',
      eng: '',
    });
  };

  render() {
    return (
      <FormWrapper onSubmit={this.handleFormSubmit}>
        <TextField
          id="ukrainian"
          name="ukr"
          label="ukrainian"
          variant="outlined"
          onChange={this.handleChange}
          value={this.state.ukr}
        />
        <TextField
          id="ukrainian"
          name="eng"
          label="english"
          variant="outlined"
          onChange={this.handleChange}
          value={this.state.eng}
        />

        <Button type="submit" variant="contained">
          Add
        </Button>
      </FormWrapper>
    );
  }
}

export default Form;
