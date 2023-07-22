import { Component } from 'react';
import Form from './Form/Form.jsx';
import WordList from './WordList/WordList.jsx';
import Filter from './Filter/Filter';

import Container from '@mui/material/Container';
import AppBar from './AppBar/AppBar';

class App extends Component {
  state = {
    words: [],
    filter: '',
  };

  handleAddWord = word => {
    this.setState(prevState => {
      return { words: [...prevState.words, word] };
    });
  };

  handleChangeFilter = ({ target: { value } }) => {
    this.setState({ filter: value });
  };

  wordsFilter = words => {
    const normalizedFilter = this.state.filter.toLowerCase().trim();

    return words.filter(word => {
      return (
        word.eng.toLowerCase().includes(normalizedFilter) ||
        word.ukr.toLowerCase().includes(normalizedFilter)
      );
    });
  };

  handleDeleteWord = id => {
    this.setState(prevState => {
      return { words: prevState.words.filter(word => word.id !== id) };
    });
  };

  render() {
    const { words, filter } = this.state;

    return (
      <>
        <AppBar />
        <Container maxWidth="xl">
          <Form addWord={this.handleAddWord} />
          <Filter onChange={this.handleChangeFilter} filter={filter} />
          <WordList
            words={this.wordsFilter(words)}
            onDelete={this.handleDeleteWord}
          />
        </Container>
      </>
    );
  }
}

export default App;
