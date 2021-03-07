import React, { Component } from "react";
import "./App.css";
import { getCounters } from "./service/fakeCounters";
import Navbar from "./components/navbar";
import Counters from "./components/counter";
class App extends Component {
  state = {
    counters: getCounters(),
    clickSum: 0,
  };
  handleReset = () => {
    this.setState({ counters: getCounters(), clickSum: 0 });
  };
  handleDeleteAll = () => {
    const counters = [];
    this.setState({ counters, clickSum: 0 });
  };
  handleAdd = () => {
    let counters = this.state.counters;
    let maxId = counters.length !== 0 ? counters[0].id : 0;
    counters.forEach((item) => (item.id > maxId ? (maxId = item.id) : null));
    counters.push({ id: maxId + 1, value: 0, minValue: 0, maxValue: 10 });
    this.setState({ counters });
  };
  handleIncrement = (cId) => {
    let counters = this.state.counters;
    let clickSum = this.state.clickSum;
    let cIdObject = counters.find((item) => item.id === cId);
    if (cIdObject.value < cIdObject.maxValue) {
      cIdObject.value += 1;
      clickSum += 1;
    }
    this.setState({
      counters,
      clickSum,
    });
  };
  handleDecrement = (cId) => {
    let clickSum = this.state.clickSum;
    let counters = this.state.counters;
    let cIdObject = counters.find((item) => item.id === cId);
    if (cIdObject.value > cIdObject.minValue) {
      cIdObject.value -= 1;
      clickSum += 1;
    }
    this.setState({
      counters,
      clickSum,
    });
  };
  handleDelete = (cId) => {
    let counter = this.state.counters;
    let newCounter = counter.filter((item) => item.id !== cId);
    this.setState({ counters: newCounter });
  };
  render() {
    console.log(this.state);
    return (
      <React.Fragment>
        <Navbar />
        <main className="container">
          <Counters
            counters={this.state.counters}
            onReset={this.handleReset}
            onDelete={this.handleDelete}
            onIncrement={this.handleIncrement}
            onDecrement={this.handleDecrement}
            onDeleteAll={this.handleDeleteAll}
            onAdd={this.handleAdd}
          />
        </main>
      </React.Fragment>
    );
  }
}

export default App;
