import React from "react";
import { getWeekdaysDescriptions } from "../../../config/dates";
import CalendarGrid from "./ViewComponents/CalendarGrid";
import CalendarHeader from "./ViewComponents/CalendarHeader";

const weekDays = getWeekdaysDescriptions();
const Calendar = () => {
  
    return (
        <div className={"calendar"}>
            <CalendarHeader weekDays={weekDays} />
            <CalendarGrid /> 
        </div>
    );
}

export default Calendar;