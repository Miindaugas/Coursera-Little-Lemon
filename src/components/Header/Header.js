import styles from './Header.module.css'
import { Navigation } from '../Navigation/Navigation'
import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'

export const Header = () => {
  const [open, setOpen] = useState(false)

  const location = useLocation()

  useEffect(() => {
    setOpen(false)
  }, [location])

  return (
    <header className={styles.header}>
      <a href="#home">
        <img
          src={`${process.env.PUBLIC_URL}/asset/Logo.svg`}
          alt="Little Lemon Home"
        />
      </a>
      <button className={styles.burger} onClick={(e) => setOpen(!open)}>
        <img
          src={`${process.env.PUBLIC_URL}/asset/🦆%20icon%20_hamburger%20menu.svg`}
          alt="Open Menu"
        />
      </button>
      <nav className={styles.navigation} data-open={open}>
        <Navigation />
      </nav>
    </header>
  )
}
