import styles from './Footer.module.css'
import { Navigation } from '../Navigation/Navigation'

export const Footer = () => {
  return (
    <footer>
      <div>
        <img src="/asset/logo.svg" alt="Little Lemon Logo" />
      </div>
      <div>
        <nav className={styles.navigation}>
          <Navigation />
        </nav>
      </div>
      <div>
        <h2>Contact</h2>
      </div>
      <div>
        <h2>Social Media Links</h2>
      </div>
    </footer>
  )
}
