import React from 'react';
import './GenderResults.css';


export const GenderResults = props => {
  return (
    <>
      <h2>Guessed Gender: </h2>
      {props.results.gender}
      <h3>Probablility Of Guess Correctness:</h3>
      {props.results.probability}
      <h3>Count:</h3>
      {props.results.count}
    </>
  )
}

export default GenderResults