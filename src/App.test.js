import { fireEvent, render, screen } from '@testing-library/react'
import { BookingForm } from './components/Booking/BookingForm'
import { ConfirmedBooking } from './components/ConfirmedBooking/ConfirmedBooking'

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
  render(<ConfirmedBooking />)
  expect(localStorage.getItem).toHaveBeenCalledWith('Bookings')
})

test('Should have date validation', () => {
  const initialState = {}
  const initializeTimes = () => []
  render(
    <BookingForm
      initialState={initialState}
      initializeTimes={initializeTimes}
    />
  )
  const date = screen.getByLabelText('Date:')
  fireEvent.change(date, { target: { value: '2010-04-18' } })
  const submit = screen.getByRole('button', { name: 'Make Reservation' })
  fireEvent.click(submit)
  const error = screen.getByText('Invalid date: 2010-04-18')
  expect(error).toBeInTheDocument()
})

test('Should have time validation', () => {
  const initialState = {}
  const initializeTimes = () => ['19:33']
  render(
    <BookingForm
      initialState={initialState}
      initializeTimes={initializeTimes}
    />
  )
  const date = screen.getByLabelText('Date:')
  fireEvent.change(date, { target: { value: '2030-04-18' } })
  const time = screen.getByLabelText('Time:')
  fireEvent.change(time, { target: { value: '19:33' } })
  const submit = screen.getByRole('button', { name: 'Make Reservation' })
  fireEvent.click(submit)
  const error = screen.getByText('Invalid time: 19:33')
  expect(error).toBeInTheDocument()
})

test('Should be able submit when valid data', () => {
  const initialState = {}
  const initializeTimes = () => ['19:00']
  const onSubmit = jest.fn()
  render(
    <BookingForm
      initialState={initialState}
      initializeTimes={initializeTimes}
      onSubmit={onSubmit}
    />
  )
  const date = screen.getByLabelText('Date:')
  fireEvent.change(date, { target: { value: '2030-04-18' } })
  const time = screen.getByLabelText('Time:')
  fireEvent.change(time, { target: { value: '19:00' } })
  const guests = screen.getByLabelText('Number of guests:')
  fireEvent.change(guests, { target: { value: '1' } })
  const occasion = screen.getByLabelText('Occasion:')
  fireEvent.change(occasion, { target: { value: 'birthday' } })
  const submit = screen.getByRole('button', { name: 'Make Reservation' })
  fireEvent.click(submit)

  expect(onSubmit).toHaveBeenCalled()
})
