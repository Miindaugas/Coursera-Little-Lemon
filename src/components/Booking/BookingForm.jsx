import styles from './Booking.module.css'
import { Button } from '../Button/Button'
import { useEffect, useReducer, useState } from 'react'

function formReducer(state, action) {
  switch (action.type) {
    case 'UPDATE_FIELD':
      const newState = {
        ...state,
        [action.field]: action.value,
      }
      const { times, ...rest } = newState
      localStorage.setItem('Bookings', JSON.stringify(rest))
      return newState
    default:
      return state
  }
}

export const BookingForm = (props) => {
  const { initialState = {}, initializeTimes = (_) => {}, onSubmit } = props

  const [formState, updateFormState] = useReducer(formReducer, initialState)
  const [error, updateError] = useState(null)

  const handleChange = (field) => (e) => {
    updateError(null)
    updateFormState({
      type: 'UPDATE_FIELD',
      field,
      value: e.target.value,
    })
  }

  const handleTimeChange = (date) => {
    updateFormState({
      type: 'UPDATE_FIELD',
      field: 'times',
      value: initializeTimes(date),
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const { times, ...rest } = formState

    const isValidDate = (date) => {
      const inputDate = new Date(date)
      const today = new Date()
      today.setHours(0, 0, 0, 0)
      return inputDate >= today
    }

    const isValidGuests = (number) => {
      const guests = parseInt(number, 10)
      return Number.isInteger(guests) && guests >= 1 && guests <= 10
    }

    function isValidTime(time) {
      const [, minute] = time.split(':').map(Number)
      return minute === 0 || minute === 30
    }

    const isValidOccasion = (value) => {
      const allowed = ['birthday', 'anniversary']
      return allowed.includes(value)
    }

    if (!isValidDate(rest.date)) {
      updateError(`Invalid date: ${rest.date}`)
      return
    }

    if (!isValidTime(rest.time)) {
      updateError(`Invalid time: ${rest.time}`)
      return
    }

    if (!isValidGuests(rest.guests)) {
      updateError(`Invalid guests: ${rest.guests}`)
      return
    }

    if (!isValidOccasion(rest.occasion)) {
      updateError(`Invalid occasion: ${rest.occasion}`)
      return
    }

    onSubmit({ ...rest })
  }

  useEffect(() => {
    if (formState.date) {
      handleTimeChange(formState.date)
    }
  }, [formState.date, handleTimeChange])

  return (
    <>
      <p>Table Reservation</p>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="date">Date:</label>
          <input
            id="date"
            type="date"
            min={new Date().toISOString().split('T')[0]}
            value={formState.date || ''}
            onChange={handleChange('date')}
            required
          />
        </div>
        <div>
          <label htmlFor="time">Time:</label>
          <select
            id="time"
            value={formState.time || ''}
            onChange={handleChange('time')}
            required
          >
            <option value="">Select Time</option>
            {formState.times?.map((time) => (
              <option key={time} value={time}>
                {time}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="guests">Number of guests:</label>
          <input
            value={formState.guests || ''}
            onChange={handleChange('guests')}
            type="number"
            placeholder="Maximum geusts 10"
            min="1"
            max="10"
            id="guests"
            required
          />
        </div>
        <div>
          <label htmlFor="occasion">Occasion:</label>
          <select
            id="occasion"
            value={formState.occasion || ''}
            onChange={handleChange('occasion')}
            required
          >
            <option value="">Select Occasion</option>
            <option value="birthday">Birthday</option>
            <option value="anniversary">Anniversary</option>
          </select>
        </div>
        {error && <span className={styles.error}>{error}</span>}
        <Button type="submit">Make Reservation</Button>
      </form>
    </>
  )
}
