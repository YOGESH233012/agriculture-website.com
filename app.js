// 🔥 Firebase config (from Firebase console)
const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_PROJECT_ID.firebaseapp.com",
  databaseURL: "https://YOUR_PROJECT_ID-default-rtdb.firebaseio.com",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_PROJECT_ID.appspot.com",
  messagingSenderId: "YOUR_SENDER_ID",
  appId: "YOUR_APP_ID"
};

// Init
firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const db = firebase.database();

// 🔐 LOGIN (Email + Password)
function firebaseLogin(email, password) {
  return auth.signInWithEmailAndPassword(email, password);
}

// 🔓 LOGOUT
function firebaseLogout() {
  return auth.signOut();
}

// 🌍 SAVE ALL DATA (GLOBAL)
function saveAllData(data) {
  return db.ref("agriData").set(data);
}

// 🌍 LOAD ALL DATA (REALTIME)
function listenAllData(callback) {
  db.ref("agriData").on("value", snap => {
    callback(snap.val() || {});
  });
}
