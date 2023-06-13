import firebase from 'firebase/compat/app'
import 'firebase/compat/database'
import { data } from 'jquery';


const firebaseConfig = {
  apiKey: "AIzaSyB8AJvO_cTcphqZJYxhA3QuOx3UuOVb38Q",
  authDomain: "note-another.firebaseapp.com",
  databaseURL: "https://note-another-default-rtdb.firebaseio.com",
  projectId: "note-another",
  storageBucket: "note-another.appspot.com",
  messagingSenderId: "568874569454",
  appId: "1:568874569454:web:4a0ba17bd30171f1b52dff",
  measurementId: "G-CDQCZECS7H"
};

  firebase.initializeApp(firebaseConfig)
  const database = firebase.database();
  
  export function onValueChange(callback) {
      database.ref('notes').on('value', (snapshort)=>{
      callback(snapshort.val());
    })
  }

  export function updateNote(id, note) {
    database.ref('notes').child(id).update(note)
  }

  export function deleteNote(id){
    console.log(id);
    database.ref("notes").child(id).remove()
  }

  export function createNote(note){
    database.ref("notes").push(note)
  }

  
export default database