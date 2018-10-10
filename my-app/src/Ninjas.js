import React from "react";
import "../src/main.css";

const Ninjas = ({ ninjas, deleteNinja }) => {
  const ninjaList = ninjas.map(ninja => {
    if (ninja.age > 20) {
      return (
        <div className="ninja" key={ninja.id}>
          <div>Name: {ninja.name}</div>
          <div>age: {ninja.age}</div>
          <div>belt: {ninja.belt}</div>
          <button
            onClick={() => {
              deleteNinja(ninja.id);
            }}
          >
            Delete Ninja
          </button>
        </div>
      );
    } else {
      return null;
    }
  });
  return <div className="ninja-list">{ninjaList}</div>;
};
// class Ninjas extends Component {
//   render() {
//     const { ninjas } = this.props;
//     const ninjaList = ninjas.map(ninja => {
//       return (
//         <div className="ninja" key={ninja.id}>
//           <div>Name: {ninja.name}</div>
//           <div>age: {ninja.age}</div>
//           <div>belt: {ninja.belt}</div>
//         </div>
//       );
//     });
//     return <div className="ninja-list">{ninjaList}</div>;
//   }
// }

export default Ninjas;
