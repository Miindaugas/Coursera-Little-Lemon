import styles from './Booking.module.css'
import { Button } from '../Button/Button'
import { useNavigate } from 'react-router-dom'
import { BookingForm } from './BookingForm'

export const Booking = () => {
  const navigate = useNavigate()

  const initialState = {
    date: null,
    time: null,
    guests: null,
    occasion: null,
  }

  const initializeTimes = (date) => {
    return window.fetchAPI(new Date(date))
  }

  const onSubmit = (data) => {
    if (window.submitAPI(data)) {
      navigate('/confirmed')
    }
  }

  return (
    <main className={styles.main}>
      <nav>
        <Button onClick={() => navigate('/')}>
          <img src="/asset/home%20icon.svg" alt="Home" />
          <span>Home</span>
        </Button>
      </nav>
      <h1>Little Lemon</h1>
      <BookingForm
        initialState={initialState}
        initializeTimes={initializeTimes}
        onSubmit={onSubmit}
      />
    </main>
  )
}
