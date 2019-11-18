export const responseReducer = (state='', action) => {
  switch(action.type) {
    case 'SET_RESPONSE':
      return action.name
    case 'CLEAR_RESPONSE':
      return state = ''
    default:
      return state
  }
}

