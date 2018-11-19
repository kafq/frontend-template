import React from 'react';

import { render } from '../../../test-utils';
import { Card } from '../';

it('renders Card component correctly', () => {
  const { container } = render(<Card title="Hello World"/>)
  expect(container.firstChild).toMatchSnapshot()
})