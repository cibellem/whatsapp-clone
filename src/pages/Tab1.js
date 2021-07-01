import React, { useContext } from "react";
import {
	IonContent,
	IonHeader,
	IonPage,
	IonTitle,
	IonToolbar,
	IonButton
} from "@ionic/react";
import ExploreContainer from "../components/ExploreContainer";
import "./Tab1.css";

import { AppContext } from "../State.js";

const Tab1 = () => {
	//Defines which context we want to use int this component
	const { state, dispatch } = useContext(AppContext);


	const changeName = () => {
		dispatch({
			type: "setAppName", //action type
			payload: {
				appName: "Clone"
			}
		})
	}

	return (
		<IonPage>

			<IonContent fullscreen>

				<ExploreContainer name="Tab 1 page" />
			
			</IonContent>
		</IonPage>
	);
};

export default Tab1;
