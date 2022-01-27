
import  firebase  from  'firebase/compat/app' ; 
import 'firebase/compat/auth' ; 
import 'firebase/compat/firestore' ;

const app = firebase.initializeApp({
    apiKey: "AIzaSyB5PHu5DeOPt1-MFWGYUGh2lq6SUW24LiE",
    authDomain: "test-choicest.firebaseapp.com",
    databaseURL: "https://test-choicest-default-rtdb.firebaseio.com",
    projectId: "test-choicest",
    storageBucket: "test-choicest.appspot.com",
    messagingSenderId: "123938640650",
    appId: "1:123938640650:web:37eb2ce1e821833ac160f3",
    measurementId: "G-88G0Q0WLY6"
});

export function getFirebase() {
    return app;
}

export function getFirestore(){
    return firebase.firestore(app);
}
