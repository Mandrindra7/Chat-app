import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import './App.css';
import NavBar from './View/components/AppBar';
import Message from './View/Message';
import MessageItem from './View/MessageItem';
import New from './View/New';

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar /> 
        <div style={{display : 'flex'}}>
          <Message />
          <Routes>
              <Route path="/:id" element={<MessageItem />} />
              <Route path="/actu" element={<New />} />
          </Routes> 
        </div>
      </Router>  
    </div>
  );
}

export default App;
