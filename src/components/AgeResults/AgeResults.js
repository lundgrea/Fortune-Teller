import React from 'react';

export const AgeResults = props => {
  return (
    <>
      <h2>Guessed Age: </h2>
      {props.results.age}
      <h3>Count:</h3>
      {props.results.count}
    </>
  )
}

export default AgeResults