import * as actions from '../actions';

describe('actions', () => {
  it('should have a type of HANDLE_ERROR', () => {
    const mockError = 'whoa, error man'
    const expectedAction = {
      type: 'HANDLE_ERROR',
      error: 'whoa, error man'
    };
    const results = actions.handleErrors(mockError);
    expect(results).toEqual(expectedAction);
  });

  it('should have a type of IS_LOADING', () => {
    const mockLoading = false;
    const expectedAction = {
      type: 'IS_LOADING',
      boolean: false
    };
    const results = actions.isLoading(mockLoading);
    expect(results).toEqual(expectedAction);
  });

  it('should have a type of GET_RESULTS', () => {
    const mockResults = [[{name: 'Alyssa', age: 25, count: 2500}, {name: 'Alyssa', gender: 'female', probability: 0.97, count: 3000}, {slip: {advice: 'Sometimes you need to say sorry. Even if it is not your fault.', slipId: 21 }}]]
    const expectedAction = {
      type: 'GET_RESULTS',
      results: [[{name: 'Alyssa', age: 25, count: 2500}, {name: 'Alyssa', gender: 'female', probability: 0.97, count: 3000}, {slip: {advice: 'Sometimes you need to say sorry. Even if it is not your fault.', slipId: 21 }}]]
    };
    const results = actions.getResults(mockResults);
    expect(results).toEqual(expectedAction);
  });

  it('should have a type of CLEAR_RESULTS', () => {
    const expectedAction = {
      type: 'CLEAR_RESULTS'
    };
    const results = actions.clearResults();
    expect(results).toEqual(expectedAction);
  });

  it('should have a type of SET_RESPONSE', () => {
    const mockResponse = 'Alyssa'
    const expectedAction = {
      type: 'SET_RESPONSE',
      name: 'Alyssa'
    };
    const results = actions.setResponse(mockResponse);
    expect(results).toEqual(expectedAction);
  });

  it('should have a type of CLEAR_RESPONSES', () => {
    const expectedAction = {
      type: 'CLEAR_RESPONSE'
    };
    const results = actions.clearResponses();
    expect(results).toEqual(expectedAction);
  });
});