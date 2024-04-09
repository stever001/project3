import React from "react";
import ListAppointmentFormWrapper from "../AppointmentList/AppointmentList"; // Importing ContactFormWrapper
import "./ListAppointment.css"; // Importing CSS

function ListAppointment() {
   return (
      <div className="list-appointment-wrapper">
         <div className="list-appointment-container">
            <h2 className="list-appointment-heading">List of Appointments</h2> {/* Added class here */}
            <ListAppointmentFormWrapper /> {/* Using ContactFormWrapper here */}
         </div>
      </div>
   );
}

export default ListAppointment;
