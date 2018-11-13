import React from 'react';
import { render as rtlRender } from 'react-testing-library';
import { createMemoryHistory } from 'history';
import { Router } from 'react-router-dom';

function renderWithHistory(
  ui: any,
  {
    route = '/', history = createMemoryHistory({ initialEntries: [route] }), ...options
  }: any = {},
) {
  return {
    ...rtlRender(<Router history={history}>{ui}</Router>, options),
    history,
  };
}

export { renderWithHistory }
