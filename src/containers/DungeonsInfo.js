import React from "react";

export default class DungeonsInfo extends React.Component {
  render() {
    return (
      <div>
        hello
        <div>{this.props.location.state.hey}</div>
      </div>
    );
  }
}
