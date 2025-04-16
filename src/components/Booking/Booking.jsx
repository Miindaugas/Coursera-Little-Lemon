import styles from './Booking.module.css'
import { Button } from '../Button/Button'
import { useNavigate } from 'react-router-dom'
import { BookingForm } from './BookingForm'

export const Booking = (props) => {
  const navigate = useNavigate()

  return (
    <main className={styles.main}>
      <nav>
        <Button onClick={() => navigate('/')}>
          <img src="/asset/home%20icon.svg" alt="Home" />
          <span>Home</span>
        </Button>
      </nav>
      <h1>Little Lemon</h1>
      <BookingForm {...props} />
    </main>
  )
}
