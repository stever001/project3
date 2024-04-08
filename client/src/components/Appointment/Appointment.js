import React from "react";
import AppointmentFormWrapper from "../AppointmentForm/AppointmentForm"; // Importing ContactFormWrapper
import "./Appointment.css"; // Importing CSS

function Appointment() {
   return (
      <div className="contact-container">
         <h2 className="contact-heading">Schedule an Appointment</h2> {/* Added class here */}
         <AppointmentFormWrapper /> {/* Using ContactFormWrapper here */}
      </div>
   );
}

export default Appointment;
