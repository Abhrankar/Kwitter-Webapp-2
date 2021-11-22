//YOUR FIREBASE LINKS
// Your web app's Firebase configuration
const firebaseConfig = {
      apiKey: "AIzaSyCTf3Fp7SNUTt04c_LLn9Wgv9seG3fdTOI",
      authDomain: "kwitter-webapp-8d12a.firebaseapp.com",
      databaseURL: "https://kwitter-webapp-8d12a-default-rtdb.firebaseio.com",
      projectId: "kwitter-webapp-8d12a",
      storageBucket: "kwitter-webapp-8d12a.appspot.com",
      messagingSenderId: "608885599371",
      appId: "1:608885599371:web:384b665eba8cfe5df6f88e"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

userName = localStorage.getItem("user_name");
roomName = localStorage.getItem("Room Name");

function getData() {
      firebase.database().ref("/" + roomName).on('value',
            function (snapshot) {
                  document.getElementById("output").innerHTML = "";
                   snapshot.forEach(function (childSnapshot) {
                        childKey = childSnapshot.key; childData = childSnapshot.val();
                         if (childKey != "purpose") {
                              firebase_message_id = childKey;
                              message_data = childData;
                              //Start code
                              _Name = message_data["name"];
                              message = message_data["message"];
                              like = message_data["like"];
                              name_with_tag = "<h4>" + _Name + "<img class = 'user_tick' src = 'tick.png'></h4>";
                              message_with_tag = "<h4 class = 'message_h4'>"+ message +"</h4>";
                              like_button = "<button class = 'btn btn-warning' id = "+ firebase_message_id +"value = "+ like +" onclick = 'updateLike(this.id)'><span class = 'glyphicon glyphicon-thumbs-up'>Like: "+ like +"</span></button><hr>";
                              row = name_with_tag + message_with_tag + like_button;
                              document.getElementById("output").innerHTML += row;
                              //End code
                        }
                  });
            });
}

getData();

function logout() {
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "index.html";
}

function send() {
      msg = document.getElementById("msg").value;
      console.log(msg);
      firebase.database().ref(roomName).push({
            name: userName,
            message: msg,
            like: 0
      });
}

function updateLike(messageId) {
      buttonId = messageId;
      likes = document.getElementById(buttonId).value;
      updatedLikes = Number(likes)+1;
      firebase.database().ref(roomName).child(messageId).update({
            like: updatedLikes
      });
}