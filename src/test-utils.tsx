import React from 'react';
import { render as rtlRender } from 'react-testing-library';
import { createMemoryHistory } from 'history';
import { Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './store';

// Override of react-testing-library allows to create routing and redux context for any test

function render(
  ui: any,
  {
    route = '/',
    history = createMemoryHistory({ initialEntries: [route] }),
    initialState = {},
    ...renderOptions
  }: any = {},
) {
  return {
    ...rtlRender(
      <Provider store={store(initialState)}>
        <Router history={history}>
          {ui}
        </Router>
      </Provider>,
      renderOptions,
    ),
    history,
  };
}

export { render };
