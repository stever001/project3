import "./AppointmentList.css";

import React, { useState, useEffect } from "react";

function ListAppointment() {
   //    State to store the data from local storage
   const [data, setData] = useState([]);

   useEffect(() => {
      // Function to retrieve data from local storage
      const fetchDataFromLocalStorage = () => {
         const localStorageData = localStorage.getItem("appointments");
         if (localStorageData) {
            setData(JSON.parse(localStorageData));
         }
         console.log("localStorageData", localStorageData);
      };

      fetchDataFromLocalStorage();
   }, []); // Runs only once after the component mounts

   console.log("data:", data);

   const deleteAppointment = (username) => {
      const updatedData = data.filter((item) => item.username !== username);
      localStorage.setItem("appointments", JSON.stringify(updatedData));
      setData(updatedData);
   };
   
   return (
      <div>
         <h2 className="header">Current Appointments</h2>
         <table className="table">
            <thead className="table-header">
               <tr>
                  <th>Username</th>
                  <th>Date</th>
                  <th>Time</th>
               </tr>
            </thead>
            <tbody>
               {data.map((item) => (
                  <tr className="table-row" key={item.username}>
                     <td>{item.username}</td>
                     <td>{item.apptDate}</td>
                     <td>{item.apptTime}</td>
                     <td>
                        <button onClick={() => deleteAppointment(item.username)}>Delete</button>
                     </td>
                  </tr>
               ))}
            </tbody>
         </table>
      </div>
   );
}

function ListAppointmentWrapper() {
   return (
      <div style={{ display: "flex", justifyContent: "center", width: "100%" }}>
         <ListAppointment />
      </div>
   );
}

export default ListAppointmentWrapper;
