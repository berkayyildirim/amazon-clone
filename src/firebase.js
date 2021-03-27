import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyDvC0POOeiS_5DUsuLN1RVGYhgq5aw3M_A",
    authDomain: "clone-for-ecommerce.firebaseapp.com",
    projectId: "clone-for-ecommerce",
    storageBucket: "clone-for-ecommerce.appspot.com",
    messagingSenderId: "978950972979",
    appId: "1:978950972979:web:edd6881922f70c644f6546",
    measurementId: "G-515XSQLE1E"
});

const auth = firebase.auth();

export { auth };