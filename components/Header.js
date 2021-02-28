import styles from '../styles/Home.module.css'
import Image from 'next/image'
import {FiShoppingCart} from 'react-icons/fi'

const Header = () => {
  return <div className={styles.header}>
          <div className={styles.brand}>
            <a href="/">
              <Image className={styles.title} src="/logo.png" width={300} height={65} />
            </a>
          </div>
          <div className={styles.nav}>
            <a href="/"> <FiShoppingCart /> Principais produtos</a>
            <a href="/about">Sobre nós</a>
            <a href="/legal">Registros</a>
          </div>
  </div>
}
export default Header