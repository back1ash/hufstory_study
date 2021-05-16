import React from "react";
import PropTypes from "prop-types";

class App extends React.Component {
  state = {
    count: 0
  };
  add = () => {
    //this.state.count++;  이렇게 값을 직접 변경할 시 render()가 refresh되지 않아 정상 동작하지 않음.
    this.setState(current => ({ count: current.count+1 }));
    console.log("add");
  };
  minus = () => {
    //this.state.count--;  이렇게 값을 직접 변경할 시 render()가 refresh되지 않아 정상 동작하지 않음.
    this.setState(current => ({ count: current.count-1 })); 
    console.log("minus");
  };
  render(){
    return (
      <div>
        <h1>The number is : {this.state.count}</h1>
        <button onClick={this.add}>Add</button>
        <button onClick={this.minus}>Minus</button>
      </div>
    );
  }
}

export default App;