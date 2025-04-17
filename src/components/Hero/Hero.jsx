import styles from './Hero.module.css'
import { Button } from '../Button/Button'
import { useNavigate } from 'react-router-dom'

export const Hero = () => {
  const navigate = useNavigate()
  return (
    <section id="home" className={styles.hero}>
      <div>
        <h1>Little Lemon</h1>
        <h2>Chicago</h2>
        <p>
          We are a family owned Mediterranean restaurant, focused on traditional
          recipes served with a modern twist.
        </p>
        <Button onClick={() => navigate('booking')}>Book a Table</Button>
      </div>
      <div>
        <img
          src={`${process.env.PUBLIC_URL}/asset/restauranfood.jpg`}
          alt="Little Lemon food"
        />
      </div>
    </section>
  )
}
