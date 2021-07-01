import React, { createContext, useReducer } from "react";

//Creates a Context object
let AppContext = createContext({});

//Every Context object comes with a Provider React component that allows consuming components to subscribe to context changes.

const initialState = {
	appName: "WhatsApp",
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
			break;
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
