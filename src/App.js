import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import ListView from "./components/Listview";
class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <ListView />
          <ListView />
        </header>
      </div>
    );
  }
}

export default App;
