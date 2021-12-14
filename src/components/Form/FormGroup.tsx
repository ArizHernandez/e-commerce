import { PropsWithChildren } from 'react';

import classes from './FormGroup.module.css';

type Props = {
  className?: string;
};

function FormGroup({ className = '', children }: PropsWithChildren<Props>) {
  return (
    <div className={`${classes['form-group']} ${className}`}>{children}</div>
  );
}

export default FormGroup;
