import React, { Component } from 'react';
import './Fortune.css';
import { connect } from 'react-redux';
import { getResults, isLoading, handleErrors } from '../../actions/index'
import { processAge } from '../../apiCalls/apiCalls'

class Fortune extends Component{
  componentDidMount = async (responses) => {
    let ageResults = await processAge(responses)
    console.log(ageResults)
  }

  render() {
    return(
      <h1>Hello</h1>
    )
  }
}

export const mapStateToProps = store => ({
  errors: store.hasErrored,
  loading: store.isLoading,
  response: store.response,
  results: store.results
})

export const mapDispatchToProps = dispatch => ({
  isLoading: bool => dispatch(isLoading(bool)),
  handleErrors: error => dispatch(handleErrors(error)),
  getResults: results => dispatch(getResults(results))
})

export default connect(mapStateToProps, mapDispatchToProps)(Fortune)



