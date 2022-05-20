import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router} from 'react-router-dom'
import Sidebar from './components/sidebar/Sidebar';
import UserPannel from './components/UserPannel'

function App() {
  return (
    <>
      <Router>
        <Sidebar />
      </Router>
      {/* <UserPannel /> */}
    </>
  );
   
}

export default App;
