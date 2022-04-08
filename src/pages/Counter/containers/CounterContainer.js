import React, { Component } from "react";

import CounterView from "../../../components/CounterView";

class CounterContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      countValue: 0,
    };
    console.log("Constructor");
  }

  componentDidMount() {
    console.log("Component did mount");
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log("Should component update");
    return true;
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
    console.log("Render");
    return (
      <CounterView
        countValue={this.state.countValue}
        onDecrement={this.handleDecrement}
        onReset={this.handleReset}
        onIncrement={this.handleIncrement}
      />
    );
  }
}

export default CounterContainer;
