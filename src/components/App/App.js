import React, { Component } from 'react';
import './App.css';

class App extends Component{
  state = {
    name: '',
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.props.generateResults(this.state.name)
    this.setState({name: ''})
  }

  handleChange = (e)=> {
    this.setState({name: e.target.value})
  }



  render() {
    return (
    <div className="App">
      <h1>Welcome To The Fortune Teller</h1>
        <h2>Enter Your Name To Have Your Fortune Read</h2>
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
  );
  }
}

export default App;
