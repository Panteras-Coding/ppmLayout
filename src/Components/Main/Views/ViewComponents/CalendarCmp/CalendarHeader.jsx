import React, { useContext, useState } from 'react';
import { DateContext } from '../../../../../context/CalendarContext';

const CalendarHeader = ({ weekDays }) => {
  const dateContext = useContext(DateContext);
  const { month, saveMonth, year, saveYear, saveChange, showMonth, setShowMonth } = dateContext;

  const monthNames = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio",
    "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"
  ];
  const toggleOption = (e) => {
    e.preventDefault();
    setShowMonth(!showMonth);
  }

  const toLeft = (e) => {
    e.preventDefault();
    if (month < 1) {
      saveMonth(11)
      saveYear(year - 1)
    }
    else {
      saveMonth(month - 1);
    }
    saveChange(true)
  }

  const toRight = (e) => {
    e.preventDefault();
    if (month > 10) {
      saveMonth(0)
      saveYear(year + 1)
    }
    else {
      saveMonth(month + 1);
    }
    saveChange(true)
  }

  return (
    <>
      <div className="calendarHeader">
        {showMonth ?
          <div className={"toggler"}>
            <div className="toLeft" onClick={toLeft}>  <img alt={"Left"} src={require('../../../../../Assets/FlechaIzq.svg')} /> </div>
            <div className="toRight" onClick={toRight}> <img alt={"Right"} src={require('../../../../../Assets/flechaDer.svg')} /> </div>
          </div>
          : null
        }
        <h1 className="fecha">{monthNames[month]} {year}</h1>
        <div className={"toggler"}>
          <div onClick={toggleOption} className={showMonth ? "activo" : "inactivo"}><p>Mes</p></div>
          <div onClick={toggleOption} className={showMonth ? "inactivo" : "activo"}><p>Semana</p></div>
        </div>
      </div>
      <div className={showMonth ? "weekdaysHeader" : "weekdaysHeader2"} >
        {!showMonth ?
          <li

          >
            <span>    </span>
          </li>
          : null}
        {weekDays.map((weekDay) => (
          <li
            key={weekDay.short}
          >
            <span>{weekDay.long}</span>
          </li>
        ))}
      </div>
    </>
  );
}

export default CalendarHeader;