
// Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-app.js";
  import {
    getFirestore, 
    collection, 
    addDoc,
    getDocs
  } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-firestore.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyD5xJAXw0757kaTXZUMi0B0II-iEaPDmwY",
    authDomain: "webpage-add7e.firebaseapp.com",
    projectId: "webpage-add7e",
    storageBucket: "webpage-add7e.appspot.com",
    messagingSenderId: "707758722166",
    appId: "1:707758722166:web:a701448b454ef247c4a357"
  };
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);
  //START OF SENDING COMMENTS HERE FIREBASE
  var info = document.getElementById("commentForm");
  //Assign event listener to submit function
  info.addEventListener("submit", async (e) => {
    e.preventDefault();
    var name = document.getElementById("name");
    var date = document.getElementById("date");
    var comment = document.getElementById("comment");
    //Send to Firebase
    try {
      const docRef = await addDoc(collection(db, "comments"), {
        name: name.value,
        date: date.value,
        comment: comment.value,
      });
      location.reload() //Reload webpage
    } catch (e) {
      console.error("Error adding document: ", e);
    } //End of catch block
  });
  //END OF SENDING COMMENTS TO FIREBASE
  const block = document.getElementById('commentsblock');
  const querySnapshot = await getDocs(collection(db, "comments"));
  querySnapshot.forEach((doc) => {
    //console.log(`${doc.id} => ${doc.data().last}`);
    //Variables for specific data pieces
    var startDiv = '<div class = card><div class = card-body>'
    var nameHTML = '<h5 class="card-title">' + doc.data().name + '</h5>'
    var date = '<h6 class="card-subtitle mb-2 text-muted">' + doc.data().date + '</h6>';
    var comment = '<p class="card-text">' + doc.data().comment + '</p>'
    var endDiv = '</div></div>'
    //Edit onto page
    block.innerHTML += startDiv + nameHTML + date + comment + endDiv;
  });
  console.log("Reached the end of js file");
