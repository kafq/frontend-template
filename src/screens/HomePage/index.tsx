import React from 'react';

import { ProjectItem } from './ProjectItem';

class HomePage extends React.Component {
  render() {
    return (
      <div>
        <h1>Home Page</h1>
        <ProjectItem name="Project 1"/>
      </div>
    )
  }
}

export { HomePage }
