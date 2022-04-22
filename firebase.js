import firebase from 'firebase/compat/app';

const firebaseConfig = {
    apiKey: "AIzaSyCiwTOU8Um2MUhOf6O8Of0fY8OJjGZT77Y",
    authDomain: "chatroom-f726e.firebaseapp.com",
    projectId: "chatroom-f726e",
    storageBucket: "chatroom-f726e.appspot.com",
    messagingSenderId: "98259588735",
    appId: "1:98259588735:web:743284f0d8176c8bdb514a"
};

firebase.initializeApp(firebaseConfig);

export default firebase;