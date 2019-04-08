import React from "react";
import { NavLink } from "react-router-dom";
// import {
//   IonMenu,
//   IonHeader,
//   IonToolbar,
//   IonButtons,
//   IonNavbar,
//   IonTitle,
//   IonContent,
//   IonList,
//   IonItem,
//   IonIcon,
//   IonRouterOutlet
// } from "@ionic/react";
import {
  IonToolbar,
  IonTitle,
  IonButtons,
  IonBackButton,
  IonButton,
  IonIcon,
  IonMenuButton,
  IonHeader,
  IonSearchbar,
  IonSegment,
  IonSegmentButton
} from "@ionic/react";

// export const Navigation = () => {
//   return (
//     <div>
//       <IonHeader>
//         <IonToolbar>
//           <IonButtons left>
//             <button IonButton menuToggle>
//               <IonIcon name="menu" />
//             </button>
//           </IonButtons>
//           <IonTitle text-center> DUNGEONS </IonTitle>
//         </IonToolbar>
//       </IonHeader>
//       <NavLink to="/dungeons"> Dungeons </NavLink>
//       <NavLink to="/dungeon"> Dungeon! </NavLink>
//     </div>
//   );
// };

export const Navigation = () => {
  return (
    <>
      <IonHeader>
        <IonToolbar>
          <IonTitle slot="secondary">Dungeons</IonTitle>
          <IonButtons slot="start">
            <IonMenuButton autoHide={false} />
          </IonButtons>
          <IonButtons slot="end">
            <IonButton color="secondary">
              <IonIcon slot="icon-only" name="more" />
            </IonButton>
          </IonButtons>
        </IonToolbar>
      </IonHeader>
    </>
  );
};
