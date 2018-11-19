import React from 'react';
import {
  Switch,
  Route,
  NavLink,
  withRouter,
} from 'react-router-dom';
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
  componentDidMount() {
    // Potentially fetches app configuration and data from backend
    this.props.initializeApp();
  }

  render() {
    const { isAppLoaded } = this.props;

    if (isAppLoaded) {
      return (
        <>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/about/">About</NavLink>

          <Switch>
            <Route exact={true} path="/" component={Index} />
            <Route path="/about/" component={About} />
            <Route component={NoMatch} />
          </Switch>
        </>
      );
    }

    return (
      <div data-testid="loading-screen">
        <h2>Loading...</h2>
      </div>
    );
  }
}

// used withRouter to pass location to switch and update screens

export default withRouter<any>(connect(
  (state: StateModel) => ({
    isAppLoaded: state.config.isAppLoaded,
  }),
  {
    initializeApp,
  },
)(App));
