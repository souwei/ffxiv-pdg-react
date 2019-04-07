import React from "react";
import { PropTypes } from "prop-types";
import {
  IonCard,
  IonCardTitle,
  IonItem,
  IonList
} from "@ionic/react";
import msq from "../assets/msq.png";
import arr from "../assets/arr.png";
import hw from "../assets/hw.png";
import sb from "../assets/sb.png";

const renderDungeonSeries = seriesName => {
  switch (seriesName) {
    case "A Realm Reborn":
      return (
        <IonCardTitle>
          <img
            src={arr}
            alt={seriesName}
            style={{ height: "auto", width: 300, paddingLeft: 0 }}
          />
        </IonCardTitle>
      );

    case "Heavensward":
      return (
        <IonCardTitle>
          <img
            src={hw}
            alt={seriesName}
            style={{ height: "auto", width: 300, paddingLeft: 0 }}
          />
        </IonCardTitle>
      );

    default:
      return (
        <IonCardTitle>
          <img
            src={sb}
            alt={seriesName}
            style={{ height: "auto", width: 300, paddingLeft: 0 }}
          />
        </IonCardTitle>
      );
  }
};

export const ListView = ({ ListTitle, ListData }) => {
  return (
    <div>
      <IonCard>
        {renderDungeonSeries(ListTitle)}
        <IonList>
          {ListData.map((dungeon, idx) => {
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
      ;
    </div>
  );
};

ListView.propTypes = {
  ListTitle: PropTypes.string.isRequired,
  ListData: PropTypes.array.isRequired
};
