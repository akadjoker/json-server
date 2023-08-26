import React from 'react';
import Header from './Header';
import Sidebar from './Sidebar';
import Content from './Content';
import './App.css';
const App = () => {
  return (
    <div className="app">
      <Header />
      <div className="main-content">
        <Sidebar />
        <Content />
      </div>
    </div>
  );
};

export default App;
