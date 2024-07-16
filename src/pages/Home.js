
import LastBooking from "../components/LastBooking";
import MovieSelection from "../components/MovieSelection";
import SeatSelection from "../components/SeatSelection";
import TimeSelection from "../components/TimeSelection";
import Modal from "../components/ModalComponent";
import "../css/Home.css";
import BsContext from "../Context/BsContext";
import { useContext } from "react";

const Home = (props) => {
  const context = useContext(BsContext);
  const {
    movie,
    time,
    noOfSeat,
    handlePostBooking,
    setErrorPopup,
    setErrorMessage,
  } = context;

  

  
  const handleBookNow = () => {
    if (!movie) {
      setErrorPopup(true);
      setErrorMessage("Please select  a movie!");
    } else if (!time) {
      setErrorPopup(true);
      setErrorMessage("Please select a time slot!");
    } 
    else {
      
      handlePostBooking();
    }
  };

  return (
    <>
      <Modal />
      <div className="container">
        <div className="selection_container">
          <div className="wrapper">
            <div className="select_movie_component">
              <MovieSelection />
            </div>
            <div className="last_booking_details_container">
          <LastBooking/>
            </div>
          </div>
          <div className="time_seats_container">
          <TimeSelection/>
          <SeatSelection/>
            <button
              onClick={() => {
                handleBookNow();
              }}
              className="BN-btn ">
              Book Now
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;