import { createSelector } from 'reselect'

const getUsers = state => state.user

export const getUserInfo = createSelector([getUsers], user => {
  const userInfo = user[user.currentUser]
  if (userInfo)
    return Object.keys(userInfo).map(key => ({ key, [key]: userInfo[key] }))
})
