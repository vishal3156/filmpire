import React from "react";

class Counter extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };

    this.increment = () => this.setState({ count: this.state.count + 1 });
    this.decrement = () => this.setState({ count: this.state.count - 1 });
  }

  componentDidMount() {
    console.log("Component has mounted."); //
  }

  componentDidUpdate() {
    console.log("Component updated. Count is now " + this.state.count + ".");
  }

  render() {
    console.log("Rendering...");
    return (
      <React.Fragment>
        <h1>Count: {this.state.count}</h1>
        <button onClick={this.increment}>+1</button>
        <button onClick={this.decrement}>-1</button>
      </React.Fragment>
    );
  }
}

ReactDOM.render(<Counter />, document.getElementById("root"));
