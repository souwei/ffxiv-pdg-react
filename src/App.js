import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import { Window, TitleBar } from "react-desktop/macOs";
import ListView from "./components/Listview";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Window chrome height="800px" padding="10px">
          <TitleBar title="Final Fantasy XIV Pocket Dungeon Guide" controls />
          <ListView />
        </Window>
      </div>
    );
  }
}

export default App;
