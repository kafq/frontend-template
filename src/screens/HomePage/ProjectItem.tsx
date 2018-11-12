import React from 'react'

interface ProjectItemProps {
  name: string;
}

class ProjectItem extends React.Component<ProjectItemProps> {
  render() {
    return (
      <div>
        <h2>{this.props.name}</h2>
      </div>
    )
  }
}

export { ProjectItem }
