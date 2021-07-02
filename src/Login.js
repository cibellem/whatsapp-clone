import React, { useState, useContext } from "react";
import {
    IonHeader,
    IonItem,
    IonInput,
    IonPage,
    IonContent,
    IonLoading,
    IonTitle,
    IonItemDivider,
    IonButton,
    useIonLoading,
} from '@ionic/react';
import "./App.css"

import db from "./Firestore";
import { AppContext } from "./State";


const Login = () => {

    const {state,dispatch} = useContext(AppContext)
    const [passcode, setPasscode] = useState();
    const [present] = useIonLoading();
    const [showLoading, setShowLoading] = useState(false);

    const login = async () => {

        //Show loading component
        

        //connect to firebase
        let user;
        const fetchUser = await db.collection("users").
            where("passcode", "==", passcode).get()

        fetchUser.forEach((item => {
            user = item.data()
            user.id = item.id
            console.log(user)
        }))

        //set user data in store
        dispatch({
            type: "loadUser",
            payload: user
        })

        setShowLoading(false)

    }

    return (
        <IonPage>
            <ion-header >
                <ion-toolbar color="primary">
                    <ion-title>     Two-step verification</ion-title>
                </ion-toolbar>
            </ion-header>

            <IonContent class="ion-padding ion-text-center">
                <IonLoading
                    cssClass='my-custom-class'
                    isOpen={showLoading}
                    onDidDismiss={() => setShowLoading(false)}
                    message={'Please wait...'}

                />

                <p>
                    Enter a four digir passcode which you'll be asked for when you register your phone number with WhatsApp-Clone
                </p>



                <div className="input-wrapper">
                    <IonItem lines="none"
                        className="passcode-item">
                        <IonInput
                            className="passcode-input"
                            value={passcode}
                            onIonChange={(e) => setPasscode(e.detail.value)}>
                        </IonInput>
                    </IonItem>
                    <IonButton disabled={!passcode} onClick={login}>
                        Submit
                    </IonButton>
                </div>



            </IonContent>
        </IonPage >

    )
}

export default Login