import React from 'react';

import { styles } from './Button.style';

interface ButtonProps {
  title: string;
  onClick: () => void;
}

const Button: React.SFC<ButtonProps> = props => (
  <button onClick={props.onClick} className={styles.button}>
    {props.title}
  </button>
);

export { Button };
