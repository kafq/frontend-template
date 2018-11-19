import React from 'react';

import { ProjectItem } from './ProjectItem';
import { Card } from '../../common/components';

class HomePage extends React.Component {
  render() {
    return (
      <div data-testid="home-screen">
        <h1>Home Page</h1>
        <ProjectItem name="Project 1"/>
        <Card title="Card title 1"/>
      </div>
    )
  }
}

export { HomePage }
