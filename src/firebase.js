import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';

 var firebaseApp = firebase.initializeApp({

    apiKey: "AIzaSyAIIIkrewApCO-adhCbvFIin7RksV6nZtY",
     authDomain: "react-contact-form-ec301.firebaseapp.com",
     projectId: "react-contact-form-ec301",
     storageBucket: "react-contact-form-ec301.appspot.com",
     messagingSenderId: "1002878914341",
     appId: "1:1002878914341:web:c882022cdbba243a9554cc"

    
   });


 var db =  firebaseApp.firestore();

 export  { db} ;