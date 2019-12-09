import React from 'react';
import './App.css';
import NameForm from '../../containers/NameForm/NameForm'
import Fortune from '../../containers/Fortune/Fortune';
import { connect } from 'react-redux';

export const App = props => {
  return (
    <div className='App'>
      <h1 className='welcome'>Welcome To The Fortune Teller</h1>
      <h2 className='CTA'>Enter Your Name & Have Your Fortune Read</h2>
      {props.results.length === 0 && <NameForm />}
      {props.response && <Fortune />}
    </div>
  );
}


export const mapStateToProps = store => ({
  response: store.response,
  results: store.results
})

export default connect(mapStateToProps)(App)



