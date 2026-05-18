// Firebase Configuration
// Project: monitoring-iot-29ac6

import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js";
import { getDatabase } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-database.js";

const firebaseConfig = {
  apiKey: "AIzaSyA1LPnD7ITEveZ6LiD-aYxVnH6VAgnBAqs",
  authDomain: "monitor-ketuaa.firebaseapp.com",
  databaseURL: "https://monitor-ketuaa-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "monitor-ketuaa",
  storageBucket: "monitor-ketuaa.firebasestorage.app",
  messagingSenderId: "49397842909",
  appId: "1:49397842909:web:af2a8606ef127c5388ac34",
  measurementId: "G-0KSLVWEX01"
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getDatabase(app);
export default app;
