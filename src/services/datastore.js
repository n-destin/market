import firebase from 'firebase/compat/app'
import 'firebase/compat/database'
import { data } from 'jquery';


const firebaseConfig = {
    apiKey: "AIzaSyBDvOBf2m2YQfyJ5rOC3mIQ4L2kmJdm3OY",
    authDomain: "notesapp-c668e.firebaseapp.com",
    databaseURL: "https://notesapp-c668e-default-rtdb.firebaseio.com",
    projectId: "notesapp-c668e",
    storageBucket: "notesapp-c668e.appspot.com",
    messagingSenderId: "499481922320",
    appId: "1:499481922320:web:ed22fc465ffd284c4db395",
    measurementId: "G-4LHZL9HJZ1"
  };


  firebase.initializeApp(firebaseConfig)
  const database = firebase.database();
  
  export function onValueChange(callback) {
      database.ref("notes").on('value', (snapshort)=>{
      callback(snapshort.val())
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