import { createContext, useState } from "react";

export const BookingContext = createContext();

export function BookingProvider({ children }){
  const [ toggleBooking, setToggleBooking ] = useState(false);

  const openBooking = () => setToggleBooking(true);
  const closeBooking = () => setToggleBooking(false);

  return (
    <BookingContext.Provider value={{ toggleBooking, openBooking, closeBooking }}>
      {children}
    </BookingContext.Provider>
  )
}