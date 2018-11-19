import React from 'react';

import { styles } from './Card.style';

interface CardProps {
  title: string;
}

class Card extends React.Component<CardProps> {
  render() {
    const { title } = this.props;

    return (
      <div className={styles.container}>
        <h2>{title}</h2>
      </div>
    );
  }
}

export { Card }
