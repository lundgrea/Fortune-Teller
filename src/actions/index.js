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