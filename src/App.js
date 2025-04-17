import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Header } from './components/Header/Header'
import { Hero } from './components/Hero/Hero'
import { Specials } from './components/Specials/Specials'
import { Testimonials } from './components/Testimonials/Testimonials'
import { Footer } from './components/Footer/Footer'
import { About } from './components/About/About'
import { Booking } from './components/Booking/Booking'
import { ConfirmedBooking } from './components/ConfirmedBooking/ConfirmedBooking'

function App() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <div className="App">
        <Routes>
          <Route path="/confirmed" element={<ConfirmedBooking />} />
          <Route path="/booking" element={<Booking />} />
          <Route
            path="*"
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
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
