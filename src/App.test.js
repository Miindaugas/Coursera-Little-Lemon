import { fireEvent, render, screen } from '@testing-library/react'
import { BookingForm } from './components/Booking/BookingForm'

test('Renders the Booking heading', () => {
  render(<BookingForm />)
  const headingElement = screen.getByText('Table Reservation')
  expect(headingElement).toBeInTheDocument()
})

test('Should not have times on initialize', () => {
  const initialState = {}
  render(<BookingForm initialState={initialState} />)
  const element = screen.getByLabelText('Time:')
  expect(element.options).toHaveLength(1)
  expect(element.options[0]).toHaveValue('')
})

test('Should have time select when date selected', () => {
  const initialState = {}
  const initializeTimes = jest.fn(() => ['19:00'])
  render(
    <BookingForm
      initialState={initialState}
      initializeTimes={initializeTimes}
    />
  )
  const date = screen.getByLabelText('Date:')
  fireEvent.change(date, { target: { value: '2030-04-18' } })
  const element = screen.getByLabelText('Time:')
  const option = element.options[1]
  expect(option).toBeDefined()
  expect(option).toHaveValue('19:00')
  expect(initializeTimes).toHaveBeenCalledTimes(1)
})

test('Should write to local storage', () => {
  const initialState = {}
  const initializeTimes = () => []

  jest.spyOn(Storage.prototype, 'setItem')

  render(
    <BookingForm
      initialState={initialState}
      initializeTimes={initializeTimes}
    />
  )

  const date = screen.getByLabelText('Date:')
  fireEvent.change(date, { target: { value: '2030-04-18' } })

  expect(localStorage.setItem).toHaveBeenCalledWith(
    'Bookings',
    JSON.stringify({ date: '2030-04-18' })
  )
})

test('Should read from localStorage Bookings on load', () => {
  jest.spyOn(Storage.prototype, 'getItem')
  render(<BookingForm />)
  expect(localStorage.getItem).toHaveBeenCalledWith('Bookings')
})
