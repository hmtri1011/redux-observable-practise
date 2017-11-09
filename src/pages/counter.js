import React, { PureComponent } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { getUserInfo } from '../selectors/userSelector'

const increase = () => ({ type: 'UP' })
const decrease = () => ({ type: 'DOWN' })
const increaseOdd = () => ({ type: 'UP_ODD' })
const decreaseEven = () => ({ type: 'DOWN_EVEN' })

@connect(
  state => ({
    counter: state.counter
  }),
  dispatch => ({
    change: bindActionCreators(
      { increase, decrease, increaseOdd, decreaseEven },
      dispatch
    )
  })
)
class Counter extends PureComponent {
  _increaseValue = () => this.props.change.increase()

  _decreaseValue = () => this.props.change.decrease()

  _increaseOdd = () => this.props.change.increaseOdd()

  _decreaseEven = () => this.props.change.decreaseEven()

  render() {
    return (
      <div>
        <button onClick={() => this._increaseValue()}>UP</button>
        <button onClick={() => this._decreaseValue()}>DOWN</button>

        <button onClick={() => this._increaseOdd()}>UP IF ODD</button>
        <button onClick={() => this._decreaseEven()}>DOWN IF EVEN</button>

        <div>Value : {this.props.counter}</div>
      </div>
    )
  }
}

export default Counter
