import React from 'react';
import './AdviceResults.css';

export const AdviceResults = props => {
  console.log(props.results)
  return (
    <>
    <h2>Advice: </h2>
    {props.results.slip.advice}
    </>
  )
}

export default AdviceResults