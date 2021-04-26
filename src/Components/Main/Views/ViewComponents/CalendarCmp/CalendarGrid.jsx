import React from 'react';
import { useContext } from "react";
import { DateContext } from '../../../../../context/CalendarContext';

const CalendarGrid = () => {
    const dateContext = useContext(DateContext)
    const { dates, showMonth } = dateContext;
    const hours = ["00:00", "01:00", "02:00", "03:00", "04:00", "05:00", "06:00", "07:00", "08:00", "09:00", "10:00", "11:00", "12:00", "13:00", "14:00","15:00","16:00","17:00","18:00","19:00","20:00","21:00","22:00","23:00"];
  if(showMonth){
  return (
    <ul className="calendarGrid">
      {dates.map((date) => (
        <li key={date.key} className={ date.isWeekend && !date.trailing ? "finDeSemana" : date.trailing ? "deOtroMes" : null }>{date.text}</li>
      ))}
    
    </ul>
  );
      }
      else {
        return (
          <ul className="hoursGrid">
          {hours.map((hour) => (
            <li key={hour}>{hour}</li>
          ))}
        
        </ul>
        )
      }
}



export default CalendarGrid;