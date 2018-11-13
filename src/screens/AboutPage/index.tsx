import React from 'react';
import { css } from 'emotion';

const styles = {
  container: css({
    display: 'flex',
  }),
}
class AboutPage extends React.Component {
  render() {
    return (
      <div data-testid="about-screen" className={styles.container}>
        <h1>About Page</h1>
      </div>
    )
  }
}

export { AboutPage }
