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
   const [formData, setFormData] = useState({
      username: "",
      apptDate: "",
      apptTime: "",
   });

   const handleChange = (event) => {
      const { name, value } = event.target;
      setFormData((prevState) => ({ ...prevState, [name]: value }));
   };

   const handleSubmit = (event) => {
      event.preventDefault();
      console.log(formData);
      const formDataArray = [];
      formDataArray.push(formData);
      //************ Temporary use of localStorage until backend/frontend connection from Aaron is solved */
      localStorage.setItem("appointments", JSON.stringify(formDataArray));

      // const [username, setUsername] = useState("");
      // const [apptDate, setApptDate] = useState("");
      // const [apptTime, setApptTime] = useState("");

      // const [createAppointment] = useMutation(CREATE_APPT);

      // const handleSubmit = async (e) => {
      //    e.preventDefault();
      //    try {
      //       await createAppointment({
      //          variables: {
      //             username,
      //             apptDate,
      //             apptTime,
      //          },
      //       });
      //       // Clear form fields after successful submission
      //       setUsername("");
      //       setApptDate("");
      //       setApptTime("");
      //    } catch (error) {
      //       console.error("Error creating appointment:", error);
      //    }
   };

   return (
      <div className="af-container">
         <form onSubmit={handleSubmit}>
            <div className="form-group">
               <label>
                  Username:
                  <input type="text" name="username" value={formData.username} onChange={handleChange}></input>
               </label>
               <label>
                  Date:
                  <input type="date" name="apptDate" value={formData.apptDate} onChange={handleChange}></input>
                  {/* <input type="date" name="apptDate" value={apptDate}nChange={(e) => setApptDate(e.target.value)} required /> */}
               </label>
               <label>
                  Time:
                  <input type="time" name="apptTime" value={formData.apptTime} onChange={handleChange}></input>
                  {/* <input type="time" value={apptTime} onChange={(e) => setApptTime(e.target.value)} required /> */}
               </label>
               <input type="submit" value="Create Appointment" />
            </div>
         </form>
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
