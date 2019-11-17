import React from 'react';
import logo from './logo.svg';
import './App.css';
import Sidebar from './components/sidebar'
import Introduction from './components/main'

function App() {
  return (
    <div className="App">
      <Sidebar/>
      <Introduction/>
    </div>
  );
}

export default App;
