import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Header } from './components/Header/Header'
import { Hero } from './components/Hero/Hero'
import { Specials } from './components/Specials/Specials'
import { Testimonials } from './components/Testimonials/Testimonials'
import { Footer } from './components/Footer/Footer'
import { About } from './components/About/About'
import { Booking } from './components/Booking/Booking'

function App() {
  const initialState = {
    date: null,
    time: null,
    guests: null,
    occasion: null,
  }

  const initializeTimes = (date) => {
    return window.fetchAPI(new Date(date))
  }

  const onSubmit = (form) => {
    console.log(form)
  }

  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Header />
                <Hero />
                <Specials />
                <Testimonials />
                <About />
                <Footer />
              </>
            }
          />
          <Route
            path="/booking"
            element={
              <Booking
                initialState={initialState}
                initializeTimes={initializeTimes}
                onSubmit={onSubmit}
              />
            }
          />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
