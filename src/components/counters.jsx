import React, { Component } from "react";
import Counter from "./counter";
class Counters extends Component {
  render() {
    console.log("counters props", this.props);
    return (
      <div>
        <button
          className="btn btn-primary btn-sm m-2"
          onClick={this.props.onReset}
        >
          Reset
        </button>
        <button
          className="btn btn-primary btn-sm m-2"
          onClick={this.props.handleAdd}
        >
          Add
        </button>
        <button
          className="btn btn-primary btn-sm m-2"
          onClick={this.props.handleDeleteAll}
        >
          Delete All
        </button>
        {this.props.counters.map((counter) => (
          <Counter
            key={counter.id}
            id={counter.id}
            value={counter.value}
            onDelete={this.props.onDelete}
            onIncrement={this.props.onIncrement}
            onDecrement={this.props.onDecrement}
          />
        ))}
      </div>
    );
  }
}

export default Counters;
