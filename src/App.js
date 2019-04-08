import React, { Component } from "react";
import "./App.css";
import { BrowserRouter, Route } from "react-router-dom";
import DungeonsList from "./containers/DungeonsList";
import DungeonInfo from "./containers/DungeonsInfo";
import { Navigation } from "./containers/Navigation";
class App extends Component {
  render() {
    return (
      <>
        <BrowserRouter>
          <Navigation />
          <switch>
            <Route path="/dungeons" component={DungeonsList} />
            <Route path="/dungeon" component={DungeonInfo} />
          </switch>
        </BrowserRouter>
      </>
    );
  }
}

export default App;
