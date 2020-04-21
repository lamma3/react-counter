import React, { Component } from "react";
import Counter from "./Counter";

export class CounterGroup extends Component {
  constructor(props) {
    super(props);

    this.state = {
      size: 2,
    };
  }

  render() {
    return (
      <div>
        {Array.from(Array(this.state.size).keys()).map((value) => (
          <Counter key={value} />
        ))}
      </div>
    );
  }
}

export default CounterGroup;
