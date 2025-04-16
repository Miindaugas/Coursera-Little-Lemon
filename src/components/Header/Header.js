import styles from './Header.module.css'
import { Navigation } from '../Navigation/Navigation'

export const Header = () => {
  return (
    <header className={styles.header}>
      <a href="#home">
        <img src="/asset/logo.svg" alt="Little Lemon Home" />
      </a>
      <nav className={styles.navigation}>
        <Navigation />
      </nav>
    </header>
  )
}
