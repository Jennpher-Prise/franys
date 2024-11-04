
  import firebase from './node_modules/firebase/app';
  import 'firebase/database';

  const firebaseConfig = {
    apiKey: "AIzaSyABLMS20yLoB8PuZ3gu68xggZUV8LYBNQU",
    authDomain: "franys-restaurant.firebaseapp.com",
    projectId: "franys-restaurant",
    storageBucket: "franys-restaurant.appspot.com",
    messagingSenderId: "479293515792",
    appId: "1:479293515792:web:fe265f102573e068418295"
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
