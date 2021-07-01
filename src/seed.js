const firebase = require("firebase");
require("firebase/firestore");

const users = require("./data");

firebase.initializeApp(
    {
        apiKey: "AIzaSyAdLIlz0-xoc9bXKfoKgyK2d7XyGMzYHsg",
        authDomain: "whatsapp-clone-d732d.firebaseapp.com",
        databaseURL: "https://whatsapp-clone-d732d-default-rtdb.firebaseio.com",
        projectId: "whatsapp-clone-d732d",
        storageBucket: "whatsapp-clone-d732d.appspot.com",
        messagingSenderId: "397968951271",
        appId: "1:397968951271:web:ff32e14d3751257b9a9f42",
        measurementId: "G-3TEBSTG8FS"

    });

const db = firebase.firestore();

users.forEach((user) => {
    db.collection("users")
        .add(user)
        .then((docRef) => {
            console.log(`Document written with ID : ${docRef.id}`);
        })
        .catch((error) => {
            console.error(`Error writing document : ${error}`);
        });
});