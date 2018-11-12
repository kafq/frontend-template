import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import { HomePage } from './screens/HomePage';

const Index = () => <HomePage />;
const About = () => <About />;

class App extends Component {
  onPress = () => alert('Hello, too');

  render() {
    return (
      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about/">About</Link>
              </li>
            </ul>
          </nav>
          <Route path="/" exact={true} component={Index} />
          <Route path="/about/" component={About} />
        </div>
      </Router>
    );
  }
}

export default App;
