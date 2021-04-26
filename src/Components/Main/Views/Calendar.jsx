import React from "react";
import { getWeekdaysDescriptions } from "../../../config/dates";
import CalendarGrid from "./ViewComponents/CalendarCmp/CalendarGrid";
import CalendarHeader from "./ViewComponents/CalendarCmp/CalendarHeader";

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