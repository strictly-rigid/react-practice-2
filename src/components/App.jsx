import { Component } from 'react';
import Form from './Form/Form.jsx';
import WordList from './WordList/WordList.jsx';

class App extends Component {
  state = {
    words: [],
  };

  handleAddWord = word => {
    this.setState(prevState => {
      return { words: [...prevState.words, word] };
    });
  };

  render() {
    return (
      <div>
        <Form addWord={this.handleAddWord} />
        <WordList words={this.state.words} />
      </div>
    );
  }
}

export default App;
