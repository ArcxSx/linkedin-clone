import React from 'react';
import './App.css';
import Feed from "./Feed";
import Header from "./Header";
import Sidebar from './Sidebar';
import Widgets from './Widgets';

function App() {
  return (
    <div className="app">
      <Header />
      {/* app body */}
      <div className="app__body">
        <Sidebar />
        <Feed />
        {/* Widget */}
        <Widgets />
      </div>
    </div>
  );
}

export default App;
