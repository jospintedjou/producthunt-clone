import * as firebase from 'firebase';
import firestore from 'firebase/firestore'

//const settings = {timestampsInSnapshots: true};

const config = {
    apiKey: "AIzaSyBCx5za-bZLTvDXg4ovc2mWjm5vr0xHG-Y",
    authDomain: "producthunt-clone-1b04d.firebaseapp.com",
    databaseURL: "https://producthunt-clone-1b04d.firebaseio.com",
    projectId: "producthunt-clone-1b04d",
    storageBucket: "producthunt-clone-1b04d.appspot.com",
    messagingSenderId: "1049152833241",
    appId: "1:1049152833241:web:b30235914146e178"
  };
firebase.initializeApp(config);

firebase.firestore().settings({}); //(settings)
export default firebase;