import React from 'react';
import '../App.scss';
import Header from './header/Header';
import Footer from './Footer';
import  { Search } from './search/Search';
import 'animate.css';

function App() {
  return (
      <div className="container">

        <Header>
          header
        </Header>
        
        <hr className="animate__animated animate__fadeInUp" />

        <Search />


        <Footer>
          
        </Footer>

      </div>
  );
}

export default App;
