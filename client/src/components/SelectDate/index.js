import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Auth from "../../utils/auth"; //* still need to figure out correct path
import { Link } from "react-router-dom"; //* imports Button from 'react-bootstrap/Button';

const SelectDate = (props) => {
   const [selectDateState, setSelectDateState] = useState({
      date: new Date(),
   });

   const handleCalendarChange = (event) => {
      setSelectDateState({
         ...selectDateState,
         date: event,
      });
   };

   const handleCalendarClose = () => console.log("Calendar closed");
   const handleCalendarOpen = () => console.log("Calendar opened");

   return (
      <div className="card login-signup-card shadow-sm">
         <div className="card-body">
            <h1>Select Date</h1>
            {/* <p className="text-selectdate"> */}//*SHOULD I MAKE SPECIALTY SCHEMA?
            {/* Specialty: <span>{selectDateState.specialty}</span> */}
            {/* </p> */}
         </div>
         <span>Check Availability</span>
         <div className="create-appt" style={{ display: "flex", alignItems: "center" }}>
            <DatePicker
               selected={selectDateState.date}
               onChange={(selectedDate) => handleCalendarChange(selectedDate)}
               onCalendarClose={handleCalendarClose}
               onCalendarOpen={handleCalendarOpen}
            />
            <Link to={`/timeavailable/${selectDateState.date}`}>
               //*IS THIS CORRECT
               <button className="btn btn-add">submit</button>
            </Link>
         </div>
      </div>
   );
};

export default SelectDate;
