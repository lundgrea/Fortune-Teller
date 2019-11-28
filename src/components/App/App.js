import React from 'react';
import './App.css';
import NameForm from '../../containers/NameForm/NameForm'
import Fortune from '../../containers/Fortune/Fortune';
import { connect } from 'react-redux';

export const App = props => {
  console.log('responses', props.response)
  console.log('results', props.results)
  return (
    <>
      {props.results && <NameForm />}
      {props.responses && <Fortune />}
    </>
  );
}


export const mapStateToProps = store => ({
  response: store.response,
  results: store.results
})

export default connect(mapStateToProps)(App)



