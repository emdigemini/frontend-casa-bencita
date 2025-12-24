import Calendar from "./Calendar";
import { BookingContext } from "../context/BookingContext";
import { useContext, useEffect, useRef, useState } from "react";
import { calculatePrice } from "../utils/money";

export function BookingModal(){
  const { closeBooking, updateBookingData, successSubmit, setSuccessSubmit } = useContext(BookingContext);
  const [ toggleCalendar, setToggleCalendar ] = useState({checkin: false, checkout: false});
  const [ toggleGuest, setToggleGuest ] = useState(false);
  const [ selectedGuest, setSelectedGuest ] = useState({guest: 1, text: '1 Guest'});
  const [ selectedDate, setSelectedDate ] = useState({
    checkIn: null, checkOut: null
  });
  const [ totalPrice, setTotalPrice ] = useState(0);

  const calendarDropdown = useRef(null);
  const guestDropdown = useRef(null);
  const fullNameRef = useRef(null);
  const emailRef = useRef(null);
  const phoneRef = useRef(null);
  const confirmRef = useRef(null);  

  useEffect(() => {
    const originalOverflow = document.body.style.overflowY;
    document.documentElement.style.overflowY = 'hidden';
    const handleDropdown = (e) => {
      if(!calendarDropdown.current.contains(e.target)){
        setToggleCalendar({ checkin: false, checkout: false });
      } if(!guestDropdown.current.contains(e.target)){
         setToggleGuest(false);
      }
        return;
    }
    window.addEventListener('click', handleDropdown);

    return () => {
      document.documentElement.style.overflowY = originalOverflow;
      window.removeEventListener('click', handleDropdown);
    };
  }, []);

  useEffect(() => {
    const nights = calculateNights();
    const totalPrice = calculatePrice(7000, nights);
    setTotalPrice(totalPrice);
  }, [selectedDate]);

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      closeBooking();
    }
  };

  const updateDate = (field, value) => {
    setSelectedDate(prev => ({
      ...prev, [field]: value,
    }));
  };

  const transformDate = (field) => {
    const date = selectedDate[field];
    if (!date) return null;
    return new Date(date).toLocaleDateString('en-US', {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    });
  };

  function calculateNights(){
    if (!selectedDate.checkIn || !selectedDate.checkOut) return 0;

    const [y1, m1, d1] = selectedDate.checkIn.split('-').map(Number);
    const [y2, m2, d2] = selectedDate.checkOut.split('-').map(Number);

    const checkInDate = new Date(y1, m1 - 1, d1);
    const checkOutDate = new Date(y2, m2 - 1, d2);

    const diffTime = checkOutDate - checkInDate;
    const diffDays = diffTime / (1000 * 60 * 60 * 24);

    return diffDays;
  };

  const confirmBooking = () => {
    let paid = false;
    let price = totalPrice;
    let checkIn = new Date(selectedDate.checkIn);
    let checkOut = new Date(selectedDate.checkOut);
    let guests = selectedGuest.guest;
    let fullName = fullNameRef.current.value;
    let email = emailRef.current.value;
    let phone = phoneRef.current.value;
      if(!checkIn || !checkOut || !fullName || !email || !phone){
        alert('Please fill in all the required fields.');
        return;
      }

      confirmRef.current.classList.add('submitting');
      confirmRef.current.innerText = 'Submitting...';

      setTimeout(() => { 
        updateBookingData({paid, price, checkIn, checkOut, guests, fullName, email, phone});
        setSelectedDate({checkIn: null, checkOut: null});
        setSelectedGuest({guest: 1, text: '1 Guest'});
        fullNameRef.current.value = '';
        emailRef.current.value = '';
        phoneRef.current.value = '';
        confirmRef.current.classList.remove('submitting');
        confirmRef.current.innerText = 'Confirm Booking';
        setSuccessSubmit(true);
       }, 1200);
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
            {selectedDate.checkIn && selectedDate.checkOut && 
              <>
                <span>₱{totalPrice}</span> 
                <p>for {calculateNights()} night{calculateNights() > 1 ? 's' : ''}</p>
              </>
            }
          </div>
          <div ref={calendarDropdown} className="booking-widget__date">
            <div className="input-box">
              <label htmlFor="">Check-in Date</label>
              <div onClick={(e) => {setToggleCalendar({...toggleCalendar, checkin: !toggleCalendar.checkin})}} className="date-select__calendar">
                {selectedDate.checkIn 
                  ? transformDate('checkIn')
                  : <><i className="bi bi-calendar-week"></i> <p>Select Date</p></>
                }
                {toggleCalendar.checkin && <CustomCalendar updateDate={updateDate} checkIn={selectedDate.checkIn} field='checkIn' />}
                
              </div>
            </div>
            <div className="input-box">
              <label htmlFor="">Check-out Date</label>
              <div onClick={(e) => {setToggleCalendar({...toggleCalendar, checkout: !toggleCalendar.checkout})}} className="date-select__calendar">
                {selectedDate.checkOut 
                  ? transformDate('checkOut')
                  : <><i className="bi bi-calendar-week"></i> <p>Select Date</p></>
                }
                {toggleCalendar.checkout && <CustomCalendar updateDate={updateDate} checkIn={selectedDate.checkIn} field='checkOut' />}
              </div>
            </div>
          </div>
          <p className="note">
            <b>Note:</b> Dates shown in green are already booked. Please select available dates for your stay.
          </p>
        </div>
        <div className="input-box">
          <label htmlFor="">Number of Guests</label>
          <div ref={guestDropdown} className="select-guest">
            <div onClick={() => setToggleGuest(!toggleGuest)} className="select-box">
              <p>
                {selectedGuest 
                ?
                <><i className="bi bi-people"></i> {selectedGuest.text}</>  
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
          <p className="house-rule">A maximum of <b>8 guests</b> is allowed. If you have any pets, please inform the owner.</p>
        </div>
        <h3>Booking Contact</h3>
        <div className="input-box">
          <label htmlFor="fullName">Full Name</label>
          <input ref={fullNameRef} id="fullName" type="text" placeholder="Full Name" />
        </div>
        <div className="input-box">
          <label htmlFor="email0">Email</label>
          <input ref={emailRef} id="email0" type="email" placeholder="Email" />
        </div>
        <div className="input-box">
          <label htmlFor="phone0">Phone Number</label>
          <input ref={phoneRef} id="phone0" type="text" placeholder="+63 XXX XXX XXXX" />
        </div>
        <div className="buttons">
          <button onClick={closeBooking}>Cancel</button>
          <button ref={confirmRef} onClick={confirmBooking}>Confirm Booking</button>
        </div>
      </div>
    </div>
  )
}

export function SubmitSuccessful(){
  const { successSubmit, setSuccessSubmit } = useContext(BookingContext);
  const submittedRef = useRef(null);

  useEffect(() => {
    if(successSubmit){
      const timer = setTimeout(() => {
        submittedRef.current.classList.add('close');
        submittedRef.current.addEventListener('animationend', () => {
          setSuccessSubmit(false);
          submittedRef.current.classList.remove('close');
        });
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [successSubmit]);

  return (
    <div ref={submittedRef} className="submit-successful">
      <i className="bi bi-check-circle-fill"></i>
      <p>Booking request submitted! We'll confirm your reservation shortly. </p>
    </div>
  )
}

function CustomCalendar({ updateDate, checkIn, field }){
  return (
    <div onClick={(e) => e.stopPropagation()} className="calendar-box">
      <Calendar updateDate={updateDate} checkIn={checkIn} field={field} />
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
            <li onClick={() => onSelectGuest({guest: g.value, text: g.guest})} key={g.id}>
              <i className="bi bi-people"></i>
              {g.guest}
            </li>
          )
        })}
      </ul>
    </div>
  )
}
