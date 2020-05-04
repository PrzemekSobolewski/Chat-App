import firebase from 'firebase';

const config = {
    apiKey: "AIzaSyACSf9EpFi2Yok-nrxen21B31ERbkoOglE",
    authDomain: "chat-app-6d647.firebaseapp.com",
    databaseURL: "https://chat-app-6d647.firebaseio.com",
}

firebase.initializeApp(config);

export const auth = firebase.auth;
export const db = firebase.database();
