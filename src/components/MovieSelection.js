import React, { useContext } from 'react';
import { moivesList } from '../data';
import Radiocomponent from './radiocomponent';
import '../css/MovieSelection.css'
import BsContext from '../Context/BsContext';
  const MovieSelection = () =>  {
    const context = useContext(BsContext)

    const {movie,changeMovie} = context
    const handleChangeMovie = (val) => {
        changeMovie(val)

        window.localStorage.setItem("movie",val)
    }
    return (
	  <>
      <h1 className='SM_heading'>Select a Movie:</h1>
      <div className='SM_movieSelectionContainer'>
        {moivesList.map((el,index) =>{
            return(
                <Radiocomponent text={el} key={index} data={movie} changeSelection={handleChangeMovie} />
            )
        })}
        </div>
	  </>
	);
  }
  
  export default MovieSelection;
  