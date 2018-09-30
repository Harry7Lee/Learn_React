import React, { Component } from "react";

class Ninjas extends Component {
  render() {
    const { ninjas } = this.props;
    const ninjaList = ninjas.map(ninja => {
      return (
        <div className="ninja" key={ninja.id}>
          <div>Name: {ninja.name}</div>
          <div>age: {ninja.age}</div>
          <div>belt: {ninja.belt}</div>
        </div>
      );
    });
    return <div class="ninja-list">{ninjaList}</div>;
  }
}

export default Ninjas;
