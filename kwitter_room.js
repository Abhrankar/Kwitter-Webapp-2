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

function logout() {
      window.location = "index.html";
      localStorage.removeItem("user_name");
}

var userName = localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML = "WELCOME " + userName + " !";