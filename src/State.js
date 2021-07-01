import React, { createContext, useReducer } from "react";

//Creates a Context object
let AppContext = createContext({});

//Every Context object comes with a Provider React component that allows consuming components to subscribe to context changes.

const initialState = {
	appName: "WhatsApp",
	// state to holds users data from a logged session when app loads
	user: JSON.parse(localStorage.getItem("whatsapp-clone-user"))
};

let reducer = (state, action) => {
	switch (action.type) {
		case "setAppName":
			{
				//the app name becomes whatever we pass as payload on the displatch function
				return {
					...state,
					appName: action.payload.appName
				};
			}
		//this reducer sets the value of the user in the localstorage
		case "loadUser": {
			const user = action.payload
			localStorage.setItem("whatsapp-clone-user", JSON.stringify(user))

			return {
				...state, user: user
			}
		}


	}
};

//it will make sure our context is available to the whole application
function AppContextProvider(props) {
	const appState = {
		...initialState,
	};

	let [state, dispatch] = useReducer(reducer, appState);
	let value = { state, dispatch };

	return (
		<AppContext.Provider value={value}>{props.children}</AppContext.Provider>
	);
}

export { AppContext, AppContextProvider };
