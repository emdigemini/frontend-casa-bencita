import 'bootstrap-icons/font/bootstrap-icons.css'
import { useContext } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Amenities from './components/Amenities'
import Gallery from './components/Gallery'
import Reviews from './components/Reviews'
import Location from './components/Location'
import Contact from './components/Contact'
import Footer from './components/Footer'
import { BookingModal } from './components/BookingModal'
import { BookingContext } from './context/BookingContext'

function App() {
  const { toggleBooking } = useContext(BookingContext);

  return (
    <>
      <Header />
      <Hero />
      <About />
      <Amenities />
      <Gallery />
      <Reviews />
      <Location />
      <Contact />
      <Footer />
      {toggleBooking && <BookingModal />}
    </>
  )
}

export default App
