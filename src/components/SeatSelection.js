import React, { useContext, useState} from 'react';
 import { seats } from '../data';
import SeatInputs from './SeatInputs';
import '../css/SelectSeats.css'
import BsContext from '../Context/BsContext';
  const SeatSelection = () =>  {
    const context = useContext(BsContext)
    const [seat, changeSeats] = useState([]);
    const {noOfSeat, changeNoOfSeats} = context

    return (
      <>
        <div className="SS_wrapper">
          <h1 className="SS_heading">Select Seats :-</h1>
          <div className="SS_main_container">
            {seats.map((el, index) => {
              return (
                <SeatInputs
                  seat={seat}
                  key={index}
                  index={index}
                  changeSeats={changeSeats}
                  noOfSeat={noOfSeat}
                  text={el}
                  changeNoOfSeats={changeNoOfSeats}
                />
              );
            })}
          </div>
        </div>
      </>
    );
  };
  
  export default SeatSelection;
  