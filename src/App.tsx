import React, { Component } from 'react';
import { Button } from './common/components';

class App extends Component {
  onPress = () => alert('Hello, too');

  render() {
    return (
      <div className="App">
        Hello <Button title="World" onClick={this.onPress} />
      </div>
    );
  }
}

export default App;
