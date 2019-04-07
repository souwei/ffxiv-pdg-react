import React, { Component } from "react";
import "./App.css";
import { dungeonsData } from "./data/dungeons";
import { ListView } from "./components/Listview";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dungeonsData
    };
  }
  render() {
    return (
      <div>
        {this.state.dungeonsData.map(series => {
          return (
            <ListView
              ListTitle={series.dungeonSeries}
              ListData={series.dungeons}
            />
          );
        })}
      </div>
    );
  }
}

export default App;
