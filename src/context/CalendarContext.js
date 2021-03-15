import React, { createContext, useState, useEffect } from 'react';
import { getMonthlyCalendarGrid  } from '../config/dates';

export const DateContext = createContext();

function formatMonth (month) {
    month = month + 1;
    if(month < 10){
        month = '0' + month;
    }
return month
}
const DateProvider = (props) => {
    const date = new Date();
    var currentMonth = date.getMonth();
    var currentYear = date.getFullYear();
    const [month, saveMonth] = useState(currentMonth);
    const [year, saveYear] = useState(currentYear);
    const [showMonth, setShowMonth] = useState(true);

    const [changeMade, saveChange] = useState(false);
    
    const [dates, setDates] = useState(getMonthlyCalendarGrid(year+"-"+formatMonth(month)))
    useEffect(() => {
    
        if (changeMade) {
            const getSearchMonth = () => {
                setDates(getMonthlyCalendarGrid(year+"-"+formatMonth(month)))
                }
            getSearchMonth();
        }

    }, [month]);

    return (
        <DateContext.Provider
            value={{
                month,
                year,
                dates,
                showMonth,
                setShowMonth,
                saveMonth,
                saveChange,
                saveYear
            }}
        >
            {props.children}
        </DateContext.Provider>
    );
}

export default DateProvider;