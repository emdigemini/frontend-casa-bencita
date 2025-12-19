import Calendar from "./Calendar";
import { BookingContext } from "../context/BookingContext";
import { useContext, useEffect, useState } from "react";

function BookingModal(){
  const { closeBooking } = useContext(BookingContext);
  const [ toggleCalendar, setToggleCalendar ] = useState({checkin: false, checkout: false});
  const [ toggleGuest, setToggleGuest ] = useState(false);
  const [ selectedGuest, setSelectedGuest ] = useState(null);
  const [ selectedDate, setSelectedDate ] = useState({
    checkIn: null, checkOut: null
  });

  const updateDate = (field, value) => {
    setSelectedDate(prev => ({
      ...prev, [field]: value,
    }));
  };

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

  const transformDate = (field) => {
    const date = selectedDate[field];
    console.log(date);
    if (!date) return null;
    return date.toLocaleDateString('en-US', {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    })
  }

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
                {selectedDate.checkIn 
                  ? transformDate('checkIn')
                  : <><i className="bi bi-calendar-week"></i> <p>Select Date</p></>
                }
                {toggleCalendar.checkin && <CustomCalendar updateDate={updateDate} field='checkIn' />}
                
              </div>
            </div>
            <div className="input-box">
              <label htmlFor="">Check-out Date</label>
              <div onClick={(e) => {setToggleCalendar({...toggleCalendar, checkout: !toggleCalendar.checkout})}} className="date-select__calendar">
                {selectedDate.checkOut 
                  ? transformDate('checkOut')
                  : <><i className="bi bi-calendar-week"></i> <p>Select Date</p></>
                }
                {toggleCalendar.checkout && <CustomCalendar updateDate={updateDate} field='checkOut' />}
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
                {selectedGuest 
                ?
                <><i className="bi bi-people"></i> {selectedGuest}</>  
                : 
                  <><i className="bi bi-people"></i> 1 Guest</>
                }
                
              </p>
              <i className="bi bi-chevron-down"></i>
            </div>
            {toggleGuest && 
            <GuestDropdown onSelectGuest={(guest) => 
              {
                setSelectedGuest(guest);
                setToggleGuest(false);
            }} />}
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

function CustomCalendar({ updateDate, field }){
  return (
    <div onClick={(e) => e.stopPropagation()} className="calendar-box">
      <Calendar updateDate={updateDate} field={field} />
    </div>
  )
}

function GuestDropdown({ onSelectGuest }){
  const guests = [
    {id: 0, value: 1, guest: '1 Guest'},
    {id: 1, value: 2, guest: '2 Guests'},
    {id: 2, value: 3, guest: '3 Guests'},
    {id: 3, value: 4, guest: '4 Guests'},
    {id: 4, value: 5, guest: '5 Guests'},
    {id: 5, value: 6, guest: '6 Guests'},
    {id: 6, value: 7, guest: '7 Guests'},
    {id: 7, value: 8, guest: '8 Guests'},
  ]

  return (
    <div className="dropdown-box">
      <ul>
        {guests.map(g => {
          return (
            <li onClick={() => onSelectGuest(g.guest)} key={g.id}>
              <i className="bi bi-people"></i>
              {g.guest}
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default BookingModal;