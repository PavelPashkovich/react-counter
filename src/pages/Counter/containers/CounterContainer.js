import React, { Component } from "react";
import CounterView from "../components/CounterView";

class CounterContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      countValue: 0,
      parityType: "even",
    };
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (this.state.countValue !== prevState.countValue) {
      const parityType = this.state.countValue % 2 !== 0 ? "odd" : "even";
      this.setState({ parityType: parityType });
    }
  }

  handleDecrement = () =>
    this.setState(
      (state) => state.countValue && { countValue: state.countValue - 1 }
    );

  handleReset = () => this.setState({ countValue: 0 });

  handleIncrement = () =>
    this.setState((state) => {
      return { countValue: state.countValue + 1 };
    });

  render() {
    return (
      <CounterView
        countValue={this.state.countValue}
        parityType={this.state.parityType}
        onDecrement={this.handleDecrement}
        onReset={this.handleReset}
        onIncrement={this.handleIncrement}
      />
    );
  }
}

export default CounterContainer;
