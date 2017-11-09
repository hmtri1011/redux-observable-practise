import React, { PureComponent } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

const pingAction = () => ({
  type: 'PING'
})

@connect(
  state => ({
    ping: state.ping
  }),
  dispatch => ({
    startPing: bindActionCreators(pingAction, dispatch)
  })
)
class PingPong extends PureComponent {
  render() {
    return (
      <div>
        <button onClick={this.props.startPing}>PING</button>
        <p>
          {this.props.ping.isPinging
            ? 'PINGING...'
            : this.props.ping.isFinish ? 'PONG' : 'Waiting for PING'}
        </p>
      </div>
    )
  }
}

export default PingPong
