import Calendar from "./Calendar";

function Contact(){
  return (
    <div id="contact">
      <div className="header">
          <h1>Contact Us</h1>
          <p>Have questions? We'd love to hear from you. Send us a message!</p>
      </div>
      <div className="row-card">
        <SendMessage />
        <CheckCalendar />
      </div>
    </div>
  ) 
}

function SendMessage(){
  return (
    <div className="send-message">
      <h2>Send a Message</h2>
      <div className="input-box">
        <label htmlFor="name">Full Name *</label>
        <input id="name" type="text" />
      </div>
      <div className="input-box">
        <label htmlFor="email">Email *</label>
        <input id="email" type="text" />
      </div>
      <div className="input-box">
        <label htmlFor="phone">Phone Number *</label>
        <input id="phone" type="text" />
      </div>
      <div className="input-box">
        <label htmlFor="">Message *</label>
        <div contentEditable
          className="textbox"></div>
      </div>
      <button>Send Message</button>
      <hr />
      <p>Contact Us Directly</p>
      <div className="contact-us">
        <i className="bi bi-telephone"></i>
        +63 912 345 6789
      </div>
      <div className="contact-us">
        <i className="bi bi-envelope"></i>
        casabencita@gmail.com
      </div>
      <div className="contact-us">
        <i className="bi bi-geo-alt"></i>
        G832+957, Tanay, Rizal
      </div>
    </div>
  )
}

function CheckCalendar(){
  return (
    <div className="check-avail">
      <h2>Check Availability</h2>
      <h3>Check-in Date</h3>
      <div className="calendar-box">
        <Calendar />
      </div>
      <h3>Check-out Date</h3>
      <div className="calendar-box">
        <Calendar />
      </div>
      <div className="note">
        <span>Note:</span> Dates shown in green are already booked. Please select available dates for your stay.
      </div>
    </div>
  )
}

export default Contact;