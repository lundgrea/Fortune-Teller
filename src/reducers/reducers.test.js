
import { errorsReducer } from './errors'
import { loadingReducer } from './loading'


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