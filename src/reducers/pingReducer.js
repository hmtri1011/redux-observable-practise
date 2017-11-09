const pingReducer = (state = { isPinging: false, isFinish: false }, action) => {
  switch (action.type) {
    case 'PING':
      return { isPinging: true, isFinish: false }
    case 'PONG':
      return { isPinging: false, isFinish: true }

    default:
      return state
  }
}

export default pingReducer
