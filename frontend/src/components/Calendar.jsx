import { useState } from "react";

export function Calendar({ updateDate, field }) {
  const [currentDate, setCurrentDate] = useState(new Date());

  const year = currentDate.getFullYear();
  const month = currentDate.getMonth();

  const firstDay = new Date(year, month, 1).getDay();
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const daysInPrevMonth = new Date(year, month, 0).getDate();

  const monthNames = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];

  const prevMonth = () => {
    setCurrentDate(new Date(year, month - 1, 1));
  };

  const nextMonth = () => {
    setCurrentDate(new Date(year, month + 1, 1));
  };

  const days = [];

  for(let i = firstDay - 1; i >= 0; i--){
    days.push(
      <div key={`prev-${i}`} className="day other-month">
        {daysInPrevMonth - i}
      </div>
    )
  }

  for(let day = 1; day <= daysInMonth; day++){
    days.push(
      <div onClick={() => {
          updateDate(field, `${year}-${month+1}-${day}`);
        }
      } key={`current-${day}`} className="day">
        {day}
      </div>
    )
  }

  const remaining = 7 - (days.length % 7);
  if (remaining < 7) {
    for (let i = 1; i <= remaining; i++) {
      days.push(
        <div key={`next-${i}`} className="day other-month">
          {i}
        </div>
      );
    }
  }

  return (
    <div className="calendar">
      <div className="header">
        <button onClick={prevMonth}>
          <i className="bi bi-chevron-left"></i>
        </button>

        <div className="month-year">
          {monthNames[month]} {year}
        </div>

        <button onClick={nextMonth}>
          <i className="bi bi-chevron-right"></i>
        </button>
      </div>

      <div className="weekdays">
        <div>S</div>
        <div>M</div>
        <div>T</div>
        <div>W</div>
        <div>T</div>
        <div>F</div>
        <div>S</div>
      </div>

      <div className="days">
        {days}
      </div>
    </div>
  );
}

export default Calendar;
