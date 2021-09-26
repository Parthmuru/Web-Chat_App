// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyD9H8OEnKlgHp4o1DIuwnDQFWEYlBND98w",
    authDomain: "chat-web-app-451c8.firebaseapp.com",
    databaseURL: "https://chat-web-app-451c8-default-rtdb.firebaseio.com",
    projectId: "chat-web-app-451c8",
    storageBucket: "chat-web-app-451c8.appspot.com",
    messagingSenderId: "543530852401",
    appId: "1:543530852401:web:ae108959e9f19ff4423510"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

function addRoom(){
    room_name = document.getElementById("room_name").value;
    firebase.database().ref("/").child(room_name).update({
          purpose: "adding a room"
    });
    localStorage.setItem("room_name", room_name); 
    window.location = "chat_page.html";
}

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
    Room_names = childKey;
    console.log("Room Name -" + Room_names);
    row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
    document.getElementById("output").innerHTML += row;
  });});}  
  
function redirectToRoomName(name){
    console.log(name);
    localStorage.setItem("room_name", name);
    window.location = "chat_page.html";
}  

function logout(){
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");
    window.location = "index.html";
}
getData();
