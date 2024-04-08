//* PLS DONT DELETE
// import React, { useState } from "react";
// import DatePicker from "react-datepicker";
// import "react-datepicker/dist/react-datepicker.css";
// // import Auth from "../../utils/auth"; //* still need to figure out correct path
// import { Link } from "react-router-dom"; //* imports Button from 'react-bootstrap/Button';
// import './SelectDate.css'

// const SelectDate = (props) => {
//    const [selectDateState, setSelectDateState] = useState({
//       date: new Date(),
//    });

//    const handleCalendarChange = (event) => {
//       setSelectDateState({
//          ...selectDateState,
//          date: event,
//       });
//    };

//    const handleCalendarClose = () => console.log("Calendar closed");
//    const handleCalendarOpen = () => console.log("Calendar opened");

//    return (
//       <div className="card login-signup-card shadow-sm">
//          <h1>HELLO</h1>
//          <div className="card-body">
//             <h1>Select Date</h1>
//             {/* <p className="text-selectdate"> */}//*SHOULD I MAKE SPECIALTY SCHEMA?
//             {/* Specialty: <span>{selectDateState.specialty}</span> */}
//             {/* </p> */}
//          </div>
//          <span>Check Availability</span>
//          {/* <div className="create-appt" style={{ display: "flex", alignItems: "center" }}>
//             <DatePicker
//                selected={selectDateState.date}
//                onChange={(selectedDate) => handleCalendarChange(selectedDate)}
//                onCalendarClose={handleCalendarClose}
//                onCalendarOpen={handleCalendarOpen}
//             />
//             <Link to={`/timeavailable/${selectDateState.date}`}>
//                //*IS THIS CORRECT
//                <button className="btn btn-add">submit</button>
//             </Link>
//          </div> */}
//       </div>
//    );
// };

// export default SelectDate;

import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import { CREATE_APPT } from "../../utils/mutations";
import "./AppointmentForm.css";

const AppointmentForm = () => {
   const [username, setUsername] = useState("");
   const [apptDate, setApptDate] = useState("");
   const [apptTime, setApptTime] = useState("");

   const [createAppointment] = useMutation(CREATE_APPT);

   const handleSubmit = async (e) => {
      e.preventDefault();
      try {
         await createAppointment({
            variables: {
               username,
               apptDate,
               apptTime,
            },
         });
         // Clear form fields after successful submission
         setUsername("");
         setApptDate("");
         setApptTime("");
      } catch (error) {
         console.error("Error creating appointment:", error);
      }
   };

   return (
      <div className="af-container">
         <div className="form-container">
            <form onSubmit={handleSubmit}>
               <label>
                  Username:
                  <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} required />
               </label>
               <label>
                  Date:
                  <input type="date" value={apptDate} onChange={(e) => setApptDate(e.target.value)} required />
               </label>
               <label>
                  Time:
                  <input type="time" value={apptTime} onChange={(e) => setApptTime(e.target.value)} required />
               </label>
               <button type="submit">Create Appointment</button>
            </form>
         </div>
      </div>
   );
};

function AppointmentFormWrapper() {
   return (
      <div style={{ display: "flex", justifyContent: "center", width: "100%" }}>
         <AppointmentForm />
      </div>
   );
}

export default AppointmentFormWrapper;
