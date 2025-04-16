import styles from './Footer.module.css'
import { Navigation } from '../Navigation/Navigation'

export const Footer = () => {
  return (
    <section id="contact" className={styles.footer}>
      <footer>
        <div>
          <img src="/asset/restaurant.jpg" alt="Little Lemon Logo" />
        </div>
        <div>
          <h2>Little Lemon</h2>
          <nav className={styles.navigation}>
            <Navigation />
          </nav>
        </div>
        <div>
          <h2>Contact</h2>
          <div>
            Little Lemon 331 E Chicago LaSalle Street Chicago, Illinois
            60602,USA
          </div>
          <div>
            <a href="tel:+3115552538">(311) 555-2538</a>
          </div>
          <div>
            <a href="mailto:book@littlemon.com">book@littlemon.com</a>
          </div>
        </div>
        <div>
          <h2>Social Media Links</h2>
          <nav>
            <ul>
              <li>
                <a href="https://x.com/littlelemon">Twitter</a>
              </li>
              <li>
                <a href="https://fb.com/littlelemon">Facebook</a>
              </li>
            </ul>
          </nav>
        </div>
      </footer>
    </section>
  )
}
