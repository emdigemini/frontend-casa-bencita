import Calendar from "./Calendar";
import { BookingContext } from "../context/BookingContext";
import { useContext, useEffect } from "react";

function BookingModal(){
  const { closeBooking } = useContext(BookingContext);

  useEffect(() => {
    document.body.classList.add('no-scroll');

    return () => {
      document.body.classList.remove('no-scroll');
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
        <div className="select-date-box">
          <div className="price-box">
            <span>₱7,000</span> for 1 night
          </div>
          <div className="select-date">
            <div className="input-box">
              <label htmlFor="">Check-in Date</label>
              <CustomCalendar />
            </div>
            <div className="input-box">
              <label htmlFor="">Check-out Date</label>
              <CustomCalendar />
            </div>
          </div>
          <div className="note">
            <span>Note:</span> Dates shown in green are already booked. Please select available dates for your stay.
          </div>
        </div>
        <div className="input-box">
          <label htmlFor="">Number of Guests</label>
          <CustomDropdown />
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
    <div className="custom-date">
      <div className="custom-calendar">
        <Calendar />
      </div>
    </div>
  )
}

function CustomDropdown(){
  const guests = [
    {id: 0, icon: '<i className="bi bi-people"></i>', guest: '1 Guest'},
    {id: 1, icon: '<i className="bi bi-people"></i>', guest: '2 Guests'},
    {id: 2, icon: '<i className="bi bi-people"></i>', guest: '3 Guests'},
    {id: 3, icon: '<i className="bi bi-people"></i>', guest: '4 Guests'},
    {id: 4, icon: '<i className="bi bi-people"></i>', guest: '5 Guests'},
    {id: 5, icon: '<i className="bi bi-people"></i>', guest: '6 Guests'},
    {id: 6, icon: '<i className="bi bi-people"></i>', guest: '7 Guests'},
    {id: 7, icon: '<i className="bi bi-people"></i>', guest: '8 Guests'},
  ]

  return (
    <div className="custom-dropdown">
      <div className="select-box">
        <p>
          <i className="bi bi-people"></i>
          1 Guest
        </p>
        <i className="bi bi-chevron-down"></i>
      </div>
      <div className="dropdown-box">
        <ul>
          {guests.map(g => {
            return (
              <li key={g.id}>
                {g.icon}
                {g.guest}
              </li>
            )
          })}
        </ul>
      </div>
    </div>
  )
}

export default BookingModal;