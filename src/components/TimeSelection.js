import React from 'react';
import { slots } from '../data';
import Radiocomponent from './radiocomponent';
import '../css/TimeSchedule.css'
import BsContext from '../Context/BsContext';
import { useContext } from 'react';
  const TimeSelection = () =>  {
    const context = useContext(BsContext)

    const {time,changeTime} = context

    const handleChangeItem = (val) =>{
        changeTime(val)

        window.localStorage.setItem("time",val)
    }
	return (
        <>
	  <div className='Slot_container'>
        <h1 className='TS_heading'>Select a Schedule:-</h1>
        <div className='TS_main_container'>
            {slots.map((el,index) =>{
                return(
                    <Radiocomponent text={el} key={index} data={time} changeSelection={handleChangeItem}/>
                )
            })}
        </div>
	  </div>
      </>
	);
  }
  
  export default TimeSelection;
  