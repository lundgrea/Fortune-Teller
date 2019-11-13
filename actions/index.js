export const handleErrors = error => ({
  type: 'HANDLE_ERROR',
  error
})

export const isLoading = boolean => ({
  type: 'IS_LOADING',
  boolean
})
