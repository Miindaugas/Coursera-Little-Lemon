import styles from './Header.module.css'
import { Navigation } from '../Navigation/Navigation'

const links = [
  { text: 'Home', to: '/' },
  { text: 'About', to: '/about' },
  { text: 'Menu', to: '/menu' },
  { text: 'Reservations', to: '/reservations' },
  { text: 'Order Online', to: '/order-online' },
  { text: 'Login', to: '/login' },
]

export const Header = () => {
  return (
    <header className={styles.header}>
      <a href="/">
        <img src="/asset/logo.svg" alt="Little Lemon Logo" />
      </a>
      <nav className={styles.navigation}>
        <Navigation />
      </nav>
    </header>
  )
}
