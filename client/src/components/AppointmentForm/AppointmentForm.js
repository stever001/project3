import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import { CREATE_APPT } from "../../utils/mutations";
import "./AppointmentForm.css";

const AppointmentForm = () => {
   const [username, setUsername] = useState("");
   const [apptDate, setApptDate] = useState("");
   const [apptTime, setApptTime] = useState("");

   const [createAppointment, { error }] = useMutation(CREATE_APPT);

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
         setUsername("");
         setApptDate("");
         setApptTime("");
      } catch (error) {
         console.error("Error creating appointment:", error);
      }
   };

   return (
      <div className="apptForm-container">
         <form className="apptForm-form" onSubmit={handleSubmit}>
            <label className="apptForm-group">
               Username:
               <input className="apptForm-input" type="text" value={username} onChange={(e) => setUsername(e.target.value)} required />
            </label>
            <label className="apptForm-group">
               Date:
               <input className="apptForm-input" type="date" value={apptDate} onChange={(e) => setApptDate(e.target.value)} required />
            </label>
            <label className="apptForm-group">
               Time:
               <input className="apptForm-input" type="time" value={apptTime} onChange={(e) => setApptTime(e.target.value)} required />
            </label>
            <button className="apptForm-button" type="submit">Create Appointment</button>
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
