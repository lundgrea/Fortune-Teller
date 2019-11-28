import React from 'react';
import './App.css';
import NameForm from '../../containers/NameForm/NameForm'
import Fortune from '../../containers/Fortune/Fortune';
import { connect } from 'react-redux';

export const App = props => {
  return (
    <>
      {props.results.length === 0 && <NameForm />}
      {props.response && <Fortune />}
    </>
  );
}


export const mapStateToProps = store => ({
  response: store.response,
  results: store.results
})

export default connect(mapStateToProps)(App)



