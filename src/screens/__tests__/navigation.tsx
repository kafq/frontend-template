import React from 'react';
import { fireEvent } from 'react-testing-library';

import { render } from '../../test-utils';
import App from '../../App';

describe('App navigates correctly', () => {

  it('renders correctly', () => {
    const { getByTestId, getByText, queryByTestId } = render(<App />, {
      initialState: { config: { isAppLoaded: true } },
    });

    expect(getByTestId('home-screen')).toBeInTheDocument();
    expect(queryByTestId('about-screen')).not.toBeInTheDocument();
    fireEvent.click(getByText(/about/i));
    expect(queryByTestId('home-screen')).not.toBeInTheDocument();
    expect(getByTestId('about-screen')).toBeInTheDocument();
  });

  it('display no match page on invalid route', () => {
    const { getByTestId } = render(<App />, {
      route: '/not-matching-route/',
      initialState: { config: { isAppLoaded: true }},
    });

    expect(getByTestId('no-match-screen')).toBeInTheDocument();
  });

  it('display loading screen', () => {
    const { getByTestId } = render(<App />, {
      initialState: { config: { isAppLoaded: false }},
    });

    expect(getByTestId('loading-screen')).toBeInTheDocument();
  });
});
