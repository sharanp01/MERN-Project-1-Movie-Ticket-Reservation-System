
import React, { useEffect, useContext } from "react";
import "../css/LastBookingDetails.css"; 
import BsContext from "../Context/BsContext"; 
import { seats } from "../data"; 

const LastBookingDetails = () => {
  
  const context = useContext(BsContext);

  const { handleGetLastBooking, lastBookingDetails } = context;

  
  useEffect(() => {
    handleGetLastBooking(); 
   
  }, []);

  return (
    <div className="last_booking_details_container_main">
      <h2 className="last_booking_details_header">Last Booking Details:</h2>
      {lastBookingDetails ? (
        <>
          <div className="seats_container">
            <p className="seats_header">Seats:</p>
            <ul className="seats">
              {seats.map((seat, index) => (
             
                <li className="seat_value" key={index}>
                  {seat}: {Number(lastBookingDetails.seats[seat])}
                </li>
              ))}
            </ul>
          </div>
          <p className="slot" style={{ textAlign: "left" }}>
            Slot: <span>{lastBookingDetails.slot}</span>
          </p>
          <p className="movie">
            Movie: <span>{lastBookingDetails.movie}</span>
          </p>
        </>
      ) : (
        
        <p className="no_previous_booking_msg">No Previous Booking Found!</p>
      )}
    </div>
  );
};

export default LastBookingDetails;

