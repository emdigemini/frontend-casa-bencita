import Calendar from "./Calendar";
import { BookingContext } from "../context/BookingContext";
import { useContext, useEffect, useState } from "react";

function BookingModal(){
  const { closeBooking } = useContext(BookingContext);
  const [ toggleCalendar, setToggleCalendar ] = useState({checkin: false, checkout: false});
  const [ toggleGuest, setToggleGuest ] = useState(false);

  useEffect(() => {
    const originalOverflow = document.body.style.overflowY;

    document.documentElement.style.overflowY = 'hidden';

    return () => {
      document.documentElement.style.overflowY = originalOverflow;
    };
  }, []);

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      closeBooking();
    }
  };

  return (
    <div className="modal-overlay" onClick={handleOverlayClick}>
      <div className="booking-box">
        <div className="close-btn" onClick={closeBooking}>
          <i className="bi bi-x"></i>
        </div>
        <div className="booking-header">
          <h2>Book Your Stay</h2>
          <p>Fill in the details below to reserve your room at Casa Bencita</p>
        </div>
        <div className="booking-widget">
          <div className="booking-widget__price">
            <span>₱7,000</span> <p>for 1 night</p>
          </div>
          <div className="booking-widget__date">
            <div className="input-box">
              <label htmlFor="">Check-in Date</label>
              <div onClick={(e) => {setToggleCalendar({...toggleCalendar, checkin: !toggleCalendar.checkin})}} className="date-select__calendar">
                <i className="bi bi-calendar-week"></i>
                <p>Select date</p>
                {toggleCalendar.checkin && <CustomCalendar />}
                
              </div>
            </div>
            <div className="input-box">
              <label htmlFor="">Check-out Date</label>
              <div onClick={(e) => {setToggleCalendar({...toggleCalendar, checkout: !toggleCalendar.checkout})}} className="date-select__calendar">
                <i className="bi bi-calendar-week"></i>
                <p>Select date</p>
                {toggleCalendar.checkout && <CustomCalendar />}
              </div>
            </div>
          </div>
          <div className="note">
            <span>Note:</span> Dates shown in green are already booked. Please select available dates for your stay.
          </div>
        </div>
        <div className="input-box">
          <label htmlFor="">Number of Guests</label>
          <div className="select-guest">
            <div onClick={() => setToggleGuest(!toggleGuest)} className="select-box">
              <p>
                <i className="bi bi-people"></i>
                1 Guest
              </p>
              <i className="bi bi-chevron-down"></i>
            </div>
            {toggleGuest && <GuestDropdown />}
          </div>
        </div>
        <h3>Booking Contact</h3>
        <div className="input-box">
          <label htmlFor="fullName">Full Name</label>
          <input type="text" placeholder="Full Name" />
        </div>
        <div className="input-box">
          <label htmlFor="email">Email</label>
          <input type="email" placeholder="Email" />
        </div>
        <div className="input-box">
          <label htmlFor="phone">Phone Number</label>
          <input type="text" placeholder="+63 XXX XXX XXXX" />
        </div>
        <div className="buttons">
          <button onClick={closeBooking}>Cancel</button>
          <button>Confirm Booking</button>
        </div>
      </div>
    </div>
  )
}

function CustomCalendar(){
  return (
    <div onClick={(e) => e.stopPropagation()} className="calendar-box">
      <Calendar />
    </div>
  )
}

function GuestDropdown(){
  const guests = [
    {id: 0, icon: 'bi bi-people', guest: '1 Guest'},
    {id: 1, icon: 'bi bi-people', guest: '2 Guests'},
    {id: 2, icon: 'bi bi-people', guest: '3 Guests'},
    {id: 3, icon: 'bi bi-people', guest: '4 Guests'},
    {id: 4, icon: 'bi bi-people', guest: '5 Guests'},
    {id: 5, icon: 'bi bi-people', guest: '6 Guests'},
    {id: 6, icon: 'bi bi-people', guest: '7 Guests'},
    {id: 7, icon: 'bi bi-people', guest: '8 Guests'},
  ]

  return (
    <div className="dropdown-box">
      <ul>
        {guests.map(g => {
          return (
            <li key={g.id}>
              <i className={g.icon}></i>
              {g.guest}
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default BookingModal;