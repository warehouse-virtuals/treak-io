import './App.css';

import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

import MainRouter from './Components/MainRouter/MainRouter'

const firebaseConfig = {
  apiKey: "AIzaSyDdDlQ9rrTMzakGCgWPw0VQ81oCrnmNe6c",
  authDomain: "warehouse-io.firebaseapp.com",
  projectId: "warehouse-io",
  storageBucket: "warehouse-io.appspot.com",
  messagingSenderId: "1031611310079",
  appId: "1:1031611310079:web:1118bb2549d6fda7b1d1ca",
  measurementId: "G-CJ11Z1TKRH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

function App() {
  return (
    <div className="App">
      <MainRouter />
    </div>
  );
}

export default App;
