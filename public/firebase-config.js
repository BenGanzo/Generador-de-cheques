const firebaseConfig = {
  apiKey: "TU_API_KEY",
  authDomain: "tu-app.firebaseapp.com",
  projectId: "tu-proyecto",
  storageBucket: "tu-app.appspot.com",
  messagingSenderId: "1234567890",
  appId: "1:1234567890:web:abcdefg"
};

firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const auth = firebase.auth();
