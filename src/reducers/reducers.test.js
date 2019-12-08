
import { errorsReducer } from './errors'
import { loadingReducer } from './loading'
import { responseReducer } from './response'
import { resultsReducer } from './results'
 

describe('errorsReducer', () => {
  it('should throw an error if handle error is met', () => {
    let mockAction = {
      type: 'HANDLE_ERROR',
      error: 'Something is Wrong!'
    };
    expect(errorsReducer(undefined, mockAction)).toEqual('Something is Wrong!');
  });

  it('should put not change the store if HANDLE_ERROR is not met', () => {
    let mockAction = {
      type: 'SET_RESPONSES',
      bool: 'lips'
    };
    expect(errorsReducer(undefined, mockAction)).toEqual('');
  });
});


describe('loadingReducer', () => {
  it('should update the loading state when the load is completed', () => {
    let mockAction = {
      type: 'IS_LOADING',
      boolean: true
    };
    expect(loadingReducer(undefined, mockAction)).toEqual(true);
  });

  it('should put not change the store if IS_LOADING is not met', () => {
    let mockAction = {
      type: 'SET_RESPONSES',
      boolean: 'lips'
    };
    expect(loadingReducer(undefined, mockAction)).toEqual(true);
  });
});


describe('responseReducer', () => {
  it('should put not change the store if SET_RESPONSES is not met', () => {
    let mockAction = {
      type: 'IS_LOADING',
      bool: true
    };
    expect(responseReducer(undefined, mockAction)).toEqual('');
  });

  it('should put the responses from the quiz in the store if SET_RESPONSES is met', () => {
    let mockAction = {
      type: 'SET_RESPONSE',
      name: 'Alyssa'
    };
    expect(responseReducer(undefined, mockAction)).toEqual('Alyssa');
  });


  it('should clear the store if CLEAR_RESPONSES is met',() => {
    let mockAction = {
      type: 'CLEAR_RESPONSE'
    };
    expect(responseReducer(undefined, mockAction)).toEqual('');
  });
});


describe('resultsReducer', () => {
  it('should put the results from the fetch in the store if GET_RESULTS is met', () => {
    let mockAction = {
      type: 'GET_RESULTS',
      results: [{name: 'Alyssa', age: 25, count: 2500}, {name: 'Alyssa', gender: 'female', probability: 0.97, count: 3000}, {slip: {advice: 'Sometimes you need to say sorry. Even if it is not your fault.', slipId: 21 }}]
    };
    expect(resultsReducer(undefined, mockAction)).toEqual([[{name: 'Alyssa', age: 25, count: 2500}, {name: 'Alyssa', gender: 'female', probability: 0.97, count: 3000}, {slip: {advice: 'Sometimes you need to say sorry. Even if it is not your fault.', slipId: 21 }} ]]);
  });

  it('should not change the store if GET_RESULTS is not met', () => {
    let mockAction = {
      type: 'SET_RESPONSES',
      bool: 'lips'
    };
    expect(resultsReducer(undefined, mockAction)).toEqual([]);
  });

  it('should clear the store if CLEAR_RESULTS is met',() => {
    let mockAction = {
      type: 'CLEAR_RESULTS'
    };
    expect(resultsReducer(undefined, mockAction)).toEqual([]);
  });
});