import { Redirect, Route } from 'react-router-dom';
import {
  IonApp,
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
} from '@ionic/react';
import React, { useContext } from 'react';
// import { withAuthenticator, AmplifySignOut } from 'aws-amplify/ui-​react'
import { IonReactRouter } from '@ionic/react-router';
import { cameraOutline } from 'ionicons/icons';
import Tab1 from './pages/Tab1.js';
import Tab2 from './pages/Tab2.js';
import Tab3 from './pages/Tab3.js';
import Login from './Login.js';
/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';

//Custom Css
import "./App.css"
import { AppContext } from './State.js';

const App = () => {
  const { state, dispatch } = useContext(AppContext)


  return (

    <IonApp>

      {state.user ?
      <IonReactRouter>
        <IonTabs>
          <IonRouterOutlet>
            <Route exact path="/Chats">
              <Tab1 />
            </Route>
            <Route exact path="/Status">
              <Tab2 />
            </Route>
            <Route path="/Calls">
              <Tab3 />
            </Route>
            <Route exact path="/">
              <Redirect to="/Chats" />
            </Route>
          </IonRouterOutlet>


          <IonTabBar color="primary" slot="top">

            <IonTabButton tab="Chats" href="/Chats">
              <IonLabel>CHATS</IonLabel>
            </IonTabButton>
            <IonTabButton tab="Status" href="/Status">
              <IonLabel>STATUS</IonLabel>
            </IonTabButton>
            <IonTabButton tab="Calls" href="/Calls">
              <IonLabel>CALLS</IonLabel>
            </IonTabButton>
          </IonTabBar>
        </IonTabs>
      </IonReactRouter>
      :

      <Login />

      }


    </IonApp>
  )
};

export default App;
