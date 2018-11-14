import React from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { HomePage } from './screens/HomePage';
import { AboutPage } from './screens/AboutPage';
import { initializeApp } from './actions';
import { StateModel } from './models';

const Index = () => <HomePage />;
const About = () => <AboutPage />;
const NoMatch = () => <div data-testid="no-match-screen"> No match found</div>;

interface AppProps {
  isAppLoaded: boolean;
  initializeApp: () => void;
}

class App extends React.Component<AppProps> {
  onPress = () => alert('Hello, too');

  componentDidMount() {
    this.props.initializeApp();
  }

  render() {
    const { isAppLoaded } = this.props;
    if (isAppLoaded) {
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

    return (
      <div>
        <h2>Loading...</h2>
      </div>
    );
  }
}

export default connect(
  (state: StateModel) => ({
    isAppLoaded: state.config.isAppLoaded,
  }),
  {
    initializeApp,
  },
)(App);
