import firebase from "firebase";

const db = firebase.initializeApp({

    databaseURL: "https://whatsapp-clone-d732d-default-rtdb.firebaseio.com",
    projectId: "whatsapp-clone-d732d",

}).firestore();

export default db