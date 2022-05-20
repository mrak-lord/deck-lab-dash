import React from 'react';
import logo from './logo.svg';
import './App.css';
// import Sidebar from './components/sidebar/Sidebar';
import { BrowserRouter as Router} from 'react-router-dom'
import Sidebar from './components/sidebar/Sidebar';

function App() {
  return (
    <>
      <Router>
        <Sidebar></Sidebar>
      </Router>
    </>
  );
   
}

export default App;
