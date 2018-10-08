import React, { Component } from "react";
import Ninjas from "./Ninjas";
import AddNinja from "./AddNinja";

class App extends Component {
  state = {
    ninjas: [
      { name: "Ryu", age: "30", belt: "black", id: 1 },
      { name: "Ryu", age: "1", belt: "black", id: 2 },
      { name: "Ryu", age: "1", belt: "black", id: 3 },
      { name: "Ryu", age: "30", belt: "black", id: 4 }
    ]
  };
  addNinja = ninja => {
    ninja.id = Math.random();
    let ninjas = [...this.state.ninjas, ninja];
    this.setState({ ninjas: ninjas });
  };
  deleteNinja = id => {
    let ninjas = this.state.ninjas.filter(ninja => {
      return ninja.id !== id;
    });
    this.setState({ ninjas: ninjas });
  };
  // handleClick = e => {
  //   console.log(e.target);
  //   this.setState({
  //     name: "Yoshi"
  //   });
  //   console.log(this.state);
  // };
  // handleMouseOver(e) {
  //   console.log(e.target, e.pageX);
  // }
  // handleCopy(e) {
  //   console.log(e.target);
  // }
  render() {
    return (
      <div className="App">
        <h1>My first React App!</h1>
        <Ninjas ninjas={this.state.ninjas} deleteNinja={this.deleteNinja} />
        <AddNinja addNinja={this.addNinja} />
        {/* <p>
          My name is : {this.state.name} and I am {this.state.age}
        </p>
        <button onClick={this.handleClick}>click me</button>
        <button onMouseOver={this.handleMouseOver}>Hover me</button>
        <p onCopy={this.handleCopy}>What we think, we become</p> */}
      </div>
    );
  }
}

export default App;
