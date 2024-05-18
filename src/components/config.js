import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyDdHW44sFDnMLgGJDPOs9YmnCRgFOvrLWU",
  authDomain: "motion-detector-92905.firebaseapp.com",
  databaseURL: "https://motion-detector-92905-default-rtdb.firebaseio.com",
  projectId: "motion-detector-92905",
  storageBucket: "motion-detector-92905.appspot.com",
  messagingSenderId: "908396107",
  appId: "1:908396107:web:41435036a0bd6f0299efce",
};

const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

export { database };
