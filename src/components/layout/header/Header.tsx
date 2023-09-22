
import{Image} from '@chakra-ui/react'
import { Account } from './account';
import styles from './Header.module.scss';

type Props = {
  isAccountVisible: boolean;
};

function Header({ isAccountVisible }: Props) {
  return (
    <header className={styles.header}>
      <h1>
        <Image src="https://mercarancho.com/Guardian.png" width='21%' alt="Logo" className={styles.logo} />
      </h1>
      {isAccountVisible && <Account />}
    </header>
  );
}

export { Header };
