import styles from './ConfirmedBooking.module.css'
import { Button } from '../Button/Button'
import { useNavigate } from 'react-router-dom'
import { useMemo } from 'react'

export const ConfirmedBooking = () => {
  const navigate = useNavigate()

  const booking = useMemo(() => {
    try {
      return JSON.parse(localStorage.getItem('Bookings'))
    } catch (e) {
      console.error('Could not parse bookings', e)
    }
  }, [])

  return (
    <main className={styles.main}>
      <h1>Little Lemon</h1>
      <p>Table has been booked.</p>
      {booking && (
        <ul>
          {Object.entries(booking).map(([key, value]) => (
            <li key={key}>
              <strong>{key}:</strong> {value}
            </li>
          ))}
        </ul>
      )}
      <Button onClick={() => navigate('/')}>Go Home</Button>
    </main>
  )
}
