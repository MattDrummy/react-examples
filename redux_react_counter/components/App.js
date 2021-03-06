import React, { Component, PropTypes } from 'react'
import {connect} from 'react-redux'
import store from '../reducers/counter_reducer.js'




class Counter extends Component {
  constructor(props) {
    super(props)
    this.incrementAsync = this.incrementAsync.bind(this)
    this.incrementIfOdd = this.incrementIfOdd.bind(this)
  }

  incrementIfOdd() {
    if (this.props.value % 2 !== 0) {
      this.props.onIncrement()
    }
  }

  incrementAsync() {
    setTimeout(this.props.onIncrement, 1000)
  }

  render() {
    const { value, onIncrement, onDecrement } = this.props
    return (
      <p>
        Clicked: {value} times
        {' '}
        <button onClick={onIncrement}>
          +
        </button>
        {' '}
        <button onClick={onDecrement}>
          -
        </button>
        {' '}
        <button onClick={this.incrementIfOdd}>
          Increment if odd
        </button>
        {' '}
        <button onClick={this.incrementAsync}>
          Increment async
        </button>
      </p>
    )
  }
}

Counter.propTypes = {
  value: PropTypes.number.isRequired,
  onIncrement: PropTypes.func.isRequired,
  onDecrement: PropTypes.func.isRequired
}

function mapDispatchToProps(dispatch){
  return {
    onIncrement(){
      dispatch({ type: 'INCREMENT' })
    },
    onDecrement(){
      dispatch({ type: 'DECREMENT' })
    }
  }
}

function mapStateToProps(store){
  return {
    value: store
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(Counter)



