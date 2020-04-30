import React from 'react';
import { Layout } from 'antd';
// import { HashRouter as Router, Route } from 'react-router-dom';
import './App.scss';
import Header from './components/Header';
import Footer from './components/Footer';

import Search from './components/Search';


function App() {
  return (
      <div className="container">

        <Header>
          header
        </Header>
        
        <Search />

        <Footer>
          
        </Footer>

      </div>
  );
}

export default App;
