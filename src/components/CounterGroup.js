import React, { Component } from "react";
import Counter from "./Counter";
import {
  COUNTER_GROUP_DEFAULT_SIZE,
  COUNTER_GROUP_INIT_SUM,
} from "../constants/constants";

export class CounterGroup extends Component {
  constructor(props) {
    super(props);

    this.updateGroupSize = this.updateGroupSize.bind(this);
    this.updateSum = this.updateSum.bind(this);

    this.state = {
      size: COUNTER_GROUP_DEFAULT_SIZE,
      sum: COUNTER_GROUP_INIT_SUM,
    };
  }

  updateSum(valueChange) {
    this.setState((state) => ({
      sum: state.sum + valueChange,
    }));
  }

  updateGroupSize(event) {
    let newSize = parseInt(event.target.value);
    this.setState(() => ({
      size: this.isValidGroupSize(newSize) ? newSize : COUNTER_GROUP_DEFAULT_SIZE,
      sum: COUNTER_GROUP_INIT_SUM,
    }));
  }

  isValidGroupSize(size) {
    return !isNaN(size) && size >= 0;
  }

  render() {
    return (
      <div>
        <form>
          <input
            type="text"
            value={this.state.size}
            onChange={this.updateGroupSize}
          ></input>
        </form>

        <h3>Sum: {this.state.sum}</h3>

        {Array.from(Array(this.state.size).keys()).map((value) => (
          <Counter key={value} onCountChange={this.updateSum} />
        ))}
      </div>
    );
  }
}

export default CounterGroup;
