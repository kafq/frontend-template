import React from 'react';
import { fireEvent } from 'react-testing-library';

import { renderWithHistory as render } from '../../test-utils';
import App from '../../App';

describe('App navigates correctly', () => {
  it('renders correctly', () => {
    const { getByTestId, getByText, queryByTestId } = render(<App />);

    expect(getByTestId('home-screen')).toBeInTheDocument();
    expect(queryByTestId('about-screen')).not.toBeInTheDocument();
    fireEvent.click(getByText(/about/i));
    expect(queryByTestId('home-screen')).not.toBeInTheDocument();
    expect(getByTestId('about-screen')).toBeInTheDocument();
  });

  it('display no match page on invalid route', () => {
    const { queryByTestId } = render(<App />, {
      route: '/not-matching-route/',
    });
    expect(queryByTestId('no-match-screen')).toBeInTheDocument();
  });
});
