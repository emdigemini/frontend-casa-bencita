import { createContext, useState } from "react";

export const BookingContext = createContext();

export function BookingProvider({ children }){
  const [ toggleBooking, setToggleBooking ] = useState(false);
  const [ successSubmit, setSuccessSubmit ] = useState(false);
  const [ bookingData, setBookingData ] = useState(
    [
      {
        id: 1,
        paid: false,
        price: 21000,
        checkIn: '2025-12-31',
        checkOut: '2026-01-01',
        guests: 6,
        fullName: 'Emdi Gemini',
        email: 'emdigemini@gmail.com',
        phone: '09935829341',
      }, {
        id: 2,
        paid: true,
        price: 21000,
        checkIn: '2026-01-15',
        checkOut: '2026-01-18',
        guests: 4,
        fullName: 'Andrew Tate',
        email: 'andrewtate@gmail.com',
        phone: '09935829342',
      }, {
        id: 3,
        paid: false,
        price: 7000,
        checkIn: '2026-02-03',
        checkOut: '2026-02-04',
        guests: 7,
        fullName: 'Boss Killa',
        email: 'bosskilla@gmail.com',
        phone: '09935829343',
      }, {
        id: 4,
        paid: true,
        price: 28000,
        checkIn: '2026-02-08',
        checkOut: '2026-02-12',
        guests: 8,
        fullName: 'Arthur Nery',
        email: 'neryarthur@gmail.com',
        phone: '09935829344',
      },
    ]
  )

  const openBooking = () => setToggleBooking(true);
  const closeBooking = () => setToggleBooking(false);
  const updateBookingData = (value) => {
    setBookingData(prev => [...prev, {...value, id: prev.length ? prev.at(-1).id + 1 : 1 }]);
  }

  return (
    <BookingContext.Provider value={{
       toggleBooking, openBooking, closeBooking,
       bookingData, updateBookingData, successSubmit, setSuccessSubmit
    }}>
      {children}
    </BookingContext.Provider>
  )
}
