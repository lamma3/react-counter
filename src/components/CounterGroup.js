import React, { Component } from "react";
import Counter from "./Counter";
import { COUNTER_GROUP_SIZE } from "../constants/constants";

export class CounterGroup extends Component {
  constructor(props) {
    super(props);

    this.updateGroupSize = this.updateGroupSize.bind(this);

    this.state = {
      size: COUNTER_GROUP_SIZE,
    };
  }

  updateGroupSize(event) {
    let newSize = parseInt(event.target.value);
    this.setState(() => ({
      size: isNaN(newSize) || newSize < 0 ? 0 : newSize,
    }));
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

        {Array.from(Array(this.state.size).keys()).map((value) => (
          <Counter key={value} />
        ))}
      </div>
    );
  }
}

export default CounterGroup;
