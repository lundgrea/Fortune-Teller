import React, { Component } from 'react';
import './App.css';
import { connect }from 'react-redux';
import { setResponse } from '../../actions'

class App extends Component{
  state = {
    name: '',
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.props.setResponse(this.state.name)
    this.setState({name: ''})
  }

  handleChange = (e)=> {
    this.setState({name: e.target.value})
  }



  render() {
    return (
    <div className="App">
      <h1>Welcome To The Fortune Teller</h1>
        <h2>Enter Your Name & Have Your Fortune Read</h2>
        <div className="form">
          <label>Enter Name</label>
          <input 
            placeholder="Your Name Here..." 
            onChange={e => this.handleChange(e)}
            type="text"
            name="name"
            value={this.state.name}
          />
          <button onClick={e => this.handleSubmit(e)}>Submit Name</button>
        </div>
    </div>
  );
  }
}

export const mapDispatchToProps = dispatch => ({
  setResponse: name => dispatch(setResponse(name))
})



export default connect(null, mapDispatchToProps)(App);
