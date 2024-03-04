import { useOutlet } from 'react-router-dom';
import styles from './index.module.css'

export default function DrawerAppBar() {
  const outlet = useOutlet();

  return (
    <div className={styles.wrapper}>
        {outlet}
    </div>
  );
}
