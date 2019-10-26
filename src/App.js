import React, { Component } from "react";
import "./App.css";
import Card from "./components/Card";

const peopleArray = [
  {
    name: "James",
    lastName: "Pollak"
  },
  {
    name: "Gijs",
    lastName: "Lebesque"
  }
];

class App extends Component {
  constructor() {
    super();
    this.state = {
      amountClicked: 0,
      people: peopleArray
    };
    this.onClickHandler = this.onClickHandler.bind(this);
  }

  //Event Handler
  onClickHandler() {
    console.log("Hi");
    this.setState({ amountClicked: this.state.amountClicked + 1 });
  }

  listOfPeople = () => {
    return this.state.people.map((person, key) => {
      return <Card key={key} person={person} />;
    });
  };

  render() {
    return (
      <div className="App">
        <h1>Hello!</h1>
        <button onClick={this.onClickHandler}>
          {this.state.amountClicked}
        </button>
        {this.listOfPeople()}
      </div>
    );
  }
}

export default App;
