import React, { Component } from "react";

export default class Card extends Component {
  render() {
    const { name, lastName } = this.props.person;
    console.log(this.props);
    return (
      <div>
        <p>
          Hello {name} {lastName}
        </p>
      </div>
    );
  }
}
