export const responseReducer = (state='', action) => {
  switch(action.type) {
    case 'SET_RESPONSE':
      return action.name
    default:
      return state
  }
}