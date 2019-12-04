import React, { Component } from 'react';
import './Fortune.css';
import GenderResults from '../../components/GenderResults/GenderResults'
import { connect } from 'react-redux';
import { getResults, isLoading, handleErrors } from '../../actions/index'
import { processAge, processGender, getAdvice } from '../../apiCalls/apiCalls'

class Fortune extends Component {

  componentDidMount = async (name) => {
    let ageResults = await processAge(this.props.response)
    this.props.getResults(ageResults)
    let genderResults = await processGender(this.props.response)
    this.props.getResults(genderResults)
    let advice = await getAdvice()
    this.props.getResults(advice)
  }

  render() {
    return(
      <>
        {this.props.results.length > 0 && <h1>{this.props.results[0].name}</h1>}
        {this.props.results.length === 3 && <GenderResults results={this.props.results[1]}/>}
      </>
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



