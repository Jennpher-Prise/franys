
  import firebase from './node_modules/firebase/app';
  import 'firebase/database';

 const firebaseConfig = {
      apiKey: "AIzaSyBQNcOsw4ibWdmRHbXanCZNle7XMoaYSkg",
      authDomain: "frany-s-restaurant.firebaseapp.com",
      databaseURL: "https://frany-s-restaurant-default-rtdb.firebaseio.com",
      projectId: "frany-s-restaurant",
      storageBucket: "frany-s-restaurant.firebasestorage.app",
      messagingSenderId: "564213108953",
      appId: "1:564213108953:web:2b5b5a8712e8a325daeec8",
      measurementId: "G-19LBGJJD6B"
  };


  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  // Initialize the Realtime Database
  const database = firebase.database();

  // Get a reference to the bookings node
  const bookingRef = database.ref("franys-restaurant/bookings");

  // Get a reference to the form
  const bookingForm = document.getElementById('bookingsForm');

  // Add a submit event listener to the form
  bookingForm.addEventListener("submit", submitForm);

  // Define the submitForm function
  function submitForm(e) {
    e.preventDefault();
    const date = document.getElementById('date').value;
    const time = document.getElementById('time').value;
    const guests = document.getElementById('guests').value;
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;

    console.log("mike");
    console.log(date, time, guests, name, email, phone);

    // Add the booking to the Realtime Database
    bookingRef.push({
      date,
      time,
      guests,
      name,
      email,
      phone
    });
  }
