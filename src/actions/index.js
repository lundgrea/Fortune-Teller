export const handleErrors = error => ({
  type: 'HANDLE_ERROR',
  error
})

export const isLoading = boolean => ({
  type: 'IS_LOADING',
  boolean
})

export const setResponse = name => ({
  type: 'SET_RESPONSE',
  name
})

export const clearResponses = name => ({
  type: 'CLEAR_RESPONSE',
  name
}) 

export const getResults = results => ({
  type: 'GET_RESULTS',
  results
})

export const clearResults = results => ({
  type: 'CLEAR_RESULTS',
  results
})



