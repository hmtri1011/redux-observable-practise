import React, { PureComponent } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { getUserInfo } from '../selectors/userSelector'

const fetchUser = username => ({ type: 'FETCH_USER', payload: username })

@connect(
  state => ({
    user: getUserInfo(state)
  }),
  dispatch => ({
    fetchUser: bindActionCreators(fetchUser, dispatch)
  })
)
class User extends PureComponent {
  _handleGetUserInfo = name => this.props.fetchUser(name)

  render() {
    return (
      <div>
        <button onClick={() => this._handleGetUserInfo('hmtri1011')}>Me</button>
        <button onClick={() => this._handleGetUserInfo('vunguyentuan')}>
          My Mentor
        </button>
        <div>
          {this.props.user &&
            this.props.user.map((info, index) => (
              <p key={index}>
                {info.key}: {info[info.key]}
              </p>
            ))}
        </div>
      </div>
    )
  }
}

export default User
