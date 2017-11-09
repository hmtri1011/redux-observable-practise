const users = (state = {}, action) => {
  switch (action.type) {
    case 'FETCH_USER_SUCCESS':
      return {
        ...state,
        // `login` is the username
        [action.payload.login]: action.payload,
        currentUser: action.payload.login
      }

    default:
      return state
  }
}

export default users
