import React, { Component } from "react";
import "./App.css";

import {
  IonCard,
  IonCardTitle,
  IonLabel,
  IonItem,
  IonList
} from "@ionic/react";
import { dungeonsData } from "./data/dungeons";
import msq from "./assets/msq.png";
import arr from "./assets/arr.png";

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
            <IonCard>
              <IonCardTitle>
                <img
                  src={arr}
                  alt="arr"
                  style={{ height: "auto", width: 300, paddingLeft: 0 }}
                />
              </IonCardTitle>
              <IonList>
                {series.dungeons.map((dungeon, idx) => {
                  return (
                    <IonItem>
                      <img
                        style={{
                          height: "auto",
                          width: 30,
                          paddingLeft: 0,
                          verticalAlign: "middle"
                        }}
                        src={msq}
                        alt="msq"
                      />
                      <span class="h2">{dungeon.dungeonName} </span>
                    </IonItem>
                  );
                })}
              </IonList>
            </IonCard>
          );
        })}
      </div>
    );
  }
}

export default App;
