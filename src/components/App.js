import React, { Component } from 'react';

import { increment, decrement } from '../actions'
import { connect } from 'react-redux';

class App extends Component {
  render() {
    const props = this.props;

    return (
      <React.Fragment>
        <div>value: { props.number }</div>
        <button onClick={ props.increment }>+1</button>
        <button onClick={ props.decrement }>-1</button>
      </React.Fragment>
    )
  }
}

const mapStateToProps = state => ({ number: state.count.number })
const mapDispatchToProps = dispatch => ({ 
  increment: () => dispatch(increment()),
  decrement: () => dispatch(decrement())
})

export default connect(mapStateToProps, mapDispatchToProps)(App)
