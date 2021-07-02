import React, { useContext, useEffect } from "react";
import {
  IonPage,
  IonHeader,
  IonTitle,
  IonContent,
  IonToolbar,
  IonAvatar,
  IonIcon,
  useIonViewWillLeave,
} from "@ionic/react";

import db from "../Firestore";
import { AppContext } from "../State.js";
// import { ellipsisVerticalOutline } from "@ionic/icons";
const ChatPage = ({ user_id }) => {
  const { state, dispatch } = useContext(AppContext);

  useIonViewWillLeave(() => {
    console.log("it should change");
    dispatch({
      type: "setNoTabs",
      payload: false,
    
    });
  });

  const getMsg = async () => {
    //connect to firebase
    let messages;
    const fetchMsg = await db
      .collection("messages")
      .where("message_id", "==", user_id)
      .get();

    // fetchMsg.forEach((item) => {
    //   messages = item.data();
    //   user.id = item.id;
    //   console.log(user);
    // });
    console.log(state.user);
    console.log(fetchMsg);
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color="primary">
          <IonAvatar slot="start">
            <img src="" alt="" />
          </IonAvatar>
          <IonTitle>Fred</IonTitle>
        </IonToolbar>
        {/* <IonIcon icon={ellipsisVerticalOutline}></IonIcon> */}
        <ion-icon name="ellipsis-vertical-outline"></ion-icon>
      </IonHeader>

      <IonContent>
        <p>The chat pag</p>
      </IonContent>
    </IonPage>
  );
};

export default ChatPage;
