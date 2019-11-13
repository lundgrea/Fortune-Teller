export const loadingReducer = (state=true, action) => {
  switch(action.type) {
    case 'IS_LOADING':
      return action.boolean
    default:
      return state
  }
}