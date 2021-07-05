import React, { useContext, useRef, useState } from "react";
import {
  IonPage,
  IonHeader,
  IonTitle,
  IonContent,
  IonToolbar,
  IonAvatar,
  IonInput,
  IonFooter,
  IonRow,
  IonGrid,
  IonButton,
  IonCol,
  IonIcon,
  useIonViewWillLeave,
  IonTabButton,
  useIonViewDidEnter,
} from "@ionic/react";

import db from "../Firestore";
import { AppContext } from "../State.js";
import { sendSharp, happyOutline, attachOutline } from "ionicons/icons";

import "./Tab1.css";

import Utility from "../Utility";

const ChatMsg = ({ chat }) => {
  const { state } = useContext(AppContext);
  let chat_time = Utility.getTime(chat.time);
  let converted_img =
    chat.type === "media" ? `data:image/jpeg;base64, ${chat.file_url}` : "";

  let messageStyles = {};

  if (state.user.user_id === chat.sent_by) {
    messageStyles.backgroundColor = "#ddf6c9";
    messageStyles.marginLeft = "100px";
  }

  return (
    <div style={messageStyles} className="chat-msg-box">
      {chat.type === "media" && <img src={converted_img} alt="Media Shared" />}
      {chat.message}

      <div className="chat-time">{chat_time}</div>
    </div>
  );
};

export default ChatMsg;
