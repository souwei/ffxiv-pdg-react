import React from "react";
import {
  IonTabs,
  IonTabBar,
  IonTabButton,
  IonIcon,
  IonLabel,
  IonBadge,
  IonHeader,
  IonToolbar,
  IonButtons,
  IonButton,
  IonSearchbar,
  IonTitle,
  IonBackButton
} from "@ionic/react";
export default class DungeonsInfo extends React.Component {
  componentDidMount() {
    console.log(this.props.location.state.info);
  }
  render() {
    return (
      <div>
        <IonHeader>
          <IonToolbar>
            <IonButtons slot="start">
              <IonBackButton
                onClick={() => this.props.history.goBack()}
                goBack={() => {
                  console.log("DSSS");
                }}
                defaultHref="home"
              />
            </IonButtons>
            <IonTitle>
              {this.props.location.state.info.dungeonName || "Dungeon Name"}{" "}
            </IonTitle>
            <IonButtons slot="end">
              <IonButton color="secondary">
                <IonIcon slot="icon-only" name="more" />
              </IonButton>
            </IonButtons>
          </IonToolbar>
        </IonHeader>

        <div />
      </div>
    );
  }
}
