import React from "react";
import { dungeonsData } from "../data/dungeons";
import { ListView } from "../components/Listview";
import { Redirect } from "react-router-dom";
import {
  IonTabs,
  IonTabBar,
  IonTabButton,
  IonIcon,
  IonLabel,
  IonBadge
} from "@ionic/react";

export default class DungeonList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dungeonsData,
      toDungeons: false
    };
  }

  handleRedirect = () => {
    console.log("hey");
    //change state
    // then render
    this.setState(() => ({
      toDungeons: true
    }));
  };

  render() {
    if (this.state.toDungeons) {
      return (
        <Redirect
          to={{
            pathname: "/dungeon",
            state: {
              hey: "wat"
            }
          }}
        />
      );
    } else {
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
          <button onClick={this.handleRedirect}>Move!</button>
        </div>
      );
    }
  }
  //   render() {
  //     return (
  //       <IonTabs>
  //         <IonTabBar slot="bottom">
  //           <IonTabButton tab="schedule">
  //             <IonIcon name="calendar" />
  //             <IonLabel>Schedule</IonLabel>
  //             <IonBadge>6</IonBadge>
  //           </IonTabButton>

  //           <IonTabButton tab="speakers">
  //             <IonIcon name="contacts" />
  //             <IonLabel>Speakers</IonLabel>
  //           </IonTabButton>

  //           <IonTabButton tab="map">
  //             <IonIcon name="map" />
  //             <IonLabel>Map</IonLabel>
  //           </IonTabButton>

  //           <IonTabButton tab="about">
  //             <IonIcon name="information-circle" />
  //             <IonLabel>About</IonLabel>
  //           </IonTabButton>
  //         </IonTabBar>
  //       </IonTabs>
  //     );
  //   }
}
