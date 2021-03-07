import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Counters from "./counters";
class Counter extends Component {
  render() {
    console.log(this.props.counters);
    return (
      <div>
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button
          onClick={() => this.props.onIncrement(1)}
          className={this.getButtonClasses()}
        >
          Increment
        </button>
        <button
          onClick={() => this.props.onDecrement(this.props.counter.id)}
          className={this.getButtonClasses()}
        >
          Decrement
        </button>
        <button
          onClick={() => this.props.onDelete(this.props.counter.id)}
          className={this.getButtonClasses("delete")}
        >
          Delete
        </button>
      </div>
    );
  }
  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += "primary";
    return classes;
  }
  getButtonClasses(state) {
    let classes = "btn m-2 btn-sm btn-";
    classes += state === "delete" ? "danger" : "secondary";
    return classes;
  }
  formatCount(cId) {
    console.log("proprs", this.props.counters);
    return "Zero";
  }
}

export default Counter;
