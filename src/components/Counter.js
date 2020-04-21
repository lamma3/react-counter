import React, { Component } from "react";

export class Counter extends Component {
  constructor(props) {
    super(props);

    this.incrementByOne = this.incrementByOne.bind(this);
    this.decrementByOne = this.decrementByOne.bind(this);

    this.state = {
      count: 0,
    };
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.count !== prevState.count) {
      this.processCountChange(this.state.count, prevState.count);
    }
  }

  processCountChange(newCount, prevCount) {
    let valueChange = newCount - prevCount;
    this.props.onCountChange(valueChange);
  }

  incrementByOne() {
    this.setState((state) => ({
      count: state.count + 1,
    }));
  }

  decrementByOne() {
    this.setState((state) => ({
      count: state.count - 1,
    }));
  }

  render() {
    return (
      <div>
        <button onClick={this.incrementByOne}>+</button>
        <span>{this.state.count}</span>
        <button onClick={this.decrementByOne}>-</button>
      </div>
    );
  }
}

export default Counter;
