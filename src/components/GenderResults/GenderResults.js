import React from 'react'

export const GenderResults = props => {
  console.log(props.results)
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