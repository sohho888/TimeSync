import styles from './Setevent.module.scss';
import { ReactNode, PropsWithChildren } from 'react';

interface SetEventProps {
  header: ReactNode;
  footer: ReactNode;
}

export default function Setevent(props: PropsWithChildren<SetEventProps>) {
  return (
    <div className={styles.wrapper}>
      <div className={styles.header}>{props.header} </div>
      {props.children}
      {props.footer}
    </div>
  );
}
