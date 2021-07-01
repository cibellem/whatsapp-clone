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
	IonText
} from "@ionic/react";
import ExploreContainer from "../components/ExploreContainer";
import "./Tab1.css";

import { AppContext } from "../State.js";

import Utility from "../Utility";

const Tab1 = () => {
	//Defines which context we want to use int this component
	const { state, dispatch } = useContext(AppContext);
	let contacts = state.user.contacts



	const changeName = () => {
		dispatch({
			type: "setAppName", //action type
			payload: {
				appName: "Clone"
			}
		})
	}
	useEffect(() => {
		console.log(contacts)
		//  return () => {
		// 	 cleanup
		//  }
	}, [])


	return (
		<IonPage>

			<IonContent className="chat-screen">

				<IonList>

					{
						contacts.map((item) =>
							<IonItem
								key={item.user_id} >
								<IonAvatar >
									<img
										src={item.photo} />
								</IonAvatar>
								<IonLabel>
									<h3>{item.name}</h3>
									<p>Hello, did you get to talk with them about..</p>
								</IonLabel>
								{/* <IonLabel>
									<p>{Utility.getToday(item.last_seen)}</p>
								</IonLabel> */}
							</IonItem>
						)}
				</IonList>




			</IonContent>
		</IonPage>
	);
};

export default Tab1;
