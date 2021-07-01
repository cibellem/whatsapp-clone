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
// import { withAuthenticator, AmplifySignOut } from 'aws-amplify/ui-​react'
import { IonReactRouter } from '@ionic/react-router';
import { cameraOutline } from 'ionicons/icons';
import Tab1 from './pages/Tab1.js';
import Tab2 from './pages/Tab2.js';
import Tab3 from './pages/Tab3.js';

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

const App = () => (
  <IonApp>
    <IonReactRouter>
      <IonTabs>
        <IonRouterOutlet>
          <Route exact path="/tab1">
            <Tab1 />
          </Route>
          <Route exact path="/tab2">
            <Tab2 />
          </Route>
          <Route path="/tab3">
            <Tab3 />
          </Route>
          <Route exact path="/">
            <Redirect to="/tab1" />
          </Route>
        </IonRouterOutlet>


        <IonTabBar color="primary" slot="top">
          <IonTabButton tab="photo" >
            <IonIcon icon={cameraOutline}>CHATS</IonIcon>
          </IonTabButton>
          <IonTabButton tab="Chats" href="/tab1">
            <IonLabel>CHATS</IonLabel>
          </IonTabButton>
          <IonTabButton tab="Status" href="/tab2">
            <IonLabel>STATUS</IonLabel>
          </IonTabButton>
          <IonTabButton tab="Calls" href="/tab3">
            <IonLabel>CALLS</IonLabel>
          </IonTabButton>
        </IonTabBar>
      </IonTabs>
    </IonReactRouter>
  </IonApp>
);

export default App;
