import { PropsWithChildren } from 'react';

import classes from './Card.module.css';

type Props = {
  centered?: boolean;
  shadow?: boolean;
};

const defaultProps: Props = {
  centered: false,
  shadow: false,
};

function Card({ children, centered, shadow }: PropsWithChildren<Props>) {
  let cardClasses = classes.card;

  if (centered) {
    cardClasses = `${cardClasses} ${classes.center}`;
  }

  if (shadow) {
    cardClasses = `${cardClasses} ${classes.shadow}`;
  }

  return <div className={cardClasses}>{children}</div>;
}

Card.defaultProps = defaultProps;

export default Card;
