import React from 'react';
import { Switch, Route, Link } from 'react-router-dom';

import { HomePage } from './screens/HomePage';
import { AboutPage } from './screens/AboutPage';

const Index = () => <HomePage />;
const About = () => <AboutPage />;
const NoMatch = () => <div data-testid="no-match-screen"> No match found</div>

class App extends React.Component {
  onPress = () => alert('Hello, too');

  render() {
    return (
        <>
          <Link to="/">Home</Link>
          <Link to="/about/">About</Link>

          <Switch>
            <Route exact={true} path="/" component={Index} />
            <Route exact={true} path="/about/" component={About} />
            <Route component={NoMatch} />
          </Switch>
        </>
    );
  }
}

export default App;
