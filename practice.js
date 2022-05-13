var firebaseConfig = {
    apiKey: "AIzaSyDKkkpO0tzmvRmeEHF3jO19HlmRV1fwoMw",
    authDomain: "kwitter-930ae.firebaseapp.com",
    databaseURL: "https://kwitter-930ae-default-rtdb.firebaseio.com",
    projectId: "kwitter-930ae",
    storageBucket: "kwitter-930ae.appspot.com",
    messagingSenderId: "796107622277",
    appId: "1:796107622277:web:245e4976c56fbd25d0a6ec"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
//ADD YOUR FIREBASE LINKS
function addUser()
{
    user_name=document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({
        purpose:"adding user"
    });
}