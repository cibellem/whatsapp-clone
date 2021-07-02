import React, { useContext, useEffect } from "react";
import {
  IonContent,
  IonAvatar,
  IonPage,
  IonTitle,
  IonItem,
  IonLabel,
  IonList,
  IonToolbar,
  IonButton,
  IonText,
} from "@ionic/react";

import "./Tab1.css";

import { AppContext } from "../State.js";
import ChatItem from "./ChatItem";

import Utility from "../Utility";

const Tab1 = () => {
  //Defines which context we want to use int this component
  const { state, dispatch } = useContext(AppContext);
  let contacts = state.user.contacts;

  const changeName = () => {
    dispatch({
      type: "setAppName", //action type
      payload: {
        appName: "Clone",
      },
    });
  };

  const doSomething = () => {};

  return (
    <IonPage>
      <IonContent className="chat-screen">
        <IonList>
          {contacts.map((item) => (
            <ChatItem onClick={doSomething} contacts={item} />
          ))}
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default Tab1;
