import React from 'react';
import '../App.scss';
import Header from './header/Header';
import Footer from './Footer';
import  { Search } from './search/Search';


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
