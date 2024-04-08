import React from "react";
import AppointmentFormWrapper from "../AppointmentForm/AppointmentForm"; // Importing ContactFormWrapper
import "./Appointment.css"; // Importing CSS

function Appointment() {
   return (
      <div className="appointment-wrapper">
         <div className="appointment-container">
            <h2 className="appointment-heading">Schedule an Appointment</h2> {/* Added class here */}
            <AppointmentFormWrapper /> {/* Using ContactFormWrapper here */}
         </div>
      </div>
   );
}

export default Appointment;
