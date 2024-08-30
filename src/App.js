import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

import Dashboard from './components/Dashboard';
import Menu from './components/Menu';
import Registrations from './components/Registrations'; // Import the Registrations component

function App() {
  return (
    <>
    <Router>
    <Menu></Menu>
   
     
        <div className="content-wrapper">
     
          <Routes>
            <Route path="/" element={<Dashboard />} /> {/* Default route */}
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/registrations" element={<Registrations />} />
          </Routes>
        </div>
      
    </Router>
    
  <footer class="main-footer" >
    <div class="pull-right hidden-xs">Version 1.2</div>
    Copyright © 2017 Yourdomian. All rights reserved.</footer>
    </>
  );
 
    
}

export default App;
