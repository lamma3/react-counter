import React, { Component } from "react";

export class Counter extends Component {
  constructor(props) {
    super(props);

    this.incrementByOne = this.incrementByOne.bind(this);
    this.decrementByOne = this.decrementByOne.bind(this);

    this.state = {
      number: 0,
    };
  }

  incrementByOne() {
    this.setState((state) => ({
      number: state.number + 1,
    }));
  }

  decrementByOne() {
    this.setState((state) => ({
      number: state.number - 1,
    }));
  }

  render() {
    return (
      <div>
        <button onClick={this.incrementByOne}>+</button>
        <span>{this.state.number}</span>
        <button onClick={this.decrementByOne}>-</button>
      </div>
    );
  }
}

export default Counter;
